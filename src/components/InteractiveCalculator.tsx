import React, { useState } from 'react';
import { Calculator, Download } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const InteractiveCalculator: React.FC = () => {
  const [wallLength, setWallLength] = useState<number>(6.5);
  const [wallHeight, setWallHeight] = useState<number>(2.8);
  const [doorsCount, setDoorsCount] = useState<number>(1);
  const [windowsCount, setWindowsCount] = useState<number>(1);
  const [systemType, setSystemType] = useState<'standard' | 'premium' | 'ceiling'>('standard');

  // Calculations
  const grossArea = wallLength * wallHeight;
  const openingsArea = (doorsCount * 1.89) + (windowsCount * 2.1);
  const netArea = Math.max(1, +(grossArea - openingsArea).toFixed(2));

  const systemRates = {
    standard: {
      title: 'Каркасная звукоизоляция стены (75 мм)',
      costPerM2: 2450,
      clientPerM2: 3800,
      sheetCoverage: 3.0, // м² на лист Саундлайн
      mineralWoolPackCoverage: 6.0, // м² на упаковку акустической ваты
    },
    premium: {
      title: 'ЗИПС-Слим бескаркасная система (40 мм)',
      costPerM2: 3800,
      clientPerM2: 5900,
      sheetCoverage: 0.72,
      mineralWoolPackCoverage: 0,
    },
    ceiling: {
      title: 'Виброизоляционный потолок на подвесах',
      costPerM2: 3100,
      clientPerM2: 4800,
      sheetCoverage: 3.0,
      mineralWoolPackCoverage: 6.0,
    },
  };

  const selected = systemRates[systemType];
  const sheetsCount = Math.ceil((netArea * 1.07) / (selected.sheetCoverage || 1));
  const woolPacksCount = selected.mineralWoolPackCoverage > 0 
    ? Math.ceil((netArea * 1.05) / selected.mineralWoolPackCoverage) 
    : 0;

  const totalCost = Math.round(netArea * selected.costPerM2);
  const totalClient = Math.round(netArea * selected.clientPerM2);
  const totalProfit = totalClient - totalCost;
  const profitMarginPercent = Math.round((totalProfit / totalClient) * 100);

  return (
    <section id="calculator" className="py-16 md:py-24 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            ОНЛАЙН-ТЕСТ АЛГОРИТМА
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 mb-4">
            Калькулятор геометрии и маржи
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-2xl text-sm sm:text-base">
            Проверьте, как десктопное приложение считает чистую квадратуру и прибыль за долю секунды.
          </p>
        </div>

        {/* Calculator Widget Container */}
        <div className="max-w-5xl mx-auto rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white shadow-xl overflow-hidden">
          
          {/* Top banner */}
          <div className="px-6 py-3 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Алгоритм PRO Смета Core v1.0.4 • Вычет проемов по СНиП</span>
            </div>
            <span className="hidden sm:inline text-zinc-400">Точность расчетов: 0.01 м²</span>
          </div>

          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-6 space-y-5">
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-800 flex items-center gap-2">
                <span>1. Параметры помещения</span>
              </h3>

              {/* Slider / input: Длина стены */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label htmlFor="wall-length" className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">Длина стены (L):</label>
                  <span className="font-bold text-blue-400">{wallLength} м</span>
                </div>
                <input
                  id="wall-length"
                  type="range"
                  min="2"
                  max="25"
                  step="0.1"
                  value={wallLength}
                  onChange={(e) => setWallLength(parseFloat(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-1.5 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-lg appearance-none"
                />
              </div>

              {/* Slider / input: Высота потолка */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label htmlFor="wall-height" className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600">Высота потолка (H):</label>
                  <span className="font-bold text-blue-400">{wallHeight} м</span>
                </div>
                <input
                  id="wall-height"
                  type="range"
                  min="2.2"
                  max="6"
                  step="0.05"
                  value={wallHeight}
                  onChange={(e) => setWallHeight(parseFloat(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer h-1.5 bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200 rounded-lg appearance-none"
                />
              </div>

              {/* Counters: Проемы */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div className="p-3 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-zinc-50">
                  <div className="text-[11px] font-mono text-zinc-400 mb-1.5">Дверные проемы:</div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setDoorsCount(Math.max(0, doorsCount - 1))}
                      className="w-7 h-7 rounded border border-zinc-700 bg-zinc-800 text-zinc-200 font-mono font-bold hover:bg-zinc-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">{doorsCount} шт.</span>
                    <button
                      onClick={() => setDoorsCount(doorsCount + 1)}
                      className="w-7 h-7 rounded border border-zinc-700 bg-zinc-800 text-zinc-200 font-mono font-bold hover:bg-zinc-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/50 dark:bg-zinc-950/50 light:bg-zinc-50">
                  <div className="text-[11px] font-mono text-zinc-400 mb-1.5">Окна / Витражи:</div>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setWindowsCount(Math.max(0, windowsCount - 1))}
                      className="w-7 h-7 rounded border border-zinc-700 bg-zinc-800 text-zinc-200 font-mono font-bold hover:bg-zinc-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">{windowsCount} шт.</span>
                    <button
                      onClick={() => setWindowsCount(windowsCount + 1)}
                      className="w-7 h-7 rounded border border-zinc-700 bg-zinc-800 text-zinc-200 font-mono font-bold hover:bg-zinc-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* System Selection Tabs */}
              <div className="pt-2">
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-semibold block mb-2">
                  2. Выбор конструктива:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { key: 'standard', label: 'Каркас 75 мм' },
                    { key: 'premium', label: 'ЗИПС 40 мм' },
                    { key: 'ceiling', label: 'Потолок' },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setSystemType(tab.key as any)}
                      className={`py-2 px-2 text-xs font-mono rounded border text-center transition-all ${
                        systemType === tab.key
                          ? 'border-blue-500 bg-blue-500/20 text-blue-300 font-bold'
                          : 'border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/40 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Results Output (Right Column) */}
            <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950/70 dark:bg-zinc-950/70 light:bg-zinc-50">
              
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 mb-4">
                  <div className="text-xs font-mono uppercase text-zinc-400">Мгновенный расчет</div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Маржа: {profitMarginPercent}%
                  </span>
                </div>

                {/* Geometry summary */}
                <div className="space-y-2 font-mono text-xs mb-5">
                  <div className="flex justify-between text-zinc-400">
                    <span>Грязная площадь стен:</span>
                    <span>{grossArea.toFixed(2)} м²</span>
                  </div>
                  <div className="flex justify-between text-amber-400">
                    <span>Вычет проемов ({doorsCount} дв. + {windowsCount} ок.):</span>
                    <span>- {openingsArea.toFixed(2)} м²</span>
                  </div>
                  <div className="flex justify-between text-zinc-200 dark:text-zinc-200 light:text-zinc-900 font-bold text-sm pt-1 border-t border-zinc-800/80">
                    <span>Чистая площадь монтажа:</span>
                    <span className="text-emerald-400">{netArea} м²</span>
                  </div>
                </div>

                {/* Materials consumption */}
                <div className="p-3 rounded bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-white border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-xs font-mono space-y-1.5 mb-5">
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-1">
                    Спецификация с запасом 7%:
                  </div>
                  <div className="flex justify-between text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                    <span>Акустические плиты/листы:</span>
                    <span className="font-bold text-blue-400">{sheetsCount} шт.</span>
                  </div>
                  {woolPacksCount > 0 && (
                    <div className="flex justify-between text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
                      <span>Минплита Шуманет (упак.):</span>
                      <span className="font-bold text-blue-400">{woolPacksCount} уп.</span>
                    </div>
                  )}
                </div>

                {/* Price block */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="p-3 rounded border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white">
                    <div className="text-[11px] text-zinc-500">Закупка материалов:</div>
                    <div className="text-base font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 mt-0.5">
                      {totalCost.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <div className="p-3 rounded border border-emerald-500/30 bg-emerald-500/10">
                    <div className="text-[11px] text-emerald-400">Чистая маржа:</div>
                    <div className="text-base font-bold text-emerald-400 mt-0.5">
                      + {totalProfit.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-3 rounded bg-blue-500/15 border border-blue-500/30 font-mono flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-blue-300 dark:text-blue-300 light:text-blue-800">Итоговая смета заказчику:</div>
                    <div className="text-xl font-extrabold text-white dark:text-white light:text-blue-900">
                      {totalClient.toLocaleString('ru-RU')} ₽
                    </div>
                  </div>
                  <span className="text-[11px] text-blue-300/80">под ключ</span>
                </div>
              </div>

              {/* Bottom prompt to download */}
              <div className="mt-6 pt-4 border-t border-zinc-800 dark:border-zinc-800 light:border-zinc-200">
                <a
                  href={APP_CONFIG.downloadUrl}
                  download={APP_CONFIG.downloadFileName}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs font-semibold transition-all border border-zinc-700 hover:border-zinc-600 shadow-md group"
                >
                  <Download className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
                  <span>Скачать полную версию для сохранения и печати смет (.exe)</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
