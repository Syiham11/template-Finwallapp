var static = "Finwallapp-v1";
var cacheassets = [
  "landing.html",
  "login.html",
  "signup.html",
  "index.html",
  "analytics.html",
  "wallet.html",
  "shop.html",
  "profile.html",
  "css/style.css",
  "js/jquery-3.3.1.min.js",
  "js/popper.min.js",
  "vendor/bootstrap/js/bootstrap.min.js",
  "js/jquery.cookie.js",
  "vendor/swiper/js/swiper.min.js",
  "vendor/nouislider/nouislider.min.js",
  "js/main.js",
  "js/color-scheme-demo.js",
  "img/user1.png",
  "img/user2.png",
  "img/user3.png",
  "img/user4.png",
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
  "img/image5.jpg",
  "img/image6.jpg",
  "img/image7.jpg",
  "img/image8.jpg",
  "img/image9.jpg",
  "img/image10.jpg",
  "img/about.png",
  "img/refer.png",
  "img/QR.png",
  "img/install-app.png", 
];

self.addEventListener("install", function (event) {    
    event.waitUntil(
        caches.open(static).then(function (cache) {
            cache.addAll(cacheassets);
        }).then(function () {
            return self.skipWaiting();
        })
    );
});
self.addEventListener("activate", function (event) {    
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request)
        })
    );
});
