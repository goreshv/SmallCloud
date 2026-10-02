import React from 'react';
import { Shield, Lock, KeyRound, UserCheck, RefreshCw, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export const Security: React.FC = () => {
  const pillars = [
    {
      title: 'Application Isolation',
      description: 'Applications execute in separate, isolated Linux container namespaces with strict kernel-level process and memory boundaries. No cross-tenant execution leaks.',
      icon: Shield,
    },
    {
      title: 'Automatic HTTPS & TLS 1.3',
      description: 'Every endpoint receives automated TLS certificates generated and renewed via Let\'s Encrypt with strict HSTS policies by default.',
      icon: Lock,
    },
    {
      title: 'Encrypted Environment Variables',
      description: 'Secrets and API tokens are encrypted at rest using AES-256 and only decrypted into process memory during build and runtime executions.',
      icon: KeyRound,
    },
    {
      title: 'Granular Access Controls',
      description: 'Authorize only the specific GitHub repositories you intend to deploy. GitHub tokens are scoped and stored securely.',
      icon: UserCheck,
    },
    {
      title: 'Ephemeral Build Workflows',
      description: 'Build steps take place inside temporary, single-use sandboxes that are wiped immediately after artifacts are created.',
      icon: RefreshCw,
    },
    {
      title: 'Resource Limits & Protection',
      description: 'Strict memory caps and CPU throttling prevent runaway scripts from degrading adjacent application services.',
      icon: Cpu,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#000000] border-b border-gray-200 dark:border-[#1F1F1F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#141414] border border-transparent dark:border-[#222222] px-2.5 py-1 rounded inline-block"
          >
            Security Architecture
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans"
          >
            Your applications run in isolated environments.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A1A1A1] leading-relaxed"
          >
            Infrastructure hygiene built on container sandboxing, automated cryptographic certificates, and zero-residual build workers.
          </motion.p>
        </div>

        {/* 6 Security Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="p-6 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#383838] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] flex items-center justify-center mb-4 text-gray-800 dark:text-gray-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-950 dark:text-white font-sans mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Fact-based Security Guarantee Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mt-12 p-5 rounded-xl bg-gray-50 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-gray-600 dark:text-gray-300"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Infrastructure hosted in verified Indian cloud datacenters (Mumbai & Hyderabad, India).</span>
          </div>
          <span className="text-gray-400 dark:text-[#737373]">Data governed by India Digital Personal Data Protection (DPDP) standards</span>
        </motion.div>

      </div>
    </section>
  );
};
