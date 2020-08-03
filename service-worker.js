/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "antd-icon.svg",
    "revision": "f31032253edf454e1280c009ce0277a5"
  },
  {
    "url": "assets/css/14.styles.facf95e2.css",
    "revision": "4bbce5651b58e620b166c2ea49c25ca1"
  },
  {
    "url": "assets/css/16.styles.95ecd36e.css",
    "revision": "bfae747143c495094b77483463aabeb5"
  },
  {
    "url": "assets/css/17.styles.f1cadf49.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/4.styles.1b06052c.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/7.styles.d3b8f120.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.5ebf5049.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/17.206ee1d1.js",
    "revision": "58cbdac935e36cc004c6f537761a8fef"
  },
  {
    "url": "assets/js/app.206ee1d1.js",
    "revision": "af5ba6e03ba5aeb0236cb313a32cb792"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.206ee1d1.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.206ee1d1.js",
    "revision": "9f114f172035aee7908f7d7ee7f8a39c"
  },
  {
    "url": "assets/js/en-US/README.md.206ee1d1.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.206ee1d1.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.206ee1d1.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.206ee1d1.js",
    "revision": "6d740583268309e0e2432c3cc34b6d02"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.206ee1d1.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.206ee1d1.js",
    "revision": "73a6ea750dcdf3165ed8afa76344fd5f"
  },
  {
    "url": "assets/js/knowledge/web/README.md.206ee1d1.js",
    "revision": "5eef378b1e5e451d0344fec03508b7df"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.206ee1d1.js",
    "revision": "1365924cfe64c316299cbb75dc9f9b0f"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.206ee1d1.js",
    "revision": "7c479b361d7c9e373e5efb46e6133d9f"
  },
  {
    "url": "assets/js/LayoutWrapper.206ee1d1.js",
    "revision": "03a79d585f55f9ed01a215463487f3d9"
  },
  {
    "url": "assets/js/notFoundWrapper.206ee1d1.js",
    "revision": "a3af098d3a7e44d39fa04338a8b4850a"
  },
  {
    "url": "assets/js/README.md.206ee1d1.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.206ee1d1.js",
    "revision": "3b951461537a921e6f469147075825f1"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.206ee1d1.js",
    "revision": "78a7106e23ae0a14a1264e05fc1637e1"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "2cdbdfe7eba2c3bab3671db3afdec1cf"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "24bc693f3fe8b81aa5d01ce0a14235b0"
  },
  {
    "url": "en-US/index.html",
    "revision": "06ab77a2b91e8ebe9595f416ff03b10a"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "b6807d9dcb548849ea799836e506fbc2"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "82fa11d92757d5272fd3d25426120afb"
  },
  {
    "url": "guide/index.html",
    "revision": "5bb22ec24722c5c533944a7bced4e077"
  },
  {
    "url": "index.html",
    "revision": "e6c9427ade50161365e8da6867a7dc3e"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "2e295e0a85272c7f4267f5a1759f871c"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "33f9bf78109e7a7ac54f8ee5f7573c6e"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "6bf67b8777caff85b61a561f30c7edc9"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "b4e2bf992b864cee1e5ef4f61a577d87"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "863428d5128583b21c71e38b4134567f"
  },
  {
    "url": "logo-192x192.png",
    "revision": "a448fa4631b9f10f1ed112222cdab9db"
  },
  {
    "url": "logo-512x512.png",
    "revision": "dbbb455e9c76d80a564d4817e12df7d4"
  },
  {
    "url": "markdown-icon.svg",
    "revision": "f7794256a65696e3d5abe25368edff5f"
  },
  {
    "url": "update-log.html",
    "revision": "bb8739c5b27025d2844459dee3db201c"
  },
  {
    "url": "wgplogo.svg",
    "revision": "91d92b18733531ba1b3a0a0f393a4ad9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self
        .skipWaiting()
        .then(
          () => replyPort.postMessage({ error: null }),
          error => replyPort.postMessage({ error })
        )
    );
  }
});
