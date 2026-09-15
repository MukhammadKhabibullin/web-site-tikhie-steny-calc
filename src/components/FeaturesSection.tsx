import React from 'react';
import { 
  Box, TrendingUp, WifiOff, FileCheck2, Database, Zap, CheckCircle
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const mainFeatures = [
    {
      id: 'multi-room',
      icon: Box,
      tag: 'Геометрия 2.0',
      title: 'Умная геометрия Multi-Room',
      description: 'Автоматический сквозной расчет периметров сложных помещений, эркеров и перегородок с автоматическим вычетом дверных и оконных проемов любого типоразмера.',
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
      bullets: [
        'Учет чистовой высоты и балок',
        'Авто-вычет площади дверей и витражей',
        'Связка смежных перегородок без дублирования',
      ],
    },
    {
      id: 'margin-control',
      icon: TrendingUp,
      tag: 'Финансы & Маржа',
      title: 'Контроль маржинальности',
      description: 'Мгновенное разделение оптовой закупки, расходников, оплаты монтажной бригады и чистой прибыли компании прямо во время замера у клиента.',
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      bullets: [
        'Себестоимость и наценка в реальном времени',
        'Фиксированная ставка или плавающий % маржи',
        'Защита от продажи работ в минус',
      ],
    },
    {
      id: 'full-offline',
      icon: WifiOff,
      tag: '100% Offline',
      title: 'Полная автономность',
      description: 'Надежная работа без подключения к интернету на подземных паркингах, в новостройках без связи и на загородных стройплощадках.',
      accent: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
      bullets: [
        'Локальное хранение всех баз и смет',
        'Нулевая задержка интерфейса (0 мс ping)',
        'Без риска отключения облачных серверов',
      ],
    },
  ];

  const secondaryFeatures = [
    {
      icon: FileCheck2,
      title: 'Коммерческое предложение в 1 клик',
      desc: 'Генерация аккуратного PDF с логотипом вашей компании и детализацией для заказчика.',
    },
    {
      icon: Database,
      title: 'Готовая база звукоизоляции',
      desc: 'Предустановленные технические карты: ЗИПС, каркасные системы, триплекс, минплита.',
    },
    {
      icon: Zap,
      title: 'Высочайшая скорость на C++/Rust ядре',
      desc: 'Мгновенный отклик даже при расчете 100+ комнат и десятков тысяч позиций фурнитуры.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            АРХИТЕКТУРА И ВОЗМОЖНОСТИ
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 mb-4">
            Создано инженерами для профессионалов
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl text-sm sm:text-base">
            Три ключевых столпа приложения, которые экономят до 4 часов на каждой смете и исключают кассовые разрывы.
          </p>
        </div>

        {/* 3 Main Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {mainFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="group relative p-6 sm:p-7 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-white hover:border-zinc-700 transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-lg border ${feat.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-zinc-800 bg-zinc-800/80 text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800/80 dark:text-zinc-400 light:border-zinc-200 light:bg-zinc-100 light:text-zinc-600">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-zinc-900 mb-3 group-hover:text-jb-accent transition-colors">
                    {feat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed mb-6">
                    {feat.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-100 space-y-2">
                  {feat.bullets.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-mono text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary feature row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {secondaryFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-lg border border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-200 bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-zinc-50"
              >
                <div className="p-2 rounded bg-zinc-800 text-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 light:bg-white light:text-zinc-700 border border-zinc-700/50 dark:border-zinc-700/50 light:border-zinc-200 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
