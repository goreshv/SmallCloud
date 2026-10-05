import React, { useState } from 'react';
import {
  Github,
  FolderGit2,
  Globe2,
  Terminal,
  Zap,
  KeyRound,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '../router';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Sign In with GitHub',
      subtitle: 'Click "Continue with GitHub" on /login with OAuth 2.0. Zero secret tokens required.',
      icon: Github,
      detail: 'OAuth 2.0 securely queries GitHub API to list your repositories. Testing locally? Click "Demo GitHub Account" anytime.',
      snippet: `// Step 1: Sign In with GitHub (/login)
✓ OAuth 2.0 handshake verified (Zero secret tokens)
✓ GitHub API queried: Repositories listed
(Local testing note: Click "Demo GitHub Account" to simulate instantly)`,
    },
    {
      num: '02',
      title: 'Deploying Your First App',
      subtitle: 'Deploy via Web Dashboard (/applications/new) or Terminal CLI command.',
      icon: FolderGit2,
      detail: 'Pick your repo or paste Custom Git URL (e.g. tiangolo/fastapi). Auto-detects Next.js, FastAPI, Node.js, Python, or Dockerfiles. Instant routing to http://localhost:8000/live/<app-slug>.',
      snippet: `// Via Web Dashboard (/applications/new) or Terminal CLI:
$ ./bin/smallcloud deploy --name my-app --repo https://github.com/tiangolo/fastapi --port 8000
✓ Runtime detected: FastAPI
✓ Container created with strict CPU/RAM bounds
✓ Instant Routing: http://localhost:8000/live/my-app`,
    },
    {
      num: '03',
      title: 'Custom Domains & TLS',
      subtitle: 'Automatic free Let\'s Encrypt SSL with 2048-bit RSA keys and TLS 1.3 reverse proxy routing.',
      icon: Globe2,
      detail: 'Map CNAME (local.smallcloud) or A Record (127.0.0.1 / Public IP). Includes 60-day auto-renewal and 1-click "Renew SSL". CLI: ./bin/smallcloud domains add my-app api.mycompany.dev',
      snippet: `// Via Terminal CLI:
$ ./bin/smallcloud domains add my-app api.mycompany.dev
✓ Generated 2048-bit RSA keypair
✓ Signed X.509 certificate with Let's Encrypt Authority
✓ TLS 1.3 reverse proxy activated (60-day background renewal)
✓ Live at https://api.mycompany.dev`,
    },
    {
      num: '04',
      title: 'Secrets & Environment',
      subtitle: 'Encrypted at rest in SQLite with masked UI values (••••••••••••).',
      icon: KeyRound,
      detail: 'Inject runtime configuration securely. Manage via Dashboard or CLI: ./bin/smallcloud env set my-app STRIPE_API_KEY=sk_live_99214 DB_PORT=5432.',
      snippet: `// Step 4: Managing Secrets & Environment Variables
$ ./bin/smallcloud env set my-app STRIPE_API_KEY=sk_live_99214 DB_PORT=5432
✓ Encrypted with AES-256 at rest in SQLite
✓ Masked in Web Dashboard (••••••••••••)
$ ./bin/smallcloud env list my-app
[KEY]                 [VALUE]         [STATUS]
STRIPE_API_KEY        ••••••••••••    Encrypted
DB_PORT               5432            Encrypted`,
    },
    {
      num: '05',
      title: 'SmallCloud Terminal CLI',
      subtitle: 'Complete platform control from bash/zsh with zero web dashboard dependency.',
      icon: Terminal,
      detail: 'Global alias: sudo ln -sf "$(pwd)/bin/smallcloud" /usr/local/bin/smallcloud. Login, inspect containers, stream logs, and bind domains.',
      snippet: `// Step 5: SmallCloud Terminal CLI
$ sudo ln -sf "$(pwd)/bin/smallcloud" /usr/local/bin/smallcloud
$ smallcloud login          # Authenticate session
$ smallcloud whoami         # View current user
$ smallcloud apps           # List apps, statuses, and ports
$ smallcloud logs my-app    # Stream live container logs
$ smallcloud domains list   # View custom domains & TLS status`,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F9FAFB] dark:bg-[#000000] border-y border-gray-200 dark:border-[#1F1F1F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold tracking-wider uppercase text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/70 border border-brand-100 dark:border-brand-800 px-3 py-1 rounded-full inline-block"
          >
            Simple Three-Step Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans"
          >
            Deploy in three steps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A1A1A1]"
          >
            The shortest distance between source code and a live production URL.
          </motion.p>
        </div>

        {/* Visual Pipeline Flow Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-14 max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1F1F1F] rounded-xl p-4 sm:p-5 shadow-sm">
            <div className="text-xs font-mono text-gray-500 dark:text-[#737373] uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Deployment Pipeline Flow</span>
              <span className="text-[11px] font-mono text-emerald-500">Autonomous Execution</span>
            </div>
            
            <div className="grid grid-cols-5 gap-2 items-center text-center">
              {/* Node 1: GitHub */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#262626] flex items-center justify-center text-gray-800 dark:text-gray-200">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="mt-2 text-xs font-medium text-gray-800 dark:text-gray-200">GitHub</span>
                <span className="text-[10px] text-gray-400 dark:text-[#737373] font-mono">push commit</span>
              </motion.div>

              {/* Arrow */}
              <div className="flex flex-col items-center justify-center text-gray-300 dark:text-gray-700">
                <div className="w-full h-[1px] bg-gray-200 dark:bg-[#262626] relative overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                    className="w-1/2 h-full bg-brand-500 dark:bg-brand-400"
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-gray-400 dark:border-gray-500 rotate-45" />
                </div>
              </div>

              {/* Node 2: SmallCloud */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-surface-dark dark:bg-[#141414] border border-gray-800 dark:border-brand-500/50 flex items-center justify-center text-white shadow-sm">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-brand-400" />
                </div>
                <span className="mt-2 text-xs font-semibold text-gray-900 dark:text-white">SmallCloud</span>
                <span className="text-[10px] text-gray-400 dark:text-[#737373] font-mono">detect runtime</span>
              </motion.div>

              {/* Arrow */}
              <div className="flex flex-col items-center justify-center text-gray-300 dark:text-gray-700">
                <div className="w-full h-[1px] bg-gray-200 dark:bg-[#262626] relative overflow-hidden">
                  <motion.div
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: "linear", delay: 0.9 }}
                    className="w-1/2 h-full bg-brand-500 dark:bg-brand-400"
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-gray-400 dark:border-gray-500 rotate-45" />
                </div>
              </div>

              {/* Node 3: Live URL */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-50 dark:bg-[#071F15] border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Globe2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="mt-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">Live URL</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">https://*.smallcloud.si</span>
              </motion.div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#1A1A1A] flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-[#888888]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                No Docker daemon or VPS maintenance required
              </span>
              <span className="hidden sm:inline text-gray-400 dark:text-[#666666]">Automatic SSL · Zero config</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Step Cards Grid (Core Deploy Flow) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.slice(0, 3).map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.35 }}
                whileHover={{ y: -3 }}
                onClick={() => setActiveStep(idx)}
                className={`relative bg-white dark:bg-[#0A0A0A] rounded-xl p-6 sm:p-7 border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? 'border-gray-900 dark:border-white shadow-md ring-1 ring-gray-900 dark:ring-white'
                    : 'border-gray-200 dark:border-[#1F1F1F] shadow-subtle hover:border-gray-300 dark:hover:border-[#333333]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-gray-400 dark:text-[#737373] bg-gray-100 dark:bg-[#141414] px-2.5 py-1 rounded">
                      Step {step.num}
                    </span>
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-gray-900 dark:bg-white text-white dark:text-black' : 'bg-gray-50 dark:bg-[#161616] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#262626]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-sans mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-[#1A1A1A]">
                  <div className="text-xs text-gray-500 dark:text-[#737373] mb-2 font-mono">
                    {step.detail}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Step Selector Tabs (All 5 Documented Steps) */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
            {steps.map((s, idx) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black font-semibold shadow-sm'
                    : 'bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1F1F1F] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Step {s.num}: {s.title}
              </button>
            ))}
          </div>

          {/* Interactive Step Code Preview with AnimatePresence */}
          <div className="bg-surface-dark dark:bg-[#050505] border border-gray-800 dark:border-[#1F1F1F] rounded-xl overflow-hidden shadow-dark-card">
            <div className="px-4 py-2.5 bg-surface-darker dark:bg-[#020202] border-b border-gray-800 dark:border-[#1A1A1A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-mono text-gray-300">
                  Step {steps[activeStep].num}: {steps[activeStep].title} Simulation Output
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live engine
                </span>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="p-4 sm:p-6 text-xs sm:text-sm font-mono text-gray-300 overflow-x-auto whitespace-pre-wrap leading-relaxed"
              >
                <code>{steps[activeStep].snippet}</code>
              </motion.pre>
            </AnimatePresence>
          </div>
        </div>

        {/* Post-Deployment & Operations: Step 4 (Secrets) & Step 5 (CLI) Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Step 4 Card */}
          <div
            onClick={() => setActiveStep(3)}
            className="p-6 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#333333] transition-all cursor-pointer text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-gray-400 dark:text-[#737373] bg-gray-100 dark:bg-[#141414] px-2.5 py-1 rounded">
                Step 04
              </span>
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-[#161616] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#262626]">
                <KeyRound className="w-4 h-4" />
              </div>
            </div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white font-sans">
              Managing Secrets & Environment Variables
            </h4>
            <p className="mt-1.5 text-xs text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
              Encrypted at rest with SQLite AES-256. Values are masked with bullets (<code className="font-mono text-gray-800 dark:text-gray-200">••••••••••••</code>) in the UI. Configure via Web Dashboard or terminal CLI.
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#1A1A1A] flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-500 dark:text-[#888888]">
                ./bin/smallcloud env set
              </span>
              <Link to="/docs#env" className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                Docs guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Step 5 Card */}
          <div
            onClick={() => setActiveStep(4)}
            className="p-6 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#333333] transition-all cursor-pointer text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs font-bold text-gray-400 dark:text-[#737373] bg-gray-100 dark:bg-[#141414] px-2.5 py-1 rounded">
                Step 05
              </span>
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-[#161616] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#262626]">
                <Terminal className="w-4 h-4" />
              </div>
            </div>
            <h4 className="text-base font-bold text-gray-900 dark:text-white font-sans">
              Using the smallcloud Terminal CLI
            </h4>
            <p className="mt-1.5 text-xs text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
              Global alias setup with <code className="font-mono text-gray-800 dark:text-gray-200">sudo ln -sf</code>. Run login, inspect apps, stream live container logs, and bind domains right from zsh/bash.
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#1A1A1A] flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-500 dark:text-[#888888]">
                Dedicated CLI page
              </span>
              <Link to="/cli" className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                Explore CLI <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* User Guide & CLI Quick Navigation Callout */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-xl border border-dashed border-gray-300 dark:border-[#2B2B2B] bg-gray-50/70 dark:bg-[#060606] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-mono font-semibold text-gray-900 dark:text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Complete Documentation Available
            </span>
            <p className="text-xs text-gray-500 dark:text-[#888888] mt-0.5">
              Follow our 5-step interactive guide or inspect all CLI flags and commands.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/docs"
              className="px-3.5 py-1.5 rounded-lg border border-gray-200 dark:border-[#222222] bg-white dark:bg-[#121212] text-xs font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1E1E1E] transition-colors"
            >
              User Guide (/docs)
            </Link>
            <Link
              to="/cli"
              className="px-3.5 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black text-xs font-medium hover:bg-black dark:hover:bg-gray-100 transition-colors shadow-sm"
            >
              CLI Guide (/cli)
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
