export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],
  app: {
    head: {
      title: "Alibaba.com",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:title",
          content:
            "Alibaba.com: Manufacturers, Supliers, Exporters & Importers",
        },
      ],
    },
  },
});
