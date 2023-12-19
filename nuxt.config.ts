// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,

  ssr: false,

  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      htmlAttrs: {
        lang: "en",
      },
      script: [{ src: "https://js.stripe.com/v3/", defer: true }],
    },
  },
  css: ["~/assets/css/tailwind/main.css"],
  devServer: {
    port: 3002,
  },
  modules: [
    ["@nuxtjs/tailwindcss", {}],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Karla: {
            wght: [300, 400, 500, 700, 800],
            ital: [300, 400, 500, 700, 800],
          },
        },
        display: "swap",
        download: true,
      },
    ],
    "@nuxt/image",
    ["nuxt-icon", {}],
    ["nuxt-lodash", {}],
    ["@pinia/nuxt", {}],
    ["@pinia-plugin-persistedstate/nuxt", {}],
    // ["@nuxtjs/supabase", {}],
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY,
    },
  },
  components: [],
  plugins: [],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind/index.css",
    configPath: "tailwind.config",
    injectPosition: "first",
    viewer: false,
  },
});
