import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  CheckCircle2,
  GitBranch,
  RefreshCw,
  Copy,
  Check,
  ArrowRight,
} from 'lucide-react';

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'select' | 'configure' | 'deploying' | 'live'>('select');
  const [repoName, setRepoName] = useState('acme/store');
  const [branch] = useState('main');
  const [framework, setFramework] = useState('Next.js');
  const [appName, setAppName] = useState('storefront');
  const [copied, setCopied] = useState(false);
  const [deployProgress, setDeployProgress] = useState(0);

  const handleStartDeploy = () => {
    setStep('deploying');
    setDeployProgress(15);

    setTimeout(() => setDeployProgress(45), 600);
    setTimeout(() => setDeployProgress(75), 1200);
    setTimeout(() => {
      setDeployProgress(100);
      setStep('live');
    }, 1800);
  };

  const resetFlow = () => {
    setStep('select');
    setDeployProgress(0);
  };

  const liveUrl = `https://${appName || 'app'}.smallcloud.si`;

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

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
            className="relative z-10 bg-white dark:bg-[#0A0A0A] rounded-2xl border border-gray-200 dark:border-[#1F1F1F] shadow-2xl w-full max-w-xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded bg-black dark:bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-mono border border-gray-800 dark:border-[#2A2A2A]">
                  SC
                </div>
                <span className="font-semibold text-sm text-gray-950 dark:text-white font-sans">
                  SmallCloud Deployer
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border border-brand-200 dark:border-brand-800">
                  Zero Config
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-200/50 dark:hover:bg-[#1A1A1A] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              
              {/* STEP 1: SELECT REPOSITORY */}
              {step === 'select' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                      Select GitHub Repository
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Choose a repository to deploy. SmallCloud automatically detects runtime and build configurations.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {[
                      { name: 'acme/store', framework: 'Next.js 14', branch: 'main', type: 'E-commerce' },
                      { name: 'acme/inventory-service', framework: 'FastAPI', branch: 'main', type: 'Backend API' },
                      { name: 'acme/marketing-blog', framework: 'Astro', branch: 'main', type: 'Static Site' },
                    ].map((r) => (
                      <div
                        key={r.name}
                        onClick={() => {
                          setRepoName(r.name);
                          setFramework(r.framework.split(' ')[0]);
                          setAppName(r.name.split('/')[1]);
                        }}
                        className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                          repoName === r.name
                            ? 'border-gray-950 dark:border-white bg-gray-50/90 dark:bg-[#141414] ring-1 ring-gray-950 dark:ring-white'
                            : 'border-gray-200 dark:border-[#1F1F1F] hover:border-gray-300 dark:hover:border-gray-700 bg-white dark:bg-[#0A0A0A]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                          <div>
                            <span className="font-mono font-semibold text-gray-900 dark:text-white block">{r.name}</span>
                            <span className="text-[11px] text-gray-500 dark:text-gray-400">default branch: {r.branch}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-2 py-0.5 rounded bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] text-gray-700 dark:text-gray-300 font-mono text-[10px]">
                            {r.framework}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end gap-2 border-t border-gray-100 dark:border-[#1F1F1F]">
                    <button
                      onClick={onClose}
                      className="px-4 py-2 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#141414] cursor-pointer"
                    >
                      Cancel
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep('configure')}
                      className="px-5 py-2 rounded-lg text-xs font-medium bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-black dark:hover:bg-gray-100 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              )}

              {/* STEP 2: CONFIGURE PROJECT */}
              {step === 'configure' && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-950 dark:text-white font-sans">
                      Deployment Configuration
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Confirm build settings for <span className="font-mono text-gray-800 dark:text-gray-200">{repoName}</span>.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 text-xs">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 font-mono uppercase text-[10px]">
                        Subdomain Slug
                      </label>
                      <div className="flex items-center rounded-lg border border-gray-200 dark:border-[#1F1F1F] overflow-hidden bg-white dark:bg-[#0E0E0E]">
                        <input
                          type="text"
                          value={appName}
                          onChange={(e) => setAppName(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                          className="flex-1 px-3 py-2 text-xs font-mono focus:outline-none bg-transparent text-gray-900 dark:text-white"
                        />
                        <span className="px-3 py-2 bg-gray-50 dark:bg-[#141414] text-gray-500 dark:text-gray-400 font-mono text-xs border-l border-gray-200 dark:border-[#1F1F1F]">
                          .smallcloud.si
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 font-mono uppercase text-[10px]">
                          Branch
                        </label>
                        <div className="flex items-center gap-1.5 p-2 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0E0E0E] font-mono text-gray-800 dark:text-gray-200">
                          <GitBranch className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                          <span>{branch}</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 font-mono uppercase text-[10px]">
                          Framework
                        </label>
                        <div className="p-2 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 font-mono flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>{framework} (Auto)</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 font-mono uppercase text-[10px]">
                        Datacenter Region
                      </label>
                      <div className="p-2.5 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0E0E0E] font-mono text-[11px] text-gray-700 dark:text-gray-300 flex items-center justify-between">
                        <span>ap-south-1 (Mumbai, India)</span>
                        <span className="text-emerald-500 font-semibold text-[10px]">Primary</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1 font-mono uppercase text-[10px]">
                        Environment Variables (Optional)
                      </label>
                      <div className="p-2.5 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0E0E0E] font-mono text-[11px] text-gray-500 dark:text-gray-400">
                        NODE_ENV=production (Encrypted at rest with AES-256)
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center border-t border-gray-100 dark:border-[#1F1F1F]">
                    <button
                      onClick={() => setStep('select')}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#141414] cursor-pointer"
                    >
                      Back
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleStartDeploy}
                      className="px-5 py-2.5 rounded-lg text-xs font-medium bg-brand-500 text-white hover:bg-brand-600 flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>Deploy to SmallCloud</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.button>
                  </div>
                </div>
              )}

              {/* STEP 3: DEPLOYING / STREAMING LOGS */}
              {step === 'deploying' && (
                <div className="space-y-4 py-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-gray-950 dark:text-white font-sans">
                        Building & Provisioning Container...
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Executing build steps in sandboxed ap-south-1 execution runner.
                      </p>
                    </div>
                    <RefreshCw className="w-4 h-4 animate-spin text-brand-500" />
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-100 dark:bg-[#1A1A1A] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      className="bg-brand-500 h-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${deployProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Streaming terminal simulation */}
                  <div className="p-3.5 rounded-xl bg-[#000000] border border-gray-800 dark:border-[#1F1F1F] text-[11px] font-mono text-gray-300 space-y-1.5 max-h-48 overflow-y-auto">
                    <div className="text-gray-500">[00:01] Pulling source from github.com/{repoName}...</div>
                    <div className="text-gray-400">[00:03] Manifest analyzed: {framework} detected</div>
                    <div className="text-gray-300">[00:07] Running production bundle compiler...</div>
                    {deployProgress >= 45 && (
                      <div className="text-emerald-400">[00:11] Build succeeded. Artifact size: 42.1 MB</div>
                    )}
                    {deployProgress >= 75 && (
                      <div className="text-blue-400">[00:13] Provisioning isolated container namespace & SSL cert...</div>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 4: APPLICATION LIVE */}
              {step === 'live' && (
                <div className="space-y-5 text-center py-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-950 dark:text-white font-sans">
                      Application is Live!
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Your application has been deployed to Indian cloud infrastructure (Mumbai) with active TLS 1.3 encryption.
                    </p>
                  </div>

                  {/* Live URL Card */}
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0E0E0E] border border-gray-200 dark:border-[#1F1F1F] max-w-md mx-auto text-left">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-gray-500 dark:text-gray-400 uppercase text-[10px]">Production URL</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        HTTPS 200 OK
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-2">
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline truncate"
                      >
                        {liveUrl}
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(liveUrl);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                        className="p-1.5 rounded hover:bg-gray-200/60 dark:hover:bg-[#1A1A1A] text-gray-500 dark:text-gray-400 cursor-pointer"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-center gap-3">
                    <button
                      onClick={resetFlow}
                      className="px-4 py-2 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#141414] cursor-pointer"
                    >
                      Deploy another app
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClose}
                      className="px-5 py-2 rounded-lg text-xs font-medium bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-black dark:hover:bg-gray-100 cursor-pointer"
                    >
                      Done
                    </motion.button>
                  </div>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
