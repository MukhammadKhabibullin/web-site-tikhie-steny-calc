import React, { useState } from 'react';
import { 
  Maximize2, Minimize2, X, Layers, Calculator, FileSpreadsheet
} from 'lucide-react';

export const AppMockupSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calc' | 'materials' | 'margin'>('calc');
  const [selectedSystem, setSelectedSystem] = useState('standard');

  const systems = {
    standard: {
      name: 'Каркасная перегородка 75 мм (Стандарт)',
      soundReduction: 'Rw ≈ 54 дБ',
      costPerM2: 2450,
      clientPerM2: 3900,
      layers: ['ГВЛ Саундлайн 12.5 мм', 'Акустическая минплита 50 мм', 'Виброподвесы Виброфлекс', 'ГКЛ Акустик 12.5 мм'],
    },
    premium: {
      name: 'Бескаркасная облицовка ЗИПС-Слим (Премиум)',
      soundReduction: 'Rw ≈ 58 дБ',
      costPerM2: 3800,
      clientPerM2: 5900,
      layers: ['ЗИПС-Слим 40 мм', 'Виброакустический герметик', 'Акустический триплекс', 'Финишный ГКЛА'],
    },
  };

  const currentSystem = systems[selectedSystem as keyof typeof systems];
  const area = 24.5;
  const totalCost = Math.round(area * currentSystem.costPerM2);
  const totalClient = Math.round(area * currentSystem.clientPerM2);
  const marginSum = totalClient - totalCost;
  const marginPercent = Math.round((marginSum / totalClient) * 100);

  return (
    <section id="mockup" className="py-16 md:py-24 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            ДЕМОНСТРАЦИЯ ИНТЕРФЕЙСА
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 mb-4">
            Инженерная точность без Excel-хаоса
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl text-sm sm:text-base">
            Интерфейс спроектирован по канонам JetBrains: строгая сетка, мгновенный отклик, фокус на цифрах и прозрачности маржи.
          </p>
        </div>

        {/* Desktop Window Mockup */}
        <div className="relative rounded-xl border border-zinc-700/70 dark:border-zinc-700/70 light:border-zinc-300 bg-zinc-950 dark:bg-zinc-950 light:bg-white shadow-2xl shadow-black/60 overflow-hidden">
          
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-100 select-none">
            
            {/* Window controls (Windows style with JetBrains vibe) */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-3">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                <span className="font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800">PRO Смета</span>
                <span>—</span>
                <span className="text-zinc-400">Объект: ЖК «Пресня Сити», Секция Б, кв. 42</span>
              </div>
            </div>

            {/* Right side window tools */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Offline Ready
              </span>
              <div className="flex items-center text-zinc-400 gap-2">
                <Minimize2 className="w-3.5 h-3.5" />
                <Maximize2 className="w-3.5 h-3.5" />
                <X className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Window Application Sub-header / Tabs */}
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-zinc-50 px-4 py-2 text-xs font-mono">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setActiveTab('calc')}
                className={`px-3 py-1.5 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  activeTab === 'calc'
                    ? 'bg-zinc-800 text-blue-400 font-medium dark:bg-zinc-800 dark:text-blue-400 light:bg-white light:text-blue-600 light:shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>Геометрия и пирог стены</span>
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`px-3 py-1.5 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  activeTab === 'materials'
                    ? 'bg-zinc-800 text-blue-400 font-medium dark:bg-zinc-800 dark:text-blue-400 light:bg-white light:text-blue-600 light:shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Спецификация материалов</span>
              </button>
              <button
                onClick={() => setActiveTab('margin')}
                className={`px-3 py-1.5 rounded text-xs transition-colors flex items-center gap-1.5 ${
                  activeTab === 'margin'
                    ? 'bg-zinc-800 text-blue-400 font-medium dark:bg-zinc-800 dark:text-blue-400 light:bg-white light:text-blue-600 light:shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                <span>Сводка маржи & КП</span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-3 text-[11px] text-zinc-400">
              <span>Курс закупки: <strong className="text-zinc-300">Прямой склад</strong></span>
              <span>•</span>
              <span>Коэфф. запаса: <strong className="text-zinc-300">+7%</strong></span>
            </div>
          </div>

          {/* Window Main Body (Interactive Simulation) */}
          <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-zinc-50/50">
            
            {/* Left Column: Room Geometry & Parameters */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-4 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-semibold">
                    Геометрия помещения №1
                  </h3>
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">Гостиная</span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-100">
                    <span className="text-zinc-400">Длина стены (L):</span>
                    <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-semibold">7.00 м</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-100">
                    <span className="text-zinc-400">Высота потолка (H):</span>
                    <span className="text-zinc-200 dark:text-zinc-200 light:text-zinc-800 font-semibold">3.50 м</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-100">
                    <span className="text-zinc-400">Вычет проемов (дверь 0.9x2.1):</span>
                    <span className="text-amber-400 font-semibold">- 1.89 м²</span>
                  </div>
                  <div className="flex justify-between items-center py-1 pt-2">
                    <span className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-bold">Чистая площадь монтажа:</span>
                    <span className="text-emerald-400 font-bold text-sm">24.50 м²</span>
                  </div>
                </div>
              </div>

              {/* System Selector */}
              <div className="p-4 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white space-y-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-semibold block">
                  Звукоизоляционная система:
                </label>
                
                <div 
                  onClick={() => setSelectedSystem('standard')}
                  className={`p-3 rounded border cursor-pointer transition-all ${
                    selectedSystem === 'standard'
                      ? 'border-blue-500 bg-blue-500/10 text-white'
                      : 'border-zinc-800 hover:border-zinc-700 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>Каркасная 75 мм</span>
                    <span className="text-emerald-400 font-mono">Rw ≈ 54 дБ</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">Оптимально для смежных квартир</div>
                </div>

                <div 
                  onClick={() => setSelectedSystem('premium')}
                  className={`p-3 rounded border cursor-pointer transition-all ${
                    selectedSystem === 'premium'
                      ? 'border-blue-500 bg-blue-500/10 text-white'
                      : 'border-zinc-800 hover:border-zinc-700 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>ЗИПС-Слим 40 мм</span>
                    <span className="text-purple-400 font-mono">Rw ≈ 58 дБ</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">Минимальная потеря полезной площади</div>
                </div>
              </div>
            </div>

            {/* Right Column: Calculations, Layers & Margin Live Breakdown */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Layers breakdown */}
              <div className="p-4 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                      Конструктивный пирог: {currentSystem.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-bold">{currentSystem.soundReduction}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {currentSystem.layers.map((layer, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-zinc-800/50 dark:bg-zinc-800/50 light:bg-zinc-100 text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold">
                        {idx + 1}
                      </span>
                      <span className="truncate">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Realtime Economics Bar */}
              <div className="p-5 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-white shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-semibold">
                    Экономика сметы в реальном времени (24.50 м²)
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Маржа: {marginPercent}%
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
                  
                  {/* Cost price */}
                  <div className="p-3 rounded bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200">
                    <div className="text-[11px] text-zinc-500">Себестоимость (Закупка)</div>
                    <div className="text-lg font-bold text-zinc-300 dark:text-zinc-300 light:text-zinc-800 mt-1">
                      {totalCost.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">{currentSystem.costPerM2.toLocaleString('ru-RU')} ₽ / м²</div>
                  </div>

                  {/* Net Margin */}
                  <div className="p-3 rounded bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200">
                    <div className="text-[11px] text-emerald-400/80">Валовая прибыль (Маржа)</div>
                    <div className="text-lg font-bold text-emerald-400 mt-1">
                      + {marginSum.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-[10px] text-emerald-400/60 mt-0.5">Доход компании</div>
                  </div>

                  {/* Client Total */}
                  <div className="p-3 rounded bg-blue-500/10 border border-blue-500/30">
                    <div className="text-[11px] text-blue-300 dark:text-blue-300 light:text-blue-700">Итого заказчику (Под ключ)</div>
                    <div className="text-lg font-bold text-blue-400 dark:text-blue-400 light:text-blue-600 mt-1">
                      {totalClient.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-[10px] text-blue-300/70 mt-0.5">{currentSystem.clientPerM2.toLocaleString('ru-RU')} ₽ / м²</div>
                  </div>

                </div>

                {/* Simulated action row */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Расчет обновлен синхронно за 0.4 мс
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 light:bg-zinc-200 light:text-zinc-700 text-[11px]">
                      Экспорт в PDF
                    </span>
                    <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-300 dark:bg-zinc-800 dark:text-zinc-300 light:bg-zinc-200 light:text-zinc-700 text-[11px]">
                      Выгрузка в Excel
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Window Footer Statusbar */}
          <div className="flex items-center justify-between px-4 py-1.5 bg-zinc-900 border-t border-zinc-800 text-[11px] font-mono text-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 light:bg-zinc-100 light:border-zinc-200 light:text-zinc-600">
            <div className="flex items-center gap-3">
              <span className="text-emerald-400 font-semibold">● ГОТОВО К РАБОТЕ</span>
              <span className="hidden sm:inline">База ГОСТ & СНиП: 2026.3</span>
              <span className="hidden md:inline">Память: 84 МБ</span>
            </div>
            <div className="flex items-center gap-3">
              <span>UTF-8</span>
              <span>Windows x64 Native</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
