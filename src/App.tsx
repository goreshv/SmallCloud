import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { DashboardShowcase } from './components/DashboardShowcase';
import { DeploymentExperience } from './components/DeploymentExperience';
import { CustomDomain } from './components/CustomDomain';
import { Audience } from './components/Audience';
import { WhySmallCloud } from './components/WhySmallCloud';
import { Security } from './components/Security';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { DocumentationCTA } from './components/DocumentationCTA';
import { Footer } from './components/Footer';
import { DeployModal } from './components/DeployModal';
import { DocsModal } from './components/DocsModal';

const AppContent: React.FC = () => {
  const [deployModalOpen, setDeployModalOpen] = useState(false);
  const [docsModalOpen, setDocsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] text-[#111111] dark:text-[#F3F4F6] flex flex-col font-sans selection:bg-brand-500 selection:text-white transition-colors duration-200">
      {/* Sticky Navbar with Light/Dark toggle */}
      <Navbar
        onOpenDeployModal={() => setDeployModalOpen(true)}
        onOpenDocsModal={() => setDocsModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section with Realistic Product Preview */}
        <Hero
          onOpenDeployModal={() => setDeployModalOpen(true)}
          onOpenDocsModal={() => setDocsModalOpen(true)}
        />

        {/* 2. How it works (Three Steps & Pipeline) */}
        <HowItWorks />

        {/* 3. Product Features (9 Grid) */}
        <Features />

        {/* 4. Product Dashboard Showcase */}
        <DashboardShowcase />

        {/* 5. Deployment Experience (Behind the scenes 7-step sequence & streaming logs) */}
        <DeploymentExperience />

        {/* 6. Custom Domains & DNS Configuration */}
        <CustomDomain />

        {/* 7. Who is SmallCloud for? (4 Audience Cards) */}
        <Audience />

        {/* 8. Why SmallCloud? (Practical positioning & factual comparison) */}
        <WhySmallCloud />

        {/* 9. Security Section (Isolated environments) */}
        <Security />

        {/* 10. Pricing (Placeholder / Configurable Tiers) */}
        <Pricing onOpenDeployModal={() => setDeployModalOpen(true)} />

        {/* 11. FAQ Section (10 Detailed Questions) */}
        <FAQ />

        {/* 12. Documentation & Final CTA */}
        <DocumentationCTA
          onOpenDeployModal={() => setDeployModalOpen(true)}
          onOpenDocsModal={() => setDocsModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenDocsModal={() => setDocsModalOpen(true)}
        onOpenDeployModal={() => setDeployModalOpen(true)}
      />

      {/* Interactive Deploy Modal Simulation */}
      <DeployModal
        isOpen={deployModalOpen}
        onClose={() => setDeployModalOpen(false)}
      />

      {/* Interactive Documentation Drawer */}
      <DocsModal
        isOpen={docsModalOpen}
        onClose={() => setDocsModalOpen(false)}
        onOpenDeployModal={() => {
          setDocsModalOpen(false);
          setDeployModalOpen(true);
        }}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
