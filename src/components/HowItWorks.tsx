import React, { useState } from 'react';
import {
  Github,
  FolderGit2,
  Globe2,
  Terminal,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Connect GitHub',
      subtitle: 'Connect your GitHub account and give SmallCloud access to the repositories you want to deploy.',
      icon: Github,
      detail: 'OAuth or GitHub App installation with granular repository permissions. Select all repositories or pick specific ones.',
      snippet: `// Install SmallCloud GitHub App
$ gh app install smallcloud-deployer --repo acme/store
✓ Authorization granted for acme/* repositories`,
    },
    {
      num: '02',
      title: 'Choose your repository',
      subtitle: 'Select a repository and branch. SmallCloud detects the application and prepares the deployment automatically.',
      icon: FolderGit2,
      detail: 'Zero configuration required. SmallCloud reads your package.json, requirements.txt, or go.mod to detect your runtime, build commands, and port bindings.',
      snippet: `// Runtime auto-detection in progress:
✓ Repository: github.com/acme/store
✓ Branch: main (commit 8f1e39a)
✓ Runtime: Node.js 20.x
✓ Framework: Next.js (App Router detected)`,
    },
    {
      num: '03',
      title: 'Go live',
      subtitle: 'SmallCloud builds and deploys your application and gives you a secure public URL.',
      icon: Globe2,
      detail: 'Build executes in an isolated environment. An auto-provisioned Let\'s Encrypt certificate is mapped to your public URL or custom domain in seconds.',
      snippet: `// Build & Edge routing complete
✓ Build finished in 14.8 seconds
✓ Health check: GET / 200 OK (18ms)
✓ Live: https://store.smallcloud.si
✓ Ready to accept HTTPS traffic worldwide`,
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

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => {
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

        {/* Interactive Step Code Preview with AnimatePresence */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-surface-dark dark:bg-[#050505] border border-gray-800 dark:border-[#1F1F1F] rounded-xl overflow-hidden shadow-dark-card">
            <div className="px-4 py-2.5 bg-surface-darker dark:bg-[#020202] border-b border-gray-800 dark:border-[#1A1A1A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-xs font-mono text-gray-300">
                  Step {steps[activeStep].num} Simulation Output
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

      </div>
    </section>
  );
};
