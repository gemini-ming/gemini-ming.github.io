(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{528:function(v,_,t){"use strict";t.r(_);var s=t(4),r=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"mysql-基础小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基础小结"}},[v._v("#")]),v._v(" MySQL 基础小结")]),v._v(" "),_("h2",{attrs:{id:"非关系型数据库和关系型数据库的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#非关系型数据库和关系型数据库的区别"}},[v._v("#")]),v._v(" 非关系型数据库和关系型数据库的区别？")]),v._v(" "),_("p",[v._v("非关系型数据库和关系型数据库的最大区别是它们的"),_("strong",[v._v("数据模型")]),v._v("和"),_("strong",[v._v("数据存储方式")]),v._v("。")]),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("关系型数据库")]),v._v("使用表格的方式来存储数据，每个表格都包含多个列和行。表格之间可以通过主键和外键建立关联。使用 SQL 作为查询语言，适用于需要"),_("strong",[v._v("高度一致性")]),v._v("和"),_("strong",[v._v("事务处理")]),v._v("的应用，")]),v._v(" "),_("p",[v._v("例如银行系统、电子商务等。")])]),v._v(" "),_("li",[_("p",[v._v("而"),_("strong",[v._v("非关系型数据库")]),v._v("使用键值对、文档、图形或列族等方式来存储数据，不支持 SQL 查询语言，用的是使用各种编程语言的 API 来操作数据。"),_("strong",[v._v("优势在于")]),v._v("它们可以提供更高的扩展性和灵活性，适用于需要"),_("strong",[v._v("高可用性")]),v._v("、"),_("strong",[v._v("高性能")]),v._v("和"),_("strong",[v._v("分布式部署")]),v._v("的应用，")]),v._v(" "),_("p",[v._v("例如社交网络、大数据等。")])])]),v._v(" "),_("h2",{attrs:{id:"有哪些常见的关系型数据库"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#有哪些常见的关系型数据库"}},[v._v("#")]),v._v(" 有哪些常见的关系型数据库？")]),v._v(" "),_("p",[v._v("MySQL、PostgreSQL、Oracle、SQL Server、SQLite（微信本地的聊天记录的存储就是用的 SQLite）")]),v._v(" "),_("h2",{attrs:{id:"什么是-sql"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-sql"}},[v._v("#")]),v._v(" 什么是 SQL？")]),v._v(" "),_("p",[v._v("SQL 是一种结构化查询语言(Structured Query Language)，专门用来与数据库打交道，目的是提供一种从数据库中读写数据的简单有效的方法。")]),v._v(" "),_("h2",{attrs:{id:"事务的四大特性了解么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务的四大特性了解么"}},[v._v("#")]),v._v(" 事务的四大特性了解么?")]),v._v(" "),_("p",[v._v("了解，它们通常被称为 ACID【 英文缩写 】 特性，分别是：")]),v._v(" "),_("ol",[_("li",[v._v("原子性（Atomicity）：第一个是原子性，指"),_("strong",[v._v("整个事务中的所有操作要么全部完成，要么全部不完成")]),v._v("。事务中任何一项操作失败，事务就会回滚到开始前的状态，"),_("strong",[v._v("保证数据的一致性")]),v._v("。")]),v._v(" "),_("li",[v._v("一致性（Consistency）：第二个是一致性，指"),_("strong",[v._v("事务执行前后，数据库保持一致")]),v._v("。例如，在转账的事务中，如果 A 账户的余额减少 100 元，则 B 账户的余额必须增加 100 元，以保证总金额不变。")]),v._v(" "),_("li",[v._v("隔离性（Isolation）：第三个是隔离性，指"),_("strong",[v._v("一个事务的执行不能被其他事务干扰")]),v._v("，也就是说一个事务内部的操作对其他事务是"),_("strong",[v._v("隔离")]),v._v("的，并发执行的多个事务之间不能互相干扰。这样就可以避免数据的不一致性和并发问题。")]),v._v(" "),_("li",[v._v("持久性（Durability）：第四个是持久性，指"),_("strong",[v._v("一个事务一旦提交，它对数据库中数据的改变就是永久性的，即使系统崩溃也不会丢失")]),v._v("。数据库会将事务的操作结果持久化到磁盘上，以确保即使系统发生故障，数据也不会丢失。")])]),v._v(" "),_("p",[v._v("这四大特性是事务的基本要求，数据库管理系统必须保证每个事务都具有这四个特性，以保证数据的一致性、完整性和可靠性。")]),v._v(" "),_("h2",{attrs:{id:"mysql-事务隔离级别-默认是什么级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-事务隔离级别-默认是什么级别"}},[v._v("#")]),v._v(" MySQL 事务隔离级别？默认是什么级别？")]),v._v(" "),_("p",[v._v("MySQL 支持四种事务隔离级别，")]),v._v(" "),_("ol",[_("li",[v._v("读未提交（Read Uncommitted）：第一个是读未提交，是最低的隔离级别，"),_("strong",[v._v("允许事务读取未提交的数据")]),v._v("，可能会出现脏读问题。")]),v._v(" "),_("li",[v._v("读已提交（Read Committed）：第二个是读已提交，"),_("strong",[v._v("允许事务读取已经提交的数据")]),v._v("，可以避免脏读问题，但是可能会出现不可重复读和幻读问题。")]),v._v(" "),_("li",[v._v("可重复读（Repeatable Read）：第三个是可重复读，"),_("strong",[v._v("保证在同一事务中多次读取同一数据时，其结果是一致的")]),v._v("，可以避免脏读问题和不可重复读的问题，但是仍然可能出现幻读问题。")]),v._v(" "),_("li",[v._v("串行化（Serializable）：第四个是串行化，是最高的隔离级别，"),_("strong",[v._v("强制所有事务按顺序执行")]),v._v("，可以避免脏读、不可重复读和幻读问题，但是会降低并发性能。")])]),v._v(" "),_("p",[v._v("MySQL 的"),_("strong",[v._v("默认事务隔离级别")]),v._v("是可重复读（Repeatable Read）")]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("什么是脏读问题？")])])]),v._v(" "),_("p",[v._v("脏读（Dirty Read）指的是"),_("strong",[v._v("一个事务读取数据并且对数据进行了修改，这个修改对其他事务来说是可见的，即使当前事务没有提交。这时另外一个事务读取了这个还未提交的数据，但第一个事务突然回滚，导致数据并没有被提交到数据库，那第二个事务读取到的就是脏数据。")]),v._v("（脏读问题是数据一致性的一种破坏，可能会导致应用程序的错误行为或者数据不一致的情况。）")]),v._v(" "),_("p",[v._v("例如，"),_("strong",[v._v("事务 1 读取某表中的数据 A=20，事务 1 修改 A=A-1，事务 2 读取到 A = 19,事务 1 回滚导致对 A 的修改并为提交到数据库， A 的值还是 20")]),v._v("。")]),v._v(" "),_("p",[v._v("为了避免脏读问题，可以使用事务或者加锁机制来保证数据的一致性。在事务中，读取的数据必须是已经提交的，这样就可以避免脏读问题。在加锁机制中，可以通过加锁来阻止其他事务修改数据，保证数据的一致性。")]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("什么是不可重复读问题？")])])]),v._v(" "),_("p",[v._v("不可重复读是一种数据并发性的问题，指在一个事务中，多次执行同一查询语句，但是"),_("strong",[v._v("返回的结果不同")]),v._v("。这是因为在事务执行期间，其他事务修改了数据，导致原本的查询结果发生了变化。（重在原有的基础上修改数据）")]),v._v(" "),_("p",[v._v("例如：事务 1 读取某表中的数据 A=20，事务 2 也读取 A=20，事务 1 修改 A=A-1，事务 2 再次读取得到 A=19，此时读取的结果和第一次读取的结果不同。")]),v._v(" "),_("blockquote",[_("p",[_("strong",[v._v("什么是幻读问题？")])])]),v._v(" "),_("p",[v._v("幻读问题也是一种数据并发性的问题，指在一个事务中，同样的查询语句在事务执行期间"),_("strong",[v._v("返回了不同的结果集")]),v._v("，像发生了幻觉一样。这是因为在同一事务中，有其他事务插入了新的数据，导致原本的查询结果集合发生了变化。（重在原有的基础上新增数据）")]),v._v(" "),_("p",[v._v("例如：事务 2 读取某个范围的数据，事务 1 在这个范围插入了新的数据，事务 2 再次读取这个范围的数据发现相比于第一次读取的结果多了新的数据。")]),v._v(" "),_("h2",{attrs:{id:"乐观锁与悲观锁的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁与悲观锁的区别"}},[v._v("#")]),v._v(" 乐观锁与悲观锁的区别?")]),v._v(" "),_("p",[v._v("乐观锁和悲观锁是两种不同的并发控制方式，它们的主要区别在于"),_("strong",[v._v("对数据的锁定")]),v._v("和"),_("strong",[v._v("释放策略")]),v._v("不同。")]),v._v(" "),_("p",[v._v("悲观锁：")]),v._v(" "),_("p",[v._v("先讲下悲观锁，它是一种悲观的控制方式，总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题（比如共享数据被修改），所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，**共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程。**因此，在悲观锁的机制下，并发性能较低。")]),v._v(" "),_("p",[v._v("典型代表是"),_("strong",[v._v("数据库中的行锁和表锁")]),v._v("。")]),v._v(" "),_("blockquote",[_("p",[v._v("高并发的场景下，激烈的锁竞争会造成线程阻塞，大量阻塞线程会导致系统的上下文切换，增加系统的性能开销。并且，悲观锁还可能会存在死锁问题，影响代码的正常运行.")])]),v._v(" "),_("p",[v._v("乐观锁：")]),v._v(" "),_("p",[v._v("再讲下乐观锁，乐观锁是一种乐观的并发控制方式，总是假设最好的情况，认为共享资源每次被访问的时候不会出现问题，因此不会对数据进行加锁。"),_("strong",[v._v("但在提交数据时，系统会根据数据版本号等信息判断数据是否被修改过，如果数据被修改过则会回滚该事务，从而保证数据的一致性。")])]),v._v(" "),_("p",[v._v("乐观锁的典型代表是 "),_("strong",[v._v("CAS 算法")]),v._v("、"),_("strong",[v._v("版本控制")]),v._v("等。")]),v._v(" "),_("p",[v._v("总之，如果并发量较低，可以采用悲观锁，如果并发量较高，可以考虑使用乐观锁。")]),v._v(" "),_("h2",{attrs:{id:"mysql-数据库两种存储引擎的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据库两种存储引擎的区别"}},[v._v("#")]),v._v(" MySQL 数据库两种存储引擎的区别?")]),v._v(" "),_("p",[v._v("MySQL 有两种存储引擎：InnoDB 和 MyISAM。它们之间的区别主要体现在以下 7 个方面：")]),v._v(" "),_("ol",[_("li",[v._v("事务支持方面：\n"),_("ul",[_("li",[v._v("InnoDB 支持事务处理。")]),v._v(" "),_("li",[v._v("而 MyISAM 不支持事务处理。")])])]),v._v(" "),_("li",[v._v("表锁和行锁方面：\n"),_("ul",[_("li",[v._v("InnoDB 是支持"),_("strong",[v._v("行级锁")]),v._v("定的存储引擎，它可以"),_("strong",[v._v("锁定单独的行")]),v._v("，避免了锁定整张表时对并发性能的影响。")]),v._v(" "),_("li",[v._v("而 MyISAM 是基于"),_("strong",[v._v("表锁")]),v._v("定的存储引擎，它在对表进行读写操作时会"),_("strong",[v._v("锁定整张表")])])])]),v._v(" "),_("li",[v._v("外键支持方面：\n"),_("ul",[_("li",[v._v("InnoDB 支持外键，")]),v._v(" "),_("li",[v._v("而 MyISAM 不支持外键。")])])]),v._v(" "),_("li",[v._v("数据库异常崩溃后的安全恢复方面：\n"),_("ul",[_("li",[v._v("InnoDB 支持，")]),v._v(" "),_("li",[v._v("MyISAM 不支持。")])])]),v._v(" "),_("li",[v._v("是否支持 MVCC：\n"),_("ul",[_("li",[v._v("InnoDB 支持 MVCC，")]),v._v(" "),_("li",[v._v("而 MyISAM 不支持。MVCC 可以看作是行级锁的一个升级，可以有效减少加锁操作，提高性能。")])])]),v._v(" "),_("li",[v._v("索引方面：\n"),_("ul",[_("li",[v._v("MyISAM 支持全文索引，")]),v._v(" "),_("li",[v._v("而 InnoDB 在 MySQL 5.6 及之前版本不支持全文索引，只在 MySQL 5.6 及之后版本提供了全文索引功能。")])])]),v._v(" "),_("li",[v._v("性能方面：\n"),_("ul",[_("li",[v._v("MyISAM 存储引擎的读取速度较快，适合于"),_("strong",[v._v("读取频繁，写入不频繁")]),v._v("的应用，")]),v._v(" "),_("li",[v._v("而 InnoDB 存储引擎的写入速度较快，适合于"),_("strong",[v._v("更新频繁")]),v._v("的应用。")])])])]),v._v(" "),_("p",[v._v("总之：如果"),_("strong",[v._v("需要支持事务处理、外键约束等高级特性")]),v._v("，可以选择 InnoDB 存储引擎；如果"),_("strong",[v._v("对数据的读取频繁，写入不频繁")]),v._v("，可以选择 MyISAM 存储引擎。")]),v._v(" "),_("blockquote",[_("p",[v._v("MySQL 5.5 之前，MyISAM 引擎是 MySQL 的默认存储引擎，可谓是风光一时。")]),v._v(" "),_("p",[v._v("虽然，MyISAM 的性能还行，各种特性也还不错（比如全文索引、压缩、空间函数等）。但是，MyISAM 不支持事务和行级锁，而且"),_("strong",[v._v("最大的缺陷就是崩溃后无法安全恢复")]),v._v("。")]),v._v(" "),_("p",[v._v("MySQL 5.5 版本之后，InnoDB 是 MySQL 的默认存储引擎。")])]),v._v(" "),_("h2",{attrs:{id:"什么是-mvcc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-mvcc"}},[v._v("#")]),v._v(" 什么是 MVCC?")]),v._v(" "),_("p",[v._v("MVCC，全称为 Multi-Version Concurrency Control（多版本并发控制），是数据库系统中一种用于实现并发控制的技术。它主要用于保证在多个并发事务同时读取和修改数据库中的数据时，能够获得一致性和隔离性，避免数据读写冲突和不一致性。")]),v._v(" "),_("p",[v._v("MVCC 的核心思想是对数据库中的每条记录维护多个版本，每个事务在读取数据时，可以看到该事务开始之前的数据库状态（即之前提交的事务所修改的数据）。这样，即使有其他事务正在修改同一条记录，读操作也不会受到影响，因为它们读取的是不同版本的数据。")]),v._v(" "),_("p",[v._v("在 MVCC 中，每个事务都有一个唯一的事务 ID，数据库记录中的每个版本都有一个时间戳（或类似的版本号）来标识其创建时间。当一个事务要修改某条记录时，会先在内部生成该记录的一个新版本，并将新版本的时间戳设置为当前事务的 ID。其他事务在读取数据时，可以根据事务 ID 和时间戳来决定读取哪个版本的数据，从而实现并发的读写操作，而不会互相干扰。")]),v._v(" "),_("p",[v._v("MVCC 可以提高数据库的并发性能和事务隔离性，减少锁竞争，降低死锁的可能性。许多流行的数据库系统，如 MySQL、PostgreSQL 等，都采用了 MVCC 来实现并发控制。")]),v._v(" "),_("h2",{attrs:{id:"为什么-mvcc-可以解决幻读问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么-mvcc-可以解决幻读问题"}},[v._v("#")]),v._v(" 为什么 MVCC 可以解决幻读问题？")]),v._v(" "),_("p",[v._v("因为使用 MVCC 时，数据库中的每条记录都会有多个版本，每个版本都有一个时间戳或版本号，记录了创建该版本的事务 ID 或时间。")]),v._v(" "),_("p",[v._v("当一个事务开始执行时，它会获得一个唯一的事务 ID。在执行查询操作时，该事务只会读取在其开始之前"),_("strong",[v._v("已提交")]),v._v("的事务所创建的版本，而不会读取在它开始之后其他事务所创建的版本，从而避免了幻读问题。（只能避免不能完全")])])}),[],!1,null,null,null);_.default=r.exports}}]);