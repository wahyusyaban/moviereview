import type { Config } from './types';

export default {
  id: '/',
  name: 'Movie Review',
  shortName: 'Movie Review',
  description: 'Explore our in-depth analyses of the latest blockbusters, indie films, and timeless classics across all genres – from action and comedy to horror and sci-fi.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Horror Movie',
      shortName: 'Horror Movie',
      description: 'Horror Movie',
      url: '/search/label/Horror Movie?utm_source=homescreen',
    },
    {
      name: 'Action Movie',
      shortName: 'Action Movie',
      description: 'Action Movie',
      url: '/search/label/Action Movie?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: 'a1e678b6-0798-4ab1-a1c0-414a024ab8a8',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://www.moviereviewed.com',
} satisfies Config;
