import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  RefreshCw,
  GitBranch,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroProps {
  onOpenDeployModal: () => void;
  onOpenDocsModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDeployModal, onOpenDocsModal }) => {
  const [activePreset, setActivePreset] = useState<'store' | 'api' | 'blog'>('store');
  const [deployState, setDeployState] = useState<'ready' | 'deploying' | 'live'>('live');
  const [copied, setCopied] = useState(false);

  const presets = {
    store: {
      repo: 'github.com/acme/store',
      branch: 'main',
      framework: 'Next.js detected',
      subdomain: 'https://store.smallcloud.si',
      buildTime: '14.2s',
      runtime: 'Node.js 20.x · isolated',
    },
    api: {
      repo: 'github.com/company/inventory-api',
      branch: 'main',
      framework: 'FastAPI detected',
      subdomain: 'https://inventory.smallcloud.si',
      buildTime: '8.4s',
      runtime: 'Python 3.12 · isolated',
    },
    blog: {
      repo: 'github.com/studio/tech-blog',
      branch: 'main',
      framework: 'Astro detected',
      subdomain: 'https://blog.smallcloud.si',
      buildTime: '5.1s',
      runtime: 'Static Edge · isolated',
    },
  };

  const current = presets[activePreset];

  const handleSimulateDeploy = () => {
    if (deployState === 'deploying') return;
    setDeployState('deploying');
    setTimeout(() => {
      setDeployState('live');
    }, 1400);
  };

  const copyUrl = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white dark:bg-[#000000] transition-colors duration-200">
      {/* Background technical grid line decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white dark:from-[#000000] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            
            {/* Version / Operational Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-[#222222] bg-gray-50/80 dark:bg-[#0A0A0A] mb-6 text-xs font-mono text-gray-700 dark:text-gray-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SmallCloud Platform</span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <span className="text-gray-500 dark:text-gray-400">smallcloud.si</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] dark:text-white leading-[1.08] max-w-2xl font-sans">
              From GitHub to production.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-[#A1A1A1] leading-relaxed max-w-2xl font-normal">
              Deploy your application without managing servers, Docker, SSL, or deployment pipelines. Connect GitHub, choose a repository, and SmallCloud handles the rest.
            </p>

            {/* Supporting line */}
            <p className="mt-2 text-sm text-gray-500 dark:text-[#737373] font-normal">
              Connect your repository, deploy your application, and get a production-ready URL in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenDeployModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#111111] dark:bg-white text-white dark:text-[#000000] hover:bg-black dark:hover:bg-gray-100 font-medium text-base shadow-sm hover:shadow transition-all duration-150 cursor-pointer"
              >
                <span>Deploy your first app</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-gray-200 dark:border-[#222222] bg-white dark:bg-[#0A0A0A] text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#141414] font-medium text-base transition-colors duration-150 cursor-pointer"
              >
                <span>View how it works</span>
              </motion.a>
            </div>

            {/* Supporting Trust Message */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#1A1A1A] flex items-center gap-3 text-xs sm:text-sm text-gray-500 dark:text-[#737373]">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 shrink-0" />
              <p>
                Built for developers and small teams who want to ship, not manage infrastructure.
              </p>
            </div>

            {/* Developer Proof Points */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-xs font-mono text-gray-600 dark:text-gray-300 border border-gray-200/80 dark:border-[#1F1F1F] rounded-lg p-3 bg-gray-50/70 dark:bg-[#0A0A0A] w-full sm:w-auto">
              <div>
                <span className="text-gray-400 dark:text-gray-500 block text-[10px] uppercase font-sans">Zero config</span>
                <span className="font-semibold text-gray-900 dark:text-white">Auto Framework</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-gray-500 block text-[10px] uppercase font-sans">Security</span>
                <span className="font-semibold text-gray-900 dark:text-white">TLS 1.3 Auto SSL</span>
              </div>
              <div>
                <span className="text-gray-400 dark:text-gray-500 block text-[10px] uppercase font-sans">Isolation</span>
                <span className="font-semibold text-gray-900 dark:text-white">Dedicated Env</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Realistic SmallCloud Product Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Product UI Window */}
              <div className="bg-white dark:bg-[#0A0A0A] rounded-xl border border-gray-200 dark:border-[#1F1F1F] shadow-floating dark:shadow-dark-card overflow-hidden transition-all duration-200">
                
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#F9FAFB] dark:bg-[#050505] border-b border-gray-200 dark:border-[#1A1A1A] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-[#262626] border border-gray-300/80 dark:border-[#333333]" />
                      <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-[#262626] border border-gray-300/80 dark:border-[#333333]" />
                      <div className="w-3 h-3 rounded-full bg-gray-200 dark:bg-[#262626] border border-gray-300/80 dark:border-[#333333]" />
                    </div>
                    <span className="text-xs font-mono text-gray-600 dark:text-gray-300 ml-2 font-medium">SmallCloud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-gray-200/60 dark:bg-[#161616] text-gray-700 dark:text-gray-300 font-medium border border-transparent dark:border-[#262626]">
                      Deploy application
                    </span>
                  </div>
                </div>

                {/* Interactive Demo Repo Picker */}
                <div className="px-5 pt-4 pb-1 border-b border-gray-100 dark:border-[#1A1A1A] flex items-center gap-1.5 text-[11px] font-mono">
                  <span className="text-gray-400 dark:text-gray-500">Sample repo:</span>
                  {(['store', 'api', 'blog'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setActivePreset(key);
                        setDeployState('live');
                      }}
                      className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                        activePreset === key
                          ? 'bg-gray-900 dark:bg-white text-white dark:text-black font-medium shadow-sm'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#161616]'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>

                {/* Window Body: Real SaaS Configuration Form with AnimatePresence */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePreset}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="p-5 sm:p-6 space-y-4"
                  >
                    
                    {/* Repository Row */}
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1.5">
                        Repository
                      </label>
                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0F0F0F] text-sm">
                        <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100 font-mono text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                          <span className="font-medium">{current.repo}</span>
                        </div>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">Connected</span>
                      </div>
                    </div>

                    {/* Branch and Framework Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1.5">
                          Branch
                        </label>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0F0F0F] text-xs sm:text-sm font-mono text-gray-800 dark:text-gray-200">
                          <GitBranch className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                          <span>{current.branch}</span>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1.5">
                          Framework
                        </label>
                        <div className="flex items-center gap-2 p-2.5 rounded-lg border border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/60 dark:bg-emerald-950/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="font-medium">{current.framework}</span>
                        </div>
                      </div>
                    </div>

                    {/* Environment */}
                    <div>
                      <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-1.5">
                        Environment
                      </label>
                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0F0F0F] text-xs sm:text-sm">
                        <span className="font-medium text-gray-900 dark:text-gray-100">Production</span>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">{current.runtime}</span>
                      </div>
                    </div>

                    {/* Deploy Trigger Button */}
                    <div className="pt-1">
                      <motion.button
                        whileHover={deployState !== 'deploying' ? { scale: 1.01 } : {}}
                        whileTap={deployState !== 'deploying' ? { scale: 0.99 } : {}}
                        onClick={handleSimulateDeploy}
                        disabled={deployState === 'deploying'}
                        className={`w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          deployState === 'deploying'
                            ? 'bg-gray-100 dark:bg-[#161616] text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-[#222222] cursor-not-allowed'
                            : 'bg-brand-500 hover:bg-brand-600 text-white shadow-sm'
                        }`}
                      >
                        {deployState === 'deploying' ? (
                          <>
                            <RefreshCw className="w-4 h-4 animate-spin text-gray-600 dark:text-gray-400" />
                            <span>Building application (12s)...</span>
                          </>
                        ) : (
                          <>
                            <span>Deploy</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </motion.button>
                    </div>

                    {/* Deployment Status Checklist */}
                    <div className="pt-3 border-t border-gray-100 dark:border-[#1A1A1A]">
                      <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2.5 flex items-center justify-between">
                        <span>Deployment status</span>
                        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-normal">
                          {deployState === 'deploying' ? 'in progress' : 'ready'}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                          <span>Repository connected</span>
                          <span className="text-gray-400 dark:text-gray-500 text-[11px] font-mono ml-auto">0.4s</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          {deployState === 'deploying' ? (
                            <RefreshCw className="w-4 h-4 text-brand-500 animate-spin shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                          )}
                          <span>Build completed</span>
                          <span className="text-gray-400 dark:text-gray-500 text-[11px] font-mono ml-auto">
                            {deployState === 'deploying' ? 'running...' : current.buildTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                          {deployState === 'deploying' ? (
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600 border-t-transparent animate-spin shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                          )}
                          <span>Application deployed</span>
                          <span className="text-gray-400 dark:text-gray-500 text-[11px] font-mono ml-auto">
                            {deployState === 'deploying' ? 'queued' : '0.8s'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Live Endpoint Box */}
                    <div className="mt-4 p-3 rounded-lg bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#1F1F1F]">
                      <div className="text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1 flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          Live
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-200/50 dark:border-emerald-800/60">
                          HTTPS 200 OK
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-2 mt-1">
                        <a
                          href={current.subdomain}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenDeployModal();
                          }}
                          className="font-mono text-xs sm:text-sm text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 hover:underline truncate"
                        >
                          {current.subdomain}
                        </a>

                        <button
                          onClick={() => copyUrl(current.subdomain)}
                          className="p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded transition-colors cursor-pointer"
                          title="Copy live URL"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>

                {/* Footer Note */}
                <div className="px-5 py-2.5 bg-gray-50/80 dark:bg-[#070707] border-t border-gray-100 dark:border-[#1A1A1A] flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400">
                  <span className="font-mono">SSL cert: Let's Encrypt (Auto-renewed)</span>
                  <span className="font-mono text-gray-400 dark:text-gray-600">DNS: CNAME ready</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
