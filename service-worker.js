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
    "url": "assets/css/4.styles.71b56916.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/48.styles.b03ba32f.css",
    "revision": "5cc8455522db7d3e59c3fea7dbaff53f"
  },
  {
    "url": "assets/css/50.styles.d07e0355.css",
    "revision": "97d5a643374119c3536f8878e7811d23"
  },
  {
    "url": "assets/css/51.styles.d31c189d.css",
    "revision": "68b329da9893e34099c7d8ad5cb9c940"
  },
  {
    "url": "assets/css/7.styles.9862b313.css",
    "revision": "5792a02549211697611eab7871fd9a00"
  },
  {
    "url": "assets/css/styles.03ab1e0b.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/51.5d90b578.js",
    "revision": "deb5ccb5f77adb17e083add0c32e1450"
  },
  {
    "url": "assets/js/app.5d90b578.js",
    "revision": "716f9fbb2bb529b6a763c76bc6805b43"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.5d90b578.js",
    "revision": "66c14ae12644faa6974e1f385c9d8a01"
  },
  {
    "url": "assets/js/en-US/guide/README.md.5d90b578.js",
    "revision": "eea2ab2f211ba14f2137c97da86e82e3"
  },
  {
    "url": "assets/js/en-US/README.md.5d90b578.js",
    "revision": "c6b2a5f2e6abe621e71684fcf00c38c8"
  },
  {
    "url": "assets/js/en-US/update-log.md.5d90b578.js",
    "revision": "b4016310be1d18d8cf5de79a781b7166"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.5d90b578.js",
    "revision": "053bbbfba5edaf75a25766c1a444cd09"
  },
  {
    "url": "assets/js/guide/README.md.5d90b578.js",
    "revision": "bc1743fa4258a7bc5f76a532850649b4"
  },
  {
    "url": "assets/js/knowledge/code-audit/php-code-audit.md.5d90b578.js",
    "revision": "62a36d78728f7c16b5049cc8fe44ade5"
  },
  {
    "url": "assets/js/knowledge/code-audit/README.md.5d90b578.js",
    "revision": "b038dabb8f246bc756301d51c4f8ae71"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.5d90b578.js",
    "revision": "c8108af72e3a1fdb957363f040cc9728"
  },
  {
    "url": "assets/js/knowledge/ctf/RSA.md.5d90b578.js",
    "revision": "d3042fd8a82fbbd014298ee83ad5556d"
  },
  {
    "url": "assets/js/knowledge/ctf/Volatility.md.5d90b578.js",
    "revision": "a3c64a88362bd50d4202fbf730d93c15"
  },
  {
    "url": "assets/js/knowledge/hw/back-counter.md.5d90b578.js",
    "revision": "7b2333d0426aad06d129c2a01a532f97"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.5d90b578.js",
    "revision": "6495ae363f57109e582c93921769d10a"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.5d90b578.js",
    "revision": "2f6af2ff12ee99981f7f08346e5d6627"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.5d90b578.js",
    "revision": "6b3cdf3a6dd08890ddfea860e7c3275e"
  },
  {
    "url": "assets/js/knowledge/hw/defense-assets.md.5d90b578.js",
    "revision": "c450fef1b3451e87870f4f249d880d25"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.5d90b578.js",
    "revision": "931b6d324dc1b466df2f4c91b1cad11d"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.5d90b578.js",
    "revision": "93381c51787ba39d204cc8d8052fb6af"
  },
  {
    "url": "assets/js/knowledge/hw/emergency-response.md.5d90b578.js",
    "revision": "44f24b3c57f0c51e6c2dd8b25608066e"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.5d90b578.js",
    "revision": "6d8e1036b8868a1e3dc1e7cbbe3393b8"
  },
  {
    "url": "assets/js/knowledge/hw/linux-baselinesec.md.5d90b578.js",
    "revision": "8cfb9777e4e5e53d494990ad5a6452ce"
  },
  {
    "url": "assets/js/knowledge/hw/monitor-read.md.5d90b578.js",
    "revision": "a1fad7e11529e9ae223e62632b3a27d4"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.5d90b578.js",
    "revision": "396e454d9148d2feb289678af0658f8f"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.5d90b578.js",
    "revision": "5fd9a46a326018eeed4c9b48d2a13f23"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.5d90b578.js",
    "revision": "87679446c89f35794538e342c409b920"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.5d90b578.js",
    "revision": "799dbcd99ec4fda1e5fd4267fc33d75c"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.5d90b578.js",
    "revision": "85f520bf8002cc56dee508ca4788e008"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.5d90b578.js",
    "revision": "873e4cd327f2d3885b278f86ee570922"
  },
  {
    "url": "assets/js/knowledge/hw/windows-baselinesec.md.5d90b578.js",
    "revision": "ef8df8c07febde148f8c7fa6fa4460c6"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.5d90b578.js",
    "revision": "a116e68fed52d489c4f2c4a65e1d2aef"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.5d90b578.js",
    "revision": "6bf21e82ebee3821c44b12e6891262a3"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.5d90b578.js",
    "revision": "797f68cd3f3c746debabf8ef39225295"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.5d90b578.js",
    "revision": "25e4a845e89ad4c9b476290dfae2632a"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.5d90b578.js",
    "revision": "c3c18992244cab25fb8c76e6baa21fa6"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.5d90b578.js",
    "revision": "f28df7b8463b80e7cb88ea58a5261ab3"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.5d90b578.js",
    "revision": "a0c2826cc765b57338ecfa3c2ed73200"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.5d90b578.js",
    "revision": "ac6904aa2a14d0e56c593db8bad1f39b"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.5d90b578.js",
    "revision": "b810b176fa657bc29e7d59082d613e6a"
  },
  {
    "url": "assets/js/knowledge/web/README.md.5d90b578.js",
    "revision": "e9af434e3e31d590dfbadd58a9a7ddf1"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.5d90b578.js",
    "revision": "b6931b6225a3af5c38a46052409ade7c"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.5d90b578.js",
    "revision": "0b295e7b1e219a0b72251f2544dc9f7e"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.5d90b578.js",
    "revision": "64df0a7fff6ac2dabe36adac6aefbe55"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.5d90b578.js",
    "revision": "252e5809b8be2efc8fe811ccd85936d3"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.5d90b578.js",
    "revision": "e81c9f8074df0b20668fb22fa187f0c1"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.5d90b578.js",
    "revision": "cd2ef397812096fd5ecee07f93fd5cc2"
  },
  {
    "url": "assets/js/LayoutWrapper.5d90b578.js",
    "revision": "81a53a6480ab71c5a2892322d45bea2f"
  },
  {
    "url": "assets/js/notFoundWrapper.5d90b578.js",
    "revision": "c35fd6ad3b2eae885270a183cbd49e6d"
  },
  {
    "url": "assets/js/README.md.5d90b578.js",
    "revision": "632218c327122581563993c0e57f60b0"
  },
  {
    "url": "assets/js/update-log.md.5d90b578.js",
    "revision": "476ea8c4c1bfcbb9d237bb09619116bf"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.5d90b578.js",
    "revision": "8008b570285c797b95280e2d67298a57"
  },
  {
    "url": "en-US/guide/how-to-contribute.html.html",
    "revision": "98298d76fb860230f365aa75da422549"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "af7c348ca5aced0eff71b4aedeb3346d"
  },
  {
    "url": "en-US/index.html",
    "revision": "34c9033f2646dc9f3c675688a47e8004"
  },
  {
    "url": "en-US/update-log.html.html",
    "revision": "b591c85e40a4c32b01b09aa474063405"
  },
  {
    "url": "guide/how-to-contribute.html.html",
    "revision": "6e6ed2ff4bfd0d3bfa84ebcf595c91db"
  },
  {
    "url": "guide/index.html",
    "revision": "33b6a028c38f1d67a1fe065308c38e10"
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
    "url": "images/wsecxx.png",
    "revision": "e3f3976a331a5aa806a46c9ad5604235"
  },
  {
    "url": "index.html",
    "revision": "6854e0cdc517f0b00bf1591be1097b82"
  },
  {
    "url": "knowledge/code-audit/index.html",
    "revision": "6d86ac4fb4af587f1e66b61173148d75"
  },
  {
    "url": "knowledge/code-audit/php-code-audit.html.html",
    "revision": "c14796563b7af42ac6d26c90f28c3895"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "271a48936e05509658a5b259569083d8"
  },
  {
    "url": "knowledge/ctf/RSA.html.html",
    "revision": "c7743d6a3429e017529426dafb5158aa"
  },
  {
    "url": "knowledge/ctf/Volatility.html.html",
    "revision": "70a79b0e1e803d2a7679c05a36f4af3c"
  },
  {
    "url": "knowledge/hw/back-counter.html.html",
    "revision": "2dd22b1470a3c6e881a2777224185731"
  },
  {
    "url": "knowledge/hw/boundary-info.html.html",
    "revision": "140516457a7280a67b78a5584208661a"
  },
  {
    "url": "knowledge/hw/cc.html.html",
    "revision": "2aaebf89c22926f317b77d74bc980fcf"
  },
  {
    "url": "knowledge/hw/checklist.html.html",
    "revision": "d62730d50a1e040bfda6287f6af490e5"
  },
  {
    "url": "knowledge/hw/defense-assets.html.html",
    "revision": "58c50d65e54667c6ada96a71a00bdb54"
  },
  {
    "url": "knowledge/hw/del-log.html.html",
    "revision": "b702189eb862efb2803b916b7684ab93"
  },
  {
    "url": "knowledge/hw/domain-pentest.html.html",
    "revision": "05b4622e2e699c77105fb54acbaba905"
  },
  {
    "url": "knowledge/hw/emergency-response.html.html",
    "revision": "e5147507acdc41cc4001d91a58c28a40"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "b3f0266efe00b3d5f7b89534407b7ec0"
  },
  {
    "url": "knowledge/hw/lan-info.html.html",
    "revision": "9197e6449d4bb13e6557f5571d5ba902"
  },
  {
    "url": "knowledge/hw/linux-baselinesec.html.html",
    "revision": "2c5a337b63f1da3dec75d4f7b45edddb"
  },
  {
    "url": "knowledge/hw/monitor-read.html.html",
    "revision": "22253f7d3896e4daef877eca1c546379"
  },
  {
    "url": "knowledge/hw/net-proxy.html.html",
    "revision": "991dd6bed3980c345cff6126d862adc6"
  },
  {
    "url": "knowledge/hw/ntml-hash.html.html",
    "revision": "4b4bd09b36dd5522d9b03ee780d5928b"
  },
  {
    "url": "knowledge/hw/os-shell.html.html",
    "revision": "c8da67e3de72dbe7413011aa1627d870"
  },
  {
    "url": "knowledge/hw/to-root.html.html",
    "revision": "1b226eccb772c22fba4eaa3bf7778d94"
  },
  {
    "url": "knowledge/hw/webshell.html.html",
    "revision": "6ce66c00623d309ba14c4039e07da8f9"
  },
  {
    "url": "knowledge/hw/windows-baselinesec.html.html",
    "revision": "3fec6f63ae203a410bc95bab0dbc2072"
  },
  {
    "url": "knowledge/web/code-injection.html.html",
    "revision": "95b9da939e9b1e53992af0c186dcff02"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html.html",
    "revision": "e443cc6f9ac83fba1c2b381fac94c97a"
  },
  {
    "url": "knowledge/web/expression-language-injection.html.html",
    "revision": "3e3a972edf2137a8024679081a9f8ae2"
  },
  {
    "url": "knowledge/web/file-download.html.html",
    "revision": "55ea90cf6669448711e0c1b397c14616"
  },
  {
    "url": "knowledge/web/file-includes.html.html",
    "revision": "f6a79908d0a901c80888eb4723d62274"
  },
  {
    "url": "knowledge/web/file-upload.html.html",
    "revision": "f1eb624edf9428ed25ffbe34ffbd6986"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "00dfada1efc1d535a93ea1601823d961"
  },
  {
    "url": "knowledge/web/jwt-cookie.html.html",
    "revision": "566e6487be9bafefcf287acc98d7cfb4"
  },
  {
    "url": "knowledge/web/logical-vulns.html.html",
    "revision": "5ce240e6ca1f4516d84f83b55db4da41"
  },
  {
    "url": "knowledge/web/phpsec.html.html",
    "revision": "00023d5d4648fe326d08cff3bab3088b"
  },
  {
    "url": "knowledge/web/same-origin-policy.html.html",
    "revision": "46b16cf01671b6e6fa63eb79c5901f23"
  },
  {
    "url": "knowledge/web/session-sec.html.html",
    "revision": "5ae084639cfd0df937b8137eded78fc7"
  },
  {
    "url": "knowledge/web/source-leaked.html.html",
    "revision": "2840b7cc6e4817571ff540080f9ee005"
  },
  {
    "url": "knowledge/web/sql-injection.html.html",
    "revision": "31eef0c002db82aacd610a752563cc18"
  },
  {
    "url": "knowledge/web/xss.html.html",
    "revision": "3293f1f36a69da97524d2596e4894401"
  },
  {
    "url": "knowledge/web/xxe.html.html",
    "revision": "aabb3a58a22315386a0443a822626f49"
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
    "revision": "f6b39a2363ccd694bf028b25b9e05992"
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
