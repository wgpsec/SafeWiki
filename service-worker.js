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
    "revision": "b36f7a7f3f1b465223fe1593369f300a"
  },
  {
    "url": "assets/css/4.styles.6b751e33.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/46.styles.cbb3e58b.css",
    "revision": "5cc8455522db7d3e59c3fea7dbaff53f"
  },
  {
    "url": "assets/css/48.styles.43355818.css",
    "revision": "97d5a643374119c3536f8878e7811d23"
  },
  {
    "url": "assets/css/49.styles.3223405d.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/7.styles.a41a5da5.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.d20b39d8.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/49.ceaffbcc.js",
    "revision": "0fb3592a8c042b2f8a7aa4353dda0d73"
  },
  {
    "url": "assets/js/app.ceaffbcc.js",
    "revision": "6b1e4f744672632704a1be1722ff1660"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.ceaffbcc.js",
    "revision": "66c14ae12644faa6974e1f385c9d8a01"
  },
  {
    "url": "assets/js/en-US/guide/README.md.ceaffbcc.js",
    "revision": "39e828fc027def339a509e8c50745b1e"
  },
  {
    "url": "assets/js/en-US/README.md.ceaffbcc.js",
    "revision": "c6b2a5f2e6abe621e71684fcf00c38c8"
  },
  {
    "url": "assets/js/en-US/update-log.md.ceaffbcc.js",
    "revision": "b4016310be1d18d8cf5de79a781b7166"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.ceaffbcc.js",
    "revision": "053bbbfba5edaf75a25766c1a444cd09"
  },
  {
    "url": "assets/js/guide/README.md.ceaffbcc.js",
    "revision": "557d4d2dd9f2968b6836f73a5b1d7dd2"
  },
  {
    "url": "assets/js/knowledge/code-audit/php-code-audit.md.ceaffbcc.js",
    "revision": "62a36d78728f7c16b5049cc8fe44ade5"
  },
  {
    "url": "assets/js/knowledge/code-audit/README.md.ceaffbcc.js",
    "revision": "b038dabb8f246bc756301d51c4f8ae71"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.ceaffbcc.js",
    "revision": "3bd5d9f663e8517b81c48e3fc3122cd8"
  },
  {
    "url": "assets/js/knowledge/hw/back-counter.md.ceaffbcc.js",
    "revision": "a4c60e8889751fa238a277f2f44ec5e0"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.ceaffbcc.js",
    "revision": "3230e3f5beccf9d4b59cbbc2928e5b4e"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.ceaffbcc.js",
    "revision": "93ced194de9b4e6c468275cfcaad202f"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.ceaffbcc.js",
    "revision": "27a602ddb6e4260537a0e4755ebd68e8"
  },
  {
    "url": "assets/js/knowledge/hw/defense-assets.md.ceaffbcc.js",
    "revision": "6cfe67eaa0f1976ec4e05323fc0b8917"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.ceaffbcc.js",
    "revision": "04b2491cd847c6174762c6b2ae89405b"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.ceaffbcc.js",
    "revision": "83c74bd718f45607250a6f64f3f34d36"
  },
  {
    "url": "assets/js/knowledge/hw/emergency-response.md.ceaffbcc.js",
    "revision": "ae4d6291c5554de33adf6fdd744fd21a"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.ceaffbcc.js",
    "revision": "e0d9b43cafd0287beecdc8f06935015f"
  },
  {
    "url": "assets/js/knowledge/hw/linux-baselinesec.md.ceaffbcc.js",
    "revision": "0ad48d899238bd1ea56fabe3d2331e31"
  },
  {
    "url": "assets/js/knowledge/hw/monitor-read.md.ceaffbcc.js",
    "revision": "1ae510c877d42dfd9b89da1e61549416"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.ceaffbcc.js",
    "revision": "1818a54f462e8bbcc7871045c9f2e96d"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.ceaffbcc.js",
    "revision": "6985e36b2467d6705ed26a3e79bd73d0"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.ceaffbcc.js",
    "revision": "911609f5f08868908aea2f5b284bf325"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.ceaffbcc.js",
    "revision": "27b19630faa58a2baebb63c2f451c0b2"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.ceaffbcc.js",
    "revision": "494e25d8a955cee8c2c2fd87e4cbb68a"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.ceaffbcc.js",
    "revision": "eaf3d767648d65ad7dfdad411370ac10"
  },
  {
    "url": "assets/js/knowledge/hw/windows-baselinesec.md.ceaffbcc.js",
    "revision": "2f470c430b354312050d619f2f27bc2a"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.ceaffbcc.js",
    "revision": "4cadb697c53ceed0847611994fa44dc2"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.ceaffbcc.js",
    "revision": "20fbd98cbb45155a9bc2335fb2dd8f2c"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.ceaffbcc.js",
    "revision": "630403447998cacc8e1f09cb2b9f8585"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.ceaffbcc.js",
    "revision": "b768fbd97edff5f9ec2b683b0df943c1"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.ceaffbcc.js",
    "revision": "f94f7ee7be18455143697ea571f3d171"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.ceaffbcc.js",
    "revision": "a40a8917e6af7733c1e8852cfe3a3318"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.ceaffbcc.js",
    "revision": "6cba76c1f0a0eb0d47a18b04d5696887"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.ceaffbcc.js",
    "revision": "dda4e5a217b3b6983bafacc3d5efe5c3"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.ceaffbcc.js",
    "revision": "51e26ca2ce9059162d92ee67c5a36252"
  },
  {
    "url": "assets/js/knowledge/web/README.md.ceaffbcc.js",
    "revision": "f851e921e65c8f2cc63a06e762770564"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.ceaffbcc.js",
    "revision": "f5b7445d7ff12d26b36a08e2d9e932bd"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.ceaffbcc.js",
    "revision": "4adfd17b3bb89bd5a666cf8900c941a0"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.ceaffbcc.js",
    "revision": "0461818d321d4bf8d217af77187c9608"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.ceaffbcc.js",
    "revision": "232b265b2b9fcab8df9c2bd1f9e80852"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.ceaffbcc.js",
    "revision": "0f0099f099a60b6fae3e7c6e84ef47f3"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.ceaffbcc.js",
    "revision": "ac14bce9f67280872ae80153a9e887b4"
  },
  {
    "url": "assets/js/LayoutWrapper.ceaffbcc.js",
    "revision": "2d835c54e73a8039ebaaf9a5ff44aa00"
  },
  {
    "url": "assets/js/notFoundWrapper.ceaffbcc.js",
    "revision": "79070ba2578b8602b9c758ef1134de2a"
  },
  {
    "url": "assets/js/README.md.ceaffbcc.js",
    "revision": "632218c327122581563993c0e57f60b0"
  },
  {
    "url": "assets/js/update-log.md.ceaffbcc.js",
    "revision": "173da45e31485e82e3938bf940f6bafa"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.ceaffbcc.js",
    "revision": "258d08ab3a53e4e75a2feb2eb3c9358b"
  },
  {
    "url": "en-US/guide/how-to-contribute.html.html",
    "revision": "71aac702ea4fc9a61e229ba5b662295d"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "c0cbf19f779f60d69aed4ccd120ae48e"
  },
  {
    "url": "en-US/index.html",
    "revision": "0deee6de78bb9cb3b54e716b547123f1"
  },
  {
    "url": "en-US/update-log.html.html",
    "revision": "98c7f8b2bc053ef956ede70af85e6988"
  },
  {
    "url": "guide/how-to-contribute.html.html",
    "revision": "9d77b8da081df7a24bf048494f1aae29"
  },
  {
    "url": "guide/index.html",
    "revision": "26551c3a720d297983e60d472a76290a"
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
    "url": "images/20200818234802.png",
    "revision": "9824a2773d7dd9d1bda5effc348c8546"
  },
  {
    "url": "images/20200819181726.png",
    "revision": "2d5363fcf1e5c9b8f1ed8c3fd1237d63"
  },
  {
    "url": "images/20200819211747.png",
    "revision": "ae5d3d8288a9a14c443becae1c7c6928"
  },
  {
    "url": "images/20200819235236.png",
    "revision": "7d74f76462db31fa4b9bad9992157564"
  },
  {
    "url": "images/20200820001152.png",
    "revision": "fb15cc95915078669bbd4862700da34a"
  },
  {
    "url": "images/20200826211734.png",
    "revision": "208183eea1c6e5cad3a339ca539c8eae"
  },
  {
    "url": "images/20200828220802.png",
    "revision": "fdd3b94b33a316ae57f8cfde3f4bfd8c"
  },
  {
    "url": "images/20200828223749.png",
    "revision": "59ff22cf259b91508773001de196ce97"
  },
  {
    "url": "images/20200830112047.png",
    "revision": "ac7587be50ba46920e3f7c88ad34ae16"
  },
  {
    "url": "images/20200830141143.png",
    "revision": "e0660e949519da3ca44640e45b7319c6"
  },
  {
    "url": "images/20200830153532.png",
    "revision": "6ae1cba33884f3a856894c58e88ae34e"
  },
  {
    "url": "images/20200830161758.png",
    "revision": "5001f4e6cd72abdb1bb2ea4209053680"
  },
  {
    "url": "images/20200830164518.png",
    "revision": "b99a5e8860bdc58f217e321cf1d4a26e"
  },
  {
    "url": "images/20200830173037.png",
    "revision": "5d36990cfbec3529c5d8fe495e0dd9ee"
  },
  {
    "url": "images/20200830174239.png",
    "revision": "a21c9a385e4591baf76454e4bee740bd"
  },
  {
    "url": "images/20200830193825.png",
    "revision": "8385f0408cb66e67b84da759bcd41008"
  },
  {
    "url": "images/20200830211454.png",
    "revision": "e43f191c3849b6f8e591f103dcc18154"
  },
  {
    "url": "images/20200830213118.png",
    "revision": "03094bead4dd2533dde2a659d6a8db66"
  },
  {
    "url": "images/20200830215933.png",
    "revision": "fa0c904fcd65df5ff60501354307c01d"
  },
  {
    "url": "images/20200831092854.png",
    "revision": "755b75517abc3b591a57f2dcb9ecd3ef"
  },
  {
    "url": "images/20200831094439.png",
    "revision": "0754ba7129ebd37400574c6832c62ecb"
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
    "revision": "033e9c39430803b7c1e86813bf57625e"
  },
  {
    "url": "knowledge/code-audit/index.html",
    "revision": "08e7779da4198b6b5fdd037315825750"
  },
  {
    "url": "knowledge/code-audit/php-code-audit.html.html",
    "revision": "c88be9322cbed21836983ae1b58ad0de"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "ed6fb538bc3121a0b84c0a6cef6aed60"
  },
  {
    "url": "knowledge/hw/back-counter.html.html",
    "revision": "ddd33f9a11927b992ecf15519fa10df9"
  },
  {
    "url": "knowledge/hw/boundary-info.html.html",
    "revision": "b708f3ebb1b37be2f64be10f480c5e2f"
  },
  {
    "url": "knowledge/hw/cc.html.html",
    "revision": "0032bb8effd41ea1471578d04ba5ff7d"
  },
  {
    "url": "knowledge/hw/checklist.html.html",
    "revision": "1f97a7c89f5dfec07906f57b0aa6145a"
  },
  {
    "url": "knowledge/hw/defense-assets.html.html",
    "revision": "4e3b4208080628ce46d740004339db8a"
  },
  {
    "url": "knowledge/hw/del-log.html.html",
    "revision": "636f02833765e7cdd273d8565135e391"
  },
  {
    "url": "knowledge/hw/domain-pentest.html.html",
    "revision": "fc490da2693cf371de049d2e3fb78bf7"
  },
  {
    "url": "knowledge/hw/emergency-response.html.html",
    "revision": "cd6e76a25fca0e8843646222adcd02de"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "a92ffaa52a78266606abc597933550db"
  },
  {
    "url": "knowledge/hw/lan-info.html.html",
    "revision": "576cf1a499f79d2b91a1ae95c3d28d23"
  },
  {
    "url": "knowledge/hw/linux-baselinesec.html.html",
    "revision": "ab598853622f8795780228c0b84781ca"
  },
  {
    "url": "knowledge/hw/monitor-read.html.html",
    "revision": "e275d2ac411b68522959d71be30010c6"
  },
  {
    "url": "knowledge/hw/net-proxy.html.html",
    "revision": "f9b7707552d4f42c69ab61a8ef1a97c4"
  },
  {
    "url": "knowledge/hw/ntml-hash.html.html",
    "revision": "a71a985a8348440f4d1e99bc73c67b2c"
  },
  {
    "url": "knowledge/hw/os-shell.html.html",
    "revision": "5a66dfc7789200a8672fb3b49f368604"
  },
  {
    "url": "knowledge/hw/to-root.html.html",
    "revision": "1f4de3cacddeda9ab6844647bd6146fe"
  },
  {
    "url": "knowledge/hw/webshell.html.html",
    "revision": "b84639e0fd5cba3497e43c145e22c08c"
  },
  {
    "url": "knowledge/hw/windows-baselinesec.html.html",
    "revision": "fd8137b4679614081a3d11a8968625be"
  },
  {
    "url": "knowledge/web/code-injection.html.html",
    "revision": "9316a3aff529e5a548535bd6ce21cbb1"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html.html",
    "revision": "18bc9219f4c00c878688edc1003cf6c1"
  },
  {
    "url": "knowledge/web/expression-language-injection.html.html",
    "revision": "6c6d2a403cf9f2421ed08b2c4cf27509"
  },
  {
    "url": "knowledge/web/file-download.html.html",
    "revision": "2e0201fcdcc69e4b16c9d60178a7302f"
  },
  {
    "url": "knowledge/web/file-includes.html.html",
    "revision": "90b0d7ecfae3990d9957e2a2dcd581c1"
  },
  {
    "url": "knowledge/web/file-upload.html.html",
    "revision": "4080e92fe423ce7e74e1dffe50974e79"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "3ea5c9916dbcc624d894c1c06bf6d3aa"
  },
  {
    "url": "knowledge/web/jwt-cookie.html.html",
    "revision": "4ba5f4d0cfdeaccd5ae9dfb1322fefe9"
  },
  {
    "url": "knowledge/web/logical-vulns.html.html",
    "revision": "b066ffd144f0a77fa72fefee46995561"
  },
  {
    "url": "knowledge/web/phpsec.html.html",
    "revision": "1fe67e78783d3415c0d73b16d299513b"
  },
  {
    "url": "knowledge/web/same-origin-policy.html.html",
    "revision": "c75eabdd51fd59f0cafe2b01b9bd2013"
  },
  {
    "url": "knowledge/web/session-sec.html.html",
    "revision": "53d805dabb86962b749c08dfc12f4fe1"
  },
  {
    "url": "knowledge/web/source-leaked.html.html",
    "revision": "fd0410070b678bc8387f95152514af7b"
  },
  {
    "url": "knowledge/web/sql-injection.html.html",
    "revision": "547e972053e85123d2f06876a123921d"
  },
  {
    "url": "knowledge/web/xss.html.html",
    "revision": "92ebe4418103c55df094342815ba19b8"
  },
  {
    "url": "knowledge/web/xxe.html.html",
    "revision": "963aadea9deac15cfb07eadbff47e4f7"
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
    "revision": "21bcf9deabb825edbe13114389a5543a"
  },
  {
    "url": "wechat.png",
    "revision": "775aaf487bb53c6c2b12ab760df2ea22"
  },
  {
    "url": "wgplogo.svg",
    "revision": "7cc9e4fec976dcd1e904698a85119826"
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
