import enLocale from '@/locales/en-US'
import zhLocale from '@/locales/zh-CN'
import { createI18n } from 'vue-i18n';
const i18n = createI18n({
    globalInjection:true,
    legacy: false,
    locale: 'en', // 默认语言
    fallbackLocale: 'en', // 如果当前语言文件不存在，则使用默认语言
    messages: {
      en: enLocale, // 加载英文语言文件
      zh: zhLocale // 加载中文语言文件
    }
  });

  
export default i18n