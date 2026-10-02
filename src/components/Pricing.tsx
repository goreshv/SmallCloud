import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Info, ArrowRight, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';

interface PricingProps {
  onOpenDeployModal: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenDeployModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#000000] border-b border-gray-200 dark:border-[#1F1F1F] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#0E0E0E] border border-gray-200 dark:border-[#1F1F1F] px-2.5 py-1 rounded">
            Indian Cloud Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] dark:text-white font-sans">
            Transparent plans. Predictable compute.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Start deploying for free in <span className="font-mono text-gray-900 dark:text-white">ap-south-1 (Mumbai)</span>. Upgrade as your applications scale without hidden egress charges.
          </p>

          {/* Transparent Notice */}
          <div className="mt-6 inline-flex items-center gap-2 p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300 max-w-xl text-left">
            <Info className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Launch Note:</strong> Pricing tiers shown are clear placeholder estimates scheduled for our production rollout. Incur ₹0 for developer testing.
            </span>
          </div>

          {/* Controls: Billing Cycle + Currency */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            
            {/* Monthly / Annual Pill Toggle */}
            <div className="relative inline-flex items-center p-1 rounded-xl bg-gray-100 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1F1F1F]">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors z-10 ${
                  billingCycle === 'monthly'
                    ? 'text-gray-950 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {billingCycle === 'monthly' && (
                  <motion.div
                    layoutId="pricing-billing-pill"
                    className="absolute inset-0 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200/60 dark:border-[#2A2A2A]"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">Monthly billing</span>
              </button>

              <button
                onClick={() => setBillingCycle('annual')}
                className={`relative px-4 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors z-10 flex items-center gap-1.5 ${
                  billingCycle === 'annual'
                    ? 'text-gray-950 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {billingCycle === 'annual' && (
                  <motion.div
                    layoutId="pricing-billing-pill"
                    className="absolute inset-0 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200/60 dark:border-[#2A2A2A]"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">Annual billing</span>
                <span className="relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 font-semibold">
                  Save 20%
                </span>
              </button>
            </div>

            {/* Currency Pill Toggle */}
            <div className="relative inline-flex items-center p-1 rounded-xl bg-gray-100 dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1F1F1F]">
              <button
                onClick={() => setCurrency('INR')}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-medium cursor-pointer transition-colors z-10 ${
                  currency === 'INR'
                    ? 'text-gray-950 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {currency === 'INR' && (
                  <motion.div
                    layoutId="pricing-currency-pill"
                    className="absolute inset-0 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200/60 dark:border-[#2A2A2A]"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">₹ INR</span>
              </button>

              <button
                onClick={() => setCurrency('USD')}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-medium cursor-pointer transition-colors z-10 ${
                  currency === 'USD'
                    ? 'text-gray-950 dark:text-white'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {currency === 'USD' && (
                  <motion.div
                    layoutId="pricing-currency-pill"
                    className="absolute inset-0 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-sm border border-gray-200/60 dark:border-[#2A2A2A]"
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">$ USD</span>
              </button>
            </div>

          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isAnnual = billingCycle === 'annual';
            const price = currency === 'INR'
              ? (isAnnual ? plan.annualInr : plan.monthlyInr)
              : (isAnnual ? plan.annualUsd : plan.monthlyUsd);
            
            const isFree = price === 0;
            const isPopular = plan.name === 'Pro';

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative bg-white dark:bg-[#0A0A0A] rounded-2xl border p-7 flex flex-col justify-between transition-all text-left ${
                  isPopular
                    ? 'border-brand-500/60 dark:border-brand-500/50 shadow-lg shadow-brand-500/5 dark:shadow-brand-500/10 ring-1 ring-brand-500/20'
                    : 'border-gray-200 dark:border-[#1F1F1F] hover:border-gray-300 dark:hover:border-gray-700 shadow-subtle'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-500 text-white text-[10px] font-mono font-semibold tracking-wider uppercase flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Top */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-[#121212] border border-gray-200 dark:border-[#1F1F1F] px-2 py-0.5 rounded">
                      {plan.badge}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">Tier {index + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 dark:text-white font-sans mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[36px] leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-gray-100 dark:border-[#1F1F1F]">
                    <span className="text-4xl font-extrabold text-[#111111] dark:text-white font-sans tracking-tight">
                      {currency === 'INR' ? `₹${price.toLocaleString('en-IN')}` : `$${price}`}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      {isFree ? ' / free forever' : ' / month'}
                    </span>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider font-mono">
                      Included capabilities:
                    </div>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={onOpenDeployModal}
                  className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isPopular
                      ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-sm'
                      : 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] hover:bg-black dark:hover:bg-gray-100'
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Clear Guarantee Footnote */}
        <div className="mt-12 text-center text-xs text-gray-500 dark:text-gray-400 font-mono flex flex-wrap items-center justify-center gap-2">
          <span>All plans deploy to Mumbai & Bengaluru tier-4 datacenters.</span>
          <span>•</span>
          <span>Zero egress fees for developers.</span>
          <span>•</span>
          <span>Automatic Let's Encrypt TLS 1.3 certificates.</span>
        </div>

      </div>
    </section>
  );
};
