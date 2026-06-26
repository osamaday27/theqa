// https://nuxt.com
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // المكتبات وموديولات المشروع
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // ملف التخصيصات الإضافية للـ CSS
  css: ['~/assets/css/main.css'],

  // الإعدادات العامة لهيكل وتأمين صفحات الموقع (SEO)
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'ثقة - فحص السيارات',
      meta: [
        { name: 'description', content: 'مركز ثقة لفحص السيارات - فحص شامل ودقيق قبل الشراء أو السفر' },
        { name: 'theme-color', content: '#0A203E' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'ثقة - فحص السيارات' },
        { property: 'og:description', content: 'فحص دقيق وشامل لجميع أنواع السيارات' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://theqa.com' },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'ثقة - فحص السيارات' },
        { name: 'twitter:description', content: 'فحص دقيق وشامل لجميع أنواع السيارات' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    },
    // تفعيل الحركات الانتقالية بين الصفحات بسلاسة
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // ربط موديول Tailwind بملف الإعدادات المخصص
   tailwindcss: {
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    viewer: true
  }, 

  googleFonts: {
    families: {
      Tajawal: [400, 600, 700],
      Cairo: [400, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true
  },
  // تدقيق ومراقبة الأنواع في TypeScript
  typescript: {
    strict: true,
    typeCheck: false // اتركها false لتفادي مشاكل الحزم الإضافية وسرعة تشغيل السيرفر محليًا
  },

  // إعدادات محرك Nitro لضغط وتحسين أداء الموقع عند الإنتاج النهائي
  nitro: {
    compressPublicAssets: true,
    minify: true,
    preset: 'node-server'
  },

  // متغيرات البيئة والربط التلقائي بـ ملف .env
  runtimeConfig: {
    public: {
      siteName: 'ثقة',
      siteUrl: 'https://theqa.com',
      apiBase: '/api' // سيقوم Nuxt تلقائيًا بقراءتها من NUXT_PUBLIC_API_BASE داخل الـ .env إن وجدت
    }
  },

  // ميزات تجريبية لتحسين كتابة الكود والتصفح الفوري داخل التطبيق
  experimental: {
    typedPages: true,
    payloadExtraction: true
  }
})
