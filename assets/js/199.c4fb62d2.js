(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{576:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jwt-基础小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-基础小结"}},[t._v("#")]),t._v(" JWT 基础小结")]),t._v(" "),s("h2",{attrs:{id:"什么是-jwt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jwt"}},[t._v("#")]),t._v(" 什么是 JWT？")]),t._v(" "),s("p",[t._v("JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是"),s("strong",[t._v("一种基于 Token 的认证授权机制")]),t._v("。")]),t._v(" "),s("p",[t._v("从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。")]),t._v(" "),s("p",[t._v("通过数字签名的方式，以 JSON 对象为载体，在不同的服务终端之间安全的传输信息。")]),t._v(" "),s("blockquote",[s("p",[t._v("JWT "),s("strong",[t._v("自身包含了身份验证所需要的所有信息")]),t._v("，因此，我们的"),s("strong",[t._v("服务器不需要存储 Session 信息")]),t._v("。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。(JWT 存储在【客户端】)")]),t._v(" "),s("p",[t._v("并且，使用 JWT 认证可以有效避免 CSRF 攻击，因为 JWT 一般是存在在 localStorage 中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。")])]),t._v(" "),s("h2",{attrs:{id:"jwt-有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-有什么用"}},[t._v("#")]),t._v(" JWT 有什么用？")]),t._v(" "),s("p",[t._v("JWT 最常见的场景就是授权认证，一旦用户登录，后续每个请求都将包含 JWT，系统在每次处理用户请求的之前，都要先进行 JWT 安全校验，通过之后再进行处理。")]),t._v(" "),s("h2",{attrs:{id:"jwt-的组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-的组成"}},[t._v("#")]),t._v(" JWT 的组成")]),t._v(" "),s("p",[t._v("JWT 由 3 部分组成，用 "),s("code",[t._v(".")]),t._v(" 拼接")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eyJ1c2VybmFtZSI6IlRvbSIsInJvbGUiOiJhZG1pbiIsInN1YiI6ImFkbWluLXRlc3QiLCJleHAiOjE2MjMyMjM2NzUsImp0aSI6ImQ2MTJjZjcxLWI5ZmUtNGMwNy04MzQwLTViOWViZmMyNjExNyJ9\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("FOS9Y7rYNdc2AOidnSPrgg2XTYePU0yGZ598h2gtabE")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("可以在 "),s("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt.io"),s("OutboundLink")],1),t._v(" 这个网站上对 JWT 进行解码，解码之后得到的就是 Header、Payload、Signature 这三部分。")]),t._v(" "),s("p",[t._v("这三部分分别是：")]),t._v(" "),s("h3",{attrs:{id:"header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),s("p",[t._v("Header 通常由两部分组成：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("typ")]),t._v("（Type）：令牌类型，也就是 JWT。")]),t._v(" "),s("li",[s("code",[t._v("alg")]),t._v("（Algorithm）：签名算法，比如 HS256。")])]),t._v(" "),s("blockquote",[s("p",[t._v("JSON 形式的 Header 被转换成 Base64 编码，成为 JWT 的第一部分。")])]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'typ'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'JWT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'alg'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'HS256'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"payload-声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#payload-声明"}},[t._v("#")]),t._v(" Payload 声明")]),t._v(" "),s("p",[t._v("Payload 也是 JSON 格式数据，其中包含了 Claims(声明，包含 JWT 的相关信息)。")]),t._v(" "),s("blockquote",[s("p",[t._v("Payload 部分默认是不加密的，"),s("strong",[t._v("一定不要将隐私信息存放在 Payload 当中！！！")])]),t._v(" "),s("p",[t._v("JSON 形式的 Payload 被转换成 Base64 编码，成为 JWT 的第二部分")])]),t._v(" "),s("p",[t._v("Claims 分为三种类型：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Registered Claims（注册声明）")]),t._v("：预定义的一些声明，建议使用，但不是强制性的。")]),t._v(" "),s("li",[s("strong",[t._v("Public Claims（公有声明）")]),t._v("：JWT 签发方可以自定义的声明，但是为了避免冲突，应该在 "),s("a",{attrs:{href:"https://www.iana.org/assignments/jwt/jwt.xhtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("IANA JSON Web Token Registry"),s("OutboundLink")],1),t._v(" 中定义它们。")]),t._v(" "),s("li",[s("strong",[t._v("Private Claims（私有声明）")]),t._v("：JWT 签发方因为项目需要而自定义的声明，更符合实际项目场景使用。")])]),t._v(" "),s("p",[t._v("下面是一些常见的注册声明：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("iss")]),t._v("（issuer）：JWT 签发方。")]),t._v(" "),s("li",[s("code",[t._v("iat")]),t._v("（issued at time）：JWT 签发时间。")]),t._v(" "),s("li",[s("code",[t._v("sub")]),t._v("（subject）：JWT 主题。")]),t._v(" "),s("li",[s("code",[t._v("aud")]),t._v("（audience）：JWT 接收方。")]),t._v(" "),s("li",[s("code",[t._v("exp")]),t._v("（expiration time）：JWT 的过期时间。")]),t._v(" "),s("li",[s("code",[t._v("nbf")]),t._v("（not before time）：JWT 生效时间，早于该定义的时间的 JWT 不能被接受处理。")]),t._v(" "),s("li",[s("code",[t._v("jti")]),t._v("（JWT ID）：JWT 唯一标识。")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ff1212f5-d8d1-4496-bf41-d2dda73de19a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15323232")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"iat"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1516239022")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" '"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234567890")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'john'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"signature-签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signature-签名"}},[t._v("#")]),t._v(" Signature 签名")]),t._v(" "),s("p",[t._v("Signature 部分是对前两部分的签名，"),s("strong",[t._v("作用是防止 JWT（主要是 payload）被篡改")]),t._v("。")]),t._v(" "),s("p",[t._v("这个签名的生成需要用到：")]),t._v(" "),s("ul",[s("li",[t._v("Header + Payload。")]),t._v(" "),s("li",[t._v("存放在服务端的密钥(一定不要泄露出去)。 -- "),s("code",[t._v("secret")])]),t._v(" "),s("li",[t._v("签名算法。 -- "),s("code",[t._v("HMACSHA256")])])]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一种方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodedString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" signature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HMACSHA256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodedString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二种方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HMACSHA256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("blockquote",[s("p",[t._v('算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（'),s("code",[t._v(".")]),t._v("）分隔，这个字符串就是 JWT 。")])]),t._v(" "),s("h2",{attrs:{id:"相关依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关依赖"}},[t._v("#")]),t._v(" 相关依赖")]),t._v(" "),s("p",[s("code",[t._v("pom.xml")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.jsonwebtoken"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jjwt"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.9.1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.xml.bind"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jaxb-api"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.3.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sun.xml.bind"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jaxb-impl"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.3.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.sun.xml.bind"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jaxb-core"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.3.0"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("javax.activation"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("activation"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.1.1"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br")])]),s("h2",{attrs:{id:"开源工具类使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开源工具类使用"}},[t._v("#")]),t._v(" 开源工具类使用")]),t._v(" "),s("p",[t._v("也可用 Hutool 中的工具类生成 JWT 来进行食用："),s("a",{attrs:{href:"https://hutool.cn/docs/#/jwt/JWT%E5%B7%A5%E5%85%B7-JWTUtil",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT工具-JWTUtil (hutool.cn)"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"如何基于-jwt-进行身份验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何基于-jwt-进行身份验证"}},[t._v("#")]),t._v(" 如何基于 JWT 进行身份验证？")]),t._v(" "),s("p",[t._v("在基于 JWT 进行身份验证的的应用程序中，")]),t._v(" "),s("p",[t._v("服务器通过 Payload、Header 和 Secret(密钥)创建 JWT 并将 JWT 发送给客户端。")]),t._v(" "),s("p",[t._v("客户端接收到 JWT 之后，会将其保存在 Cookie 或者 localStorage 里面，以后客户端发出的所有请求都会携带这个令牌。")]),t._v(" "),s("p",[s("strong",[t._v("从用户的角度来分析：")])]),t._v(" "),s("ol",[s("li",[t._v("用户向服务器发送用户名、密码以及验证码用于登陆系统。")]),t._v(" "),s("li",[t._v("如果用户用户名、密码以及验证码校验正确的话，服务端会返回已经签名的 Token，也就是 JWT。")]),t._v(" "),s("li",[t._v("用户以后每次向后端发请求都在 Header 中带上这个 JWT 。")]),t._v(" "),s("li",[t._v("服务端检查 JWT 并从中获取用户相关信息。")])]),t._v(" "),s("h2",{attrs:{id:"为什么用-jwt-代替-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么用-jwt-代替-session"}},[t._v("#")]),t._v(" 为什么用 JWT 代替 Session")]),t._v(" "),s("p",[t._v("JWT (JSON Web Token) 被用于代替传统的基于 Session 的身份认证和授权机制的主要原因有以下几点：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("无需服务器存储：")]),t._v(" 在传统的 Session 机制中，服务器需要维护每个用户的会话状态，通常是存储在内存或数据库中。而使用 JWT，所有的用户信息和权限信息都被编码到了 token 中，服务器无需存储任何状态信息，这样可以减轻服务器的负担。")]),t._v(" "),s("li",[s("strong",[t._v("跨域支持：")]),t._v(" JWT 可以轻松地在多个域之间进行传递和使用，这使得跨域通信和微服务架构变得更加简单。")]),t._v(" "),s("li",[s("strong",[t._v("扩展性：")]),t._v(" JWT 是一种开放标准，可以支持自定义的声明和数据结构。这使得 JWT 非常灵活，可以根据实际需求添加额外的信息。")]),t._v(" "),s("li",[s("strong",[t._v("无状态性：")]),t._v(" 传统的基于 Session 的认证机制需要服务器保存会话状态，而 JWT 是无状态的。每个请求都包含了认证信息，服务器不需要再去查询数据库或存储中心来验证用户的身份。")]),t._v(" "),s("li",[s("strong",[t._v("安全性：")]),t._v(" JWT 内置了签名机制，可以验证 token 的真实性和完整性。这样即使 token 被篡改，服务器也能识别出来并拒绝该 token。")]),t._v(" "),s("li",[s("strong",[t._v("适用于分布式系统：")]),t._v(" JWT 适用于分布式系统和微服务架构，可以跨多个服务进行认证和授权。")])]),t._v(" "),s("p",[t._v("总的来说，JWT 是一种轻量级、可扩展、无状态和安全的认证机制，相较于传统的基于 Session 的认证机制，JWT 具有更多优势，特别适合于现代的分布式、跨域和无状态的应用场景。")]),t._v(" "),s("h2",{attrs:{id:"单点登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单点登录"}},[t._v("#")]),t._v(" 单点登录")]),t._v(" "),s("h3",{attrs:{id:"两种单点登录实现方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两种单点登录实现方案"}},[t._v("#")]),t._v(" 两种单点登录实现方案")]),t._v(" "),s("ol",[s("li",[t._v("redis + token\n"),s("ul",[s("li",[t._v("token 是指一个无意义的，随机的字符串")]),t._v(" "),s("li",[s("strong",[t._v("后端")]),t._v("校验用户名密码之后，生成 token 后放入 redis")]),t._v(" "),s("li",[s("strong",[t._v("前端")]),t._v("将 token 放入 header（利用 "),s("code",[t._v("store")]),t._v("）")]),t._v(" "),s("li",[t._v("其他页面请求校验时，从 header 获取 token，然后根据 token 到 redis 获取数据进行判断，有数据则登录校验成功。（主要是看 token 是否已失效）")])])]),t._v(" "),s("li",[t._v("jwt\n"),s("ul",[s("li",[t._v("jwt 生成的 token 是有意义的")]),t._v(" "),s("li",[t._v("使用工具包来校验 token")])])])]),t._v(" "),s("h3",{attrs:{id:"操作细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作细节"}},[t._v("#")]),t._v(" 操作细节")]),t._v(" "),s("p",[t._v("1、前端在用户登录之后保存登录信息")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量提交：保存登录信息, 即 token")]),t._v("\n          store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"setMember"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("2、修改 axios 全局拦截器")]),t._v(" "),s("p",[t._v("为请求 headers 增加 token，并返回配置")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请求参数：'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("member"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"请求headers增加token:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("h3",{attrs:{id:"jwt-单点登录原理与存在的问题及解决方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-单点登录原理与存在的问题及解决方案"}},[t._v("#")]),t._v(" JWT 单点登录原理与存在的问题及解决方案")]),t._v(" "),s("blockquote",[s("p",[t._v("Hutool 对 JWT 的介绍："),s("a",{attrs:{href:"https://hutool.cn/docs/#/jwt/%E6%A6%82%E8%BF%B0?id=%E7%94%B1%E6%9D%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("概述 (hutool.cn)"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("存在的问题分析：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("token 被解密")]),t._v(" "),s("ul",[s("li",[t._v("加盐值（密钥），每个项目的盐值不能一样，避免一个项目被破解，全部项目都被破解")])])]),t._v(" "),s("li",[s("p",[t._v("token 被拿到第三方使用")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("简单来说就是: 自己的产品，被别人包了一个界面，做成他们收费的产品。（比如 ChatGPT 聊天机器人，外表包装成一个小程序，实际上是利用开发者设置的 token 去官网请求信息）")])]),t._v(" "),s("li",[s("p",[t._v("没啥好办法，只能使用限流（检测流量大的情况）")])])])])]),t._v(" "),s("h2",{attrs:{id:"学习参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#学习参考"}},[t._v("#")]),t._v(" 学习参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://javaguide.cn/system-design/security/jwt-intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT 基础概念详解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/108999941",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户认证：基于jwt和session的区别和优缺点"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);