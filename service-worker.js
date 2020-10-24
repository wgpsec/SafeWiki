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
    "url": "assets/css/4.styles.dce6ce0f.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/54.styles.90d2b616.css",
    "revision": "5cc8455522db7d3e59c3fea7dbaff53f"
  },
  {
    "url": "assets/css/56.styles.bbab876f.css",
    "revision": "97d5a643374119c3536f8878e7811d23"
  },
  {
    "url": "assets/css/57.styles.a2908465.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/7.styles.5104355f.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.d91ef817.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/57.e0fbc71b.js",
    "revision": "5a1b53315b6cad8f202dd74c0dbf2e01"
  },
  {
    "url": "assets/js/app.e0fbc71b.js",
    "revision": "343efdf44d09fe62f8ff2e02068f804e"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.e0fbc71b.js",
    "revision": "66c14ae12644faa6974e1f385c9d8a01"
  },
  {
    "url": "assets/js/en-US/guide/README.md.e0fbc71b.js",
    "revision": "20016fe8dd4ba9be2a796eeffe059ed8"
  },
  {
    "url": "assets/js/en-US/README.md.e0fbc71b.js",
    "revision": "c6b2a5f2e6abe621e71684fcf00c38c8"
  },
  {
    "url": "assets/js/en-US/update-log.md.e0fbc71b.js",
    "revision": "b4016310be1d18d8cf5de79a781b7166"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.e0fbc71b.js",
    "revision": "a3fbf28bb830ff4785094303d3c4cf2c"
  },
  {
    "url": "assets/js/guide/README.md.e0fbc71b.js",
    "revision": "2d08ae45556b6c367490d9d69b74576b"
  },
  {
    "url": "assets/js/knowledge/code-audit/php-code-audit.md.e0fbc71b.js",
    "revision": "62a36d78728f7c16b5049cc8fe44ade5"
  },
  {
    "url": "assets/js/knowledge/code-audit/README.md.e0fbc71b.js",
    "revision": "b038dabb8f246bc756301d51c4f8ae71"
  },
  {
    "url": "assets/js/knowledge/ctf/deserialize-byte-escape.md.e0fbc71b.js",
    "revision": "d58550d4f69bb4c650a37b6bbe3004b8"
  },
  {
    "url": "assets/js/knowledge/ctf/js-prototype-chain-pollution.md.e0fbc71b.js",
    "revision": "cb08df70f3e52b04d96b741df556aba1"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.e0fbc71b.js",
    "revision": "c8108af72e3a1fdb957363f040cc9728"
  },
  {
    "url": "assets/js/knowledge/ctf/RSA.md.e0fbc71b.js",
    "revision": "b717a2aee71929c7d5a5b1f2de651763"
  },
  {
    "url": "assets/js/knowledge/ctf/ssrf-gopher.md.e0fbc71b.js",
    "revision": "8c496dfd4f52e7bd55924ef2c6105eac"
  },
  {
    "url": "assets/js/knowledge/ctf/Volatility.md.e0fbc71b.js",
    "revision": "a3c64a88362bd50d4202fbf730d93c15"
  },
  {
    "url": "assets/js/knowledge/ctf/xxe-bypass-payload.md.e0fbc71b.js",
    "revision": "a15a9a463a231b3bf3b287c56ecd42ef"
  },
  {
    "url": "assets/js/knowledge/hw/back-counter.md.e0fbc71b.js",
    "revision": "43aa75d41c966b2bc83fd9136cf68df0"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.e0fbc71b.js",
    "revision": "981c545fb4cdff1b0a7064defe933b59"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.e0fbc71b.js",
    "revision": "cc5307a4c72a9bde91b9ca76f53bb3c7"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.e0fbc71b.js",
    "revision": "e731057fae75f82eb6a5696bb489f5c8"
  },
  {
    "url": "assets/js/knowledge/hw/defense-assets.md.e0fbc71b.js",
    "revision": "b661e8c83f2762cd5acefb0956043109"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.e0fbc71b.js",
    "revision": "f6ef227f58a85a19bad74d7da70a4f5b"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.e0fbc71b.js",
    "revision": "e01b2e11b7567b62938a4ed44a3a002a"
  },
  {
    "url": "assets/js/knowledge/hw/emergency-response.md.e0fbc71b.js",
    "revision": "b74e9f42e3b7ecf3b9cc3bc49a2dc5e6"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.e0fbc71b.js",
    "revision": "8fd676e6548f43a0b96f56d0e62559ae"
  },
  {
    "url": "assets/js/knowledge/hw/linux-baselinesec.md.e0fbc71b.js",
    "revision": "67cf87bcc29d17f698be94b981b551af"
  },
  {
    "url": "assets/js/knowledge/hw/monitor-read.md.e0fbc71b.js",
    "revision": "d94b2d4b3c470200e50e004b76f5c6cc"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.e0fbc71b.js",
    "revision": "083a8c61eff8ae370d3913d41ce3c6b4"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.e0fbc71b.js",
    "revision": "2ed6bd6d1e93b72600c1f16306da6dd4"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.e0fbc71b.js",
    "revision": "e53bcbefc535c05822eedede570969ba"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.e0fbc71b.js",
    "revision": "ac6690d4b505e080d4ac12e8a58bc9c0"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.e0fbc71b.js",
    "revision": "e617ab2d0914371eaf44a1066bf23bf5"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.e0fbc71b.js",
    "revision": "73c1ac9037d2cf72734979f2ec44a3fc"
  },
  {
    "url": "assets/js/knowledge/hw/windows-baselinesec.md.e0fbc71b.js",
    "revision": "e74e7a8ed0b80f2a3baa5850aa25f3bf"
  },
  {
    "url": "assets/js/knowledge/intranet/Cobalt-Strike.md.e0fbc71b.js",
    "revision": "70f2a8391f75589ad06af4aed5463b4d"
  },
  {
    "url": "assets/js/knowledge/intranet/README.md.e0fbc71b.js",
    "revision": "38fb9b25dca4bade5d1ad3a315aa9841"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.e0fbc71b.js",
    "revision": "3ef6f1880abcc4bb5f6738073f7c818b"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.e0fbc71b.js",
    "revision": "59996ea4bd43c2d933cd016cc8b52c41"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.e0fbc71b.js",
    "revision": "be3ae5d3d34dbce956cadc106081f6fc"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.e0fbc71b.js",
    "revision": "41291f62ce57774ab5be3cb822939b2a"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.e0fbc71b.js",
    "revision": "1b53bb62d0846126051062703334d316"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.e0fbc71b.js",
    "revision": "9eb27a0dc855b877293b6d42419cab9c"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.e0fbc71b.js",
    "revision": "5e38d2be9433ef95d00e4ee5e976c9ad"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.e0fbc71b.js",
    "revision": "d70596acf7bb31fc0e0cebf4abdc8ae7"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.e0fbc71b.js",
    "revision": "031d8984adf98edbc7e6faa477bd2093"
  },
  {
    "url": "assets/js/knowledge/web/README.md.e0fbc71b.js",
    "revision": "ea6f420238da7ae607b3b1ea7f6cdbb6"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.e0fbc71b.js",
    "revision": "a5a10b986b59362c82822e0a01f77578"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.e0fbc71b.js",
    "revision": "67bd5155d9158cbf6bb6156617cfc8ca"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.e0fbc71b.js",
    "revision": "e0ba4081b8ab5370bdbe6e07103731a3"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.e0fbc71b.js",
    "revision": "5b8e6c405aaeb815ede98857cc874a7b"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.e0fbc71b.js",
    "revision": "91648aa53d0462c42b3e94469776a188"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.e0fbc71b.js",
    "revision": "0be53b216ff708d4831c303a5529fb3b"
  },
  {
    "url": "assets/js/LayoutWrapper.e0fbc71b.js",
    "revision": "afa940d9f5b8553b0f9f4acd9e3e3d1f"
  },
  {
    "url": "assets/js/notFoundWrapper.e0fbc71b.js",
    "revision": "012d7097d81e13dcb17bfa16f38128f8"
  },
  {
    "url": "assets/js/README.md.e0fbc71b.js",
    "revision": "632218c327122581563993c0e57f60b0"
  },
  {
    "url": "assets/js/update-log.md.e0fbc71b.js",
    "revision": "f473c7be035e2d9d2d0185754dd766b8"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.e0fbc71b.js",
    "revision": "d706a10af69f88574a054b4a6c0cb8d5"
  },
  {
    "url": "en-US/guide/how-to-contribute.html.html",
    "revision": "ee86d7fe1c01f9829a3869dfe74f45ba"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "60f8366838b7a1a1b780fcec4910eca5"
  },
  {
    "url": "en-US/index.html",
    "revision": "0714ffd61572c61b26bde523219281e8"
  },
  {
    "url": "en-US/update-log.html.html",
    "revision": "e6f5c6b4ed0edc4cc75aba76961163a5"
  },
  {
    "url": "guide/how-to-contribute.html.html",
    "revision": "cd8fd00b089146b71de8c1bc9109fea2"
  },
  {
    "url": "guide/index.html",
    "revision": "87184f631bebf6ba9374fd14884380b3"
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
    "revision": "6beaa4ecc87047085c4ab47c801b9c56"
  },
  {
    "url": "knowledge/code-audit/index.html",
    "revision": "b72f1e663219ab40b26c4661b49cdd40"
  },
  {
    "url": "knowledge/code-audit/php-code-audit.html.html",
    "revision": "7e8158bfa797b2bb0b0ad003f3ea0ad4"
  },
  {
    "url": "knowledge/ctf/deserialize-byte-escape.html.html",
    "revision": "8f27aabc98928aa1f83c37e8285c1514"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "03f81996c5ad8297c6766e7d8f0342d6"
  },
  {
    "url": "knowledge/ctf/js-prototype-chain-pollution.html.html",
    "revision": "c46efbcf03963d2237fab189580795dc"
  },
  {
    "url": "knowledge/ctf/RSA.html.html",
    "revision": "2bf76f10d4f89ad026f03a2b9d127c5c"
  },
  {
    "url": "knowledge/ctf/ssrf-gopher.html.html",
    "revision": "45d7f472d580be721f595b218892c88a"
  },
  {
    "url": "knowledge/ctf/Volatility.html.html",
    "revision": "c4b9b29f4c7ca4dec2f66c476e968ddc"
  },
  {
    "url": "knowledge/ctf/xxe-bypass-payload.html.html",
    "revision": "6b8252c771af23d4d4aed45a0dfef749"
  },
  {
    "url": "knowledge/hw/back-counter.html.html",
    "revision": "08795f14d346397be20f08b4b3281235"
  },
  {
    "url": "knowledge/hw/boundary-info.html.html",
    "revision": "2c012f45281ce3a4d604d066676c3bb2"
  },
  {
    "url": "knowledge/hw/cc.html.html",
    "revision": "b15813ecb412865b23571822ec425a8b"
  },
  {
    "url": "knowledge/hw/checklist.html.html",
    "revision": "124430fcfa96d6da96b2707528f3ccfb"
  },
  {
    "url": "knowledge/hw/defense-assets.html.html",
    "revision": "e2ebdbbbf3a1a53e841e6d4211e2d81f"
  },
  {
    "url": "knowledge/hw/del-log.html.html",
    "revision": "1f3a28b6d266ca5fdd2ae23c6b19bbcc"
  },
  {
    "url": "knowledge/hw/domain-pentest.html.html",
    "revision": "f0d3f31f88c2317c0d8b2604a284b409"
  },
  {
    "url": "knowledge/hw/emergency-response.html.html",
    "revision": "ad3fc3d03f12a6474e6e2f61841822e0"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "41b73dce053c2335ad2b8ab1ac24cb9c"
  },
  {
    "url": "knowledge/hw/lan-info.html.html",
    "revision": "7c0d0b2b1d8bc5c02f0d3cccfb4a9df8"
  },
  {
    "url": "knowledge/hw/linux-baselinesec.html.html",
    "revision": "0cd8a446ae36fd02fe4499b667d16744"
  },
  {
    "url": "knowledge/hw/monitor-read.html.html",
    "revision": "49d4396a1d67e73b4e8708599e1782bd"
  },
  {
    "url": "knowledge/hw/net-proxy.html.html",
    "revision": "11a49e8b2b75ea3427bf7fcd5ee62fa9"
  },
  {
    "url": "knowledge/hw/ntml-hash.html.html",
    "revision": "605d3ee4877dbbcfef90a547da3ca9ea"
  },
  {
    "url": "knowledge/hw/os-shell.html.html",
    "revision": "7f684ea93f3f1d10faa73d3d3282fa80"
  },
  {
    "url": "knowledge/hw/to-root.html.html",
    "revision": "d43e39612c1df509781586a341368abd"
  },
  {
    "url": "knowledge/hw/webshell.html.html",
    "revision": "7681413c2b442a6d4fdae175e2d7efef"
  },
  {
    "url": "knowledge/hw/windows-baselinesec.html.html",
    "revision": "5f343660919385297ec669a784097c14"
  },
  {
    "url": "knowledge/intranet/Cobalt-Strike.html.html",
    "revision": "e6ccd0559b105ac1bd136f853d98154f"
  },
  {
    "url": "knowledge/intranet/index.html",
    "revision": "c8de07a83cb699fcb4e7391f884b6610"
  },
  {
    "url": "knowledge/web/code-injection.html.html",
    "revision": "3aa6fc433b1a3ed6b735954c57ead888"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html.html",
    "revision": "e6187dbc3379c954a8c57b1d77957e56"
  },
  {
    "url": "knowledge/web/expression-language-injection.html.html",
    "revision": "98be037948233dab33a9e91464f56de9"
  },
  {
    "url": "knowledge/web/file-download.html.html",
    "revision": "c119a0df162865e54778bd7084f1d428"
  },
  {
    "url": "knowledge/web/file-includes.html.html",
    "revision": "3dff7df4d3271e2085fecd5d3e7c8f0d"
  },
  {
    "url": "knowledge/web/file-upload.html.html",
    "revision": "b6224a80757dadff27a19c128a7de26c"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "e24b556bd42dd3287d8ef8840623b59c"
  },
  {
    "url": "knowledge/web/jwt-cookie.html.html",
    "revision": "ddb3bc7266f80e15f960becd4080b194"
  },
  {
    "url": "knowledge/web/logical-vulns.html.html",
    "revision": "5ddca591ad40370a7e297e65824fbb22"
  },
  {
    "url": "knowledge/web/phpsec.html.html",
    "revision": "138124d86fcffd8e0130d9ded7f5700b"
  },
  {
    "url": "knowledge/web/same-origin-policy.html.html",
    "revision": "3100f777762f7fb6cdc1e484b4ec9b93"
  },
  {
    "url": "knowledge/web/session-sec.html.html",
    "revision": "ab2452cd36d90c256181c89cea5ed282"
  },
  {
    "url": "knowledge/web/source-leaked.html.html",
    "revision": "a84ac35eb65a3a20eb645bf5049a3a7c"
  },
  {
    "url": "knowledge/web/sql-injection.html.html",
    "revision": "96415faa8fa533905f52f65eb1c909ec"
  },
  {
    "url": "knowledge/web/xss.html.html",
    "revision": "7229b2da489d10e0dd895df033821aeb"
  },
  {
    "url": "knowledge/web/xxe.html.html",
    "revision": "baa9683cc57b931a3e39405ef2ec087e"
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
    "revision": "ac9cf32ad00083e5b2ae69a80f6ab02f"
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
