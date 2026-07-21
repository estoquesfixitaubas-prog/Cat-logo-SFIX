// ==CACHE-INICIO==
const CACHE_NAME = 'catalogo-cache-v2';

const SHELL_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/logo-sfix.png",
  "./assets/logo-makita.png",
  "./assets/watermark-tile.png",
  "./assets/seta-voltar.png",
  "./assets/intro-makita.jpg",
  "./assets/intro-dewalt.jpg",
  "./assets/produtos/1-m9510b.png",
  "./assets/produtos/2-m0920b.png",
  "./assets/produtos/3-ga9020.png",
  "./assets/produtos/4-dga517z.png",
  "./assets/produtos/5-dga504z.png"
];
// ==CACHE-FIM==

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
