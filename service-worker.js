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
    "url": "assets/css/styles.4b402a86.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/29.2a9c796a.js",
    "revision": "8005310ee12f9c59828df23829b9c63e"
  },
  {
    "url": "assets/js/app.2a9c796a.js",
    "revision": "94564ace460425fda980c2ec79a34de2"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.2a9c796a.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.2a9c796a.js",
    "revision": "6b5c3fcef12efb4165df3d042e86b365"
  },
  {
    "url": "assets/js/en-US/README.md.2a9c796a.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.2a9c796a.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.2a9c796a.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.2a9c796a.js",
    "revision": "4fdd76fe067ffc693b7e35f4a0364ae6"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.2a9c796a.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.2a9c796a.js",
    "revision": "95a1be792bad56aab34c70c3931f2459"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.2a9c796a.js",
    "revision": "c4695900df0f143435ec9233c757d6f1"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.2a9c796a.js",
    "revision": "8ef785f51b1d65574385de94a67eac4e"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.2a9c796a.js",
    "revision": "3020ab6d24044b372f99e926a12ee3f4"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.2a9c796a.js",
    "revision": "8bc0f31221de3aa636c7ef94345742d0"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.2a9c796a.js",
    "revision": "90ca0bb2164397caad39f5842b5580fc"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.2a9c796a.js",
    "revision": "0779835f38d375ec893f2185abb7fbf2"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.2a9c796a.js",
    "revision": "887d872fc931ed01685422df930f7786"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.2a9c796a.js",
    "revision": "d684735f467fe04ebf37f2f5b9b18915"
  },
  {
    "url": "assets/js/knowledge/web/README.md.2a9c796a.js",
    "revision": "5eef378b1e5e451d0344fec03508b7df"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.2a9c796a.js",
    "revision": "53bd4deed8349a874862bb0e330351de"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.2a9c796a.js",
    "revision": "32bba4c88557551dd9c3b464f4e243a5"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.2a9c796a.js",
    "revision": "302bd2a09692d4a1a6ef467aefb1ad01"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.2a9c796a.js",
    "revision": "a014a8f8ec01c23b0799292ceaf7dfbf"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.2a9c796a.js",
    "revision": "2e3613609d452b95626d2c0aa779f78b"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.2a9c796a.js",
    "revision": "32667c10a8dac608ce5e7f5856e08c6a"
  },
  {
    "url": "assets/js/LayoutWrapper.2a9c796a.js",
    "revision": "233f35a38bbac87bafa2de69f76f885a"
  },
  {
    "url": "assets/js/notFoundWrapper.2a9c796a.js",
    "revision": "822d6f2ab5fca4591cbe1721074d7eca"
  },
  {
    "url": "assets/js/README.md.2a9c796a.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.2a9c796a.js",
    "revision": "d136dec80ec192cce68a36e9b1418e06"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.2a9c796a.js",
    "revision": "91f725644fd46a705c13ee1600b579a8"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "8da864ae10cb862590f2fe485c51d87e"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "73dbb770c577c53ff218228026a21c35"
  },
  {
    "url": "en-US/index.html",
    "revision": "ea8817f172ce30472df4718a131ae72e"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "f3858d714f1b4f16d2ef40d3a7f9b91b"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "36c43431f4bdd6be338b22362edab76e"
  },
  {
    "url": "guide/index.html",
    "revision": "a98b31cb38d51553ba5621f6eadd8f23"
  },
  {
    "url": "index.html",
    "revision": "055078fa1fe8564f170cd29706d57c8d"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "b4044317937959fc159183c4c00da267"
  },
  {
    "url": "knowledge/web/code-injection.html",
    "revision": "5cdd99da3531c891807fe02b3a5e784c"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html",
    "revision": "ba24fccc145784e4852c4ae882c8d7e9"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "62c27d91cd75672ff4744fde0ac36cd4"
  },
  {
    "url": "knowledge/web/file-download.html",
    "revision": "09b095d9dac0c0269ab76e3711e33a98"
  },
  {
    "url": "knowledge/web/file-includes.html",
    "revision": "1517d776bbab3ca101c0ad75aacc18ad"
  },
  {
    "url": "knowledge/web/file-upload.html",
    "revision": "be5bc3c1f111de01132a83d20c4a6e79"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "4995ec1e466ced7967b9985f1c047c62"
  },
  {
    "url": "knowledge/web/jwt-cookie.html",
    "revision": "1743d85e20d7dfb3eda4e5a33324d851"
  },
  {
    "url": "knowledge/web/logical-vulns.html",
    "revision": "9942c4931939d1bd3d01ec42167acf57"
  },
  {
    "url": "knowledge/web/phpsec.html",
    "revision": "3e6e798dd64274f4091f232717570afb"
  },
  {
    "url": "knowledge/web/same-origin-policy.html",
    "revision": "0b31c1126bc01dfe0e0889efef3a9578"
  },
  {
    "url": "knowledge/web/session-sec.html",
    "revision": "786f577b0a580de4d240f4ecbd66c2a9"
  },
  {
    "url": "knowledge/web/source-leaked.html",
    "revision": "52eea78098a240923e8fc7d2b3af85ce"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "9494bdacc28b84a44e2618f3fa8d2079"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "168e9d2557f182e6cf65c7e57a0cb0e3"
  },
  {
    "url": "knowledge/web/xxe.html",
    "revision": "9cc48e5da1d2f6cfe1e0f25999e1a3ff"
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
    "revision": "99780bf7030fd3d129f6204e15812ebb"
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
