import React, { useState, useEffect } from 'react';
import {
  Github,
  Download,
  Search,
  Cpu,
  Box,
  CheckCircle2,
  Globe2,
  Play,
  RotateCcw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const DeploymentExperience: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(6);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const stages = [
    {
      step: '01',
      title: 'GitHub repository',
      description: 'Webhook triggers automatically on git push to the configured production branch.',
      icon: Github,
      timestamp: '00:00.12',
      logLine: 'POST /v1/webhooks/github HTTP/2 200 OK - Commit payload received [acme/store@c4f9a12]',
    },
    {
      step: '02',
      title: 'Source retrieved',
      description: 'SmallCloud pulls an ephemeral snapshot of the repository code into a secured build sandbox.',
      icon: Download,
      timestamp: '00:01.04',
      logLine: 'Cloning repository... 1,482 objects transferred. Verified commit signature: VALID GPG',
    },
    {
      step: '03',
      title: 'Application detected',
      description: 'Intelligent manifest analyzer inspects package dependencies, lockfiles, and environment config.',
      icon: Search,
      timestamp: '00:01.88',
      logLine: 'Detected Next.js 14.2 (App Router). Detected package manager: pnpm 9.1. Node engine: 20.x',
    },
    {
      step: '04',
      title: 'Build started',
      description: 'Packages are resolved from high-speed cache and optimized production assets are compiled.',
      icon: Cpu,
      timestamp: '00:08.45',
      logLine: 'Running `pnpm run build`... Generating static pages (24/24). Build artifact size: 48.2 MB',
    },
    {
      step: '05',
      title: 'Container created',
      description: 'Application is packaged into an isolated, memory-constrained Linux execution namespace.',
      icon: Box,
      timestamp: '00:11.20',
      logLine: 'Provisioning sandboxed runtime container c-910248. Allocated memory: 1024MB. Port: 3000',
    },
    {
      step: '06',
      title: 'Health check',
      description: 'Automatic HTTP ping confirms the web process is bound to port and responding with 200 OK.',
      icon: CheckCircle2,
      timestamp: '00:13.05',
      logLine: 'Executing HTTP health probe: GET http://127.0.0.1:3000/ -> 200 OK in 14ms. Ready for ingress.',
    },
    {
      step: '07',
      title: 'Application live',
      description: 'Edge reverse proxy updates routing table instantly. Zero downtime during live switchover.',
      icon: Globe2,
      timestamp: '00:13.80',
      logLine: 'Route activated: https://store.smallcloud.si -> c-910248. TLS 1.3 cert renewed & active.',
    },
  ];

  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStage(0);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < stages.length) {
        setActiveStage(current);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 650);
  };

  return (
    <section className="py-24 bg-white dark:bg-[#000000] border-b border-gray-200 dark:border-[#1F1F1F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Run Pipeline button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#141414] border border-transparent dark:border-[#222222] px-2.5 py-1 rounded inline-block"
            >
              Under the Hood
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans"
            >
              Push code. SmallCloud handles the infrastructure.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A1A1A1] leading-relaxed"
            >
              SmallCloud turns the deployment process into a simple workflow while handling the infrastructure work behind the scenes.
            </motion.p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
              isSimulating
                ? 'bg-brand-500 text-white animate-pulse'
                : 'bg-gray-100 dark:bg-[#141414] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-[#262626] hover:bg-gray-200 dark:hover:bg-[#1A1A1A]'
            }`}
          >
            {isSimulating ? (
              <>
                <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                <span>Simulating pipeline ({activeStage + 1}/7)...</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-brand-500 fill-brand-500" />
                <span>Re-run Pipeline Simulator</span>
              </>
            )}
          </motion.button>
        </div>

        {/* 2-Column: Pipeline sequence on Left, Terminal Log Inspector on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 7-stage vertical timeline */}
          <div className="lg:col-span-5 space-y-3">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage === idx;
              const isPassed = activeStage >= idx;

              return (
                <motion.div
                  key={stage.step}
                  whileHover={{ x: 2 }}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-150 cursor-pointer flex items-start gap-3.5 text-left ${
                    isSelected
                      ? 'border-gray-900 dark:border-white bg-gray-50/90 dark:bg-[#121212] shadow-sm'
                      : isPassed
                      ? 'border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A]'
                      : 'border-gray-200/60 dark:border-[#161616] bg-white/60 dark:bg-[#070707] opacity-60'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-black'
                      : isPassed
                      ? 'bg-emerald-50 dark:bg-[#071F15] text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60'
                      : 'bg-gray-100 dark:bg-[#141414] text-gray-400 dark:text-[#666666]'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-semibold text-gray-400 dark:text-[#666666]">{stage.step}</span>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white font-sans">{stage.title}</h4>
                      </div>
                      <span className="text-[11px] font-mono text-gray-500 dark:text-[#737373]">{stage.timestamp}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-600 dark:text-[#A1A1A1] line-clamp-2 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: Technical Terminal Log Viewer */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="bg-[#000000] rounded-xl border border-gray-800 dark:border-[#1F1F1F] shadow-dark-card overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#080808] border-b border-gray-800 dark:border-[#1A1A1A] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-gray-400 font-mono text-[11px] ml-2">deployment-pipeline.log</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Streaming Output
                  </span>
                </div>
              </div>

              {/* Terminal Logs Content */}
              <div className="p-4 sm:p-5 font-mono text-xs text-gray-300 space-y-2.5 max-h-[500px] overflow-y-auto">
                <div className="text-gray-500 dark:text-[#666666]">
                  # SmallCloud Deployment Runner v1.2 (Worker node-in-01)
                </div>
                <div className="text-gray-500 dark:text-[#666666]">
                  # Target: Production · Region: Mumbai (ap-south-1, India)
                </div>
                <div className="h-2" />

                {stages.map((st, i) => (
                  <motion.div
                    key={st.step}
                    initial={false}
                    animate={{
                      opacity: activeStage >= i ? 1 : 0.35,
                    }}
                    className={`p-2.5 rounded transition-all ${
                      activeStage === i
                        ? 'bg-[#141414] border-l-2 border-brand-500 text-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-[#737373] mb-1">
                      <span>[{st.timestamp}] STAGE_{st.step}: {st.title.toUpperCase()}</span>
                      <span className={activeStage >= i ? 'text-emerald-500 font-semibold' : 'text-gray-600'}>
                        {activeStage >= i ? 'PASS' : 'PENDING'}
                      </span>
                    </div>
                    <div className="text-xs break-all text-gray-200">
                      {st.logLine}
                    </div>
                  </motion.div>
                ))}

                <div className="pt-3 border-t border-gray-800 dark:border-[#1A1A1A] flex items-center justify-between text-[11px] text-gray-400 dark:text-[#737373]">
                  <span className="text-emerald-400 font-medium">✓ Total deployment time: 13.80s</span>
                  <span>Exit Code: 0</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
