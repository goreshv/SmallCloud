import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/**
 * Minimal client-side router (pathname + hash) so the site can have real pages
 * like /docs and /cli without pulling in an extra dependency.
 */

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  navigate: () => {},
});

const scrollToHash = (hash: string, attempt = 0) => {
  if (!hash) {
    window.scrollTo({ top: 0 });
    return;
  }
  const el = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 88; // clear the sticky navbar
    window.scrollTo({ top, behavior: 'smooth' });
  } else if (attempt < 20) {
    // Target may not be rendered yet (page just switched) — retry briefly.
    window.setTimeout(() => scrollToHash(hash, attempt + 1), 50);
  }
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
      scrollToHash(window.location.hash);
    };
    window.addEventListener('popstate', onPopState);
    // Honour a hash on first load (e.g. /cli#deploy).
    if (window.location.hash) scrollToHash(window.location.hash);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    const url = new URL(to, window.location.origin);
    const target = url.pathname + url.hash;
    if (target !== window.location.pathname + window.location.hash) {
      window.history.pushState({}, '', target);
    }
    setPath(url.pathname);
    scrollToHash(url.hash);
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
};

export const useRouter = () => useContext(RouterContext);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

/** Anchor that navigates client-side but keeps a real href (cmd/ctrl-click still opens a new tab). */
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
