// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module"],
  typescript: {
    typeCheck: true,
  },
  components: [{ path: "~/shared/ui" }, "~/components"],
});
