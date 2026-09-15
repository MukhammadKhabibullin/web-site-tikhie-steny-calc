import React from 'react';
import { Monitor, Cpu, HardDrive, Disc, Check, Info } from 'lucide-react';

export const SystemRequirements: React.FC = () => {
  const specs = [
    {
      label: 'Операционная система',
      icon: Monitor,
      min: 'Windows 10 (1903+) 64-bit',
      recommended: 'Windows 11 (22H2+) 64-bit',
    },
    {
      label: 'Процессор (CPU)',
      icon: Cpu,
      min: '2 ядра, 2.0 ГГц (Intel Core i3 / AMD Athlon)',
      recommended: '4+ ядер (Intel Core i5 / AMD Ryzen 5)',
    },
    {
      label: 'Оперативная память (RAM)',
      icon: HardDrive,
      min: '4 ГБ ОЗУ',
      recommended: '8 ГБ ОЗУ или выше',
    },
    {
      label: 'Дисковое пространство',
      icon: Disc,
      min: '350 МБ свободного места на HDD/SSD',
      recommended: 'SSD NVMe для мгновенного старта за 0.3 сек',
    },
    {
      label: 'Разрешение экрана',
      icon: Monitor,
      min: '1280 × 720 (HD Ready)',
      recommended: '1920 × 1080 (Full HD) или 4K масштабирование',
    },
  ];

  return (
    <section id="specs" className="py-16 md:py-24 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono border border-zinc-700 bg-zinc-800/60 text-zinc-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 mb-4">
            Системные требования
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-xl text-sm sm:text-base">
            Благодаря компиляции в нативный машинный код приложение не нагружает систему и запускается мгновенно даже на бюджетных рабочих ноутбуках.
          </p>
        </div>

        {/* Specs Table */}
        <div className="max-w-4xl mx-auto rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-white overflow-hidden shadow-xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-3.5 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-zinc-100 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            <div className="col-span-12 sm:col-span-4">Компонент</div>
            <div className="col-span-6 sm:col-span-4 hidden sm:block">Минимальные требования</div>
            <div className="col-span-6 sm:col-span-4 hidden sm:block text-emerald-400">Рекомендуемые</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-zinc-800/80 dark:divide-y-zinc-800/80 light:divide-zinc-100">
            {specs.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div 
                  key={idx} 
                  className="grid grid-cols-12 px-6 py-4 items-center hover:bg-zinc-800/30 dark:hover:bg-zinc-800/30 light:hover:bg-zinc-50 transition-colors text-xs font-mono"
                >
                  {/* Label */}
                  <div className="col-span-12 sm:col-span-4 flex items-center gap-3 mb-2 sm:mb-0">
                    <div className="p-2 rounded bg-zinc-800 text-blue-400 dark:bg-zinc-800 dark:text-blue-400 light:bg-zinc-100 light:text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                      {row.label}
                    </span>
                  </div>

                  {/* Minimum */}
                  <div className="col-span-6 sm:col-span-4 text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                    <span className="sm:hidden text-[10px] text-zinc-500 block">Мин:</span>
                    {row.min}
                  </div>

                  {/* Recommended */}
                  <div className="col-span-6 sm:col-span-4 text-zinc-200 dark:text-zinc-200 light:text-zinc-800 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 hidden sm:inline" />
                    <div>
                      <span className="sm:hidden text-[10px] text-emerald-400 block">Рек:</span>
                      {row.recommended}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notice footer */}
          <div className="p-4 bg-zinc-950/90 dark:bg-zinc-950/90 light:bg-zinc-50 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200 flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500">
            <Info className="w-4 h-4 text-blue-400 shrink-0" />
            <span>
              Приложение не требует установки внешних сред исполнения (JRE, Python или .NET Framework — все рантаймы встроены в установщик).
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
