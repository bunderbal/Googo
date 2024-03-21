self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('fairy-tale-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/path/to/icon.png',
        '/path/to/bootstrap.min.css',
        '/path/to/animate.min.css',
        '/path/to/all.min.css',
        '/path/to/jquery.min.js',
        '/path/to/bootstrap.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});