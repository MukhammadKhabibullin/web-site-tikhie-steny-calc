export interface AppConfig {
  appName: string;
  tagline: string;
  version: string;
  architecture: string;
  releaseDate: string;
  fileSize: string;
  downloadUrl: string;
  downloadFileName: string;
  supportedOs: string;
  requirements: {
    os: string;
    ram: string;
    cpu: string;
    disk: string;
    display: string;
  };
}

export const APP_CONFIG: AppConfig = {
  appName: 'PRO Смета: Тихие Стены',
  tagline: 'Инженерный калькулятор геометрии и звукоизоляции',
  version: 'v1.0.4',
  architecture: 'x64',
  releaseDate: '15 сентября 2026',
  fileSize: '78.4 МБ',
  downloadUrl: 'URL_ВАШЕГО_EXE_ФАЙЛА',
  downloadFileName: 'PRO_Smeta_Tikhie_Steny_v1.0.4_x64_Setup.exe',
  supportedOs: 'Windows 10 / 11 (64-bit)',
  requirements: {
    os: 'Windows 10 (версия 1903+) или Windows 11 (64-bit)',
    ram: 'Минимум 4 ГБ (рекомендуется 8 ГБ)',
    cpu: 'Intel Core i3 / AMD Ryzen 3 или новее (x86-64)',
    disk: '350 МБ свободного места на диске (SSD рекомендуется)',
    display: '1280×720 или выше (оптимизировано под 1080p и 4K)',
  },
};
