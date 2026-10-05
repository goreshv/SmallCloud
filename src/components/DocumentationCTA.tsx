import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Check, Terminal } from 'lucide-react';
import { Link } from '../router';

interface DocumentationCTAProps {
  onOpenDeployModal: () => void;
  onOpenDocsModal: () => void;
}

export const DocumentationCTA: React.FC<DocumentationCTAProps> = ({
  onOpenDeployModal,
  onOpenDocsModal,
}) => {
  return (
    <section className="py-24 bg-white dark:bg-[#000000] border-b border-gray-200 dark:border-[#1F1F1F] transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-2xl bg-[#0F1117] dark:bg-[#0A0A0A] border border-gray-800 dark:border-[#1F1F1F] text-white relative overflow-hidden text-center sm:text-left shadow-2xl"
        >
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-medium text-brand-400 bg-brand-950/80 border border-brand-800/80 px-2.5 py-1 rounded inline-block mb-3">
                Zero Setup Cost
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-white">
                Ready to deploy your application?
              </h2>
              <p className="mt-3 text-base text-gray-300 leading-relaxed">
                Connect your repository and get your first application running on high-speed Indian edge servers in less than two minutes.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 justify-center sm:justify-start">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Automatic HTTPS
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" /> Hosted in ap-south-1
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenDeployModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-950 hover:bg-gray-100 font-medium text-sm transition-all shadow-sm cursor-pointer"
              >
                <span>Deploy your first app</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <Link
                to="/docs"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 dark:bg-[#141414] border border-gray-800 dark:border-[#262626] text-gray-300 hover:text-white hover:bg-gray-800 dark:hover:bg-[#1F1F1F] font-medium text-sm transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span>User Guide</span>
              </Link>

              <Link
                to="/cli"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900/60 dark:bg-[#101010] border border-gray-800 dark:border-[#262626] text-gray-300 hover:text-white hover:bg-gray-800 dark:hover:bg-[#1F1F1F] font-medium text-xs font-mono transition-colors cursor-pointer"
              >
                <Terminal className="w-3.5 h-3.5 text-brand-400" />
                <span>smallcloud CLI</span>
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
