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
    "url": "assets/css/styles.6369231d.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/17.95f54666.js",
    "revision": "58cbdac935e36cc004c6f537761a8fef"
  },
  {
    "url": "assets/js/app.95f54666.js",
    "revision": "677cfe28214817c504ce620a3d8774b8"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.95f54666.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.95f54666.js",
    "revision": "9f114f172035aee7908f7d7ee7f8a39c"
  },
  {
    "url": "assets/js/en-US/README.md.95f54666.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.95f54666.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.95f54666.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.95f54666.js",
    "revision": "6d740583268309e0e2432c3cc34b6d02"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.95f54666.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.95f54666.js",
    "revision": "73a6ea750dcdf3165ed8afa76344fd5f"
  },
  {
    "url": "assets/js/knowledge/web/README.md.95f54666.js",
    "revision": "5eef378b1e5e451d0344fec03508b7df"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.95f54666.js",
    "revision": "1365924cfe64c316299cbb75dc9f9b0f"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.95f54666.js",
    "revision": "7c479b361d7c9e373e5efb46e6133d9f"
  },
  {
    "url": "assets/js/LayoutWrapper.95f54666.js",
    "revision": "03a79d585f55f9ed01a215463487f3d9"
  },
  {
    "url": "assets/js/notFoundWrapper.95f54666.js",
    "revision": "a3af098d3a7e44d39fa04338a8b4850a"
  },
  {
    "url": "assets/js/README.md.95f54666.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.95f54666.js",
    "revision": "3b951461537a921e6f469147075825f1"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.95f54666.js",
    "revision": "78a7106e23ae0a14a1264e05fc1637e1"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "5e53e45544ec6ec0ad9639a7d8eaae4a"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "e15df246094f46f9e2389efc87356267"
  },
  {
    "url": "en-US/index.html",
    "revision": "a870fe0d440d41a6a093b5add6bd8975"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "72ab6d91e3534547d981e70690a93ee0"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "d42647e3a392a9ccd942dbee5c92480e"
  },
  {
    "url": "guide/index.html",
    "revision": "7d72a2421ea53b1054ad1d5df0613481"
  },
  {
    "url": "index.html",
    "revision": "4d24748983c9b7c106b5b6381236b54a"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "0fed4aadc790e6717169425481681294"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "b5eee2b00111b0654953d014c1d93c4f"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "f1037cbe99daa4e9a735b603de85f50c"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "50d98b97173823ee54111c146036dda7"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "a1a3f56d3d87c7c12f736412f40091e6"
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
    "revision": "00d2f333deab13bba1b584acfd8006c6"
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
