'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "697067af526f878fb478722557f87484",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "16199ff6b6ff5c6924f98747a4eb6698",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d93179ae565efd68c1e0d310e86a2eb",
".git/logs/refs/heads/main": "a5837b448f71f56493a45cf1cf657076",
".git/logs/refs/remotes/origin/main": "aada894bebcab203de6c994a7249ff59",
".git/objects/06/074ccb713ada12427debf84f6a03b1c7e346ca": "596a53a6a0fc30748368a4d3cb69719d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/bde188ec48d6df9c3f24ea4b94f7298de7e6ec": "643033fcbbcfdfce538da1ce8417bde8",
".git/objects/1e/1ce1986c0612e63d57b915f80ef3bffb307a43": "201e0bdf338f5b1e451f902fd4fc054d",
".git/objects/20/5b2843a7361d45b2069086123cade0a4f98cad": "af69c572720ca54b2137f038cae5c635",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/24/6a861a77e28073ff254655f032b155c3b2158c": "79770b75cba5c9b62bf501c3931e04ca",
".git/objects/25/7e42c5f336471771c78586f54d18b190845c36": "09f928739fd76bc85710e456c734165e",
".git/objects/27/723860cb2f210fa5295b9e20882c89c8db3573": "0ed55665c5db4b4f4c0407eb74025787",
".git/objects/30/cbfee68d4c1ad54d813a6fa46e8ff0bb13cbb0": "9f48ec6442669be5acdfc4c0d9630600",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/3a/c564db9431f5f44c941bbe323c1441f2b1abc6": "9bfdc1b27f054db402a5202c1b66102b",
".git/objects/41/2138b5668ef1856573da96a09399d66fe26e11": "c33b79cf1c3d4e32facf14e668425b8b",
".git/objects/41/861b91b2b77742431f6af25479331a722d7bd1": "d297bd69fbee1963c8b0f66f010e2817",
".git/objects/43/ac3cc2f1553e7894f200a7c6e6b9642cead267": "a4c99dcb1d3fed5fa89a45463d90dce5",
".git/objects/44/313ca448a294de7a8e39b816203390edc52377": "ea2eff9e264f5bf8ffa3b6310728c416",
".git/objects/49/33144c9838f8240a3cb2fded20e6d639e5b130": "f8b8dc374a2b8f6294e08487c579557f",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/f4e018ca988ee030fa4357180a1eae4d97f72b": "7a1a968ad534b0757e24fed92ca3fcac",
".git/objects/58/213cea3c6d88b338a5ad100a976356be0fed9b": "e30ea423652ae11b19708e03c74e8049",
".git/objects/5c/6ea87b89e8c0e49202213c72ea1e19f4f2d31e": "c592d524d864444acb1734f819ed447b",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/63/6a0f9972cb52c405fcefcb30f2ff1549d67529": "d79974cd07387eb256b5846bc4c49c91",
".git/objects/63/c59d0256608b304fd0b446779a1df874e27cac": "25bdbc8f756331b8f0489fc4e96b652f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/adbcc04c12470629e74b719df1d1fb15582bfa": "a4f3484f35639b8038e9831ce2e496b3",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/82/55a2edcc4621769d511d1d797b3abd439d0860": "b0ae8320af6cff53ae915ffe5be07e10",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9a/9605263b600dd1ab63466b27e7478ab6078967": "f788bb3a961fe7734af448609de6a6ac",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a7/5da6e707658763ec22b77abc6f9961b4efd297": "5ec542f93f8ac705b1816e84aa6c7e17",
".git/objects/a8/d26d45e9c716423db9769b42b2f3ef74742d0a": "b35f1d4b8a1ea2e5d2fcc235312b10d7",
".git/objects/b1/d432d330d0961cbb24cf170d685f8649623dfc": "813d53cba2f0b3eeb032be48ebfb0f1c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cbe9eaa8abb33b6ed72e3e899e16a97a672932": "3dd3a9406fa867fd04b574633b07ab76",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bb/adb3a73362996d9746fcfd70f57c6a01d1f204": "aa94730b21a63fdd9df30d054a3a183a",
".git/objects/c5/dc3e503e17bb248e7ab0448c1d7bd51304cad6": "4595a00ad49b8e5bf0738137e79935ee",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/77eb04bf30a17e98575781fc32473d2325258e": "2beb00b2043ed74b5b924897068d18b6",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d3/039dc9c9eab1aff340d6d0866773a16eba1a54": "a28d29c11f6061fa2ae74c4f44ff70f9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/af166cfd0bc56f6c92cf3d91f2fef1844c1022": "6f340842aa6960bc76b2ea32dc057c62",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e8/4a1bde1ca0f38dd74bb63543efdf6220cda30c": "3136119389413627f08e03b6ffdf72c2",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/fd078418d8098ccf093cea77d6e4396c370c03": "f9d56f12fb92c4851b62b808cc0ab498",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b5c8c6a9f818df7a36f62e1b658f71db34a088": "0e77154710158700884db938f0133d70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/f5/5ab225436ad6b5a5c6d6a243d59330988a0ebc": "dabf68216341946ede247e7273f60ac8",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "42a60f796d8a2809c317b2668a636e66",
".git/refs/remotes/origin/main": "42a60f796d8a2809c317b2668a636e66",
"assets/AssetManifest.bin": "b696212461f23049caef3cc160099fef",
"assets/AssetManifest.bin.json": "90d690d0f01400d1b0aecd8c1b13c48e",
"assets/AssetManifest.json": "808c932b30d70e16c76a6fc8a4e306d8",
"assets/assets/animations/loading.json": "f629b1d210a6b8aae43d1104fcd6f727",
"assets/assets/fonts/karlaBold.ttf": "b45be274b8b65fc9c72b038d72486edd",
"assets/assets/fonts/karlaItalic.ttf": "363d3c4ec8cb40d863cdacfc0049eb12",
"assets/assets/fonts/karlaRegular.ttf": "750e3658d4460a397a551dfac26bb272",
"assets/assets/fonts/Poppins-Bold.ttf": "7940efc40d8e3b477e16cc41b0287139",
"assets/assets/fonts/Poppins-Regular.ttf": "731a28a413d642522667a2de8681ff35",
"assets/assets/fonts/Poppins-Thin.ttf": "735aa7d8e35b63068b9113ea2545f0c3",
"assets/assets/images/shape1.png": "264ccd4f367335a66031fc0be8ca43c1",
"assets/assets/images/shape2.png": "af64720d9e21ad1cec5a1802d47ac75a",
"assets/FontManifest.json": "bf5e0a5935a990366812f79ff038eab1",
"assets/fonts/MaterialIcons-Regular.otf": "fc15505d3a49b07daa8b8cf800e35d7d",
"assets/NOTICES": "cfd51416745d2b0562593590625e8efd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "1c0b9c426099595ac16b329dfa10bf59",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ee92e11ea33f76340982e9e3f5620929",
"/": "ee92e11ea33f76340982e9e3f5620929",
"main.dart.js": "ebec5e39c16c55df818f2ca15d3972da",
"manifest.json": "068dea329f02a23b9066541394f9e6ac",
"version.json": "f4568a14d83eabde89b97fc5eadaba6b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
