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
    "url": "assets/css/38.styles.2f012407.css",
    "revision": "5cc8455522db7d3e59c3fea7dbaff53f"
  },
  {
    "url": "assets/css/4.styles.5434c536.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/40.styles.6ea5be1b.css",
    "revision": "97d5a643374119c3536f8878e7811d23"
  },
  {
    "url": "assets/css/41.styles.c2739985.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/7.styles.8aa12484.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.3dbac423.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/41.37a80652.js",
    "revision": "cfa21ed54c7585c2cce51b8e45334f9c"
  },
  {
    "url": "assets/js/app.37a80652.js",
    "revision": "a90118be224f2ce42c419f7a2c551821"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.37a80652.js",
    "revision": "9ccfa211bc1809c5a34bde24ebef9150"
  },
  {
    "url": "assets/js/en-US/guide/README.md.37a80652.js",
    "revision": "594e3a59a6461ea2606f5223616343b8"
  },
  {
    "url": "assets/js/en-US/README.md.37a80652.js",
    "revision": "2dbdf6b34e5430b2f4c23561ac8e1bd3"
  },
  {
    "url": "assets/js/en-US/update-log.md.37a80652.js",
    "revision": "c1a04ac47bb1c47da269355530a3bcea"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.37a80652.js",
    "revision": "0b84197148f77b5c8316f7d31df78e1c"
  },
  {
    "url": "assets/js/guide/README.md.37a80652.js",
    "revision": "13ef51cce18cf4ecc4782ad0fd953b19"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.37a80652.js",
    "revision": "f47fc871ad31b2cb811ba3c6bb673d0e"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.37a80652.js",
    "revision": "6c6191bc46ddf2a7811432727db5514a"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.37a80652.js",
    "revision": "e96f04fe952d224fc663be485a679912"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.37a80652.js",
    "revision": "61ddc389e6707a57fe7b5b2c5d6640d9"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.37a80652.js",
    "revision": "5a3304a69665c67b56df870f91f78a5d"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.37a80652.js",
    "revision": "42ff9b9275b80fe786dc848d4a924a09"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.37a80652.js",
    "revision": "caf6679b2e6c11d9089e43fa5d34d67e"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.37a80652.js",
    "revision": "b227ed29ad5b169fba79f0b0b6793849"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.37a80652.js",
    "revision": "1021df070a30186d748927d3185fe9e6"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.37a80652.js",
    "revision": "06543fe42c935dbb843f2d0e2d369da7"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.37a80652.js",
    "revision": "38198274c7a0724450a52b0df486ae0c"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.37a80652.js",
    "revision": "56e7ebc34614ee3076fbdffe3f2e6666"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.37a80652.js",
    "revision": "d29d86e691cc076f6981f819bc02f2ec"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.37a80652.js",
    "revision": "13a212edbb37154964be1b27ef7f212d"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.37a80652.js",
    "revision": "ad2cbc3af54fbe3da2b1bd3fe80b8e44"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.37a80652.js",
    "revision": "b0194dedd0240c903d293df50cd2ba86"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.37a80652.js",
    "revision": "859688b3043d067d0c53c14adfffd95a"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.37a80652.js",
    "revision": "5faa3a3e8272e49d42bbe70ed95fe85e"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.37a80652.js",
    "revision": "d37829981db163f0c97ee958b8f8c24e"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.37a80652.js",
    "revision": "20c711908d9ce2939c203d2e7de7746d"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.37a80652.js",
    "revision": "06bcb8aa847c257afcff656dd6397519"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.37a80652.js",
    "revision": "01165f46a486cdc0452dafd31d4a362e"
  },
  {
    "url": "assets/js/knowledge/web/README.md.37a80652.js",
    "revision": "e262658967cf136c1ea27f243f25b35b"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.37a80652.js",
    "revision": "6b40558f965205d2a958009e0cae0301"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.37a80652.js",
    "revision": "4fe41c2a0c2669c9451c147c94b7ac7d"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.37a80652.js",
    "revision": "b26e0f5da72f81b45451e9f54ce58430"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.37a80652.js",
    "revision": "08b376c09e37e7dfc63f19bdff717671"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.37a80652.js",
    "revision": "f6f335d0fa0ea9bed9d50d1c24ffa5e0"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.37a80652.js",
    "revision": "efb427955c004174e140719f4b9b082d"
  },
  {
    "url": "assets/js/LayoutWrapper.37a80652.js",
    "revision": "9f21aaad55a2a1cb1e139d30f4e5d5b7"
  },
  {
    "url": "assets/js/notFoundWrapper.37a80652.js",
    "revision": "200da122633ef73f205dc64f1a26f2e5"
  },
  {
    "url": "assets/js/README.md.37a80652.js",
    "revision": "287984572fa8b0a479afb12db0ca5a29"
  },
  {
    "url": "assets/js/update-log.md.37a80652.js",
    "revision": "2667dc40672577ee84c1fa498ec56b48"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.37a80652.js",
    "revision": "bc267e342695dad2ee34e80482933c11"
  },
  {
    "url": "en-US/guide/how-to-contribute.html.html",
    "revision": "b86bfaf3dc5d8b3dafc2e2ce254dbd5c"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "586a97bba9f6d858a267f8e140ac6c55"
  },
  {
    "url": "en-US/index.html",
    "revision": "cd05221be3fb6410130e4847116289cd"
  },
  {
    "url": "en-US/update-log.html.html",
    "revision": "decbb28bf8616b9e9c7526ae3397b466"
  },
  {
    "url": "guide/how-to-contribute.html.html",
    "revision": "852990bc1eee468ed65b518d97c9b795"
  },
  {
    "url": "guide/index.html",
    "revision": "3672f8a43700b3b17d9845c9e091145a"
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
    "revision": "56ed373b22491f4563f60607de919fa5"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "258c00569137bc1989f6e1468346179b"
  },
  {
    "url": "knowledge/hw/boundary-info.html.html",
    "revision": "f71623df18da05816c476bfd9e47e8a5"
  },
  {
    "url": "knowledge/hw/cc.html.html",
    "revision": "eb119b1a22985224b0650d78bd4588c1"
  },
  {
    "url": "knowledge/hw/checklist.html.html",
    "revision": "3688914da07d99db22d38e7bd780a3dd"
  },
  {
    "url": "knowledge/hw/del-log.html.html",
    "revision": "72f7c48a6636dc2011a71d33d12c727d"
  },
  {
    "url": "knowledge/hw/domain-pentest.html.html",
    "revision": "ea5923601b2ccff7af2ad190e5e3f213"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "bb6bbf487b7edac88ef4bcbd0f3b2884"
  },
  {
    "url": "knowledge/hw/lan-info.html.html",
    "revision": "ebe387c03318c71907d47af750d07f87"
  },
  {
    "url": "knowledge/hw/net-proxy.html.html",
    "revision": "16586365ffc2371560b46220e16eb8db"
  },
  {
    "url": "knowledge/hw/ntml-hash.html.html",
    "revision": "27498d9d1ff4944a1c40420b4f2f0b5c"
  },
  {
    "url": "knowledge/hw/os-shell.html.html",
    "revision": "d4da575befb81741acdf76b162e825a8"
  },
  {
    "url": "knowledge/hw/to-root.html.html",
    "revision": "e55aa9d53cc6c174c66fadc4f784135f"
  },
  {
    "url": "knowledge/hw/webshell.html.html",
    "revision": "083615565860cd67607341ffaa6b875b"
  },
  {
    "url": "knowledge/web/code-injection.html.html",
    "revision": "8773dc394abfb536d8433483f78d3057"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html.html",
    "revision": "6c48a5a4fed02f7b16b1519d1a1f858e"
  },
  {
    "url": "knowledge/web/expression-language-injection.html.html",
    "revision": "60e53678c81d6fae7c9016d023774b7d"
  },
  {
    "url": "knowledge/web/file-download.html.html",
    "revision": "0d5801ee7f194906e2f1901b007becea"
  },
  {
    "url": "knowledge/web/file-includes.html.html",
    "revision": "ee2267f107e898c57323e0372ec19651"
  },
  {
    "url": "knowledge/web/file-upload.html.html",
    "revision": "4daecb0ed5bef38429c5cbebe5fc6f02"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "c35aa297d18c957995aa6d033d715bd1"
  },
  {
    "url": "knowledge/web/jwt-cookie.html.html",
    "revision": "0a5479f8d1b460d9fc685765faed7174"
  },
  {
    "url": "knowledge/web/logical-vulns.html.html",
    "revision": "4b3e3f3bfcdb9f61a0b79009c847a5c3"
  },
  {
    "url": "knowledge/web/phpsec.html.html",
    "revision": "562eb2f2b16d33a1294c4f076ed66e3e"
  },
  {
    "url": "knowledge/web/same-origin-policy.html.html",
    "revision": "db8c36f298ab012cc301391fb45880b2"
  },
  {
    "url": "knowledge/web/session-sec.html.html",
    "revision": "a54074e12544f26df1f4ca20def79e9a"
  },
  {
    "url": "knowledge/web/source-leaked.html.html",
    "revision": "602d8324236733c703a106303b9b40b7"
  },
  {
    "url": "knowledge/web/sql-injection.html.html",
    "revision": "406f5c1e0de0169ef611cdaac0f405aa"
  },
  {
    "url": "knowledge/web/xss.html.html",
    "revision": "a5ff225819496214160853876a6fa3b1"
  },
  {
    "url": "knowledge/web/xxe.html.html",
    "revision": "98f68cf218010a0e2b8e3aeb4b027fa3"
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
    "url": "update-log.html.html",
    "revision": "459bae7ed49852fa599f08898055cc42"
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
'use strict';

/*
 * @author wangyi7099
 */

addEventListener('message', event => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    );
  }
});
