import React, { useState } from 'react';
import { BookOpen, ChevronDown, Download, HelpCircle } from 'lucide-react';
import { APP_CONFIG } from '../config/appConfig';

export const DocsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      num: '01',
      title: 'Скачивание установщика',
      desc: `Загрузите официальный установочный файл ${APP_CONFIG.downloadFileName} (${APP_CONFIG.fileSize}). Файл готов к установке без сторонних библиотек.`,
    },
    {
      num: '02',
      title: 'Автоматическая установка',
      desc: 'Запустите .exe файл. Мастер установки развернет локальную базу данных материалов и ярлык на рабочем столе за 15 секунд.',
    },
    {
      num: '03',
      title: 'Готовность к расчету смет',
      desc: 'Открывайте приложение прямо на объекте даже в подвалах без мобильной связи. Все расчеты и выгрузки работают автономно.',
    },
  ];

  const faqs = [
    {
      q: 'Действительно ли софт работает без подключения к интернету?',
      a: 'Да, на 100%. Вся геометрия, справочник узлов звукоизоляции, таблицы себестоимости и модуль генерации PDF/Excel функционируют автономно прямо на вашем компьютере.',
    },
    {
      q: 'Как вносить собственные цены материалов и процент маржи?',
      a: 'В меню настроек есть модуль «Прайс-лист компании». Вы можете за 1 клик загрузить оптовые прайс-листы поставщиков из Excel или вручную указать вашу базовую наценку на монтаж и материалы.',
    },
    {
      q: 'Поддерживается ли экспорт сметы для заказчика?',
      a: 'Да. Программа формирует два типа документов: «Внутренняя смета прораба» (с полной детализацией закупки и скрытой маржи) и «Коммерческое предложение заказчику» (с итоговыми расценками за м² и фирменной шапкой).',
    },
    {
      q: 'Какие версии Windows поддерживаются?',
      a: 'Приложение официально протестировано и оптимизировано для 64-битных версий Windows 10 и Windows 11. Поддержка ARM-версий Windows доступна через встроенную эмуляцию x64.',
    },
  ];

  return (
    <section id="docs" className="py-16 md:py-24 border-t border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono border border-zinc-700 bg-zinc-800/60 text-zinc-300 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            ДОКУМЕНТАЦИЯ И БЫСТРЫЙ СТАРТ
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-zinc-900 mb-4">
            Начало работы за 3 простых шага
          </h2>
          <p className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 max-w-xl text-sm sm:text-base">
            Без сложного внедрения и обучения персонала — интерфейс интуитивно понятен любому замерщику или инженеру.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white relative overflow-hidden"
            >
              <div className="text-3xl sm:text-4xl font-mono font-black text-zinc-700/60 dark:text-zinc-700/60 light:text-zinc-200 mb-3">
                {step.num}
              </div>
              <h3 className="text-base font-bold text-white dark:text-white light:text-zinc-900 mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6 justify-center">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <h3 className="text-base sm:text-lg font-bold font-mono text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
              Часто задаваемые вопросы (FAQ)
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/70 dark:bg-zinc-900/70 light:bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-900 hover:text-blue-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ml-3 ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-400 dark:text-zinc-400 light:text-zinc-600 border-t border-zinc-800/60 dark:border-zinc-800/60 light:border-zinc-100 pt-3 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 p-8 rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-900/30 via-zinc-900/70 to-purple-900/30 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Готовы автоматизировать расчет смет?
          </h3>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Скачайте последнюю стабильную версию {APP_CONFIG.version} для Windows прямо сейчас.
          </p>
          <a
            href={APP_CONFIG.downloadUrl}
            download={APP_CONFIG.downloadFileName}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-jb-accent hover:bg-jb-accentHover text-white font-semibold text-sm shadow-lg shadow-blue-500/30 active:scale-95 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Скачать установщик (.exe) — {APP_CONFIG.fileSize}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
