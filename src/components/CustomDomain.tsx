import React, { useState } from 'react';
import {
  Globe,
  CheckCircle2,
  Copy,
  Check,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const CustomDomain: React.FC = () => {
  const [domainInput] = useState('app.acme.com');
  const [isVerifying, setIsVerifying] = useState(false);
  const [copiedRecord, setCopiedRecord] = useState<string | null>(null);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
    }, 1200);
  };

  const copyText = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedRecord(key);
    setTimeout(() => setCopiedRecord(null), 2000);
  };

  return (
    <section id="custom-domains" className="py-24 bg-white dark:bg-[#000000] border-b border-gray-200 dark:border-[#1F1F1F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6 text-left"
          >
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#141414] border border-transparent dark:border-[#222222] px-2.5 py-1 rounded">
              Domain Mapping
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans">
              Use your own domain.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
              Deploy on a SmallCloud URL or connect the domain your customers already know.
            </p>

            <p className="mt-4 text-sm text-gray-600 dark:text-[#A1A1A1] leading-relaxed">
              Configure a standard CNAME or A record at your existing DNS registrar (Cloudflare, Namecheap, GoDaddy, Route53, etc.). Once pointed to SmallCloud, our proxy automatically handles SSL certificate issuance, TLS handshakes, and renewals with zero downtime.
            </p>

            {/* DNS Records Guide */}
            <div className="mt-6 border border-gray-200 dark:border-[#1F1F1F] rounded-xl overflow-hidden bg-gray-50/60 dark:bg-[#0A0A0A]">
              <div className="px-4 py-2.5 bg-gray-100/70 dark:bg-[#121212] border-b border-gray-200 dark:border-[#1F1F1F] text-xs font-mono font-medium text-gray-700 dark:text-gray-300 flex items-center justify-between">
                <span>DNS Registrar Configuration</span>
                <span className="text-[11px] text-gray-500 dark:text-[#737373]">Standard DNS</span>
              </div>
              <div className="p-4 space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#222222]">
                  <div className="flex items-center gap-3">
                    <span className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-[#1F1F1F] text-gray-700 dark:text-gray-300 font-bold text-[10px]">CNAME</span>
                    <span className="text-gray-900 dark:text-gray-100">subdomain (e.g. app)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <span>cname.smallcloud.si</span>
                    <button
                      onClick={() => copyText('cname.smallcloud.si', 'cname')}
                      className="p-1 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                    >
                      {copiedRecord === 'cname' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-white dark:bg-[#121212] border border-gray-200 dark:border-[#222222]">
                  <div className="flex items-center gap-3">
                    <span className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-[#1F1F1F] text-gray-700 dark:text-gray-300 font-bold text-[10px]">A</span>
                    <span className="text-gray-900 dark:text-gray-100">apex root (@)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <span>185.199.108.153</span>
                    <button
                      onClick={() => copyText('185.199.108.153', 'a')}
                      className="p-1 hover:text-gray-900 dark:hover:text-white cursor-pointer"
                    >
                      {copiedRecord === 'a' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500 dark:text-[#737373] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Free, automatic TLS/SSL certificates provisioned through Let's Encrypt for all connected domains.</span>
            </div>
          </motion.div>

          {/* Right Column: Example UI Card as specified */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-6"
          >
            <div className="bg-white dark:bg-[#0A0A0A] rounded-xl border border-gray-200 dark:border-[#1F1F1F] shadow-card dark:shadow-dark-card p-6 sm:p-7">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100 dark:border-[#1A1A1A]">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white font-sans">
                    Domain Configuration
                  </h3>
                </div>
                <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#161616] px-2.5 py-0.5 rounded border border-transparent dark:border-[#262626]">
                  Active Project
                </span>
              </div>

              {/* Deployment URL Row */}
              <div className="mb-4">
                <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                  Deployment URL
                </label>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-gray-50 dark:bg-[#0E0E0E]">
                  <span className="font-mono text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                    https://store.smallcloud.si
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-[#071F15] px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/80">
                    Default
                  </span>
                </div>
              </div>

              {/* Custom Domain Row */}
              <div className="mb-5">
                <label className="block text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                  Custom Domain
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 flex items-center p-3 rounded-lg border border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#0E0E0E]">
                    <span className="font-mono text-xs sm:text-sm text-gray-900 dark:text-gray-100 font-medium">
                      {domainInput}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleVerify}
                    disabled={isVerifying}
                    className="px-4 py-3 rounded-lg bg-[#111111] dark:bg-white text-white dark:text-[#000000] hover:bg-black dark:hover:bg-gray-100 text-xs font-medium transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  >
                    {isVerifying ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Checking...</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Verify DNS</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Status Section */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-[#0E0E0E] border border-gray-200 dark:border-[#1F1F1F] space-y-2.5">
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status:
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                    <span className="font-medium">Connected</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500 dark:text-[#737373]">DNS resolved to proxy</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0" />
                    <span className="font-medium">HTTPS enabled</span>
                  </div>
                  <span className="text-xs font-mono text-gray-500 dark:text-[#737373]">Auto-renewal active</span>
                </div>
              </div>

              {/* Realistic note */}
              <p className="mt-4 text-xs text-gray-500 dark:text-[#737373] leading-relaxed">
                DNS propagation typically completes within 2 to 10 minutes depending on your registrar's TTL settings.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
