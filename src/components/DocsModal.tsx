import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDeployModal: () => void;
}

export const DocsModal: React.FC<DocsModalProps> = ({ isOpen, onClose, onOpenDeployModal }) => {
  const [activeDocTab, setActiveDocTab] = useState<'quickstart' | 'frameworks' | 'domains' | 'env' | 'cli'>('quickstart');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="relative z-10 bg-white dark:bg-[#0A0A0A] rounded-2xl border border-gray-200 dark:border-[#1F1F1F] shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                <div>
                  <span className="font-semibold text-sm text-gray-950 dark:text-white font-sans block">
                    SmallCloud Documentation
                  </span>
                  <span className="text-[11px] text-gray-500 dark:text-gray-400 font-mono">
                    Architecture, deployment guidelines & Indian edge network
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-[#1A1A1A] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="px-6 py-2 bg-white dark:bg-[#0A0A0A] border-b border-gray-100 dark:border-[#1F1F1F] flex items-center gap-2 overflow-x-auto text-xs font-mono">
              {[
                { id: 'quickstart', label: '1. Quickstart' },
                { id: 'frameworks', label: '2. Supported Runtimes' },
                { id: 'domains', label: '3. Custom Domains' },
                { id: 'env', label: '4. Environment Variables' },
                { id: 'cli', label: '5. Git & Webhooks' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveDocTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    activeDocTab === tab.id
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#141414]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-700 dark:text-gray-300">
              
              {/* TAB 1: QUICKSTART */}
              {activeDocTab === 'quickstart' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                      Deploying from GitHub
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                      SmallCloud takes code directly from your GitHub repository and runs it in an isolated container in Mumbai (ap-south-1). You never have to manually provision virtual machines or configure reverse proxies.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50/50 dark:bg-[#0E0E0E]">
                      <span className="font-mono text-xs font-bold text-gray-900 dark:text-white block mb-1">
                        Step 1: Install SmallCloud GitHub App
                      </span>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Grant SmallCloud permission to access your repository. You can choose access to all current and future repositories or limit access to specific project repositories.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50/50 dark:bg-[#0E0E0E]">
                      <span className="font-mono text-xs font-bold text-gray-900 dark:text-white block mb-1">
                        Step 2: Choose Repository & Branch
                      </span>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Select the repository from your dashboard dropdown. SmallCloud parses your repo manifest to determine start commands, exposed ports, and build dependencies.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 dark:border-[#1F1F1F] bg-gray-50/50 dark:bg-[#0E0E0E]">
                      <span className="font-mono text-xs font-bold text-gray-900 dark:text-white block mb-1">
                        Step 3: Access your Live URL
                      </span>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Once the build completes, SmallCloud provisions a sub-second DNS route and auto-generates an SSL certificate from Let's Encrypt. Your app is live at <code className="bg-gray-200/80 dark:bg-[#1A1A1A] px-1 py-0.5 rounded text-gray-800 dark:text-gray-200 font-mono text-[11px]">https://your-app.smallcloud.si</code>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FRAMEWORKS */}
              {activeDocTab === 'frameworks' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                      Supported Runtimes & Frameworks
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      SmallCloud provides native zero-configuration detection for the following frameworks:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { name: 'Next.js', detect: 'next in package.json', output: 'Node.js standalone server' },
                      { name: 'FastAPI / Flask', detect: 'requirements.txt or pyproject.toml', output: 'uvicorn main:app --port 8000' },
                      { name: 'Astro', detect: 'astro in package.json', output: 'Static edge distribution' },
                      { name: 'Vite / React', detect: 'vite in package.json', output: 'Static edge routing' },
                      { name: 'Node.js / Express', detect: 'package.json with start script', output: 'node server.js' },
                      { name: 'Go', detect: 'go.mod', output: './app binary execution' },
                    ].map((item) => (
                      <div key={item.name} className="p-3 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50/50 dark:bg-[#0E0E0E]">
                        <div className="font-bold text-gray-900 dark:text-white font-sans mb-1">{item.name}</div>
                        <div className="font-mono text-[11px] text-gray-500 dark:text-gray-400 space-y-0.5">
                          <div>Trigger: {item.detect}</div>
                          <div>Command: {item.output}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: DOMAINS */}
              {activeDocTab === 'domains' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                      Custom Domain Configuration
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Connect your brand's existing domain using standard DNS records.
                    </p>
                  </div>

                  <div className="border border-gray-200 dark:border-[#1F1F1F] rounded-xl overflow-hidden text-xs font-mono">
                    <table className="w-full text-left">
                      <thead className="bg-gray-100 dark:bg-[#121212] text-gray-700 dark:text-gray-300">
                        <tr>
                          <th className="p-3">Record Type</th>
                          <th className="p-3">Host / Name</th>
                          <th className="p-3">Points To</th>
                          <th className="p-3">TTL</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0A0A0A] text-gray-600 dark:text-gray-300">
                        <tr>
                          <td className="p-3 font-bold text-gray-900 dark:text-white">CNAME</td>
                          <td className="p-3">app (or subdomain)</td>
                          <td className="p-3 text-brand-600 dark:text-brand-400">cname.smallcloud.si</td>
                          <td className="p-3">Auto / 300s</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-gray-900 dark:text-white">A</td>
                          <td className="p-3">@ (apex domain)</td>
                          <td className="p-3 text-brand-600 dark:text-brand-400">103.181.156.40</td>
                          <td className="p-3">Auto / 300s</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      Once DNS records resolve to SmallCloud, our Indian edge certificate manager issues an SSL certificate automatically within 60 seconds.
                    </span>
                  </div>
                </div>
              )}

              {/* TAB 4: ENVIRONMENT VARIABLES */}
              {activeDocTab === 'env' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                      Environment Variables & Secrets
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Keep credentials out of version control. SmallCloud injects environment variables securely into your container environment.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#000000] border border-gray-800 dark:border-[#1F1F1F] text-xs font-mono text-gray-300">
                    <div className="text-gray-500 mb-2"># Sample production environment variables</div>
                    <div className="text-brand-400">DATABASE_URL=<span className="text-gray-300">postgres://user:pass@mumbai.db:5432/production</span></div>
                    <div className="text-brand-400">SESSION_SECRET=<span className="text-gray-300">k94a28f810df04918e104</span></div>
                    <div className="text-brand-400">PORT=<span className="text-gray-300">3000</span></div>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Variables are encrypted at rest with AES-256 and never logged or written to persistent disk images.
                  </p>
                </div>
              )}

              {/* TAB 5: GIT & WEBHOOKS */}
              {activeDocTab === 'cli' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                      Continuous Deployment on Git Push
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Every commit pushed to your designated branch triggers a zero-downtime deployment.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#000000] border border-gray-800 dark:border-[#1F1F1F] text-xs font-mono space-y-2">
                    <div className="text-gray-500 dark:text-gray-400">$ git add .</div>
                    <div className="text-gray-500 dark:text-gray-400">$ git commit -m "feat: updated user settings"</div>
                    <div className="text-gray-900 dark:text-white font-bold">$ git push origin main</div>
                    <div className="text-emerald-500 pt-1">
                      → Webhook triggered: SmallCloud building commit 4a9f10c in ap-south-1...
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between text-xs">
              <span className="text-gray-500 dark:text-gray-400 font-mono">SmallCloud Docs • ap-south-1</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-[#141414] cursor-pointer"
                >
                  Close
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onOpenDeployModal();
                  }}
                  className="px-4 py-1.5 rounded-lg bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-black dark:hover:bg-gray-100 font-medium cursor-pointer"
                >
                  Deploy your first app
                </motion.button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
