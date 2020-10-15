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
    "url": "assets/css/4.styles.dc92b959.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/52.styles.58da8858.css",
    "revision": "5cc8455522db7d3e59c3fea7dbaff53f"
  },
  {
    "url": "assets/css/54.styles.69fa1a0f.css",
    "revision": "97d5a643374119c3536f8878e7811d23"
  },
  {
    "url": "assets/css/55.styles.f15da474.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/7.styles.8dd48d5e.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.f55e3dd4.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/55.aa1a827a.js",
    "revision": "fb7858efe1466b8cfaee78add24358a7"
  },
  {
    "url": "assets/js/app.aa1a827a.js",
    "revision": "6f4e62f6738f70e81c8e5eae9efb70b0"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.aa1a827a.js",
    "revision": "66c14ae12644faa6974e1f385c9d8a01"
  },
  {
    "url": "assets/js/en-US/guide/README.md.aa1a827a.js",
    "revision": "985b52cc4d8981bc04bb3a1d37690dc6"
  },
  {
    "url": "assets/js/en-US/README.md.aa1a827a.js",
    "revision": "c6b2a5f2e6abe621e71684fcf00c38c8"
  },
  {
    "url": "assets/js/en-US/update-log.md.aa1a827a.js",
    "revision": "b4016310be1d18d8cf5de79a781b7166"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.aa1a827a.js",
    "revision": "a3fbf28bb830ff4785094303d3c4cf2c"
  },
  {
    "url": "assets/js/guide/README.md.aa1a827a.js",
    "revision": "7d254ed808f585999c604cb36687b5ea"
  },
  {
    "url": "assets/js/knowledge/code-audit/php-code-audit.md.aa1a827a.js",
    "revision": "62a36d78728f7c16b5049cc8fe44ade5"
  },
  {
    "url": "assets/js/knowledge/code-audit/README.md.aa1a827a.js",
    "revision": "b038dabb8f246bc756301d51c4f8ae71"
  },
  {
    "url": "assets/js/knowledge/ctf/deserialize-byte-escape.md.aa1a827a.js",
    "revision": "d58550d4f69bb4c650a37b6bbe3004b8"
  },
  {
    "url": "assets/js/knowledge/ctf/js-prototype-chain-pollution.md.aa1a827a.js",
    "revision": "cb08df70f3e52b04d96b741df556aba1"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.aa1a827a.js",
    "revision": "c8108af72e3a1fdb957363f040cc9728"
  },
  {
    "url": "assets/js/knowledge/ctf/RSA.md.aa1a827a.js",
    "revision": "b717a2aee71929c7d5a5b1f2de651763"
  },
  {
    "url": "assets/js/knowledge/ctf/ssrf-gopher.md.aa1a827a.js",
    "revision": "8c496dfd4f52e7bd55924ef2c6105eac"
  },
  {
    "url": "assets/js/knowledge/ctf/Volatility.md.aa1a827a.js",
    "revision": "a3c64a88362bd50d4202fbf730d93c15"
  },
  {
    "url": "assets/js/knowledge/ctf/xxe-bypass-payload.md.aa1a827a.js",
    "revision": "a15a9a463a231b3bf3b287c56ecd42ef"
  },
  {
    "url": "assets/js/knowledge/hw/back-counter.md.aa1a827a.js",
    "revision": "43aa75d41c966b2bc83fd9136cf68df0"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.aa1a827a.js",
    "revision": "f1c8292483c6c5515517b94d7a885246"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.aa1a827a.js",
    "revision": "cc5307a4c72a9bde91b9ca76f53bb3c7"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.aa1a827a.js",
    "revision": "e731057fae75f82eb6a5696bb489f5c8"
  },
  {
    "url": "assets/js/knowledge/hw/defense-assets.md.aa1a827a.js",
    "revision": "b661e8c83f2762cd5acefb0956043109"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.aa1a827a.js",
    "revision": "f6ef227f58a85a19bad74d7da70a4f5b"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.aa1a827a.js",
    "revision": "e01b2e11b7567b62938a4ed44a3a002a"
  },
  {
    "url": "assets/js/knowledge/hw/emergency-response.md.aa1a827a.js",
    "revision": "b74e9f42e3b7ecf3b9cc3bc49a2dc5e6"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.aa1a827a.js",
    "revision": "8fd676e6548f43a0b96f56d0e62559ae"
  },
  {
    "url": "assets/js/knowledge/hw/linux-baselinesec.md.aa1a827a.js",
    "revision": "67cf87bcc29d17f698be94b981b551af"
  },
  {
    "url": "assets/js/knowledge/hw/monitor-read.md.aa1a827a.js",
    "revision": "d94b2d4b3c470200e50e004b76f5c6cc"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.aa1a827a.js",
    "revision": "083a8c61eff8ae370d3913d41ce3c6b4"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.aa1a827a.js",
    "revision": "2ed6bd6d1e93b72600c1f16306da6dd4"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.aa1a827a.js",
    "revision": "e53bcbefc535c05822eedede570969ba"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.aa1a827a.js",
    "revision": "ac6690d4b505e080d4ac12e8a58bc9c0"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.aa1a827a.js",
    "revision": "52eb87d954c045dd42c91bc71284ff04"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.aa1a827a.js",
    "revision": "73c1ac9037d2cf72734979f2ec44a3fc"
  },
  {
    "url": "assets/js/knowledge/hw/windows-baselinesec.md.aa1a827a.js",
    "revision": "e74e7a8ed0b80f2a3baa5850aa25f3bf"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.aa1a827a.js",
    "revision": "36b6ac8b863827aacaa4975797282573"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.aa1a827a.js",
    "revision": "7f7e5cc59c35a800fe1852cb4a869fd9"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.aa1a827a.js",
    "revision": "586feb439c5bbc29cdb5cdabb14f0678"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.aa1a827a.js",
    "revision": "af9742bd7594b3dd6bdc06747b731a28"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.aa1a827a.js",
    "revision": "b1903e77eef99f4293e0ba2f3fd5b6cc"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.aa1a827a.js",
    "revision": "c1a319fdc776b9f6a8001a25f4581414"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.aa1a827a.js",
    "revision": "2b031c8dab829e4a218fb0ff6b0a2f39"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.aa1a827a.js",
    "revision": "3f189eaa071828bde1f908c4b7548a46"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.aa1a827a.js",
    "revision": "59c24121b7c561037bc5c878066a0ea6"
  },
  {
    "url": "assets/js/knowledge/web/README.md.aa1a827a.js",
    "revision": "290ef702689435bb095e339234e6b61a"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.aa1a827a.js",
    "revision": "b7d8d7a63a3545aeb43ee12e686aa393"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.aa1a827a.js",
    "revision": "498acf7e875fa6a2005c5515cd19acd3"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.aa1a827a.js",
    "revision": "7d7be8c64d2763aebe04a691cd66a2a1"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.aa1a827a.js",
    "revision": "98eb1197e3179a3eeda48f55dda83864"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.aa1a827a.js",
    "revision": "e6c2e85628bf4f89dc156e3b9a57fc05"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.aa1a827a.js",
    "revision": "1b91a84d509a5f72f0caa0edf8adef9a"
  },
  {
    "url": "assets/js/LayoutWrapper.aa1a827a.js",
    "revision": "de593698e053f36b83780d97aa269041"
  },
  {
    "url": "assets/js/notFoundWrapper.aa1a827a.js",
    "revision": "e042245217c6b438a26c955326b9f423"
  },
  {
    "url": "assets/js/README.md.aa1a827a.js",
    "revision": "632218c327122581563993c0e57f60b0"
  },
  {
    "url": "assets/js/update-log.md.aa1a827a.js",
    "revision": "c199bac68a0dc2233c91275ca2a511ea"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.aa1a827a.js",
    "revision": "48fc3f54d57aa3110a67d06fb4ba211a"
  },
  {
    "url": "en-US/guide/how-to-contribute.html.html",
    "revision": "d0ac7cd07233fa6d1849d951ae4d66be"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "50c290a4663cd2e2701f4796204c1b01"
  },
  {
    "url": "en-US/index.html",
    "revision": "d6aaccea89f37f3fdeb1104b6f1daee4"
  },
  {
    "url": "en-US/update-log.html.html",
    "revision": "e934c6a000e972bc15130aa52d0ea60d"
  },
  {
    "url": "guide/how-to-contribute.html.html",
    "revision": "02df2432a0a7e0ac6c03113590055601"
  },
  {
    "url": "guide/index.html",
    "revision": "929feb039159df83ecc378bf403e48d2"
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
    "url": "images/ctf-entry/1.png",
    "revision": "c66347ee63f067f1e6a336b89977a1a9"
  },
  {
    "url": "images/ctf-entry/2.png",
    "revision": "c6b9dc11d3e4fb9bc6901315ceca0702"
  },
  {
    "url": "images/ctf-entry/3.png",
    "revision": "b5d556e4301a7fb82665acb9454d613a"
  },
  {
    "url": "images/ctf-entry/4.png",
    "revision": "76df14b43d1dc089b2bef221b68ecc44"
  },
  {
    "url": "images/ctf-entry/5.png",
    "revision": "d8b5e6d1846bac1dd872d8b6e81a5904"
  },
  {
    "url": "images/ctf-entry/awd-network.png",
    "revision": "3b0f624a6e2dbf4e630009b77023ffec"
  },
  {
    "url": "images/ctf-entry/awd-say.png",
    "revision": "286ecb7a12a5cd888cb260b61c3e36b3"
  },
  {
    "url": "images/ctf-entry/ctf.png",
    "revision": "3afe20ca6d1ae552dcb48d78a4ef9307"
  },
  {
    "url": "images/ctf-entry/ctf2.png",
    "revision": "56121c0ba605c188563014ef75d036c4"
  },
  {
    "url": "images/ctf-entry/flag.png",
    "revision": "eb817c465963760af5a4ca9b0d45a8e0"
  },
  {
    "url": "images/ctf-entry/misc-ysl-img-2.png",
    "revision": "c54d9f3aa0a62166d39772e7539e1410"
  },
  {
    "url": "images/ctf-entry/misc-ysl-img-3.png",
    "revision": "6b2b55d53fe6436c35c63bd9c2a30077"
  },
  {
    "url": "images/ctf-entry/misc-ysl-img.png",
    "revision": "bff43500520ddb5101548244c980de81"
  },
  {
    "url": "images/ctf-entry/mix-pt.png",
    "revision": "b595aec28d85a5c7c6535a7564c6ec09"
  },
  {
    "url": "images/ctf-entry/tv-awd.png",
    "revision": "48364110b1916b460c04b97a58819fb7"
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
    "url": "images/js-prototype-chain-pollution/2.png",
    "revision": "0436eb51b39523116507a1a3834900d3"
  },
  {
    "url": "images/js-prototype-chain-pollution/3.png",
    "revision": "12db984d79fb6f1997a47db95da17209"
  },
  {
    "url": "images/js-prototype-chain-pollution/4.png",
    "revision": "497b68a2ea40b9b67618c63eaa406d01"
  },
  {
    "url": "images/js-prototype-chain-pollution/5.png",
    "revision": "f232256204d035936ababb1f6fa3d6a3"
  },
  {
    "url": "images/js-prototype-chain-pollution/6.png",
    "revision": "93ae2e3267259193a00870c94c50cb0f"
  },
  {
    "url": "images/js-prototype-chain-pollution/7.png",
    "revision": "46a7212571020bbe01a8f6a001d63fc6"
  },
  {
    "url": "images/js-prototype-chain-pollution/8.png",
    "revision": "def1f43b528f90a2e7f7e23eae03ca2e"
  },
  {
    "url": "images/js-prototype-chain-pollution/title.png",
    "revision": "0067b4735e585a420084892d72e0caff"
  },
  {
    "url": "images/ssrf-gopher/1.png",
    "revision": "edb621d79061eea97a0267dc89c736ec"
  },
  {
    "url": "images/ssrf-gopher/2.png",
    "revision": "b618a17ac867315e880229f163f5e629"
  },
  {
    "url": "images/ssrf-gopher/3.png",
    "revision": "acebed2cf7518beff684c7b86fd63e0d"
  },
  {
    "url": "images/wsecxx.png",
    "revision": "e3f3976a331a5aa806a46c9ad5604235"
  },
  {
    "url": "index.html",
    "revision": "9146709073440a4d00ed3979230a48fd"
  },
  {
    "url": "knowledge/code-audit/index.html",
    "revision": "223b3c545ec18f2943eebbef1e509d10"
  },
  {
    "url": "knowledge/code-audit/php-code-audit.html.html",
    "revision": "6ccaa14626174fbeea602ff7f594fb17"
  },
  {
    "url": "knowledge/ctf/deserialize-byte-escape.html.html",
    "revision": "f187048c33ee70dcfe3a5c5ca6908a23"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "8f91d8046d540aba0474dce63b2bfc87"
  },
  {
    "url": "knowledge/ctf/js-prototype-chain-pollution.html.html",
    "revision": "2c80b83e629640151d5130cb02229d03"
  },
  {
    "url": "knowledge/ctf/RSA.html.html",
    "revision": "bf9df7c733475b59e1be901bc868758b"
  },
  {
    "url": "knowledge/ctf/ssrf-gopher.html.html",
    "revision": "01b6f964568283f886133442dab63c6c"
  },
  {
    "url": "knowledge/ctf/Volatility.html.html",
    "revision": "66b8aa0b9b9bad7f55b80e133c75f282"
  },
  {
    "url": "knowledge/ctf/xxe-bypass-payload.html.html",
    "revision": "c44b352a9f1cd8c7e866ac99206c5916"
  },
  {
    "url": "knowledge/hw/back-counter.html.html",
    "revision": "e6428ce75b185e003656de3c2a914896"
  },
  {
    "url": "knowledge/hw/boundary-info.html.html",
    "revision": "a9d5c292cbed1f0bb5d274bca8b5b6dd"
  },
  {
    "url": "knowledge/hw/cc.html.html",
    "revision": "6a98144afe0294c820b415f7b402c882"
  },
  {
    "url": "knowledge/hw/checklist.html.html",
    "revision": "04e7e1f4b33599ee90681ac36b6b4c73"
  },
  {
    "url": "knowledge/hw/defense-assets.html.html",
    "revision": "53e4b857d9b23039efc9edf520c31c22"
  },
  {
    "url": "knowledge/hw/del-log.html.html",
    "revision": "bbc997d51ed6e0e1d42d22aa35134a95"
  },
  {
    "url": "knowledge/hw/domain-pentest.html.html",
    "revision": "04d883bc669940f77f98224f80c4f23f"
  },
  {
    "url": "knowledge/hw/emergency-response.html.html",
    "revision": "2d37aed7c1d8dffa4ddc99de884424d7"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "968289173b172e8a695404baa75b5948"
  },
  {
    "url": "knowledge/hw/lan-info.html.html",
    "revision": "a1507c698d4476f9d1a9cddcf82db94a"
  },
  {
    "url": "knowledge/hw/linux-baselinesec.html.html",
    "revision": "7ab562786dadbe12474426ced8a6b016"
  },
  {
    "url": "knowledge/hw/monitor-read.html.html",
    "revision": "44732d3cad531b3f715cd93c2100a26e"
  },
  {
    "url": "knowledge/hw/net-proxy.html.html",
    "revision": "adf40906048eb2cc1c728e12bf0320b2"
  },
  {
    "url": "knowledge/hw/ntml-hash.html.html",
    "revision": "4e266df8c46c86113fb4c7fc059be886"
  },
  {
    "url": "knowledge/hw/os-shell.html.html",
    "revision": "20e0b1047aba3a92c4d3d7bb8c58d3e9"
  },
  {
    "url": "knowledge/hw/to-root.html.html",
    "revision": "d98683778fca2e78caadb4c01bc247b3"
  },
  {
    "url": "knowledge/hw/webshell.html.html",
    "revision": "014b44ef0a7c254451cf9c2aa539d63c"
  },
  {
    "url": "knowledge/hw/windows-baselinesec.html.html",
    "revision": "cbf97d8ca847daeb6fec4e11d8826e6a"
  },
  {
    "url": "knowledge/web/code-injection.html.html",
    "revision": "2d92ebf4c885636f623cb2b278fb87e3"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html.html",
    "revision": "f9225f3719121b00bade6cc959b61114"
  },
  {
    "url": "knowledge/web/expression-language-injection.html.html",
    "revision": "af844a03e74d26ad92a6a6fe380273e9"
  },
  {
    "url": "knowledge/web/file-download.html.html",
    "revision": "77dad230d05375b6a9c60a8b43272649"
  },
  {
    "url": "knowledge/web/file-includes.html.html",
    "revision": "2d92b7c74d9d93eb2597b2717d53f18d"
  },
  {
    "url": "knowledge/web/file-upload.html.html",
    "revision": "614513b590c8f2aba47d73a8063c9dcc"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "2bcf807233e8552eafdc1b8f68f1f89f"
  },
  {
    "url": "knowledge/web/jwt-cookie.html.html",
    "revision": "894e1e4224a21e5b3606151187e2936c"
  },
  {
    "url": "knowledge/web/logical-vulns.html.html",
    "revision": "a44b579108462116dd27d153663e2f22"
  },
  {
    "url": "knowledge/web/phpsec.html.html",
    "revision": "5301771ad151811f41538e9c499f813a"
  },
  {
    "url": "knowledge/web/same-origin-policy.html.html",
    "revision": "48f569bf1b43dffe8b2960a6d5391d49"
  },
  {
    "url": "knowledge/web/session-sec.html.html",
    "revision": "4c70715b643e47c4ac95c8f2bbbf20e7"
  },
  {
    "url": "knowledge/web/source-leaked.html.html",
    "revision": "46c8618c48d80a54876dd46596abe326"
  },
  {
    "url": "knowledge/web/sql-injection.html.html",
    "revision": "f16dec2869c770ec6535559461388b18"
  },
  {
    "url": "knowledge/web/xss.html.html",
    "revision": "105facfeccf2172a932ce968980fe701"
  },
  {
    "url": "knowledge/web/xxe.html.html",
    "revision": "ac9f369313d5b07d897b426d2ce9b953"
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
    "revision": "8601c53fc53fd0d32d61f5cee71267ae"
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
