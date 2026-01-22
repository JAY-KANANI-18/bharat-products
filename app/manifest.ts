import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const name = 'Bharat Products'
  const shortName = 'Bharat'
  const description =
    'ISO 9001:2015 certified precision engineering partner delivering brass, stainless steel, aluminium and forged components.'

  return {
    name,
    short_name: shortName,
    description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/images/Final-Logo/SVG/White-BG-Favicon.svg',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/Final-Logo/SVG/White-BG-Favicon.svg',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
