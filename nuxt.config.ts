// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "fa",
        file: "fa/index.ts",
        name: "فا",
        rtl: true,
      },
      {
        code: "en",
        file: "en/index.ts",
        name: "En",
        rtl: false,
      },
    ],
    lazy: true,
    langDir: "src/languages",
    defaultLocale: "en",
  },

  typescript: {
    shim: false,
  },
});
