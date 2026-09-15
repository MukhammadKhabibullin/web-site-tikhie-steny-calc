import React from 'react';
import { Download, ShieldCheck, Cpu, HardDrive, Monitor, CheckCircle2, Terminal } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden tech-grid">
      {/* JetBrains-style background accent glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-jb-accent/15 to-jb-purple/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Warning / Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 dark:text-amber-300 light:text-amber-700 text-xs sm:text-sm font-medium mb-8 backdrop-blur-sm shadow-sm transition-all hover:border-amber-500/50">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-amber-400 dark:text-amber-400 light:text-amber-800 font-bold">Enterprise</span>
            <span className="w-1 h-1 rounded-full bg-amber-400/60" />
            <span>Профессиональный софт для строительных и отделочных компаний</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-zinc-950 mb-6 leading-[1.15]">
            Все цены и размеры <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              в одном приложении
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-3xl mb-10 leading-relaxed">
            Точный расчет геометрии помещений, спецификаций материалов, себестоимости и маржи для отделки и звукоизоляции. Без ошибок в таблицах.
          </p>

          {/* Main Download CTA Block */}
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            <a
              id="hero-download-btn"
              href={APP_CONFIG.downloadUrl}
              download={APP_CONFIG.downloadFileName}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto rounded-lg bg-jb-accent hover:bg-jb-accentHover text-white font-medium text-base sm:text-lg shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 border border-blue-400/30"
            >
              <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-0.5 transition-transform duration-200" />
              <span className="font-semibold tracking-wide">Скачать установщик (.exe)</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 border border-blue-400/20">
                {APP_CONFIG.version}
              </span>
            </a>

            {/* Micro details under download button */}
            <p className="text-xs sm:text-sm font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 flex items-center justify-center gap-2 flex-wrap pt-1">
              <span>Windows 10/11 (64-bit)</span>
              <span>•</span>
              <span className="text-emerald-400 dark:text-emerald-400 light:text-emerald-600 font-medium">Бесплатно</span>
              <span>•</span>
              <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-medium">Автономный режим</span>
              <span>•</span>
              <span>{APP_CONFIG.fileSize}</span>
            </p>
          </div>

          {/* Quick Technical Specs Pill Cards */}
          <div className="mt-14 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* OS Card */}
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/60 dark:border-zinc-800 dark:bg-zinc-900/60 light:border-zinc-200 light:bg-white text-left shadow-sm backdrop-blur-sm hover:border-zinc-700 transition-colors">
              <div className="p-2 rounded-md bg-blue-500/10 text-blue-400">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500">Операционная система</div>
                <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">Windows 10 / 11 (64-bit)</div>
              </div>
            </div>

            {/* RAM Card */}
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/60 dark:border-zinc-800 dark:bg-zinc-900/60 light:border-zinc-200 light:bg-white text-left shadow-sm backdrop-blur-sm hover:border-zinc-700 transition-colors">
              <div className="p-2 rounded-md bg-purple-500/10 text-purple-400">
                <HardDrive className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500">Оперативная память</div>
                <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">от 4 ГБ (рек. 8 ГБ)</div>
              </div>
            </div>

            {/* CPU Card */}
            <div className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/60 dark:border-zinc-800 dark:bg-zinc-900/60 light:border-zinc-200 light:bg-white text-left shadow-sm backdrop-blur-sm hover:border-zinc-700 transition-colors">
              <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500">Процессор</div>
                <div className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">Intel / AMD x86-64</div>
              </div>
            </div>

          </div>

          {/* Offline & Security Guarantee */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Подписанный безопасный бинарный файл
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Без скрытых подписок и регистрации
            </span>
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              Работает полностью оффлайн
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
