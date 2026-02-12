import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  devServer: {
    port: 3001
  },

  app: {
    head: {
      title: 'شبكة ACCE للإعلانات - العراق',
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'شركة شبكة ACCE للإعلانات - نظام العضويات والأرباح في العراق'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css']
})
