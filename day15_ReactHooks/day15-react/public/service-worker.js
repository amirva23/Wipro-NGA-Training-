// Cache version
const CACHE_NAME = "day15-cache-v1";
const urlsToCache = ["/", "/index.html"];

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Files cached");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
