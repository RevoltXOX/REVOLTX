const CACHE_NAME = 'prof-site-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/about.html',
  '/services.html',
  '/portfolio.html',
  '/contact.html',
  '/assets/css/styles.css',
  '/assets/js/script.js',
  '/assets/images/hero-bg.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Кэш открыт');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
