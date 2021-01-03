(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{739:function(t,a,s){"use strict";s.r(a);var n=s(103),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"cbc"}},[t._v("CBC "),s("a",{staticClass:"header-anchor",attrs:{href:"#cbc"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"现代密码体制"}},[t._v("现代密码体制 "),s("a",{staticClass:"header-anchor",attrs:{href:"#现代密码体制"}},[t._v("#")])]),t._v(" "),s("blockquote",[s("p",[t._v("现代密码中的加密体制一般分为对称加密体制(Symmetric Key Encryption)和非对称加密体制(Asymmetric Key Encryption)。对称加密又被分为分组加密和序列密码。")]),t._v(" "),s("p",[t._v("分组密码：也叫块加密(block cyphers)，一次加密明文中的一个块。分组密码是将明文按一定的位长分组，明文组经过加密运算得到密文组，密文组经过解密运算（加密运算的逆运算），还原成明文组，主要有 ECB（电子密码本模式） ，CBC （密码分组链接模式） ，CFB （密文反馈模式） ，OFB （输出反馈模式），  CTR模式（计数器模式） 五种工作模式。")]),t._v(" "),s("p",[t._v("序列密码：也叫流加密(stream cyphers)，一次加密明文中的一个位。序列密码是指利用少量的密钥（制乱元素）通过某种复杂的运算（密码算法）产生大量的伪随机位流，用于对明文位流的加密。解密是指用同样的密钥和密码算法及与加密相同的伪随机位流，用以还原明文位流。")])]),t._v(" "),s("h2",{attrs:{id:"cbc-模式"}},[t._v("CBC 模式 "),s("a",{staticClass:"header-anchor",attrs:{href:"#cbc-模式"}},[t._v("#")])]),t._v(" "),s("blockquote",[s("p",[t._v("CBC (Cipher Block Chaining, 密码分组链接) 模式中每一个分组要先和前一个分组加密后的数据进行XOR异或操作，然后再进行加密。这样每个密文块依赖该块之前的所有明文块，为了保持每条消息都具有唯一性，第一个数据块进行加密之前需要用初始化向量IV进行异或操作。CBC模式是一种最常用的加密模式，它主要缺点是需要初始向量，加密是连续的，不能并行处理，并且与ECB一样消息块必须填充到块大小的整倍数。")])]),t._v(" "),s("h2",{attrs:{id:"cbc-工作模式"}},[t._v("CBC 工作模式 "),s("a",{staticClass:"header-anchor",attrs:{href:"#cbc-工作模式"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"加密过程"}},[t._v("加密过程 "),s("a",{staticClass:"header-anchor",attrs:{href:"#加密过程"}},[t._v("#")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/CBC/CBCE.png",alt:"CBC"}})]),t._v(" "),s("p",[t._v("上图为CBC加密原理图")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("Plaintext：明文，待加密的数据")]),t._v(" "),s("li",[t._v("IV ：初始向量，用于随机化加密的比特块，保证即使对相同明文多次加密，也可以得到不同的密文")]),t._v(" "),s("li",[t._v("Key：分组加密使用的对称密钥，由AES，Blowfish，DES，Triple DES等对称加密算法使用")]),t._v(" "),s("li",[t._v("Ciphertext：加密后的数据，也叫密文数据")]),t._v(" "),s("li",[t._v("固定分组：CBC在一个固定长度的位组上工作，称为块。这里使用包含16字节的块进行说明")])])]),t._v(" "),s("h4",{attrs:{id:"文字流程"}},[t._v("文字流程 "),s("a",{staticClass:"header-anchor",attrs:{href:"#文字流程"}},[t._v("#")])]),t._v(" "),s("p",[t._v("主要流程：前一组密文块用来产生后一组密文块")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("首先将明文分组(常见的以16字节为一组)，位数不足的使用特殊字符填充")]),t._v(" "),s("li",[t._v("生成一个随机的初始化向量(IV)和一个密钥")]),t._v(" "),s("li",[t._v("将IV和第一组明文异或产生初步密文，再用密钥对初步密文加密生成最终密文块")]),t._v(" "),s("li",[t._v("用密钥对3中xor后产生的密文进行加密")]),t._v(" "),s("li",[t._v("用4中产生的密文对第二组明文进行xor操作")]),t._v(" "),s("li",[t._v("用密钥对5中产生的密文进行加密")]),t._v(" "),s("li",[t._v("重复4-7，直至最后一组明文")]),t._v(" "),s("li",[t._v("将IV和加密后的密文块拼接在一起，得到最终的密文")])])]),t._v(" "),s("p",[t._v("从第一块 Plaintext 开始，首先与一个初始向量IV异或（IV只在第一块发挥作用），然后把异或的结果经过key进行加密，得到第一块的密文，并且把加密的结果与下一块的明文进行异或，一直这样重复进行下去直至最后一组明文。")]),t._v(" "),s("h4",{attrs:{id:"公式描述"}},[t._v("公式描述 "),s("a",{staticClass:"header-anchor",attrs:{href:"#公式描述"}},[t._v("#")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("Ciphertext-0 = Encrypt(Plaintext XOR IV)\t\t#  只用于第一个组块")]),t._v(" "),s("li",[t._v("Ciphertext-N = Encrypt(Plaintext XOR Ciphertext-(N-1)\t\t#  用于第二及剩下的组块(N > 1)")])])]),t._v(" "),s("h4",{attrs:{id:"代码解析"}},[t._v("代码解析 "),s("a",{staticClass:"header-anchor",attrs:{href:"#代码解析"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-C line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aes_cbc_encrypt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint8_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" data_in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//pad last block with 0")]),t._v("\n    cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" data_in_padding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("block_padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cypher_out "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sizeof")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint8_t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" data_in"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cypher_out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data_in_padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    uint8_t iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uint8_t temp_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint8_t index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" data_in_padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_xor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data_in_padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//明文与iv异或")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_aes128_encryption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cypher_out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进行块加密得到密文，同时密文是下次加密的iv")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cypher_out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//本次的密文是下次加密的iv")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_in_padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cypher_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br")])]),s("h3",{attrs:{id:"解密过程"}},[t._v("解密过程 "),s("a",{staticClass:"header-anchor",attrs:{href:"#解密过程"}},[t._v("#")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/CBC/CBCD.png",alt:"CBCD"}})]),t._v(" "),s("p",[t._v("上图为CBC解密原理图")]),t._v(" "),s("p",[t._v("只要了解了解密加密过程，反过来看解密过程也就比较简单了")]),t._v(" "),s("h4",{attrs:{id:"文字流程-2"}},[t._v("文字流程 "),s("a",{staticClass:"header-anchor",attrs:{href:"#文字流程-2"}},[t._v("#")])]),t._v(" "),s("p",[t._v("主要流程：前一组密文块影响后一组密文块的还原")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("从密文中提取出IV，然后将密文分组")]),t._v(" "),s("li",[t._v("使用密钥对第一组密文进行解密，然后和IV进行xor得到明文")]),t._v(" "),s("li",[t._v("使用密钥对第二组密文进行解密，然后和2中的密文xor得到明文")]),t._v(" "),s("li",[t._v("重复2-3，直至最后一组密文")])])]),t._v(" "),s("h4",{attrs:{id:"公式描述-2"}},[t._v("公式描述 "),s("a",{staticClass:"header-anchor",attrs:{href:"#公式描述-2"}},[t._v("#")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("Plaintext-0 = Decrypt(Ciphertext) XOR IV\t\t#  只用于第一个组块")]),t._v(" "),s("li",[t._v("Plaintext-N = Decrypt(Ciphertext) XOR Ciphertext-(N-1)\t\t#  用于第二及剩下的组块(N > 1)")])])]),t._v(" "),s("h4",{attrs:{id:"代码解析-2"}},[t._v("代码解析 "),s("a",{staticClass:"header-anchor",attrs:{href:"#代码解析-2"}},[t._v("#")])]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v("cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aes_cbc_decrypt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint8_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" data_in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" cypher_padding "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("block_padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" plain "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cypher_t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data_in"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    plain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cypher_padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uint8_t iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uint8_t temp_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uint8_t index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" cypher_padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("len_data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_aes128_decryption")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cypher_padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//密文块解密")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("array_xor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temp_out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//与iv异或得到明文")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("memcpy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cypher_padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("                      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置下次解密用到的iv")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("free")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cypher_padding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" plain"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])]),s("h2",{attrs:{id:"padding-oracle"}},[t._v("Padding oracle "),s("a",{staticClass:"header-anchor",attrs:{href:"#padding-oracle"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"攻击流程"}},[t._v("攻击流程 "),s("a",{staticClass:"header-anchor",attrs:{href:"#攻击流程"}},[t._v("#")])]),t._v(" "),s("p",[t._v("明文填充")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("p",[t._v("分组密码 Block Cipher 需要在加载前确保每个每组的长度都是分组长度的整数倍。一般情况下，明文的最后一个分组很有可能会出现长度不足分组的长度。")])]),t._v(" "),s("li",[s("p",[t._v("这个时候，普遍的做法是在最后一组密文块后填充一个固定的值，这个值的大小为填充的字节总数。")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("最后还差1个字符，则填充1个0x01；\n最后还差2个字符，则填充2个0x02；\n最后还差3个字符，则填充3个0x03；\n最后还差4个字符，则填充4个0x04；\n这里特别需要注意的是：如果明文长度为16的整数字节长，它也需要填充（它会一次填充16位，且填充的字符为0x10）\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[t._v("填充主要发生在最后一组密文块，我们需要格外关注最后一个分组。")]),t._v(" "),s("li",[t._v("例如最后一组的末尾为0x02,即表示填充了2个Padding，如果最后的Padding不正确，即值和数量不一致，那么解密程序往往会抛出异常(Padding Error)。我们可以通过应用的错误回显，判断出Padding是否正确。")]),t._v(" "),s("li",[t._v("前提条件是服务器会对我们显示padding error的异常，如果不回显那么就无法判断并进行利用。")]),t._v(" "),s("li",[t._v("例如在web应用中，如果Padding不正确，则应用程序很可能会返回500的错误（程序执行错误）；如果Padding正确，但解密出来的内容不正确，则可能会返回200的自定义错误（业务上的规定）。所以，这种区别就可以成为一个二值逻辑的“注入点”。")])])]),t._v(" "),s("p",[t._v("攻击成立的两个重要的假设前提：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 攻击者能够获得密文（Ciphertext），以及附带在密文前面的IV（初始化向量）\n2. 攻击者能够触发密文的解密过程，且能够知道密文的解密结果\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("blockquote",[s("ul",[s("li",[t._v("攻击流程实际上是不断地调整IV的值，在解密之后，最后一个字节的值为正确的Padding Byte，因为padding正确时，这时padding正确是指最终解密并异或出来的明文最后一个字节在正确padding的范围内就是正确的，虽然最后得到的明文不一定正确，但是padding是合法的，所以服务器返回200 。")]),t._v(" "),s("li",[t._v("判断情况")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("（1）正常解密，得到明文\n（2）解密成功，但是解密得到的和明文不匹配\n（3）解密错误，抛出异常\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("例如加密数据应用于cookie")])])]),t._v(" "),s("h2",{attrs:{id:"cbc字节翻转攻击"}},[t._v("CBC字节翻转攻击 "),s("a",{staticClass:"header-anchor",attrs:{href:"#cbc字节翻转攻击"}},[t._v("#")])]),t._v(" "),s("h3",{attrs:{id:"攻击原理"}},[t._v("攻击原理 "),s("a",{staticClass:"header-anchor",attrs:{href:"#攻击原理"}},[t._v("#")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("在 CBC 解密的公式描述中可以注意到Ciphertext-(N-1)是用来产生下一块明文，这里是字节翻转攻击发挥作用的地方。如果我们改变Ciphertext-N-1中的一个字节，然后和下一块解密后的密文xor，就可以得到一个不同的明文，而这个明文是我们可以控制的。")]),t._v(" "),s("li",[t._v("在此基础上，通过破坏密文中的字节来改变明文中的字节，因此在破坏的密文中添加单引号等恶意字符来绕过过滤器，或通过将用户ID更改为admin来提升权限，或者更改应用程序所需的明文造成其他后果。")])])]),t._v(" "),s("h3",{attrs:{id:"攻击流程-2"}},[t._v("攻击流程 "),s("a",{staticClass:"header-anchor",attrs:{href:"#攻击流程-2"}},[t._v("#")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/CBC/CBCDturn.jpg",alt:"CBCDturn"}})]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("p",[t._v("通过修改第一组的密文块字节，来构造我们需要的第二组明文， 当第一组密文块字节发生改变时会影响第一组明文块和第二组明文块。")])]),t._v(" "),s("li",[s("p",[t._v("假如我们已知的明文解密后为1dmin，我们想构造一个初始IV，使其解密成admin，因此有以下逻辑：")])])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("原始的IV[1]^middle[i]=plain[1]  <<<  题目逻辑\n修改的IV[1]^middle[i]='a'       <<<  我们想要\n构造的IV[1]=middle[1]^'a'       <<<  我们可以得到\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("用公式表示")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("A = B ^ C\nC = A ^ B\nA ^ B ^ C = 0\nA ^ B ^ C ^ C' = C'\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ul",[s("li",[t._v("而原来的中间明文可以如下方式通过，原来的明文第一位又是可以通过Padding Oracle攻击得到的")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("middle[1]=原来的IV[1]^plain[1]\t      <<<  Padding Oracle 攻击\n构造的IV[1]=原来的IV[1]^plain[1]^'a' \t<<<  IV的第一位\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"题目参考"}},[t._v("题目参考 "),s("a",{staticClass:"header-anchor",attrs:{href:"#题目参考"}},[t._v("#")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://buuoj.cn/challenges#%5BNCTF2017%5DBe%20admin",target:"_blank",rel:"noopener noreferrer"}},[t._v("[NCTF2017] Be Admin"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://buuoj.cn/challenges#%5BNPUCTF2020%5Dweb%F0%9F%90%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("[NPUCTF2020]web🐕"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);