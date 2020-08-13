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
    "url": "assets/css/7.styles.5f519c1f.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.b7f4a109.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/41.ead70ea0.js",
    "revision": "3a9fb5168cd8ffebc7f8980603b3b6d2"
  },
  {
    "url": "assets/js/app.ead70ea0.js",
    "revision": "5e4df2805fcd1bc9f4f523d8185105af"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.ead70ea0.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.ead70ea0.js",
    "revision": "037f97638d7dc5f393acd140fbc7e5f6"
  },
  {
    "url": "assets/js/en-US/README.md.ead70ea0.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.ead70ea0.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.ead70ea0.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.ead70ea0.js",
    "revision": "329bc3cda6b8b500b3fa4c599106141f"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.ead70ea0.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.ead70ea0.js",
    "revision": "e1a4202b8e02f0ac2febeb91119fc24a"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.ead70ea0.js",
    "revision": "b2d61a9be3e7190b6fad8981718b5055"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.ead70ea0.js",
    "revision": "8a5d81c2f7663ae4674005291cbf832c"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.ead70ea0.js",
    "revision": "48e6a0f741f6abc773738953397544cb"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.ead70ea0.js",
    "revision": "4582424574b602a486983c81309c6abe"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.ead70ea0.js",
    "revision": "87d6c56da09425737f47073ebb25ec9f"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.ead70ea0.js",
    "revision": "77a7e59f7cd4e54d981260fd77d88c01"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.ead70ea0.js",
    "revision": "6a07d8dabc8b28bf3c6fc53edeaa6d8e"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.ead70ea0.js",
    "revision": "0d4372a753d9a831bf130ad406c02d2b"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.ead70ea0.js",
    "revision": "a3eb110ca2bff584fc8e34b1bf7afbb6"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.ead70ea0.js",
    "revision": "195a7a5614e01edb71be15b2c7339e70"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.ead70ea0.js",
    "revision": "b2168cc907fde7ebbda1a5b27a4e0f22"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.ead70ea0.js",
    "revision": "30380e33421d35fe179f1f9680da2493"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.ead70ea0.js",
    "revision": "2787228d0f6d3bd15957a638fa0f2403"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.ead70ea0.js",
    "revision": "97a5f4ef5430d05e97e0b589147d2cc9"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.ead70ea0.js",
    "revision": "aed69abbfaa6b9715c2470ded778664d"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.ead70ea0.js",
    "revision": "72275f88357eb408b2bdc02bf11228c1"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.ead70ea0.js",
    "revision": "432d35c44f928213b193eba984252925"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.ead70ea0.js",
    "revision": "214dbc88ace4e76493e6eba760fcfd9e"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.ead70ea0.js",
    "revision": "bb1c3c113b46ce21c79918d5bd12680f"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.ead70ea0.js",
    "revision": "81c0615f8c47f693470f420abae98bf4"
  },
  {
    "url": "assets/js/knowledge/web/README.md.ead70ea0.js",
    "revision": "047a73fc0aabcf8fbf9983c244642060"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.ead70ea0.js",
    "revision": "411d6aaf7f5094b33797f50201a6fdb7"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.ead70ea0.js",
    "revision": "064e5285c52f8b715bb4c2a24d7344ce"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.ead70ea0.js",
    "revision": "3b3ffb7b6d9a47b123bce2985768009e"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.ead70ea0.js",
    "revision": "1f6fcd70368779de94e1d6615a13a111"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.ead70ea0.js",
    "revision": "f0d25c1d8a6e27926c88edd080753aaf"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.ead70ea0.js",
    "revision": "bd3cca5b1fbf125a8c2ce52b769b8a64"
  },
  {
    "url": "assets/js/LayoutWrapper.ead70ea0.js",
    "revision": "56c87a219c66182a53287b75179a2e74"
  },
  {
    "url": "assets/js/notFoundWrapper.ead70ea0.js",
    "revision": "86547521ac6f78942a9178c5221c03b1"
  },
  {
    "url": "assets/js/README.md.ead70ea0.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.ead70ea0.js",
    "revision": "d4b7e5b802970c15258be91e204a63be"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.ead70ea0.js",
    "revision": "a9a7334e80f60cad81570142e50c4063"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "288523f280c1b9312352c94f55a75409"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "26aa779d01dd971cbecb9d365f416e8b"
  },
  {
    "url": "en-US/index.html",
    "revision": "7f1575ceeaf80baef9de15063e806e9c"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "eabb82a8ae1c97d619754e9f64023ecb"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "fa10faa4eb839d74f9aaca401ea1b6ce"
  },
  {
    "url": "guide/index.html",
    "revision": "234fb1bf7a0d676904db2134901427d0"
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
    "revision": "898f0c310b21b516adfd0ec5f7bd3923"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "95376c951cfe5f3b9c3fd2d9a5861153"
  },
  {
    "url": "knowledge/hw/boundary-info.html",
    "revision": "9a50eec82e71946bd4395936c5584537"
  },
  {
    "url": "knowledge/hw/cc.html",
    "revision": "6759e889336c73927cb1ad310a8d95dd"
  },
  {
    "url": "knowledge/hw/checklist.html",
    "revision": "5f6bf3b48664ef986219179beb9166c4"
  },
  {
    "url": "knowledge/hw/del-log.html",
    "revision": "3d7848e1f03455ad07cc08e7e373f450"
  },
  {
    "url": "knowledge/hw/domain-pentest.html",
    "revision": "51587a616456e73b632d2642813b4fdd"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "5e8a5618d796d36445ec05302c5317ff"
  },
  {
    "url": "knowledge/hw/lan-info.html",
    "revision": "416e89251b4a063c0d1d45d3aeb44713"
  },
  {
    "url": "knowledge/hw/net-proxy.html",
    "revision": "47ba914c7c51de29db3aa30ee682500d"
  },
  {
    "url": "knowledge/hw/ntml-hash.html",
    "revision": "1277275a2fe44f78c5ceff213fc1ad63"
  },
  {
    "url": "knowledge/hw/os-shell.html",
    "revision": "2ac5e86dce28f747b03da283b9fce98e"
  },
  {
    "url": "knowledge/hw/to-root.html",
    "revision": "f2d93ea7b3e7374bd45d4f2859a5c049"
  },
  {
    "url": "knowledge/hw/webshell.html",
    "revision": "a867f19d153f47055302d0de1900e508"
  },
  {
    "url": "knowledge/web/code-injection.html",
    "revision": "c2073cb9a210d40baa02cde559eb1146"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html",
    "revision": "77c9aab882aa9fd96b6590329b445dc4"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "57f3a789a0759854fb6e561dba6bd81c"
  },
  {
    "url": "knowledge/web/file-download.html",
    "revision": "8d9142e598fcec0cffb261c4df61fa8b"
  },
  {
    "url": "knowledge/web/file-includes.html",
    "revision": "5d0f9851a207db48fb2ba52fbf5d41c6"
  },
  {
    "url": "knowledge/web/file-upload.html",
    "revision": "9b53d1a2fd2d47a954dd19402c87c32f"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "e0877371f735c6d0cc60e6e1ae981dbb"
  },
  {
    "url": "knowledge/web/jwt-cookie.html",
    "revision": "15489b4153c7d25bebb4c223a09ff38b"
  },
  {
    "url": "knowledge/web/logical-vulns.html",
    "revision": "feec46f96a516aaf52f7b2778a84f6ce"
  },
  {
    "url": "knowledge/web/phpsec.html",
    "revision": "2daec4a570c160994f48b2b7e94b88e5"
  },
  {
    "url": "knowledge/web/same-origin-policy.html",
    "revision": "b8adfa4caa1d0c2d7ac2a3f4e1ab847a"
  },
  {
    "url": "knowledge/web/session-sec.html",
    "revision": "94afadddaac5c271849f74fd89ad8de4"
  },
  {
    "url": "knowledge/web/source-leaked.html",
    "revision": "05d512be898dcb00477b788a11fcea7f"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "4e1896e19cce0f05c563d9a39c9c0ac2"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "cc19eba9d84efc1793c706e4d87adf6f"
  },
  {
    "url": "knowledge/web/xxe.html",
    "revision": "c08354fc6e96f7d0d10e5fbc0593fae3"
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
    "revision": "8c5fd093e337add08f52dbd0da97a92b"
  },
  {
    "url": "wechat.png",
    "revision": "775aaf487bb53c6c2b12ab760df2ea22"
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
