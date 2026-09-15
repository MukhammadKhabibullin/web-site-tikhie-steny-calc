import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Возможности', href: '#features' },
    { name: 'Интерфейс', href: '#mockup' },
    { name: 'Калькулятор геометрии', href: '#calculator' },
    { name: 'Характеристики', href: '#specs' },
    { name: 'Документация', href: '#docs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-colors duration-200 border-zinc-800 bg-zinc-950/85 dark:border-jb-border dark:bg-jb-bg/90 light:border-zinc-200 light:bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            {/* JetBrains style emblem */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-md bg-gradient-to-br from-jb-accent to-blue-700 text-white font-mono font-bold text-sm tracking-tighter shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span>ПС</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-zinc-900" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold tracking-tight text-base sm:text-lg text-white dark:text-white light:text-zinc-900 group-hover:text-jb-accent transition-colors">
                  PRO Смета
                </span>
                <span className="hidden sm:inline-block text-xs font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 light:bg-zinc-100 light:text-zinc-600 border border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-300">
                  Тихие Стены
                </span>
              </div>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 -mt-0.5 hidden sm:block">
                Инженерный калькулятор отделки
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium rounded-md transition-colors text-zinc-300 hover:text-white hover:bg-zinc-800/60 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800/60 light:text-zinc-700 light:hover:text-zinc-950 light:hover:bg-zinc-100"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Version Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border transition-colors border-zinc-800 bg-zinc-900/90 text-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-300 light:border-zinc-200 light:bg-zinc-50 light:text-zinc-700">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold">{APP_CONFIG.version}</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-500 light:text-zinc-400">{APP_CONFIG.architecture}</span>
            </div>

            {/* Quick Download Header Button */}
            <a
              href={APP_CONFIG.downloadUrl}
              download={APP_CONFIG.downloadFileName}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-jb-accent text-white hover:bg-jb-accentHover active:scale-95 transition-all shadow-sm shadow-blue-500/20"
              title="Скачать установщик .exe"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Скачать .exe</span>
            </a>

            {/* Day / Night Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-md border text-zinc-400 hover:text-white hover:bg-zinc-800/70 border-zinc-800 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800/70 light:border-zinc-200 light:text-zinc-600 light:hover:text-zinc-900 light:hover:bg-zinc-100 transition-colors"
              title={isDark ? "Включить светлую тему" : "Включить темную тему"}
              aria-label="Смена темы оформления"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-200 hover:-rotate-12" />
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md border text-zinc-400 hover:text-white hover:bg-zinc-800 border-zinc-800 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-white light:border-zinc-200 light:text-zinc-600 light:hover:text-zinc-900 light:hover:bg-zinc-100"
              aria-label="Открыть мобильное меню"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 space-y-1">
            <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-zinc-400">
              <span>Сборка приложения:</span>
              <span className="font-semibold text-emerald-400">{APP_CONFIG.version} {APP_CONFIG.architecture}</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800/60 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800/60 light:text-zinc-700 light:hover:text-zinc-950 light:hover:bg-zinc-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href={APP_CONFIG.downloadUrl}
                download={APP_CONFIG.downloadFileName}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium rounded-md bg-jb-accent text-white hover:bg-jb-accentHover active:scale-95 transition-all shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Скачать установщик (.exe)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
