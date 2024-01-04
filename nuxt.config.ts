// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  devtools: { enabled: true },
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-USA',
        dir: 'ltr'
      },
      {
        code: 'ar',
        name: 'العربية',
        iso: 'ar-SA',
        dir: 'rtl'
      }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  }
})
