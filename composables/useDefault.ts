const defaults = {
  empty: {},

  meta: {
    title: "Kamsiyonna-Nuxt-Template",
    ogTitle: "Kamsiyonna-Nuxt-Template",
    description: "Kamsiyonna-Nuxt-Template",
    ogDescription: "Kamsiyonna-Nuxt-Template",
    ogImage: "/webclip.png",
    twitterCard: "summary_large_image",
  } as Parameters<typeof useSeoMeta>[0],
};

type DefaultKeys = keyof typeof defaults;

type DefaultValues = typeof defaults;

export const useDefault = <K extends DefaultKeys>(
  defaultName: K
): DefaultValues[K] => defaults[defaultName];
