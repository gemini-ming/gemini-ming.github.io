(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{540:function(s,_,v){"use strict";v.r(_);var t=v(4),e=Object(t.a)({},(function(){var s=this,_=s._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h1",{attrs:{id:"一文教你如何删除重复记录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一文教你如何删除重复记录"}},[s._v("#")]),s._v(" 一文教你如何删除重复记录")]),s._v(" "),_("p",[_("strong",[s._v("场景分析：")])]),s._v(" "),_("ul",[_("li",[s._v("现以用户表（"),_("code",[s._v("t_user")]),s._v("）为例，"),_("code",[s._v("uid")]),s._v(" 和 "),_("code",[s._v("id")]),s._v(" 为表中的某个字段。")]),s._v(" "),_("li",[_("code",[s._v("uid")]),s._v(" 是表中的唯一字段，但是因为之前没有加唯一索引，导致内部出现 "),_("code",[s._v("uid")]),s._v(" 重复的数据。")]),s._v(" "),_("li",[s._v("现在需要加唯一索引，但是需要先删除表中多余的重复的脏数据。")])]),s._v(" "),_("p",[_("strong",[s._v("SQL 示例：")])]),s._v(" "),_("p",[s._v("以下是一个删除重复记录的示例 SQL 语句，它将为每个 "),_("code",[s._v("uid")]),s._v(" 保留具有最小 "),_("code",[s._v("id")]),s._v(" 值的记录")]),s._v(" "),_("div",{staticClass:"language-sql line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-sql"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_user\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" id "),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id\n              "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" id"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uid"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                           ROW_NUMBER"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OVER")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" uid "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" id"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" row_num\n                    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_user"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" ranked\n              "),_("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" row_num "),_("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[s._v("1")]),_("br"),_("span",{staticClass:"line-number"},[s._v("2")]),_("br"),_("span",{staticClass:"line-number"},[s._v("3")]),_("br"),_("span",{staticClass:"line-number"},[s._v("4")]),_("br"),_("span",{staticClass:"line-number"},[s._v("5")]),_("br"),_("span",{staticClass:"line-number"},[s._v("6")]),_("br"),_("span",{staticClass:"line-number"},[s._v("7")]),_("br")])]),_("p",[_("strong",[s._v("示例解析：")])]),s._v(" "),_("p",[s._v("在这个例子中，内部查询首先为每个 "),_("code",[s._v("uid")]),s._v(" 分组内的记录分配了一个行号（"),_("code",[s._v("row_num")]),s._v("），根据 "),_("code",[s._v("id")]),s._v(" 字段排序，其中最小的 "),_("code",[s._v("id")]),s._v(" 值对应行号1。然后，外层的 "),_("code",[s._v("IN")]),s._v(" 子句用来选择那些行号大于 1 的记录，即重复的记录。最后，"),_("code",[s._v("DELETE")]),s._v(" 语句根据 "),_("code",[s._v("id")]),s._v(" 删除这些记录。")]),s._v(" "),_("p",[_("strong",[s._v("语法解析：")])]),s._v(" "),_("p",[_("code",[s._v("ROW_NUMBER() OVER (PARTITION BY uid ORDER BY id) AS row_num")]),s._v(" 是 SQL 中的一个"),_("strong",[s._v("窗口函数")]),s._v("（window function）的语法。窗口函数用于在不失去分组的情况下，对分组内的数据进行计算。")]),s._v(" "),_("p",[s._v("这里是 "),_("code",[s._v("ROW_NUMBER()")]),s._v(" 函数的具体用法：")]),s._v(" "),_("ol",[_("li",[_("code",[s._v("ROW_NUMBER()")]),s._v(": 这是一个"),_("strong",[s._v("窗口函数")]),s._v("，它会为结果集中的每一行分配一个唯一的序号，序号的分配是连续的，从1开始，不管中间是否有空缺。")]),s._v(" "),_("li",[_("code",[s._v("OVER")]),s._v(": 这个关键字用来"),_("strong",[s._v("指定窗口函数的参数")]),s._v("，即定义窗口函数的作用域和排序的顺序。")]),s._v(" "),_("li",[_("code",[s._v("PARTITION BY uid")]),s._v(": 这个子句"),_("strong",[s._v("定义了窗口函数的分区依据")]),s._v("。在这里，"),_("code",[s._v("PARTITION BY")]),s._v(" 将结果集按照 "),_("code",[s._v("uid")]),s._v(" 字段的值进行分组。对于每个 "),_("code",[s._v("uid")]),s._v(" 分区，"),_("code",[s._v("ROW_NUMBER()")]),s._v(" 都会重新从1开始计数。")]),s._v(" "),_("li",[_("code",[s._v("ORDER BY id")]),s._v(": 这个子句"),_("strong",[s._v("定义了窗口函数内部的排序规则")]),s._v("。在这里，它指定了在每个 "),_("code",[s._v("uid")]),s._v(" 分区内部，行应该根据 "),_("code",[s._v("id")]),s._v(" 字段的值进行升序排序。如果有多条记录具有相同的 "),_("code",[s._v("id")]),s._v("，它们的行号可能会是相同的。")]),s._v(" "),_("li",[_("code",[s._v("AS row_num")]),s._v(": 这是给窗口函数的结果"),_("strong",[s._v("指定一个别名")]),s._v("，方便在查询的其他部分引用。在这里，行号被命名为 "),_("code",[s._v("row_num")]),s._v("。")])]),s._v(" "),_("p",[s._v("整个表达式的作用是：对于表 "),_("code",[s._v("t_user")]),s._v(" 中的每条记录，根据 "),_("code",[s._v("uid")]),s._v(" 进行分组，并在每个分组内根据 "),_("code",[s._v("id")]),s._v(" 的升序排列，为每条记录分配一个唯一的行号。")]),s._v(" "),_("p",[s._v("这种语法在处理如去重、分组排序等复杂查询时非常有用。例如，你可以使用这个行号来删除每个 "),_("code",[s._v("uid")]),s._v(" 分组内的重复记录，只保留具有最小 "),_("code",[s._v("id")]),s._v(" 的记录。")])])}),[],!1,null,null,null);_.default=e.exports}}]);