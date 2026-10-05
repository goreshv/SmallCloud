import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Terminal } from 'lucide-react';

type Line =
  | { kind: 'cmd'; text: string }
  | { kind: 'out'; text: string; tone?: 'ok' | 'info' | 'muted' | 'plain' };

const SCRIPT: Line[] = [
  { kind: 'cmd', text: 'smallcloud login' },
  { kind: 'out', text: '✓ Session authenticated', tone: 'ok' },
  { kind: 'cmd', text: 'smallcloud deploy --name my-app --repo https://github.com/tiangolo/fastapi --port 8000' },
  { kind: 'out', text: '→ Detected FastAPI', tone: 'info' },
  { kind: 'out', text: '→ Building container with CPU/RAM limits', tone: 'info' },
  { kind: 'out', text: '✓ Live at http://localhost:8000/live/my-app', tone: 'ok' },
  { kind: 'cmd', text: 'smallcloud env set my-app DB_PORT=5432' },
  { kind: 'out', text: '✓ Saved (encrypted at rest)', tone: 'ok' },
  { kind: 'cmd', text: 'smallcloud domains add my-app api.mycompany.dev' },
  { kind: 'out', text: "✓ Let's Encrypt certificate issued · TLS 1.3", tone: 'ok' },
  { kind: 'cmd', text: 'smallcloud apps' },
  { kind: 'out', text: 'NAME     STATUS    PORT', tone: 'muted' },
  { kind: 'out', text: 'my-app   running   8000', tone: 'plain' },
];

const toneClass = {
  ok: 'text-emerald-400',
  info: 'text-sky-400',
  muted: 'text-[#6B6B6B]',
  plain: 'text-gray-300',
};

/**
 * Typewriter-style terminal session. Starts when scrolled into view and loops.
 * Output is illustrative, so the component says so in its footer.
 */
export const TerminalDemo: React.FC<{ className?: string }> = ({ className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: '-80px' });
  const reduceMotion = useReducedMotion();

  const [lineIdx, setLineIdx] = useState(0); // number of fully shown lines
  const [typed, setTyped] = useState(0); // chars typed of the current cmd line

  useEffect(() => {
    if (reduceMotion) {
      setLineIdx(SCRIPT.length);
      return;
    }
    if (!inView) return;

    let timer: number;
    if (lineIdx >= SCRIPT.length) {
      timer = window.setTimeout(() => {
        setLineIdx(0);
        setTyped(0);
      }, 4500);
    } else {
      const line = SCRIPT[lineIdx];
      if (line.kind === 'cmd' && typed < line.text.length) {
        timer = window.setTimeout(() => setTyped((t) => t + 1), line.text.length > 40 ? 14 : 38);
      } else {
        const delay = line.kind === 'cmd' ? 380 : 260;
        timer = window.setTimeout(() => {
          setLineIdx((i) => i + 1);
          setTyped(0);
        }, delay);
      }
    }
    return () => window.clearTimeout(timer);
  }, [inView, lineIdx, typed, reduceMotion]);

  const visible = SCRIPT.slice(0, lineIdx);
  const current = lineIdx < SCRIPT.length ? SCRIPT[lineIdx] : null;

  return (
    <div ref={ref} className={`rounded-xl border border-gray-800 dark:border-[#1F1F1F] bg-[#0A0A0A] overflow-hidden shadow-dark-card ${className}`}>
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#1F1F1F] bg-[#050505]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
          </div>
          <Terminal className="w-3.5 h-3.5 text-[#6B6B6B] ml-2" />
          <span className="text-[11px] font-mono text-[#8A8A8A]">zsh — smallcloud</span>
        </div>
      </div>
      <div className="px-4 py-4 font-mono text-[12.5px] leading-relaxed min-h-[330px]">
        {visible.map((l, i) =>
          l.kind === 'cmd' ? (
            <div key={i} className="break-all">
              <span className="text-[#6B6B6B]">$ </span>
              <span className="text-gray-100">{l.text}</span>
            </div>
          ) : (
            <div key={i} className={`whitespace-pre ${toneClass[l.tone ?? 'plain']}`}>{l.text}</div>
          )
        )}
        {current?.kind === 'cmd' && (
          <div className="break-all">
            <span className="text-[#6B6B6B]">$ </span>
            <span className="text-gray-100">{current.text.slice(0, typed)}</span>
            <span className="inline-block w-[7px] h-[14px] -mb-[2px] bg-gray-300 animate-pulse" />
          </div>
        )}
        {!current && (
          <div>
            <span className="text-[#6B6B6B]">$ </span>
            <span className="inline-block w-[7px] h-[14px] -mb-[2px] bg-gray-300 animate-pulse" />
          </div>
        )}
      </div>
      <div className="px-4 py-2 border-t border-[#1F1F1F] text-[10.5px] font-mono text-[#5C5C5C]">
        Example session — output is illustrative.
      </div>
    </div>
  );
};
