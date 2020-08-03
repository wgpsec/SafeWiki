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
    "url": "_post_pic/xxe/xml1.png",
    "revision": "60796d7a814984447f476468a0fc14f6"
  },
  {
    "url": "_post_pic/xxe/xml2.png",
    "revision": "b7c211d4d8ec719af9c8d0573632fd13"
  },
  {
    "url": "_post_pic/xxe/xmlp1.png",
    "revision": "ade945dd04acca143c20083984208c20"
  },
  {
    "url": "_post_pic/xxe/xmlr1.png",
    "revision": "8232898315af00be001ff69326687428"
  },
  {
    "url": "_post_pic/xxe/xmlre1.png",
    "revision": "59a828645b48d664e56a42249e81b1ea"
  },
  {
    "url": "_post_pic/xxe/xmlre2.png",
    "revision": "17463913eed1e0c967079f924da69e7b"
  },
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
    "url": "assets/css/styles.51370035.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/29.64703163.js",
    "revision": "8005310ee12f9c59828df23829b9c63e"
  },
  {
    "url": "assets/js/app.64703163.js",
    "revision": "a2280c4376cf820ac009ce728db36005"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.64703163.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.64703163.js",
    "revision": "6b5c3fcef12efb4165df3d042e86b365"
  },
  {
    "url": "assets/js/en-US/README.md.64703163.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.64703163.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.64703163.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.64703163.js",
    "revision": "4fdd76fe067ffc693b7e35f4a0364ae6"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.64703163.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.64703163.js",
    "revision": "95a1be792bad56aab34c70c3931f2459"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.64703163.js",
    "revision": "c4695900df0f143435ec9233c757d6f1"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.64703163.js",
    "revision": "8ef785f51b1d65574385de94a67eac4e"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.64703163.js",
    "revision": "3020ab6d24044b372f99e926a12ee3f4"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.64703163.js",
    "revision": "8bc0f31221de3aa636c7ef94345742d0"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.64703163.js",
    "revision": "90ca0bb2164397caad39f5842b5580fc"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.64703163.js",
    "revision": "0779835f38d375ec893f2185abb7fbf2"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.64703163.js",
    "revision": "887d872fc931ed01685422df930f7786"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.64703163.js",
    "revision": "d684735f467fe04ebf37f2f5b9b18915"
  },
  {
    "url": "assets/js/knowledge/web/README.md.64703163.js",
    "revision": "389a1eaea4cc7a115b442955686dc04e"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.64703163.js",
    "revision": "53bd4deed8349a874862bb0e330351de"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.64703163.js",
    "revision": "32bba4c88557551dd9c3b464f4e243a5"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.64703163.js",
    "revision": "302bd2a09692d4a1a6ef467aefb1ad01"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.64703163.js",
    "revision": "a014a8f8ec01c23b0799292ceaf7dfbf"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.64703163.js",
    "revision": "2e3613609d452b95626d2c0aa779f78b"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.64703163.js",
    "revision": "0349adf2819f0fe6f5b2c519c2f18c9e"
  },
  {
    "url": "assets/js/LayoutWrapper.64703163.js",
    "revision": "233f35a38bbac87bafa2de69f76f885a"
  },
  {
    "url": "assets/js/notFoundWrapper.64703163.js",
    "revision": "822d6f2ab5fca4591cbe1721074d7eca"
  },
  {
    "url": "assets/js/README.md.64703163.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.64703163.js",
    "revision": "44b740e346dc2f298b713ce137acc9fa"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.64703163.js",
    "revision": "91f725644fd46a705c13ee1600b579a8"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "01264f141797fd2d48a0fb9bcf1ad5b5"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "0c63ac4bdee87cae0dbd73a9f56bf6d1"
  },
  {
    "url": "en-US/index.html",
    "revision": "957c8be6514de46d604c994a3349ecee"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "cf88cbc721f80235a47493bd5cbc52de"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "ea18155917982e271a86a565f9cf2480"
  },
  {
    "url": "guide/index.html",
    "revision": "c6b7dd425d8d5a3c8453d6841628e236"
  },
  {
    "url": "index.html",
    "revision": "0499faca90ab98a2673e064dd2e2c5e5"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "f39c21f9a809cfd5d1245d575b36bf7e"
  },
  {
    "url": "knowledge/web/code-injection.html",
    "revision": "4d8183171cb57fef6eae1f5776bb647e"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html",
    "revision": "6493aa04c0cffaff3ef8b2619b254ec6"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "cec3165b1939f1129ecd9a0ef6a18537"
  },
  {
    "url": "knowledge/web/file-download.html",
    "revision": "b037750bbd9923a6267c824ae77f4b8a"
  },
  {
    "url": "knowledge/web/file-includes.html",
    "revision": "25dc782689807d1ba57c8d57ed5b6b76"
  },
  {
    "url": "knowledge/web/file-upload.html",
    "revision": "2e22bce4900ec4a6ea0e450fc3774ff0"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "9eee3c8fd6249368b196efc7ff45d5f9"
  },
  {
    "url": "knowledge/web/jwt-cookie.html",
    "revision": "cf38ae51e03cae99dafa93c7abaa6b01"
  },
  {
    "url": "knowledge/web/logical-vulns.html",
    "revision": "e61d291d515ea300ae2d6bd04b0b7e90"
  },
  {
    "url": "knowledge/web/phpsec.html",
    "revision": "d0f49e34be9edff64d8d13bb790bf98c"
  },
  {
    "url": "knowledge/web/same-origin-policy.html",
    "revision": "34c0cacc290f9d4f203a2a7b4ddc5ebc"
  },
  {
    "url": "knowledge/web/session-sec.html",
    "revision": "f454062a209844dd241daba8ccc7a6d3"
  },
  {
    "url": "knowledge/web/source-leaked.html",
    "revision": "df87c64f4b83e7eae357cccda8395c05"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "a423af8dc40746a3a79b1fb7a1d4b1c2"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "a4c6a5fedffc6a1586197493b4820c4d"
  },
  {
    "url": "knowledge/web/xxe.html",
    "revision": "89785de957490eeeb0714e1c0b441b48"
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
    "revision": "2224c294850c457119b58e0b835bda2a"
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
