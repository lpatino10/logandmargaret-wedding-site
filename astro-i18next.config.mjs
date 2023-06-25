/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "es"],
  routes: {
    es: {
      "our-story": "nuestra-historia",
      schedule: "horario",
      travel: "viaje",
      faq: "preguntas-frequentes",
      registry: "registro",
      rsvp: "rsvp",
    }
  }
};