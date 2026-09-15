import React from 'react';
import { Download, ArrowUp } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-jb-accent text-white font-mono font-bold text-xs tracking-tighter shadow-sm">
                ПС
              </div>
              <span className="font-mono font-bold text-base text-white dark:text-white light:text-zinc-900">
                PRO Смета: Тихие Стены
              </span>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-sm leading-relaxed">
              Специализированное десктопное ПО для замерщиков, инженеров-акустиков и строительных подрядчиков. Расчет смет, звукоизоляционных систем и маржинальности.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-zinc-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Текущая версия: {APP_CONFIG.version} ({APP_CONFIG.architecture})</span>
              <span>•</span>
              <span>Сборка {APP_CONFIG.releaseDate}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-semibold">
              Разделы
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
              <li>
                <a href="#features" className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#mockup" className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors">
                  Интерфейс приложения
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors">
                  Калькулятор геометрии
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors">
                  Системные требования
                </a>
              </li>
              <li>
                <a href="#docs" className="hover:text-white dark:hover:text-white light:hover:text-zinc-900 transition-colors">
                  Документация
                </a>
              </li>
            </ul>
          </div>

          {/* Download & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 dark:text-zinc-300 light:text-zinc-800 font-semibold">
              Дистрибутив
            </h4>
            <a
              href={APP_CONFIG.downloadUrl}
              download={APP_CONFIG.downloadFileName}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs border border-zinc-700 transition-all shadow-sm w-full justify-center"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Скачать .exe ({APP_CONFIG.fileSize})</span>
            </a>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono">
              Подходит для Windows 10/11 x64.
            </div>
            
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors pt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Наверх</span>
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
          <div>
            © {new Date().getFullYear()} PRO Смета: Тихие Стены. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span>Автономный режим (Offline-First)</span>
            <span>•</span>
            <span>JetBrains Minimalist Tech UI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
