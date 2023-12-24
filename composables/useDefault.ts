const defaults = {
  empty: {},

  meta: {
    title: 'Ron-Commerce',
    ogTitle: 'Ron-Commerce',
    description: 'Ron-Commerce',
    ogDescription: 'Ron-Commerce',
    ogImage: '/webclip.png',
    twitterCard: 'summary_large_image'
  } as Parameters<typeof useSeoMeta>[0]
}

type DefaultKeys = keyof typeof defaults;

type DefaultValues = typeof defaults;

export const useDefault = <K extends DefaultKeys>(
  defaultName: K
): DefaultValues[K] => defaults[defaultName]
