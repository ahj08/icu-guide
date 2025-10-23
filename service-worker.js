self.addEventListener('install', e => {
  e.waitUntil(caches.open('icu-cache-v1').then(c => c.addAll(['./index.html', './manifest.json', './KakaoTalk_20251023_191520573.jpg'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
