(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{620:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apifox-使用小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apifox-使用小结"}},[t._v("#")]),t._v(" Apifox 使用小结")]),t._v(" "),a("blockquote",[a("p",[t._v("官方文档："),a("a",{attrs:{href:"https://apifox.com/help/#_21-%E5%88%86%E9%92%9F%E5%85%A5%E9%97%A8%E8%A7%86%E9%A2%91",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apifox 帮助文档"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"协作流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协作流程"}},[t._v("#")]),t._v(" 协作流程")]),t._v(" "),a("h3",{attrs:{id:"api-first"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-first"}},[t._v("#")]),t._v(" API First")]),t._v(" "),a("ul",[a("li",[t._v("后端、前端、测试团队可以同步开始工作，而不需要互相等待。")]),t._v(" "),a("li",[t._v("使用基于 API 的自动 Mock、代码自动生成和自动化测试工具，大幅提升开发效率开发的各个角色都会获得更好的工作体验。")]),t._v(" "),a("li",[t._v("API 可以在不同的项目中重复使用，提高开发效率。")]),t._v(" "),a("li",[t._v("新人更容易熟悉项目，方便团队规模的扩大。")]),t._v(" "),a("li",[t._v("与外部团队的协作也更加顺畅。")])]),t._v(" "),a("h3",{attrs:{id:"设计阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计阶段"}},[t._v("#")]),t._v(" 设计阶段")]),t._v(" "),a("ul",[a("li",[t._v("根据需求文档讨论确定接口设计思路。")]),t._v(" "),a("li",[t._v("接口设计者在 Apifox 上定好接口文档初稿。")]),t._v(" "),a("li",[t._v("接口评审环节，前后端一起评审、完善接口文档，定好接口用例。")])]),t._v(" "),a("h3",{attrs:{id:"开发阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发阶段"}},[t._v("#")]),t._v(" 开发阶段")]),t._v(" "),a("h4",{attrs:{id:"前端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[t._v("#")]),t._v(" 前端")]),t._v(" "),a("p",[t._v("Apifox 会根据接口文档自动生成 Mock 数据，直接可以进入开发，无需手写 mock 规则。")]),t._v(" "),a("h4",{attrs:{id:"后端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[t._v("#")]),t._v(" 后端")]),t._v(" "),a("ul",[a("li",[t._v("使用 Apifox 直接根据接口定义来调试接口，每次调试一个功能就保存一个接口用例，方便自己反复调试。")]),t._v(" "),a("li",[t._v("如果开发过程中接口有变化，调试的时候修改接口定义就自动更新了文档，零成本地保障了接口维护的及时性。")])]),t._v(" "),a("h4",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("直接使用后端调试时保存的接口用例生成测试用例。")]),t._v(" "),a("h3",{attrs:{id:"联调和测试阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联调和测试阶段"}},[t._v("#")]),t._v(" 联调和测试阶段")]),t._v(" "),a("ul",[a("li",[t._v("所有接口开发完成后，测试人员(也可以是后端)使用集合测试功能进行多接口集成测试，完整测试整个接口调用流程。")]),t._v(" "),a("li",[t._v("前后端都开发完，前端从 Mock 数据切换到正式数据，联调通常都会非常顺利因为联调过程中最经常出现的问题就是前后端双方的数据定义不一致，而使用 Apifox 进行开发保证了所有人都完全遵守接口定义的规范，以前存在的很多令人头大的问题就不存在了。")]),t._v(" "),a("li",[t._v("测试可以使用测试套件进行自动化回归测试和性能测试。")])]),t._v(" "),a("h2",{attrs:{id:"临时变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时变量"}},[t._v("#")]),t._v(" 临时变量")]),t._v(" "),a("p",[t._v("临时变量仅在"),a("strong",[t._v("单次")]),t._v("运行接口用例或测试管理里的测试用例或测试套件过程中有效，不会持久保存至系统。")]),t._v(" "),a("p",[a("em",[t._v("含义")])]),t._v(" "),a("p",[t._v('"临时变量" 在特定的操作环境中（在这里是在单次运行的接口用例、测试用例或测试套件过程中）是有效的，但不会被系统持久保存。')]),t._v(" "),a("p",[t._v("在你执行测试或运行接口用例时，可能会需要在不同的步骤中暂存一些数据，这样可以在"),a("strong",[t._v("后续的步骤")]),t._v('中使用它们。为了满足这个需求，测试工具通常提供了"临时变量" 的概念。这些临时变量仅在当前的测试用例或测试套件的运行过程中有效，不能跨越不同的测试用例或测试套件共享。')]),t._v(" "),a("p",[t._v("例如，在 API 测试中，你可以在一个接口用例中提取某个接口的响应数据，然后将这些数据存储在一个临时变量中。在后续的步骤中，你可以使用这个临时变量中的数据来进行断言或其他操作。但是，一旦当前的用例或测试套件运行结束，这些临时变量就会被清除，不会被保存到系统中供以后的运行使用。")]),t._v(" "),a("p",[t._v("总结起来，临时变量是在测试或接口运行的上下文中暂时存储数据的一种机制，这些数据在当前运行过程中有效，但不会在运行结束后被系统持久保存。这有助于在测试过程中保持数据的隔离和独立性，避免数据互相干扰。")]),t._v(" "),a("h2",{attrs:{id:"提取变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取变量"}},[t._v("#")]),t._v(" 提取变量")]),t._v(" "),a("p",[t._v("参考文章："),a("a",{attrs:{href:"https://apifox.com/blog/extracting-response-data-in-apifox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apifox 中提取接口响应数据的技巧，你掌握了吗？"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"json-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-path"}},[t._v("#")]),t._v(" JSON Path")]),t._v(" "),a("p",[t._v("官方文档："),a("a",{attrs:{href:"https://apifox.com/help/reference/json-path",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Path 介绍 | Apifox 帮助文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("em",[t._v("提取 json 数组里面的对象元素的 id")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cmty256.github.io/imgs-blog/project/image.2oji0sv7i480.webp",loading:"lazy"}})]),t._v(" "),a("h2",{attrs:{id:"脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本"}},[t._v("#")]),t._v(" 脚本")]),t._v(" "),a("h3",{attrs:{id:"后置操作脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后置操作脚本"}},[t._v("#")]),t._v(" 后置操作脚本")]),t._v(" "),a("p",[t._v("将 token 的值存入环境变量")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取 JSON 格式的请求返回数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 jsonData.token 的值写入环境变量")]),t._v("\npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'token'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jsonData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"什么是-curl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-curl"}},[t._v("#")]),t._v(" 什么是 cURL")]),t._v(" "),a("p",[a("code",[t._v("cURL")]),t._v(" 是一个用于发送 HTTP、HTTPS、FTP、SCP、SFTP 等请求的命令行工具和库。它支持多种协议和数据传输方式，可以在命令行中直接使用，也可以被集成到脚本和程序中，用于执行网络请求和数据传输操作。")]),t._v(" "),a("p",[t._v("cURL 提供了广泛的功能，可以用于以下场景：")]),t._v(" "),a("ol",[a("li",[t._v("**发送 HTTP 请求：**通过 cURL，你可以发送 HTTP GET、POST、PUT、DELETE 等请求，并在命令行中查看响应结果。")]),t._v(" "),a("li",[t._v("**文件上传和下载：**cURL 可以用来上传和下载文件，支持多种协议，如 FTP、SFTP 等。")]),t._v(" "),a("li",[t._v("**测试 API：**开发人员可以使用 cURL 来测试 API 端点，发送请求并检查响应，以确保 API 正常工作。")]),t._v(" "),a("li",[t._v("**数据传输：**cURL 可以用来传输数据，比如将文件从一个服务器复制到另一个服务器。")]),t._v(" "),a("li",[t._v("**调试和诊断：**cURL 提供了丰富的选项和参数，用于调试网络连接问题、查看请求头和响应头、监测网络流量等。")])]),t._v(" "),a("p",[t._v("以下是一个示例 cURL 命令，用于发送一个 GET 请求并获取网页内容：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://www.example.com\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("cURL 命令行参数非常丰富，可以用来设置请求头、传递参数、处理身份验证等。在命令行中输入 "),a("code",[t._v("curl --help")]),t._v(" 可以查看所有的选项和参数。")]),t._v(" "),a("p",[t._v("总之，cURL 是一个功能强大的命令行工具，用于进行各种网络请求和数据传输操作。它被广泛用于开发、测试和调试网络应用和服务。")]),t._v(" "),a("h2",{attrs:{id:"自动化测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化测试"}},[t._v("#")]),t._v(" 自动化测试")]),t._v(" "),a("h3",{attrs:{id:"接口用例同步问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口用例同步问题"}},[t._v("#")]),t._v(" 接口用例同步问题")]),t._v(" "),a("p",[t._v("需要先在接口用例点击保存，再进行自动化测试。")]),t._v(" "),a("h2",{attrs:{id:"实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践"}},[t._v("#")]),t._v(" 实践")]),t._v(" "),a("h3",{attrs:{id:"利用脚本一直查询某个接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用脚本一直查询某个接口"}},[t._v("#")]),t._v(" 利用脚本一直查询某个接口")]),t._v(" "),a("p",[a("em",[t._v("前置脚本")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断随机值是否为空")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "string"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"undefined"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"randomVariable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[a("code",[t._v("typeof")]),t._v(" 是 JavaScript 中的一个运算符，用于确定一个值的数据类型。它返回一个字符串，表示给定值的数据类型。")]),t._v(" "),a("p",[a("em",[t._v("后置脚本")])]),t._v(" "),a("ol",[a("li",[t._v("提取变量")])]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cmty256.github.io/imgs-blog/project/image.105ihz4imef4.png",loading:"lazy"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("自定义脚本")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" variable_key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("globals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user_id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("variable_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析 JSON 字符串为数组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" keyArray "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("variable_key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 随机生成一个索引")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" randomIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" keyArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取随机提取的值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" randomValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keyArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("randomIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("randomValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将随机值设置为环境变量")]),t._v("\npm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"randomVariable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" randomValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[a("em",[t._v("Body")])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{randomVariable}}"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("踩坑：")]),t._v(" "),a("p",[t._v("一开始写 "),a("code",[t._v("id === undefined")]),t._v("，结果方法体里面的代码不会执行，导致数据无法自动刷新。")]),t._v(" "),a("p",[t._v("原因 -- id 是 string 类型，利用 "),a("code",[t._v("console.log(typeof(id));")]),t._v(" 检查")]),t._v(" "),a("p",[t._v("解决方法 -- 修改代码为 "),a("code",[t._v('id === "undefined"')])]),t._v(" "),a("h3",{attrs:{id:"获取最后一个元素的-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取最后一个元素的-id"}},[t._v("#")]),t._v(" 获取最后一个元素的 id")]),t._v(" "),a("p",[a("em",[t._v("环境变量提取")])]),t._v(" "),a("p",[t._v("通常，要获取最后一个元素的 "),a("code",[t._v("id")]),t._v("，可以使用类似 "),a("code",[t._v("$..data[-1:].id")]),t._v(" 的 JSON 表达式，其中：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("$..data")]),t._v(" 用于获取所有 "),a("code",[t._v("data")]),t._v(" 属性的值。")]),t._v(" "),a("li",[a("code",[t._v("[-1:]")]),t._v(" 表示获取数组中的最后一个元素。")]),t._v(" "),a("li",[a("code",[t._v(".id")]),t._v(" 用于获取最后一个元素的 "),a("code",[t._v("id")]),t._v(" 属性值。")])]),t._v(" "),a("h3",{attrs:{id:"在路径中传递中文参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在路径中传递中文参数"}},[t._v("#")]),t._v(" 在路径中传递中文参数")]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("p",[t._v("修改 设置 中的 URL自动编码，如下所示：")]),t._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cmty256.github.io/imgs-blog/project/image.2p6fxu6082k0.png",loading:"lazy"}})]),t._v(" "),a("p",[t._v("修改后的实际请求：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("http://localhost:8123/api/invoke/%E5%BC%A0%E4%B8%89\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("参考博客：[APIFOX无法在路径中传递中文参数_request path contains unescaped characters](https://blog.csdn.net/m0_52133525/article/details/127996328#:~:text=在使用APIfox的时候，需要往某路径传递中文参数，这时候出错了，报如下错误,这是因为通过路径传递中文的时候需要转码，中文的会被处理，然后就无法发送了，通过以下设置解决： 在设置的URL自动编码里面修改为遵循WHATWG即可解决问题)")])])}),[],!1,null,null,null);a.default=e.exports}}]);