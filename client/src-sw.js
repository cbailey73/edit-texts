const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Import necessary Workbox modules
const { StaleWhileRevalidate } = require('workbox-strategies');

// Define a cache name for assets
const assetsCacheName = 'assets-cache';

// Define a regular expression to match asset files
const assetsRegex = /\.(js|css|png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf)$/;

// Register a route to cache assets using StaleWhileRevalidate strategy
registerRoute(
  ({ request, url }) => {
    // Check if the request URL matches the assets regex
    return request.destination === 'style' || request.destination === 'script' || (request.destination === 'image' && url.pathname.match(assetsRegex));
  },
  new StaleWhileRevalidate({
    cacheName: assetsCacheName,
  })
);

