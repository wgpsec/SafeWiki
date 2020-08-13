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
    "url": "assets/css/styles.e3a10274.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/41.3de35b94.js",
    "revision": "3a9fb5168cd8ffebc7f8980603b3b6d2"
  },
  {
    "url": "assets/js/app.3de35b94.js",
    "revision": "70135ad6fbf80d77d402d0b976003c23"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.3de35b94.js",
    "revision": "763af850001885880b1c32eaffd262a1"
  },
  {
    "url": "assets/js/en-US/guide/README.md.3de35b94.js",
    "revision": "037f97638d7dc5f393acd140fbc7e5f6"
  },
  {
    "url": "assets/js/en-US/README.md.3de35b94.js",
    "revision": "21ed58c0a5ee0196f3d661cee42c8662"
  },
  {
    "url": "assets/js/en-US/update-log.md.3de35b94.js",
    "revision": "df2049f89736f4dac9df9e943be0507f"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.3de35b94.js",
    "revision": "907100f0f37b0b8f2d138613d9731310"
  },
  {
    "url": "assets/js/guide/README.md.3de35b94.js",
    "revision": "329bc3cda6b8b500b3fa4c599106141f"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.3de35b94.js",
    "revision": "d1c127e1570073527d76c51d120ca6f1"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.3de35b94.js",
    "revision": "e1a4202b8e02f0ac2febeb91119fc24a"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.3de35b94.js",
    "revision": "b2d61a9be3e7190b6fad8981718b5055"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.3de35b94.js",
    "revision": "8a5d81c2f7663ae4674005291cbf832c"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.3de35b94.js",
    "revision": "48e6a0f741f6abc773738953397544cb"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.3de35b94.js",
    "revision": "4582424574b602a486983c81309c6abe"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.3de35b94.js",
    "revision": "87d6c56da09425737f47073ebb25ec9f"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.3de35b94.js",
    "revision": "77a7e59f7cd4e54d981260fd77d88c01"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.3de35b94.js",
    "revision": "6a07d8dabc8b28bf3c6fc53edeaa6d8e"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.3de35b94.js",
    "revision": "0d4372a753d9a831bf130ad406c02d2b"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.3de35b94.js",
    "revision": "5aa96b8457395eec5cec350a2bf9ff1d"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.3de35b94.js",
    "revision": "195a7a5614e01edb71be15b2c7339e70"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.3de35b94.js",
    "revision": "b2168cc907fde7ebbda1a5b27a4e0f22"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.3de35b94.js",
    "revision": "30380e33421d35fe179f1f9680da2493"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.3de35b94.js",
    "revision": "2787228d0f6d3bd15957a638fa0f2403"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.3de35b94.js",
    "revision": "97a5f4ef5430d05e97e0b589147d2cc9"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.3de35b94.js",
    "revision": "aed69abbfaa6b9715c2470ded778664d"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.3de35b94.js",
    "revision": "72275f88357eb408b2bdc02bf11228c1"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.3de35b94.js",
    "revision": "432d35c44f928213b193eba984252925"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.3de35b94.js",
    "revision": "214dbc88ace4e76493e6eba760fcfd9e"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.3de35b94.js",
    "revision": "bb1c3c113b46ce21c79918d5bd12680f"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.3de35b94.js",
    "revision": "81c0615f8c47f693470f420abae98bf4"
  },
  {
    "url": "assets/js/knowledge/web/README.md.3de35b94.js",
    "revision": "0581132baeb1e84de3bef5aab92c0d9a"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.3de35b94.js",
    "revision": "411d6aaf7f5094b33797f50201a6fdb7"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.3de35b94.js",
    "revision": "064e5285c52f8b715bb4c2a24d7344ce"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.3de35b94.js",
    "revision": "3b3ffb7b6d9a47b123bce2985768009e"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.3de35b94.js",
    "revision": "1f6fcd70368779de94e1d6615a13a111"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.3de35b94.js",
    "revision": "f0d25c1d8a6e27926c88edd080753aaf"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.3de35b94.js",
    "revision": "bd3cca5b1fbf125a8c2ce52b769b8a64"
  },
  {
    "url": "assets/js/LayoutWrapper.3de35b94.js",
    "revision": "56c87a219c66182a53287b75179a2e74"
  },
  {
    "url": "assets/js/notFoundWrapper.3de35b94.js",
    "revision": "86547521ac6f78942a9178c5221c03b1"
  },
  {
    "url": "assets/js/README.md.3de35b94.js",
    "revision": "67b16bb99a2e44ca4f88a97e08529bb8"
  },
  {
    "url": "assets/js/update-log.md.3de35b94.js",
    "revision": "68cd853780324d5b843e4cf1a10b1e4a"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.3de35b94.js",
    "revision": "a9a7334e80f60cad81570142e50c4063"
  },
  {
    "url": "en-US/guide/how-to-contribute.html",
    "revision": "8691b2701113f3ad301f3f1a29101363"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "ac149478877a6169847304b6fb4072d6"
  },
  {
    "url": "en-US/index.html",
    "revision": "e00891c12121f59e1ee9e283042c693b"
  },
  {
    "url": "en-US/update-log.html",
    "revision": "ee68f5f10a5058bf66c7a2e2439ce399"
  },
  {
    "url": "guide/how-to-contribute.html",
    "revision": "59bba8da88c48612be5bfa30e8887c53"
  },
  {
    "url": "guide/index.html",
    "revision": "d28660790971c09f6240aaf189149f6b"
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
    "revision": "dcf42e4d74ad14a07324bafce600c1d1"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "b6ee145de2d2ff057a93c2e9a3edcd88"
  },
  {
    "url": "knowledge/hw/boundary-info.html",
    "revision": "4efb4d3c8835c101cb0b5a14ecde1528"
  },
  {
    "url": "knowledge/hw/cc.html",
    "revision": "ccf5429fbc675ffce697c20c59247345"
  },
  {
    "url": "knowledge/hw/checklist.html",
    "revision": "a58999a111b413fe4ba63fe6b044803f"
  },
  {
    "url": "knowledge/hw/del-log.html",
    "revision": "b2fefba35e1979735414968817f00d02"
  },
  {
    "url": "knowledge/hw/domain-pentest.html",
    "revision": "85b7a8e5881b75c0acc2de64fb3e3676"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "42eb12e054f30e87b87c36093170f6e2"
  },
  {
    "url": "knowledge/hw/lan-info.html",
    "revision": "cc683707a2898058783d0cb4f21ee521"
  },
  {
    "url": "knowledge/hw/net-proxy.html",
    "revision": "6c4b9d2fc3035f61902ef0feca2d8cf1"
  },
  {
    "url": "knowledge/hw/ntml-hash.html",
    "revision": "cb6c66ea49fc7282b6d39b9408443300"
  },
  {
    "url": "knowledge/hw/os-shell.html",
    "revision": "cf33fd24bd493259b03ecb79ec65c181"
  },
  {
    "url": "knowledge/hw/to-root.html",
    "revision": "e9038d44622bd5c62277525ff6935ae0"
  },
  {
    "url": "knowledge/hw/webshell.html",
    "revision": "cec5ab69bae111bd4d635d4c649b4aee"
  },
  {
    "url": "knowledge/web/code-injection.html",
    "revision": "b99ce749d4ed3b817d4959be142fe6d6"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html",
    "revision": "0b97a0ffba1bc4ef1440278800472490"
  },
  {
    "url": "knowledge/web/expression-language-injection.html",
    "revision": "18f7a3772860f52ca8916779d38aa923"
  },
  {
    "url": "knowledge/web/file-download.html",
    "revision": "e1e9d445d26614c62d656aacf3d67b08"
  },
  {
    "url": "knowledge/web/file-includes.html",
    "revision": "c60784984dd859a9d295bdaaddf9aa8f"
  },
  {
    "url": "knowledge/web/file-upload.html",
    "revision": "3db4c014569fa297c4fdf2db0e687658"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "361a4b6b55db125300dc25b26f477d8d"
  },
  {
    "url": "knowledge/web/jwt-cookie.html",
    "revision": "66db170db3d738bb0427d9bd71ab3e44"
  },
  {
    "url": "knowledge/web/logical-vulns.html",
    "revision": "b329524290053983e0bef306b5dd98c4"
  },
  {
    "url": "knowledge/web/phpsec.html",
    "revision": "f77db08f2c9c126a5c640b0012ea6c95"
  },
  {
    "url": "knowledge/web/same-origin-policy.html",
    "revision": "95c2240f3f77109f6bb031c3d423df05"
  },
  {
    "url": "knowledge/web/session-sec.html",
    "revision": "5fa43124bed42e739a29daeb9ddb9510"
  },
  {
    "url": "knowledge/web/source-leaked.html",
    "revision": "6028fd62748f2e4da6317ee2061b8d62"
  },
  {
    "url": "knowledge/web/sql-injection.html",
    "revision": "743d60f9124729460b91379729d822cf"
  },
  {
    "url": "knowledge/web/xss.html",
    "revision": "52f1a373c6430244a698fef7a3da5c77"
  },
  {
    "url": "knowledge/web/xxe.html",
    "revision": "79019ff3f6f0f3f83e6a9b92215f9815"
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
    "revision": "befdbe5ac4b87f1ecf5b6001e83e0688"
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
