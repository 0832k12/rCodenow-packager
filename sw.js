// These will be replaced at build-time by generate-service-worker-plugin.js
const ASSETS = ["","js/download-project.40419b431457ecc5b869.worker.js","assets/reset.80a6e1615fc013684ad8047dba5ce064.svg","assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png","js/vendors~icns~jszip~sha256.45d79f17e909e6d47b0e.js","js/icns.aa20e2def4432ba15127.js","js/jszip.41ecc138b10fe9350a55.js","js/p4.2a1caf8aa9aedd3a6a9a.js","js/packager-options-ui.6bc9dc87fa2beea1d614.js","js/sha256.65a53bbd4b259520122b.js"];
const CACHE_NAME = "p4-9755f65ca20cc99fe46f66c8ad6b47db08d6b39d1a9350c78e143867051e501a";
const IS_PRODUCTION = true;

const base = location.pathname.substr(0, location.pathname.indexOf('sw.js'));

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS.map(i => i === '' ? base : i))));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(i => i !== CACHE_NAME).map(i => caches.delete(i))))
  );
});

const fetchWithTimeout = (req) => new Promise((resolve, reject) => {
  const timeout = setTimeout(reject, 5000);
  fetch(req)
    .then((res) => {
      clearTimeout(timeout);
      resolve(res);
    })
    .catch((err) => {
      clearTimeout(timeout);
      reject(err);
    });
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  const relativePathname = url.pathname.substr(base.length);
  if (IS_PRODUCTION && ASSETS.includes(relativePathname)) {
    url.search = '';
    const immutable = !!relativePathname;
    if (immutable) {
      event.respondWith(
        caches.match(new Request(url)).then((res) => res || fetch(event.request))
      );
    } else {
      event.respondWith(
        fetchWithTimeout(event.request).catch(() => caches.match(new Request(url)))
      );
    }
  }
});
