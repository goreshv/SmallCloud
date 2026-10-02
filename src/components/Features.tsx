import React from 'react';
import {
  Github,
  Wrench,
  Lock,
  Globe,
  KeyRound,
  FileCode2,
  RefreshCw,
  Box,
  LayoutDashboard,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FEATURES } from '../data/mockData';

export const Features: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    'feat-github': <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    'feat-builds': <Wrench className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    'feat-https': <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    'feat-domains': <Globe className="w-5 h-5 text-brand-600 dark:text-brand-400" />,
    'feat-env': <KeyRound className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    'feat-logs': <FileCode2 className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    'feat-redeploy': <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    'feat-isolation': <Box className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    'feat-dashboard': <LayoutDashboard className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
  };

  return (
    <section id="features" className="py-24 bg-white dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#141414] border border-transparent dark:border-[#222222] px-2.5 py-1 rounded inline-block"
          >
            Platform Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans"
          >
            Engineered for developers who value simplicity.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A1A1A1]"
          >
            Everything required to deploy, run, and scale web applications, with zero unnecessary configuration complexity.
          </motion.p>
        </div>

        {/* 9 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, idx) => {
            const icon = iconMap[feature.id] || <CheckCircle2 className="w-5 h-5 text-gray-800" />;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ y: -4, transition: { duration: 0.15 } }}
                className="group p-6 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#383838] hover:shadow-card transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] flex items-center justify-center transition-transform group-hover:scale-105">
                      {icon}
                    </div>
                    <span className="text-[11px] font-mono text-gray-500 dark:text-[#888888] bg-gray-50 dark:bg-[#121212] border border-gray-200/80 dark:border-[#222222] px-2 py-0.5 rounded">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-gray-950 dark:text-white font-sans mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Sub-detail indicator */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-[#1A1A1A] flex items-center justify-between text-xs text-gray-400 dark:text-[#737373] font-mono">
                  <span>Standard on all plans</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
