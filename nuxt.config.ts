// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    baseURL: '/ebtihaj.github.io/',
    buildAssetsDir: '/_nuxt/',
  },
  nitro: {
    preset: 'static',
    output: {
      dir: '.output/public'
    }
  },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2025-02-18",
  colorMode: {
    preference: 'light'
  }
})