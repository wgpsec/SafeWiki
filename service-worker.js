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
    "url": "assets/css/26.styles.eebe0d41.css",
    "revision": "4bbce5651b58e620b166c2ea49c25ca1"
  },
  {
    "url": "assets/css/28.styles.c3caf0ea.css",
    "revision": "bfae747143c495094b77483463aabeb5"
  },
  {
    "url": "assets/css/29.styles.da074ddc.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/4.styles.fc7e5070.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/7.styles.07b9ecde.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.5ed85c70.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/29.d192ff2f.js",
    "revision": "8005310ee12f9c59828df23829b9c63e"
  },
  {
    "url": "assets/js/app.d192ff2f.js",
    "revision": "e078b00549246cee80b955b1a9657fe6"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.d192ff2f.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.d192ff2f.js",
    "revision": "6b5c3fcef12efb4165df3d042e86b365"
  },
  {
    "url": "assets/js/en-US/README.md.d192ff2f.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.d192ff2f.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.d192ff2f.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.d192ff2f.js",
    "revision": "4fdd76fe067ffc693b7e35f4a0364ae6"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.d192ff2f.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.d192ff2f.js",
    "revision": "95a1be792bad56aab34c70c3931f2459"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.d192ff2f.js",
    "revision": "c4695900df0f143435ec9233c757d6f1"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.d192ff2f.js",
    "revision": "8ef785f51b1d65574385de94a67eac4e"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.d192ff2f.js",
    "revision": "3020ab6d24044b372f99e926a12ee3f4"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.d192ff2f.js",
    "revision": "8bc0f31221de3aa636c7ef94345742d0"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.d192ff2f.js",
    "revision": "90ca0bb2164397caad39f5842b5580fc"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.d192ff2f.js",
    "revision": "0779835f38d375ec893f2185abb7fbf2"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.d192ff2f.js",
    "revision": "887d872fc931ed01685422df930f7786"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.d192ff2f.js",
    "revision": "d684735f467fe04ebf37f2f5b9b18915"
  },
  {
    "url": "assets/js/knowledge/web/README.md.d192ff2f.js",
    "revision": "389a1eaea4cc7a115b442955686dc04e"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.d192ff2f.js",
    "revision": "53bd4deed8349a874862bb0e330351de"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.d192ff2f.js",
    "revision": "32bba4c88557551dd9c3b464f4e243a5"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.d192ff2f.js",
    "revision": "302bd2a09692d4a1a6ef467aefb1ad01"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.d192ff2f.js",
    "revision": "c2361df3a4d2dcb4a13a53802aa648a2"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.d192ff2f.js",
    "revision": "2e3613609d452b95626d2c0aa779f78b"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.d192ff2f.js",
    "revision": "5f84cedacfc1259c58b781c2157e6621"
  },
  {
    "url": "assets/js/LayoutWrapper.d192ff2f.js",
    "revision": "233f35a38bbac87bafa2de69f76f885a"
  },
  {
    "url": "assets/js/notFoundWrapper.d192ff2f.js",
    "revision": "822d6f2ab5fca4591cbe1721074d7eca"
  },
  {
    "url": "assets/js/README.md.d192ff2f.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.d192ff2f.js",
    "revision": "44b740e346dc2f298b713ce137acc9fa"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.d192ff2f.js",
    "revision": "91f725644fd46a705c13ee1600b579a8"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "4aff8cf638a7a84a8bbd874b7f034328"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "253933d9a4aa905eb8e3c32663cd7e8d"
  },
  {
    "url": "en-US/index.html",
    "revision": "f046092fb5653672b5e6ccb684aa0335"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "92c262f7f1820060070db8cbadbaf388"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "41a9592a9a954fbc2daaeb3aeb57ceb3"
  },
  {
    "url": "guide/index.html",
    "revision": "0b58376a83473432400007bb09aeebc1"
  },
  {
    "url": "index.html",
    "revision": "16bdcbd0d79fd1557fe89d9b67036609"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "1fe912a74eea91847368e5f61e0c7306"
  },
  {
    "url": "knowledge/web/code-injection.html",
    "revision": "deea1e8dbbd1917c66de9ba12fa855c0"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html",
    "revision": "cb0a5906a99e7b040822d734605bf791"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "282b567e0ed9f7186bad01368906321b"
  },
  {
    "url": "knowledge/web/file-download.html",
    "revision": "210733f4d3403f0c0f8ac0d0042c750e"
  },
  {
    "url": "knowledge/web/file-includes.html",
    "revision": "536ef4fad7ef74543b693211d3fe21cf"
  },
  {
    "url": "knowledge/web/file-upload.html",
    "revision": "62cd698726bafc34ab9fa8aa28f0ac22"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "76e5023d8cc9dbb9948924167fe1bc4c"
  },
  {
    "url": "knowledge/web/jwt-cookie.html",
    "revision": "15b702b8f1b0be0a7467e9a984a52005"
  },
  {
    "url": "knowledge/web/logical-vulns.html",
    "revision": "69196709449ea1c9c97a4da5e5c1343c"
  },
  {
    "url": "knowledge/web/phpsec.html",
    "revision": "c20609d1bde71d584837571bad2e63de"
  },
  {
    "url": "knowledge/web/same-origin-policy.html",
    "revision": "b4c27e500e01d7d0601c0de9a89cfadc"
  },
  {
    "url": "knowledge/web/session-sec.html",
    "revision": "8c8b68e430d53f03b6f2054bdf806e23"
  },
  {
    "url": "knowledge/web/source-leaked.html",
    "revision": "4879664f7f8303b94609e5430a2281d8"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "440988860514fbb94fe742400a1491d7"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "27028ab699cf3f7204fd1e43b1610f37"
  },
  {
    "url": "knowledge/web/xxe.html",
    "revision": "6cf49dae0d6ca8470031ec10272bfb1b"
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
    "url": "post-pic/xxe/xml1.png",
    "revision": "60796d7a814984447f476468a0fc14f6"
  },
  {
    "url": "post-pic/xxe/xml2.png",
    "revision": "b7c211d4d8ec719af9c8d0573632fd13"
  },
  {
    "url": "post-pic/xxe/xmlp1.png",
    "revision": "ade945dd04acca143c20083984208c20"
  },
  {
    "url": "post-pic/xxe/xmlr1.png",
    "revision": "8232898315af00be001ff69326687428"
  },
  {
    "url": "post-pic/xxe/xmlre1.png",
    "revision": "59a828645b48d664e56a42249e81b1ea"
  },
  {
    "url": "post-pic/xxe/xmlre2.png",
    "revision": "17463913eed1e0c967079f924da69e7b"
  },
  {
    "url": "update-log.html",
    "revision": "8e662b9651563848d3408d5ab4e148d2"
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
