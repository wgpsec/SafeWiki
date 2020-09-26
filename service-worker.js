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
    "url": "assets/css/styles.571e414a.css",
    "revision": "9dd9925c1363ab8564ed93979c850990"
  },
  {
    "url": "assets/js/51.da3d2ecc.js",
    "revision": "deb5ccb5f77adb17e083add0c32e1450"
  },
  {
    "url": "assets/js/app.da3d2ecc.js",
    "revision": "e126ab399b70ec20ac20384615d087b8"
  },
  {
    "url": "assets/js/en-US/guide/how-to-contribute.md.da3d2ecc.js",
    "revision": "66c14ae12644faa6974e1f385c9d8a01"
  },
  {
    "url": "assets/js/en-US/guide/README.md.da3d2ecc.js",
    "revision": "eea2ab2f211ba14f2137c97da86e82e3"
  },
  {
    "url": "assets/js/en-US/README.md.da3d2ecc.js",
    "revision": "c6b2a5f2e6abe621e71684fcf00c38c8"
  },
  {
    "url": "assets/js/en-US/update-log.md.da3d2ecc.js",
    "revision": "b4016310be1d18d8cf5de79a781b7166"
  },
  {
    "url": "assets/js/guide/how-to-contribute.md.da3d2ecc.js",
    "revision": "053bbbfba5edaf75a25766c1a444cd09"
  },
  {
    "url": "assets/js/guide/README.md.da3d2ecc.js",
    "revision": "bc1743fa4258a7bc5f76a532850649b4"
  },
  {
    "url": "assets/js/knowledge/code-audit/php-code-audit.md.da3d2ecc.js",
    "revision": "62a36d78728f7c16b5049cc8fe44ade5"
  },
  {
    "url": "assets/js/knowledge/code-audit/README.md.da3d2ecc.js",
    "revision": "b038dabb8f246bc756301d51c4f8ae71"
  },
  {
    "url": "assets/js/knowledge/ctf/README.md.da3d2ecc.js",
    "revision": "c8108af72e3a1fdb957363f040cc9728"
  },
  {
    "url": "assets/js/knowledge/ctf/RSA.md.da3d2ecc.js",
    "revision": "b717a2aee71929c7d5a5b1f2de651763"
  },
  {
    "url": "assets/js/knowledge/ctf/Volatility.md.da3d2ecc.js",
    "revision": "a3c64a88362bd50d4202fbf730d93c15"
  },
  {
    "url": "assets/js/knowledge/hw/back-counter.md.da3d2ecc.js",
    "revision": "7b2333d0426aad06d129c2a01a532f97"
  },
  {
    "url": "assets/js/knowledge/hw/boundary-info.md.da3d2ecc.js",
    "revision": "6495ae363f57109e582c93921769d10a"
  },
  {
    "url": "assets/js/knowledge/hw/cc.md.da3d2ecc.js",
    "revision": "2f6af2ff12ee99981f7f08346e5d6627"
  },
  {
    "url": "assets/js/knowledge/hw/checklist.md.da3d2ecc.js",
    "revision": "6b3cdf3a6dd08890ddfea860e7c3275e"
  },
  {
    "url": "assets/js/knowledge/hw/defense-assets.md.da3d2ecc.js",
    "revision": "c450fef1b3451e87870f4f249d880d25"
  },
  {
    "url": "assets/js/knowledge/hw/del-log.md.da3d2ecc.js",
    "revision": "931b6d324dc1b466df2f4c91b1cad11d"
  },
  {
    "url": "assets/js/knowledge/hw/domain-pentest.md.da3d2ecc.js",
    "revision": "93381c51787ba39d204cc8d8052fb6af"
  },
  {
    "url": "assets/js/knowledge/hw/emergency-response.md.da3d2ecc.js",
    "revision": "44f24b3c57f0c51e6c2dd8b25608066e"
  },
  {
    "url": "assets/js/knowledge/hw/lan-info.md.da3d2ecc.js",
    "revision": "6d8e1036b8868a1e3dc1e7cbbe3393b8"
  },
  {
    "url": "assets/js/knowledge/hw/linux-baselinesec.md.da3d2ecc.js",
    "revision": "8cfb9777e4e5e53d494990ad5a6452ce"
  },
  {
    "url": "assets/js/knowledge/hw/monitor-read.md.da3d2ecc.js",
    "revision": "a1fad7e11529e9ae223e62632b3a27d4"
  },
  {
    "url": "assets/js/knowledge/hw/net-proxy.md.da3d2ecc.js",
    "revision": "396e454d9148d2feb289678af0658f8f"
  },
  {
    "url": "assets/js/knowledge/hw/ntml-hash.md.da3d2ecc.js",
    "revision": "5fd9a46a326018eeed4c9b48d2a13f23"
  },
  {
    "url": "assets/js/knowledge/hw/os-shell.md.da3d2ecc.js",
    "revision": "87679446c89f35794538e342c409b920"
  },
  {
    "url": "assets/js/knowledge/hw/README.md.da3d2ecc.js",
    "revision": "799dbcd99ec4fda1e5fd4267fc33d75c"
  },
  {
    "url": "assets/js/knowledge/hw/to-root.md.da3d2ecc.js",
    "revision": "85f520bf8002cc56dee508ca4788e008"
  },
  {
    "url": "assets/js/knowledge/hw/webshell.md.da3d2ecc.js",
    "revision": "873e4cd327f2d3885b278f86ee570922"
  },
  {
    "url": "assets/js/knowledge/hw/windows-baselinesec.md.da3d2ecc.js",
    "revision": "ef8df8c07febde148f8c7fa6fa4460c6"
  },
  {
    "url": "assets/js/knowledge/web/code-injection.md.da3d2ecc.js",
    "revision": "a116e68fed52d489c4f2c4a65e1d2aef"
  },
  {
    "url": "assets/js/knowledge/web/csrf-ssrf.md.da3d2ecc.js",
    "revision": "6bf21e82ebee3821c44b12e6891262a3"
  },
  {
    "url": "assets/js/knowledge/web/expression-language-injection.md.da3d2ecc.js",
    "revision": "797f68cd3f3c746debabf8ef39225295"
  },
  {
    "url": "assets/js/knowledge/web/file-download.md.da3d2ecc.js",
    "revision": "25e4a845e89ad4c9b476290dfae2632a"
  },
  {
    "url": "assets/js/knowledge/web/file-includes.md.da3d2ecc.js",
    "revision": "c3c18992244cab25fb8c76e6baa21fa6"
  },
  {
    "url": "assets/js/knowledge/web/file-upload.md.da3d2ecc.js",
    "revision": "f28df7b8463b80e7cb88ea58a5261ab3"
  },
  {
    "url": "assets/js/knowledge/web/jwt-cookie.md.da3d2ecc.js",
    "revision": "a0c2826cc765b57338ecfa3c2ed73200"
  },
  {
    "url": "assets/js/knowledge/web/logical-vulns.md.da3d2ecc.js",
    "revision": "ac6904aa2a14d0e56c593db8bad1f39b"
  },
  {
    "url": "assets/js/knowledge/web/phpsec.md.da3d2ecc.js",
    "revision": "b810b176fa657bc29e7d59082d613e6a"
  },
  {
    "url": "assets/js/knowledge/web/README.md.da3d2ecc.js",
    "revision": "e9af434e3e31d590dfbadd58a9a7ddf1"
  },
  {
    "url": "assets/js/knowledge/web/same-origin-policy.md.da3d2ecc.js",
    "revision": "b6931b6225a3af5c38a46052409ade7c"
  },
  {
    "url": "assets/js/knowledge/web/session-sec.md.da3d2ecc.js",
    "revision": "0b295e7b1e219a0b72251f2544dc9f7e"
  },
  {
    "url": "assets/js/knowledge/web/source-leaked.md.da3d2ecc.js",
    "revision": "64df0a7fff6ac2dabe36adac6aefbe55"
  },
  {
    "url": "assets/js/knowledge/web/sql-injection.md.da3d2ecc.js",
    "revision": "252e5809b8be2efc8fe811ccd85936d3"
  },
  {
    "url": "assets/js/knowledge/web/xss.md.da3d2ecc.js",
    "revision": "e81c9f8074df0b20668fb22fa187f0c1"
  },
  {
    "url": "assets/js/knowledge/web/xxe.md.da3d2ecc.js",
    "revision": "cd2ef397812096fd5ecee07f93fd5cc2"
  },
  {
    "url": "assets/js/LayoutWrapper.da3d2ecc.js",
    "revision": "81a53a6480ab71c5a2892322d45bea2f"
  },
  {
    "url": "assets/js/notFoundWrapper.da3d2ecc.js",
    "revision": "c35fd6ad3b2eae885270a183cbd49e6d"
  },
  {
    "url": "assets/js/README.md.da3d2ecc.js",
    "revision": "632218c327122581563993c0e57f60b0"
  },
  {
    "url": "assets/js/update-log.md.da3d2ecc.js",
    "revision": "476ea8c4c1bfcbb9d237bb09619116bf"
  },
  {
    "url": "assets/js/vendors~LayoutWrapper.da3d2ecc.js",
    "revision": "8008b570285c797b95280e2d67298a57"
  },
  {
    "url": "en-US/guide/how-to-contribute.html.html",
    "revision": "d2c015c77256b987c3f7642e5f5e72ad"
  },
  {
    "url": "en-US/guide/index.html",
    "revision": "7fff71e06dfc19344427baaac6df93be"
  },
  {
    "url": "en-US/index.html",
    "revision": "5ceaeef65d73d745ea8bbb7873762088"
  },
  {
    "url": "en-US/update-log.html.html",
    "revision": "ee893ce37ff0ca6a76b681d9e9fd8a82"
  },
  {
    "url": "guide/how-to-contribute.html.html",
    "revision": "d01c94a387202dbb6598d061dab91ca6"
  },
  {
    "url": "guide/index.html",
    "revision": "16d43658e9b7185cf3ec8d7084b05624"
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
    "revision": "9ae629a460708888eed5d5ed2152db02"
  },
  {
    "url": "knowledge/code-audit/index.html",
    "revision": "183b51a0b1d069d0494b3d14013772f7"
  },
  {
    "url": "knowledge/code-audit/php-code-audit.html.html",
    "revision": "0da9cdbc09bc79fa38767b9ef2601c9d"
  },
  {
    "url": "knowledge/ctf/index.html",
    "revision": "fa7a5405a8dfd16db31a3c3b9277d1a7"
  },
  {
    "url": "knowledge/ctf/RSA.html.html",
    "revision": "d192791672a332d738db2700f7906866"
  },
  {
    "url": "knowledge/ctf/Volatility.html.html",
    "revision": "bb755abb6a3aea7e49f9059e4a08066f"
  },
  {
    "url": "knowledge/hw/back-counter.html.html",
    "revision": "54186a5f365fc05a9cc5f2c315b36d42"
  },
  {
    "url": "knowledge/hw/boundary-info.html.html",
    "revision": "399b4d58d19f2e2eb188e29a2836df68"
  },
  {
    "url": "knowledge/hw/cc.html.html",
    "revision": "03d265793cc9abaab50edc7bd7379886"
  },
  {
    "url": "knowledge/hw/checklist.html.html",
    "revision": "904169d0f3e53e47c3610aa9b1543ae8"
  },
  {
    "url": "knowledge/hw/defense-assets.html.html",
    "revision": "5126443fac61540df56f6b8d953c33ac"
  },
  {
    "url": "knowledge/hw/del-log.html.html",
    "revision": "7a9c4dea4ce2e42fc45d0582e0199490"
  },
  {
    "url": "knowledge/hw/domain-pentest.html.html",
    "revision": "724d1065ce62bdca6fca426e7a2fbe4e"
  },
  {
    "url": "knowledge/hw/emergency-response.html.html",
    "revision": "61f6d9560f65dffc0ae83396e446918d"
  },
  {
    "url": "knowledge/hw/index.html",
    "revision": "1c016bf7dea6558ea4fa10bba5130dea"
  },
  {
    "url": "knowledge/hw/lan-info.html.html",
    "revision": "af315e3a9b30657de87d2cdf584576d9"
  },
  {
    "url": "knowledge/hw/linux-baselinesec.html.html",
    "revision": "cd4625fbf5070cfb7773dacba4dfeb25"
  },
  {
    "url": "knowledge/hw/monitor-read.html.html",
    "revision": "16584af7473f19e6b52a90dec631e54c"
  },
  {
    "url": "knowledge/hw/net-proxy.html.html",
    "revision": "4f0af4a530624a28cbbdfbfc9030c13f"
  },
  {
    "url": "knowledge/hw/ntml-hash.html.html",
    "revision": "d12a962b3ba97925c37dd31c4e7dd572"
  },
  {
    "url": "knowledge/hw/os-shell.html.html",
    "revision": "be9fc334b8335d7c4e77ba8198c07064"
  },
  {
    "url": "knowledge/hw/to-root.html.html",
    "revision": "5c0ec374619502b4a8548955c916a75d"
  },
  {
    "url": "knowledge/hw/webshell.html.html",
    "revision": "2eaca9c85e9e894c60fe892752d1e47e"
  },
  {
    "url": "knowledge/hw/windows-baselinesec.html.html",
    "revision": "5bdc075cb20e7b08f3dc8fdf17e59315"
  },
  {
    "url": "knowledge/web/code-injection.html.html",
    "revision": "7aefa36d5f046ad47bd1ae3ac348982e"
  },
  {
    "url": "knowledge/web/csrf-ssrf.html.html",
    "revision": "94b1818cc392f9c4da522a4bdbbc229b"
  },
  {
    "url": "knowledge/web/expression-language-injection.html.html",
    "revision": "87649162a105ea09eb4719619712f953"
  },
  {
    "url": "knowledge/web/file-download.html.html",
    "revision": "d7993e98d7fe42515bb30dea740d3e92"
  },
  {
    "url": "knowledge/web/file-includes.html.html",
    "revision": "561c9b560724ca6ba84c06379d4fc7d0"
  },
  {
    "url": "knowledge/web/file-upload.html.html",
    "revision": "7ceef83303351de1cc79cbbca6e6ec21"
  },
  {
    "url": "knowledge/web/index.html",
    "revision": "0be98addfbd5bee9cea0f38a0122ea94"
  },
  {
    "url": "knowledge/web/jwt-cookie.html.html",
    "revision": "d622e689e2135a75b5ff40700fc1ac69"
  },
  {
    "url": "knowledge/web/logical-vulns.html.html",
    "revision": "dcfdeb3c1c07a8fdd159a84b6e695994"
  },
  {
    "url": "knowledge/web/phpsec.html.html",
    "revision": "ae201b9b1292fbcb6227f66d275ee46e"
  },
  {
    "url": "knowledge/web/same-origin-policy.html.html",
    "revision": "b50be0c936dd3c4e7b130b2ae078a802"
  },
  {
    "url": "knowledge/web/session-sec.html.html",
    "revision": "f3945500c2b83a2ec02078d4bbe036f2"
  },
  {
    "url": "knowledge/web/source-leaked.html.html",
    "revision": "f2937b76bb6c1104e11d77da5b7ae7a2"
  },
  {
    "url": "knowledge/web/sql-injection.html.html",
    "revision": "758b70e94eb562955d4c135fdb7ee55f"
  },
  {
    "url": "knowledge/web/xss.html.html",
    "revision": "7606a85a4b1aa7b1446f0dbbe6daa3bd"
  },
  {
    "url": "knowledge/web/xxe.html.html",
    "revision": "2e35be3302e7187d97f3baa1df935a98"
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
    "revision": "36c0833c1c0543f00e92753fa40a2a3b"
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
