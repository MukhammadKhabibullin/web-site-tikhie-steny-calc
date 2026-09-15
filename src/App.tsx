import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AppMockupSection } from './components/AppMockupSection';
import { FeaturesSection } from './components/FeaturesSection';
import { InteractiveCalculator } from './components/InteractiveCalculator';
import { SystemRequirements } from './components/SystemRequirements';
import { DocsSection } from './components/DocsSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Theme state: default to dark (JetBrains signature style)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // default dark
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-jb-bg text-jb-text dark:bg-jb-bg dark:text-jb-text light:bg-jbLight-bg light:text-jbLight-text transition-colors duration-200 selection:bg-jb-accent selection:text-white">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AppMockupSection />
        <FeaturesSection />
        <InteractiveCalculator />
        <SystemRequirements />
        <DocsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
