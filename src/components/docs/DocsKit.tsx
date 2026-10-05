import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Info, AlertTriangle, Lightbulb, Hash } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* CodeBlock                                                           */
/* ------------------------------------------------------------------ */

const highlightLine = (line: string, key: number) => {
  // Split off a trailing shell comment ("  # ...") or a full-line comment.
  const commentIdx = line.trimStart().startsWith('#') ? line.indexOf('#') : line.search(/\s#\s/);
  const codePart = commentIdx >= 0 ? line.slice(0, commentIdx) : line;
  const commentPart = commentIdx >= 0 ? line.slice(commentIdx) : '';

  const tokens = codePart.split(/(\s+)/).map((tok, i) => {
    if (/^\s+$/.test(tok) || tok === '') return tok;
    if (/^(\.\/bin\/)?smallcloud$/.test(tok)) {
      return <span key={i} className="text-white font-semibold">{tok}</span>;
    }
    if (tok === 'sudo' || tok === 'ln') {
      return <span key={i} className="text-white">{tok}</span>;
    }
    if (tok.startsWith('--') || /^-[a-z]+$/.test(tok)) {
      return <span key={i} className="text-sky-400">{tok}</span>;
    }
    if (/^[A-Z_][A-Z0-9_]*=/.test(tok)) {
      const [k, ...v] = tok.split('=');
      return (
        <span key={i}>
          <span className="text-amber-300">{k}</span>
          <span className="text-gray-500">=</span>
          <span className="text-emerald-300">{v.join('=')}</span>
        </span>
      );
    }
    if (/^https?:\/\//.test(tok) || /^"?\$\(/.test(tok)) {
      return <span key={i} className="text-emerald-300">{tok}</span>;
    }
    return <span key={i} className="text-gray-300">{tok}</span>;
  });

  return (
    <div key={key} className="min-h-[1.5em]">
      {tokens}
      {commentPart && <span className="text-[#6B6B6B]">{commentPart}</span>}
    </div>
  );
};

interface CodeBlockProps {
  code: string;
  title?: string;
  lang?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, title, lang = 'bash', className = '' }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={`rounded-xl border border-gray-800 dark:border-[#1F1F1F] bg-[#0A0A0A] overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1F1F1F] bg-[#050505]">
        <span className="text-[11px] font-mono text-[#8A8A8A]">{title || lang}</span>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8A8A8A] hover:text-white px-2 py-1 rounded-md hover:bg-[#161616] transition-colors cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="px-4 py-3.5 text-[13px] leading-relaxed font-mono overflow-x-auto">
        <code>{code.split('\n').map(highlightLine)}</code>
      </pre>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Inline code                                                         */
/* ------------------------------------------------------------------ */

export const C: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <code className="px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] text-[0.85em] font-mono text-gray-800 dark:text-gray-200 whitespace-nowrap">
    {children}
  </code>
);

/* ------------------------------------------------------------------ */
/* Callout                                                             */
/* ------------------------------------------------------------------ */

const calloutStyles = {
  note: {
    icon: Info,
    box: 'bg-brand-50/60 dark:bg-[#05101F] border-brand-200 dark:border-[#0F2A4D]',
    iconCls: 'text-brand-600 dark:text-brand-400',
  },
  tip: {
    icon: Lightbulb,
    box: 'bg-emerald-50/60 dark:bg-[#04130C] border-emerald-200 dark:border-[#0F3D27]',
    iconCls: 'text-emerald-600 dark:text-emerald-400',
  },
  warning: {
    icon: AlertTriangle,
    box: 'bg-amber-50/70 dark:bg-[#140E02] border-amber-200 dark:border-[#3D2C07]',
    iconCls: 'text-amber-600 dark:text-amber-400',
  },
};

export const Callout: React.FC<{
  type?: keyof typeof calloutStyles;
  title?: string;
  children: React.ReactNode;
}> = ({ type = 'note', title, children }) => {
  const s = calloutStyles[type];
  const Icon = s.icon;
  return (
    <div className={`flex gap-3 p-4 rounded-xl border text-sm ${s.box}`}>
      <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${s.iconCls}`} />
      <div className="text-gray-700 dark:text-[#B5B5B5] leading-relaxed">
        {title && <div className="font-semibold text-gray-900 dark:text-white mb-0.5">{title}</div>}
        {children}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Section headings                                                    */
/* ------------------------------------------------------------------ */

export const DocH2: React.FC<{ id: string; eyebrow?: string; children: React.ReactNode }> = ({
  id,
  eyebrow,
  children,
}) => (
  <div id={id} className="scroll-mt-28 group">
    {eyebrow && (
      <div className="text-xs font-mono font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400 mb-2">
        {eyebrow}
      </div>
    )}
    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-950 dark:text-white font-sans flex items-center gap-2">
      {children}
      <a
        href={`#${id}`}
        className="opacity-0 group-hover:opacity-100 text-gray-300 dark:text-[#444444] hover:text-gray-500 dark:hover:text-[#888888] transition-opacity"
        aria-label="Link to section"
      >
        <Hash className="w-5 h-5" />
      </a>
    </h2>
  </div>
);

export const DocH3: React.FC<{ id?: string; children: React.ReactNode }> = ({ id, children }) => (
  <h3 id={id} className="scroll-mt-28 text-lg font-semibold text-gray-950 dark:text-white font-sans">
    {children}
  </h3>
);

export const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-[15px] text-gray-600 dark:text-[#A1A1A1] leading-relaxed">{children}</p>
);

/* ------------------------------------------------------------------ */
/* Tabs                                                                */
/* ------------------------------------------------------------------ */

export const Tabs: React.FC<{
  id: string;
  tabs: { key: string; label: string; icon?: React.ReactNode; content: React.ReactNode }[];
}> = ({ id, tabs }) => {
  const [active, setActive] = useState(tabs[0].key);
  const current = tabs.find((t) => t.key === active) ?? tabs[0];
  return (
    <div>
      <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1F1F1F] mb-5">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`relative px-4 py-1.5 rounded-lg text-sm font-medium cursor-pointer transition-colors flex items-center gap-2 ${
              active === t.key
                ? 'text-gray-950 dark:text-white'
                : 'text-gray-500 dark:text-[#8A8A8A] hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {active === t.key && (
              <motion.div
                layoutId={`tabs-pill-${id}`}
                className="absolute inset-0 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200/60 dark:border-[#2A2A2A]"
                transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {t.icon}
              {t.label}
            </span>
          </button>
        ))}
      </div>
      <motion.div key={current.key} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
        {current.content}
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Numbered step list                                                  */
/* ------------------------------------------------------------------ */

export const Steps: React.FC<{ items: React.ReactNode[] }> = ({ items }) => (
  <ol className="space-y-3">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#262626] text-xs font-mono font-semibold text-gray-700 dark:text-gray-300 flex items-center justify-center shrink-0 mt-0.5">
          {i + 1}
        </span>
        <div className="text-[15px] text-gray-700 dark:text-[#B5B5B5] leading-relaxed">{item}</div>
      </li>
    ))}
  </ol>
);

/* ------------------------------------------------------------------ */
/* Docs layout with sticky table of contents + scroll spy              */
/* ------------------------------------------------------------------ */

export interface TocItem {
  id: string;
  label: string;
}

export const DocsLayout: React.FC<{
  toc: TocItem[];
  header: React.ReactNode;
  aside?: React.ReactNode;
  children: React.ReactNode;
}> = ({ toc, header, aside, children }) => {
  const [activeId, setActiveId] = useState(toc[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-96px 0px -65% 0px' }
    );
    toc.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  const jump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.history.replaceState({}, '', `#${id}`);
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-28 pb-24 bg-white dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">{header}</div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-14">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-gray-400 dark:text-[#666666] mb-3">
                On this page
              </div>
              <nav className="space-y-0.5 border-l border-gray-200 dark:border-[#1F1F1F]">
                {toc.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    onClick={(e) => jump(e, t.id)}
                    className={`relative block pl-4 py-1.5 text-sm transition-colors ${
                      activeId === t.id
                        ? 'text-gray-950 dark:text-white font-medium'
                        : 'text-gray-500 dark:text-[#8A8A8A] hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {activeId === t.id && (
                      <motion.span
                        layoutId="toc-active"
                        className="absolute -left-px top-1 bottom-1 w-[2px] bg-brand-500 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.35 }}
                      />
                    )}
                    {t.label}
                  </a>
                ))}
              </nav>
              {aside && <div className="mt-8">{aside}</div>}
            </div>
          </aside>

          {/* Mobile TOC */}
          <details className="lg:hidden rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0A0A0A] px-4 py-3">
            <summary className="text-sm font-medium text-gray-900 dark:text-white cursor-pointer">On this page</summary>
            <nav className="mt-3 flex flex-col gap-1.5">
              {toc.map((t) => (
                <a key={t.id} href={`#${t.id}`} onClick={(e) => jump(e, t.id)} className="text-sm text-gray-600 dark:text-[#A1A1A1]">
                  {t.label}
                </a>
              ))}
            </nav>
          </details>

          <div className="min-w-0 space-y-16">{children}</div>
        </div>
      </div>
    </div>
  );
};
