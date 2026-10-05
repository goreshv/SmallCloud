import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/**
 * Universal client-side router supporting HTML5 pushState, hash routing,
 * query param fallback, subpath repositories (e.g. GitHub Pages), and smooth hash scrolling.
 */

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  navigate: () => {},
});

/**
 * Normalizes any route input (pathname, hash, or query param) into a canonical route:
 * - '/docs', '/docs/', '#/docs', '?p=/docs', '/repo/docs' -> '/docs'
 * - '/cli', '/cli/', '#/cli', '?p=/cli', '/repo/cli' -> '/cli'
 * - everything else -> '/'
 */
export const resolveCurrentPath = (): string => {
  if (typeof window === 'undefined') return '/';

  // 1. Check if route is in hash (e.g. #/docs, #/cli, #/docs#env)
  const hash = window.location.hash || '';
  if (hash.startsWith('#/')) {
    const routePart = hash.slice(1).split('#')[0].replace(/\/+$/, '');
    if (routePart === '/docs' || routePart === '/guide') return '/docs';
    if (routePart === '/cli') return '/cli';
    return routePart || '/';
  }

  // 2. Check query param fallback (e.g. ?p=/docs or ?route=/cli from 404 redirect)
  try {
    const params = new URLSearchParams(window.location.search);
    const queryRoute = params.get('p') || params.get('route');
    if (queryRoute) {
      const cleanQuery = queryRoute.replace(/\/+$/, '');
      if (cleanQuery === '/docs' || cleanQuery === '/guide') return '/docs';
      if (cleanQuery === '/cli') return '/cli';
      return cleanQuery || '/';
    }
  } catch {
    // Ignore search param parsing failure
  }

  // 3. Check pathname
  const pathname = window.location.pathname || '/';

  // Match /docs, /docs/, or subpath /repo-name/docs
  if (/(^|\/)(docs|guide)\/?$/i.test(pathname)) {
    return '/docs';
  }
  // Match /cli, /cli/, or subpath /repo-name/cli
  if (/(^|\/)cli\/?$/i.test(pathname)) {
    return '/cli';
  }

  return '/';
};

const scrollToHash = (hash: string, attempt = 0) => {
  if (!hash || hash.startsWith('#/')) {
    return;
  }
  const cleanId = decodeURIComponent(hash.slice(1));
  const el = document.getElementById(cleanId);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 88; // clear sticky navbar
    window.scrollTo({ top, behavior: 'smooth' });
  } else if (attempt < 25) {
    // Target element may not be rendered yet — retry briefly.
    window.setTimeout(() => scrollToHash(hash, attempt + 1), 40);
  }
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(resolveCurrentPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(resolveCurrentPath());
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#/')) {
        scrollToHash(hash);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    // Initial load: clean query fallback if present (?p=/docs)
    const params = new URLSearchParams(window.location.search);
    if (params.has('p') || params.has('route')) {
      const canonical = resolveCurrentPath();
      try {
        window.history.replaceState({}, '', canonical + window.location.hash);
      } catch {
        // Fallback gracefully
      }
    }

    // Scroll to section hash if provided (e.g. #install, #domains)
    if (window.location.hash && !window.location.hash.startsWith('#/')) {
      scrollToHash(window.location.hash);
    }

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = useCallback((to: string) => {
    // If it's an anchor within current page (e.g. #how-it-works or #pricing)
    if (to.startsWith('#') && !to.startsWith('#/')) {
      scrollToHash(to);
      return;
    }

    const url = new URL(to, window.location.origin);
    const target = url.pathname + url.hash;

    if (window.location.pathname + window.location.hash !== target) {
      try {
        window.history.pushState({}, '', target);
      } catch {
        // Fallback to hash routing if pushState blocked
        window.location.hash = '#' + to;
      }
    }

    setPath(resolveCurrentPath());

    if (url.hash && !url.hash.startsWith('#/')) {
      scrollToHash(url.hash);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

/** Anchor that navigates client-side but preserves cmd/ctrl-click */
export const Link: React.FC<LinkProps> = ({ to, onClick, children, ...rest }) => {
  const { navigate } = useRouter();
  return (
    <a
      href={to}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
};
