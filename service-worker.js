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
    "url": "assets/css/styles.6f03f429.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/29.efdc9f3a.js",
    "revision": "8005310ee12f9c59828df23829b9c63e"
  },
  {
    "url": "assets/js/app.efdc9f3a.js",
    "revision": "219c4f190866a82023e9e25c10ff4075"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.efdc9f3a.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.efdc9f3a.js",
    "revision": "6b5c3fcef12efb4165df3d042e86b365"
  },
  {
    "url": "assets/js/en-US/README.md.efdc9f3a.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.efdc9f3a.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.efdc9f3a.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.efdc9f3a.js",
    "revision": "4fdd76fe067ffc693b7e35f4a0364ae6"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.efdc9f3a.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.efdc9f3a.js",
    "revision": "95a1be792bad56aab34c70c3931f2459"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.efdc9f3a.js",
    "revision": "c4695900df0f143435ec9233c757d6f1"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.efdc9f3a.js",
    "revision": "8ef785f51b1d65574385de94a67eac4e"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.efdc9f3a.js",
    "revision": "3020ab6d24044b372f99e926a12ee3f4"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.efdc9f3a.js",
    "revision": "8bc0f31221de3aa636c7ef94345742d0"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.efdc9f3a.js",
    "revision": "90ca0bb2164397caad39f5842b5580fc"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.efdc9f3a.js",
    "revision": "0779835f38d375ec893f2185abb7fbf2"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.efdc9f3a.js",
    "revision": "887d872fc931ed01685422df930f7786"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.efdc9f3a.js",
    "revision": "d684735f467fe04ebf37f2f5b9b18915"
  },
  {
    "url": "assets/js/knowledge/web/README.md.efdc9f3a.js",
    "revision": "389a1eaea4cc7a115b442955686dc04e"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.efdc9f3a.js",
    "revision": "53bd4deed8349a874862bb0e330351de"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.efdc9f3a.js",
    "revision": "32bba4c88557551dd9c3b464f4e243a5"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.efdc9f3a.js",
    "revision": "302bd2a09692d4a1a6ef467aefb1ad01"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.efdc9f3a.js",
    "revision": "a014a8f8ec01c23b0799292ceaf7dfbf"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.efdc9f3a.js",
    "revision": "2e3613609d452b95626d2c0aa779f78b"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.efdc9f3a.js",
    "revision": "32667c10a8dac608ce5e7f5856e08c6a"
  },
  {
    "url": "assets/js/LayoutWrapper.efdc9f3a.js",
    "revision": "233f35a38bbac87bafa2de69f76f885a"
  },
  {
    "url": "assets/js/notFoundWrapper.efdc9f3a.js",
    "revision": "822d6f2ab5fca4591cbe1721074d7eca"
  },
  {
    "url": "assets/js/README.md.efdc9f3a.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.efdc9f3a.js",
    "revision": "44b740e346dc2f298b713ce137acc9fa"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.efdc9f3a.js",
    "revision": "91f725644fd46a705c13ee1600b579a8"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "189f8d2d5e9ded210bafea9145ee53ad"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "9b7deb355751b714d5433943af6e979d"
  },
  {
    "url": "en-US/index.html",
    "revision": "13d3d9ad493718f71505b4d133cf8f6c"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "5ea79bf3825c084199e7d914605f7ea1"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "a168dcd2fd1e298d4aea3fa5a06a5050"
  },
  {
    "url": "guide/index.html",
    "revision": "2e8b058e08c4e1a6fad75b95823d203b"
  },
  {
    "url": "index.html",
    "revision": "1c9996f3ed981f7b49878d3be0dbd5eb"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "f2e18dc10ead208f8b852b9381d4f6ad"
  },
  {
    "url": "knowledge/web/code-injection.html",
    "revision": "ec277be0e94d1c2ae0eca55be4200cf2"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html",
    "revision": "0573995b323bb9dd9d403d34c0d1d82a"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "483c3c9f5b2f80637737917d6961da54"
  },
  {
    "url": "knowledge/web/file-download.html",
    "revision": "d713672fb1180f7a5f2f6cc7fcd3365b"
  },
  {
    "url": "knowledge/web/file-includes.html",
    "revision": "00fe955e3b21bef71e316f66218e47e2"
  },
  {
    "url": "knowledge/web/file-upload.html",
    "revision": "a133285c4f470f7e3dfb75b1f57e3b19"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "8fad3bd49f72e54eaca896c9d80fdacc"
  },
  {
    "url": "knowledge/web/jwt-cookie.html",
    "revision": "da622cc7929162f4c5989351eef878f7"
  },
  {
    "url": "knowledge/web/logical-vulns.html",
    "revision": "71778f8e9ad50e9b718d828df798f3c9"
  },
  {
    "url": "knowledge/web/phpsec.html",
    "revision": "4e7eedfaa7d543c0d566209ebd252e79"
  },
  {
    "url": "knowledge/web/same-origin-policy.html",
    "revision": "25f4d1c11f41d4f910891aea8a8112b3"
  },
  {
    "url": "knowledge/web/session-sec.html",
    "revision": "3af840c6ba23353ecddc1b683243c041"
  },
  {
    "url": "knowledge/web/source-leaked.html",
    "revision": "97c26436253d890ad74089169e9a40da"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "c1085801f639273ac56da58f3d3a0cef"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "c07e0eeab7f3e0e3e39184f9a94bc1fd"
  },
  {
    "url": "knowledge/web/xxe.html",
    "revision": "5e6e994de7d0fe97e139af3c57ddbcd8"
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
    "revision": "91f68d599cf87aca8b11122fdd6d7a68"
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
