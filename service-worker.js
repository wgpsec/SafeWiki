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
    "url": "assets/css/38.styles.c1c243ad.css",
    "revision": "4bbce5651b58e620b166c2ea49c25ca1"
  },
  {
    "url": "assets/css/4.styles.8a00285e.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/40.styles.79bbb105.css",
    "revision": "bfae747143c495094b77483463aabeb5"
  },
  {
    "url": "assets/css/41.styles.de9fe65a.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/7.styles.51cfa23a.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.2c5d54e2.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/41.228ee201.js",
    "revision": "3a9fb5168cd8ffebc7f8980603b3b6d2"
  },
  {
    "url": "assets/js/app.228ee201.js",
    "revision": "c5a26e347c28d9786f94a969a9f51c11"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.228ee201.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.228ee201.js",
    "revision": "037f97638d7dc5f393acd140fbc7e5f6"
  },
  {
    "url": "assets/js/en-US/README.md.228ee201.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.228ee201.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.228ee201.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.228ee201.js",
    "revision": "822fd55660f502568e807c93bb2e6552"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.228ee201.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.228ee201.js",
    "revision": "e1a4202b8e02f0ac2febeb91119fc24a"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.228ee201.js",
    "revision": "b2d61a9be3e7190b6fad8981718b5055"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.228ee201.js",
    "revision": "8a5d81c2f7663ae4674005291cbf832c"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.228ee201.js",
    "revision": "48e6a0f741f6abc773738953397544cb"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.228ee201.js",
    "revision": "4582424574b602a486983c81309c6abe"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.228ee201.js",
    "revision": "87d6c56da09425737f47073ebb25ec9f"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.228ee201.js",
    "revision": "77a7e59f7cd4e54d981260fd77d88c01"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.228ee201.js",
    "revision": "6a07d8dabc8b28bf3c6fc53edeaa6d8e"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.228ee201.js",
    "revision": "0d4372a753d9a831bf130ad406c02d2b"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.228ee201.js",
    "revision": "a3eb110ca2bff584fc8e34b1bf7afbb6"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.228ee201.js",
    "revision": "195a7a5614e01edb71be15b2c7339e70"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.228ee201.js",
    "revision": "b2168cc907fde7ebbda1a5b27a4e0f22"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.228ee201.js",
    "revision": "30380e33421d35fe179f1f9680da2493"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.228ee201.js",
    "revision": "2787228d0f6d3bd15957a638fa0f2403"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.228ee201.js",
    "revision": "97a5f4ef5430d05e97e0b589147d2cc9"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.228ee201.js",
    "revision": "aed69abbfaa6b9715c2470ded778664d"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.228ee201.js",
    "revision": "72275f88357eb408b2bdc02bf11228c1"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.228ee201.js",
    "revision": "432d35c44f928213b193eba984252925"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.228ee201.js",
    "revision": "214dbc88ace4e76493e6eba760fcfd9e"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.228ee201.js",
    "revision": "bb1c3c113b46ce21c79918d5bd12680f"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.228ee201.js",
    "revision": "81c0615f8c47f693470f420abae98bf4"
  },
  {
    "url": "assets/js/knowledge/web/README.md.228ee201.js",
    "revision": "047a73fc0aabcf8fbf9983c244642060"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.228ee201.js",
    "revision": "411d6aaf7f5094b33797f50201a6fdb7"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.228ee201.js",
    "revision": "064e5285c52f8b715bb4c2a24d7344ce"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.228ee201.js",
    "revision": "3b3ffb7b6d9a47b123bce2985768009e"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.228ee201.js",
    "revision": "1f6fcd70368779de94e1d6615a13a111"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.228ee201.js",
    "revision": "f0d25c1d8a6e27926c88edd080753aaf"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.228ee201.js",
    "revision": "bd3cca5b1fbf125a8c2ce52b769b8a64"
  },
  {
    "url": "assets/js/LayoutWrapper.228ee201.js",
    "revision": "56c87a219c66182a53287b75179a2e74"
  },
  {
    "url": "assets/js/notFoundWrapper.228ee201.js",
    "revision": "86547521ac6f78942a9178c5221c03b1"
  },
  {
    "url": "assets/js/README.md.228ee201.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.228ee201.js",
    "revision": "d4b7e5b802970c15258be91e204a63be"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.228ee201.js",
    "revision": "a9a7334e80f60cad81570142e50c4063"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "7471ca8c326a0496c33b8a8813483e83"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "e95b38f7f4c55b701185d7f0d4daa101"
  },
  {
    "url": "en-US/index.html",
    "revision": "5b9cfd626247bb611393b261a510ed09"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "6bce3d76dbbe25fa78909a5637d53fd7"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "5b0890f26ebaffd0ab27a295fe3617a4"
  },
  {
    "url": "guide/index.html",
    "revision": "083cba802b0e20f4a7f4d370562d906a"
  },
  {
    "url": "images/1560316346448.png",
    "revision": "c630ed9416555aa44b23946dd5841cb8"
  },
  {
    "url": "images/1610491-20191121002729364-637915604.png",
    "revision": "59622fece3f291b713ce095db512a274"
  },
  {
    "url": "images/1610491-20191121002740540-1754449594.png",
    "revision": "bffc6445acc497e5cf6bf8f23c80809e"
  },
  {
    "url": "images/1610491-20191121002755708-1789338513.png",
    "revision": "32ae754021fa4f21214bff3754feb319"
  },
  {
    "url": "images/1610491-20191121002802330-733293518.png",
    "revision": "4d831c1817b399a9be34ac2916fe91d2"
  },
  {
    "url": "images/1610491-20191121002808762-2061410436.png",
    "revision": "b51b47c1e9daaad3dba540749f6c060e"
  },
  {
    "url": "images/1610491-20191121002822718-1977037725.png",
    "revision": "e611bec99525efd66161afdd51657499"
  },
  {
    "url": "images/image-20200521135047931.png",
    "revision": "21bb5f01154ccaeae5e315ba6a1a38c5"
  },
  {
    "url": "images/image-20200613145026593.png",
    "revision": "47dc43802e470a2bc7a44588ee930bdf"
  },
  {
    "url": "images/image-20200619231457834.png",
    "revision": "4dbf9a4b09ec622548b9616e906a8d40"
  },
  {
    "url": "images/image-20200725203712920.png",
    "revision": "f38bd082d4fbdd1ee5e6c990efb95106"
  },
  {
    "url": "images/image-20200725204100044.png",
    "revision": "7458cdc16eec08530332bb7dd86c29a6"
  },
  {
    "url": "images/image-20200725204247935.png",
    "revision": "3407496cc51826cb44d09b4a6dd65459"
  },
  {
    "url": "images/image-20200802124213681.png",
    "revision": "3eabc7d9e6a84149200214a5a335639a"
  },
  {
    "url": "images/image-20200802125146066.png",
    "revision": "0bd9b0ac5da174133009c78bbed0bb6f"
  },
  {
    "url": "images/image-20200802130517963.png",
    "revision": "79e4283bbc5f87292a65d75e10db14c3"
  },
  {
    "url": "images/infoscan.png",
    "revision": "44b0a568b79342f3749920d9a1e919ac"
  },
  {
    "url": "images/wsecxx.png",
    "revision": "e3f3976a331a5aa806a46c9ad5604235"
  },
  {
    "url": "index.html",
    "revision": "bd1fbf6933fab6a573b5e63985f9a8e1"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "4fdc8eae9c635b47d94e1360a3d89f91"
  },
  {
    "url": "knowledge/hw/boundary-info.html",
    "revision": "c4b06eb9a478117eab384737a20d48e3"
  },
  {
    "url": "knowledge/hw/cc.html",
    "revision": "80b6c1cc33deeecf1156159b570bd244"
  },
  {
    "url": "knowledge/hw/checklist.html",
    "revision": "54d29081ceb58bf7979aad3711a41362"
  },
  {
    "url": "knowledge/hw/del-log.html",
    "revision": "f3b805651daeb4639760c5fab02a6053"
  },
  {
    "url": "knowledge/hw/domain-pentest.html",
    "revision": "37b430e8a3ec4b0d62ffb8c74373a2b0"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "1ab922bc13b844a88428fa5a81f3f93e"
  },
  {
    "url": "knowledge/hw/lan-info.html",
    "revision": "723d0a2e0be48e1bc0aab86da62ab576"
  },
  {
    "url": "knowledge/hw/net-proxy.html",
    "revision": "33b90e2c3890252802aa463115b73c9e"
  },
  {
    "url": "knowledge/hw/ntml-hash.html",
    "revision": "000399d7ed31f41b3aa88150fbaaa0a0"
  },
  {
    "url": "knowledge/hw/os-shell.html",
    "revision": "3344c3f819d4b596b613e841b9940c72"
  },
  {
    "url": "knowledge/hw/to-root.html",
    "revision": "f270323363cabb7c370bb953b2e667b4"
  },
  {
    "url": "knowledge/hw/webshell.html",
    "revision": "d7d7b7951c2a2470a300784b9c606bb9"
  },
  {
    "url": "knowledge/web/code-injection.html",
    "revision": "8863b909758153dcbb2c7114201597d5"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html",
    "revision": "1690fee87c2c9848bf9fde673ae94dea"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "38c74fdc5d3c9abb9e163219f2007053"
  },
  {
    "url": "knowledge/web/file-download.html",
    "revision": "dea531ec501dd20fc6a7f5321c4fda26"
  },
  {
    "url": "knowledge/web/file-includes.html",
    "revision": "16cc11515cac17b9d716ea20956e65b3"
  },
  {
    "url": "knowledge/web/file-upload.html",
    "revision": "08f15cd95981289c5efa99612739ec74"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "a02c0b65574163ddc912fdae4dc749ce"
  },
  {
    "url": "knowledge/web/jwt-cookie.html",
    "revision": "43487a738f7c31600fc524fc1c3861fe"
  },
  {
    "url": "knowledge/web/logical-vulns.html",
    "revision": "39423102ff3e5bdc5ac76fc79832d599"
  },
  {
    "url": "knowledge/web/phpsec.html",
    "revision": "86b09ee24b5f419d2b1d23622866c91f"
  },
  {
    "url": "knowledge/web/same-origin-policy.html",
    "revision": "57b2d170a0dc74c16d227f45976b2a55"
  },
  {
    "url": "knowledge/web/session-sec.html",
    "revision": "4d1df9c9da21fd5bb57bbe01aaa63977"
  },
  {
    "url": "knowledge/web/source-leaked.html",
    "revision": "8943a10675928d796549d41ecc9fc356"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "d2b430677a189c8aa5e6b4bba4970d94"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "a84a1f231d4b674d54c382494500f919"
  },
  {
    "url": "knowledge/web/xxe.html",
    "revision": "2dace4069d73e341889a65d206dc58b8"
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
    "revision": "cbea9e29c8a84dacb24ddaa65df95d84"
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
