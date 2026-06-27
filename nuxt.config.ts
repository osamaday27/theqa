// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // ===== MODULES =====
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // ===== CSS =====
  css: ['~/assets/css/main.css'],

  // ===== APP CONFIG =====
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
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // ===== GOOGLE FONTS =====
  googleFonts: {
    families: {
      'Tajawal': [400, 500, 700, 800, 900],
      'Cairo': [400, 600, 700]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    download: true,
    base64: false
  },

  // ===== TYPESCRIPT =====
  typescript: {
    strict: true,
    typeCheck: false,
    shim: false
  },

  // ===== NITRO =====
  nitro: {
    compressPublicAssets: true,
    minify: true,
    preset: 'node-server'
  },

  // ===== RUNTIME CONFIG =====
  runtimeConfig: {
    public: {
      siteName: 'ثقة',
      siteUrl: 'https://theqa.com',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },

  // ===== EXPERIMENTAL =====
  experimental: {
    typedPages: true,
    payloadExtraction: true
  },

  // ===== VITE =====
  vite: {
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  }
})