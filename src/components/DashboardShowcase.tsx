import React, { useState } from 'react';
import {
  LayoutDashboard,
  FolderGit2,
  GitCommit,
  Globe,
  KeyRound,
  Settings,
  ExternalLink,
  CheckCircle2,
  Clock,
  Search,
  Eye,
  EyeOff,
  Cpu,
  HardDrive,
  Activity,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEMO_PROJECTS } from '../data/mockData';

export const DashboardShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'deployments' | 'domains' | 'env' | 'settings'>('projects');
  const [showSecrets, setShowSecrets] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderGit2, count: '3' },
    { id: 'deployments', label: 'Deployments', icon: GitCommit },
    { id: 'domains', label: 'Domains', icon: Globe, count: '2' },
    { id: 'env', label: 'Environment Variables', icon: KeyRound },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <section id="dashboard-showcase" className="py-24 bg-white dark:bg-[#000000] text-gray-900 dark:text-gray-100 relative overflow-hidden transition-colors duration-200">
      {/* Developer grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-[#141414] border border-gray-200 dark:border-[#222222] text-xs font-mono text-gray-700 dark:text-gray-300 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            Product Preview · Interactive Console Demo
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans"
          >
            A clean control plane for all your apps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-base text-gray-600 dark:text-[#A1A1A1]"
          >
            Monitor deployments, inspect logs, connect domains, and configure environment variables from one unified developer interface.
          </motion.p>
        </div>

        {/* Realistic Dashboard Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-white dark:bg-[#000000] rounded-2xl border border-gray-200 dark:border-[#1F1F1F] shadow-2xl dark:shadow-dark-card overflow-hidden"
        >
          
          {/* Top Bar / App Header */}
          <div className="px-5 py-3.5 bg-gray-50 dark:bg-[#050505] border-b border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white font-mono">
                <span className="w-5 h-5 rounded bg-brand-600 flex items-center justify-center text-[10px] text-white">SC</span>
                <span>SmallCloud Console</span>
              </div>
              <span className="text-gray-400 dark:text-gray-600">/</span>
              <span className="text-gray-600 dark:text-gray-400 font-mono">demo-workspace</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-gray-200 dark:bg-[#141414] text-gray-700 dark:text-gray-300 font-mono border border-gray-300 dark:border-[#222222]">
                Demo Workspace
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:flex items-center gap-1.5 text-gray-600 dark:text-gray-400 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Cluster: ap-south-1 healthy (Mumbai)
              </span>
              <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-[#161616] border border-gray-300 dark:border-[#262626] flex items-center justify-center text-xs font-mono text-gray-700 dark:text-gray-300">
                SC
              </div>
            </div>
          </div>

          {/* Dashboard Inner Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px]">
            
            {/* Sidebar */}
            <aside className="md:col-span-3 border-r border-gray-200 dark:border-[#1F1F1F] bg-[#F9FAFB] dark:bg-[#050505] p-3 sm:p-4 space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-[#666666] px-3 py-2 font-semibold">
                Sidebar Navigation
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as any)}
                    className={`relative w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'text-gray-900 dark:text-white font-semibold'
                        : 'text-gray-600 dark:text-[#A1A1A1] hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#121212]'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-dashboard-nav"
                        className="absolute inset-0 bg-gray-200/80 dark:bg-[#181818] rounded-lg -z-0 border border-gray-300/60 dark:border-[#282828]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <div className="flex items-center gap-2.5 relative z-10">
                      <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span>{item.label}</span>
                    </div>
                    {item.count && (
                      <span className="relative z-10 px-1.5 py-0.2 rounded text-[10px] font-mono bg-white dark:bg-[#101010] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#222222]">
                        {item.count}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-6 mt-6 border-t border-gray-200 dark:border-[#1A1A1A] px-3">
                <div className="text-[10px] font-mono text-gray-500 dark:text-[#737373] uppercase tracking-wider mb-2">
                  Isolated Resources
                </div>
                <div className="space-y-2 text-xs font-mono text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-gray-500" /> CPU vCores
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">0.4 / 4.0</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-[#141414] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '10%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="bg-brand-500 h-full"
                    />
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <span className="flex items-center gap-1.5">
                      <HardDrive className="w-3 h-3 text-gray-500" /> Memory
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">1.2 GB / 8 GB</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-[#141414] h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '15%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="bg-emerald-500 h-full"
                    />
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area with AnimatePresence */}
            <main className="md:col-span-9 p-5 sm:p-6 bg-white dark:bg-[#0A0A0A]">
              
              <AnimatePresence mode="wait">
                {/* TAB 0: OVERVIEW */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="pb-4 border-b border-gray-100 dark:border-[#1F1F1F]">
                      <h3 className="text-lg font-semibold text-gray-950 dark:text-white">Cluster Overview</h3>
                      <p className="text-xs text-gray-500 dark:text-[#A1A1A1] mt-0.5">
                        Healthy Indian cloud cluster status & active application services
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0F0F0F] border border-gray-200 dark:border-[#1F1F1F]">
                        <div className="text-xs font-mono text-gray-500 dark:text-[#888888] mb-1 flex items-center justify-between">
                          <span>Active Projects</span>
                          <FolderGit2 className="w-4 h-4 text-brand-500" />
                        </div>
                        <div className="text-2xl font-bold text-gray-950 dark:text-white font-mono">3 / 15</div>
                        <span className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 block">100% healthy</span>
                      </div>

                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0F0F0F] border border-gray-200 dark:border-[#1F1F1F]">
                        <div className="text-xs font-mono text-gray-500 dark:text-[#888888] mb-1 flex items-center justify-between">
                          <span>Cluster Uptime</span>
                          <Activity className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="text-2xl font-bold text-gray-950 dark:text-white font-mono">99.98%</div>
                        <span className="text-[11px] text-gray-500 dark:text-[#737373] mt-1 block">Mumbai (ap-south-1)</span>
                      </div>

                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0F0F0F] border border-gray-200 dark:border-[#1F1F1F]">
                        <div className="text-xs font-mono text-gray-500 dark:text-[#888888] mb-1 flex items-center justify-between">
                          <span>Average Build Time</span>
                          <Clock className="w-4 h-4 text-purple-500" />
                        </div>
                        <div className="text-2xl font-bold text-gray-950 dark:text-white font-mono">11.4s</div>
                        <span className="text-[11px] text-gray-500 dark:text-[#737373] mt-1 block">Fast asset compilation</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gray-50/70 dark:bg-[#0F0F0F] border border-gray-200 dark:border-[#1F1F1F]">
                      <h4 className="text-xs font-mono uppercase text-gray-500 dark:text-[#888888] font-semibold mb-3">Quick Navigation</h4>
                      <p className="text-xs text-gray-600 dark:text-[#A1A1A1] leading-relaxed mb-3">
                        Select <button onClick={() => setActiveTab('projects')} className="text-brand-600 dark:text-brand-400 underline cursor-pointer">Projects</button> to view live demo deployments, or check <button onClick={() => setActiveTab('domains')} className="text-brand-600 dark:text-brand-400 underline cursor-pointer">Domains</button> for custom domain routing.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* TAB 1: PROJECTS */}
                {activeTab === 'projects' && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-[#1F1F1F]">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-950 dark:text-white">My Projects</h3>
                        <p className="text-xs text-gray-500 dark:text-[#A1A1A1] mt-0.5">
                          Demo applications deployed on SmallCloud isolated infrastructure.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="relative text-xs">
                          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            placeholder="Filter projects..."
                            readOnly
                            value=""
                            className="bg-gray-50 dark:bg-[#121212] border border-gray-200 dark:border-[#222222] text-gray-700 dark:text-gray-300 text-xs rounded-lg pl-8 pr-3 py-1.5 w-36 sm:w-48 focus:outline-none"
                          />
                        </div>
                        <span className="text-[11px] font-mono px-2 py-1 bg-gray-100 dark:bg-[#141414] text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-[#262626]">
                          3 Deployed
                        </span>
                      </div>
                    </div>

                    {/* Projects List */}
                    <div className="space-y-3.5">
                      {DEMO_PROJECTS.map((proj) => (
                        <motion.div
                          key={proj.id}
                          whileHover={{ y: -2 }}
                          className="p-4 sm:p-5 rounded-xl bg-gray-50/70 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#1F1F1F] hover:border-gray-300 dark:hover:border-[#333333] transition-colors text-xs"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#161616] border border-gray-200 dark:border-[#262626] flex items-center justify-center text-sm font-semibold text-gray-900 dark:text-white">
                                {proj.name[0]}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-bold text-gray-950 dark:text-white font-sans">{proj.name}</span>
                                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-[#071F15] border border-emerald-200/80 dark:border-emerald-800/60 px-2 py-0.2 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Production
                                  </span>
                                </div>
                                <span className="text-gray-500 dark:text-[#888888] font-mono text-[11px] block mt-0.5">
                                  {proj.repo} · branch: <span className="text-gray-800 dark:text-gray-300">{proj.branch}</span>
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 sm:self-center">
                              <span className="px-2 py-0.5 rounded bg-white dark:bg-[#161616] text-gray-700 dark:text-gray-300 font-mono text-[11px] border border-gray-200 dark:border-[#262626]">
                                {proj.framework}
                              </span>
                              <a
                                href={proj.url}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.preventDefault()}
                                className="flex items-center gap-1 px-2.5 py-1 rounded bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800/80 hover:bg-brand-100 transition-colors text-xs font-mono"
                              >
                                <span>Visit</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>

                          {/* Project meta info */}
                          <div className="pt-3 border-t border-gray-200/80 dark:border-[#1A1A1A] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-500 dark:text-[#888888]">
                            <div className="flex items-center gap-2">
                              <span className="text-brand-600 dark:text-brand-400 underline">{proj.url}</span>
                              {proj.customDomain && (
                                <>
                                  <span className="text-gray-300 dark:text-gray-700">|</span>
                                  <span className="text-gray-700 dark:text-gray-300 flex items-center gap-1">
                                    <Globe className="w-3 h-3 text-gray-400" />
                                    {proj.customDomain}
                                  </span>
                                </>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 dark:text-[#888888]">
                              <span className="flex items-center gap-1">
                                <GitCommit className="w-3 h-3 text-gray-400" />
                                {proj.commit}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                Last deployed: {proj.lastDeployed}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: DEPLOYMENTS */}
                {activeTab === 'deployments' && (
                  <motion.div
                    key="deployments"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-[#1F1F1F]">
                      <div>
                        <h3 className="text-base font-semibold text-gray-950 dark:text-white">Deployment History</h3>
                        <p className="text-xs text-gray-500 dark:text-[#A1A1A1]">Atomic build and release audit log</p>
                      </div>
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> All systems nominal
                      </span>
                    </div>

                    <div className="space-y-2.5 text-xs font-mono">
                      <div className="p-3 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-gray-900 dark:text-white font-medium">Storefront</span>
                          <span className="text-gray-500 dark:text-gray-400">commit c4f9a12</span>
                          <span className="text-gray-400 dark:text-[#737373] hidden sm:inline">"feat: optimize checkout"</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                          <span>14.2s build</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">LIVE</span>
                        </div>
                      </div>

                      <div className="p-3 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-gray-900 dark:text-white font-medium">Inventory API</span>
                          <span className="text-gray-500 dark:text-gray-400">commit 8b21ef0</span>
                          <span className="text-gray-400 dark:text-[#737373] hidden sm:inline">"perf: async pool"</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                          <span>8.9s build</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">LIVE</span>
                        </div>
                      </div>

                      <div className="p-3 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-gray-900 dark:text-white font-medium">Company Blog</span>
                          <span className="text-gray-500 dark:text-gray-400">commit f93d4a1</span>
                          <span className="text-gray-400 dark:text-[#737373] hidden sm:inline">"content: roadmap"</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                          <span>5.1s build</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">LIVE</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: DOMAINS */}
                {activeTab === 'domains' && (
                  <motion.div
                    key="domains"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-[#1F1F1F]">
                      <div>
                        <h3 className="text-base font-semibold text-gray-950 dark:text-white">Custom Domains</h3>
                        <p className="text-xs text-gray-500 dark:text-[#A1A1A1]">Manage external DNS mapping and SSL certificates</p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-brand-50 dark:bg-[#141414] text-brand-700 dark:text-brand-400 text-xs font-mono border border-brand-200 dark:border-[#262626]">
                        2 Configured
                      </span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="p-4 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <div>
                          <div className="font-mono text-sm font-semibold text-gray-900 dark:text-white">app.acme.com</div>
                          <div className="text-gray-500 dark:text-[#888888] font-mono text-[11px] mt-0.5">
                            Target: storefront.smallcloud.si · CNAME verified
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-[#071F15] text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 text-[11px] font-mono">
                            ✓ TLS 1.3 Active
                          </span>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <div>
                          <div className="font-mono text-sm font-semibold text-gray-900 dark:text-white">api.acme.com</div>
                          <div className="text-gray-500 dark:text-[#888888] font-mono text-[11px] mt-0.5">
                            Target: inventory.smallcloud.si · CNAME verified
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-[#071F15] text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 text-[11px] font-mono">
                            ✓ TLS 1.3 Active
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 4: ENVIRONMENT VARIABLES */}
                {activeTab === 'env' && (
                  <motion.div
                    key="env"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100 dark:border-[#1F1F1F]">
                      <div>
                        <h3 className="text-base font-semibold text-gray-950 dark:text-white">Environment Variables</h3>
                        <p className="text-xs text-gray-500 dark:text-[#A1A1A1]">Encrypted secrets injected securely at build and runtime</p>
                      </div>
                      <button
                        onClick={() => setShowSecrets(!showSecrets)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gray-100 dark:bg-[#141414] text-gray-700 dark:text-gray-300 text-xs font-mono hover:bg-gray-200 dark:hover:bg-[#1A1A1A] border border-gray-200 dark:border-[#262626] cursor-pointer"
                      >
                        {showSecrets ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        <span>{showSecrets ? 'Hide Values' : 'Reveal Values'}</span>
                      </button>
                    </div>

                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-3 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <span className="text-brand-600 dark:text-brand-400 font-semibold">DATABASE_URL</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {showSecrets ? 'postgresql://admin:k9A8q@postgres.internal:5432/db' : '••••••••••••••••••••••••••••••••••••••••'}
                        </span>
                        <span className="text-[10px] text-gray-400 dark:text-[#737373]">Production</span>
                      </div>

                      <div className="p-3 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <span className="text-brand-600 dark:text-brand-400 font-semibold">STRIPE_SECRET_KEY</span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {showSecrets ? 'sk_live_51M08qZ91x4...' : '••••••••••••••••••••••••••••••••••••••••'}
                        </span>
                        <span className="text-[10px] text-gray-400 dark:text-[#737373]">Production</span>
                      </div>

                      <div className="p-3 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F] flex items-center justify-between">
                        <span className="text-brand-600 dark:text-brand-400 font-semibold">NODE_ENV</span>
                        <span className="text-gray-800 dark:text-gray-200">production</span>
                        <span className="text-[10px] text-gray-400 dark:text-[#737373]">System</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 5: SETTINGS */}
                {activeTab === 'settings' && (
                  <motion.div
                    key="settings"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 text-xs"
                  >
                    <div className="pb-3 border-b border-gray-100 dark:border-[#1F1F1F]">
                      <h3 className="text-base font-semibold text-gray-950 dark:text-white">Project Settings</h3>
                      <p className="text-xs text-gray-500 dark:text-[#A1A1A1]">Runtime and deployment configuration</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F]">
                        <label className="text-gray-500 dark:text-[#888888] block mb-1">Compute Region</label>
                        <div className="text-gray-900 dark:text-white font-mono font-medium">Asia South (Mumbai, India)</div>
                        <span className="text-[11px] text-gray-500 dark:text-[#737373] mt-1 block">Sub-15ms latency across India & South Asia</span>
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-[#0F0F0F] rounded-lg border border-gray-200 dark:border-[#1F1F1F]">
                        <label className="text-gray-500 dark:text-[#888888] block mb-1">Automatic Redeployments</label>
                        <div className="text-emerald-600 dark:text-emerald-400 font-mono font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          Enabled on git push (main)
                        </div>
                        <span className="text-[11px] text-gray-500 dark:text-[#737373] mt-1 block">Webhook ID: whk_928f01b</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </main>
          </div>

          {/* Footer status bar */}
          <div className="px-5 py-2.5 bg-gray-50 dark:bg-[#050505] border-t border-gray-200 dark:border-[#1F1F1F] flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-500 dark:text-[#737373]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Host: node-in-01.smallcloud.si</span>
              <span className="text-gray-300 dark:text-gray-700">|</span>
              <span>Uptime: 99.98%</span>
            </div>
            <div className="text-gray-400 dark:text-[#666666]">
              Demo Preview · Real SmallCloud Control Plane
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
