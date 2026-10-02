import React from 'react';
import { Briefcase, UserCheck, Building2, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { AUDIENCES } from '../data/mockData';

export const Audience: React.FC = () => {
  const iconList = [
    <Briefcase className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <UserCheck className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <Building2 className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
    <Code2 className="w-5 h-5 text-gray-800 dark:text-gray-200" />,
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] dark:bg-[#000000] border-b border-gray-200 dark:border-[#1F1F1F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#141414] border border-transparent dark:border-[#222222] px-2.5 py-1 rounded inline-block"
          >
            Target Audience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans"
          >
            Who is SmallCloud for?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A1A1A1]"
          >
            Purpose-built for teams and individuals who want reliable production hosting without hiring dedicated DevOps engineers.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
              className="p-6 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] shadow-subtle hover:border-gray-300 dark:hover:border-[#383838] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] flex items-center justify-center mb-5">
                  {iconList[idx]}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed mb-4">
                  "{item.description}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-[#1A1A1A] text-xs font-mono text-gray-500 dark:text-[#737373]">
                <span className="text-gray-400 dark:text-[#666666] block text-[10px] uppercase font-sans mb-0.5">Common use case</span>
                <span className="text-gray-700 dark:text-gray-300">{item.example}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
