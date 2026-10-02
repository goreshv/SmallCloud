import React from 'react';
import { Check, ShieldCheck, Zap, GitBranch, Users, LockKeyhole } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHY_ITEMS } from '../data/mockData';

export const WhySmallCloud: React.FC = () => {
  const icons = [
    <Zap className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <GitBranch className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <ShieldCheck className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <Check className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <Users className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <LockKeyhole className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
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
            Design Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans"
          >
            Why SmallCloud?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A1A1A1]"
          >
            No exaggerated marketing slogans. Practical, reliable infrastructure engineered for focused shipping.
          </motion.p>
        </div>

        {/* 6 Practical Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.35 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
              className="p-6 rounded-xl border border-gray-200/90 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] hover:border-gray-300 dark:hover:border-[#383838] transition-colors"
            >
              <div className="w-9 h-9 rounded-lg bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] flex items-center justify-center mb-4">
                {icons[idx]}
              </div>
              <h3 className="text-lg font-semibold text-gray-950 dark:text-white font-sans mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Honest contrast table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 bg-gray-50 dark:bg-[#0A0A0A] rounded-2xl border border-gray-200 dark:border-[#1F1F1F] p-6 sm:p-8"
        >
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
            The practical comparison
          </h3>
          <p className="text-xs text-gray-500 dark:text-[#737373] mb-6 font-mono">
            How SmallCloud fits into the deployment landscape:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-[#1F1F1F] text-gray-500 dark:text-[#737373]">
                  <th className="py-2.5 px-3 font-semibold text-gray-700 dark:text-gray-300 font-sans">Deployment Workflow</th>
                  <th className="py-2.5 px-3 font-semibold text-brand-600 dark:text-brand-400 font-sans">SmallCloud</th>
                  <th className="py-2.5 px-3 font-normal text-gray-500 dark:text-[#737373]">Manual VPS (Nginx + Ubuntu)</th>
                  <th className="py-2.5 px-3 font-normal text-gray-500 dark:text-[#737373]">Big Enterprise Hyperscalers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/70 dark:divide-[#1A1A1A] text-gray-700 dark:text-gray-300">
                <tr className="hover:bg-gray-100/50 dark:hover:bg-[#111111] transition-colors">
                  <td className="py-3 px-3 font-sans font-medium text-gray-900 dark:text-white">Setup time</td>
                  <td className="py-3 px-3 text-brand-600 dark:text-brand-400 font-semibold">2 minutes (git push)</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Hours of SSH, firewall, user setups</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Hours configuring VPCs, IAM roles, ECS</td>
                </tr>
                <tr className="hover:bg-gray-100/50 dark:hover:bg-[#111111] transition-colors">
                  <td className="py-3 px-3 font-sans font-medium text-gray-900 dark:text-white">SSL & HTTPS</td>
                  <td className="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">Automatic TLS 1.3</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Manual Certbot cronjobs & renew failure risks</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Cert Manager + Load Balancer fees</td>
                </tr>
                <tr className="hover:bg-gray-100/50 dark:hover:bg-[#111111] transition-colors">
                  <td className="py-3 px-3 font-sans font-medium text-gray-900 dark:text-white">Pricing predictability</td>
                  <td className="py-3 px-3 text-brand-600 dark:text-brand-400 font-semibold">Clear flat plans</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Predictable VPS fee, but high maintenance cost</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Unpredictable bandwidth & egress surcharges</td>
                </tr>
                <tr className="hover:bg-gray-100/50 dark:hover:bg-[#111111] transition-colors">
                  <td className="py-3 px-3 font-sans font-medium text-gray-900 dark:text-white">Target user</td>
                  <td className="py-3 px-3 text-brand-600 dark:text-brand-400 font-semibold">Developers, startups, agencies</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Linux system administrators</td>
                  <td className="py-3 px-3 text-gray-600 dark:text-[#888888]">Dedicated enterprise DevOps departments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
