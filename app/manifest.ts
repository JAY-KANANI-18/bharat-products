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
        src: '/Final-Logo/1x/White BG Favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/Final-Logo/1x/White BG Favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
