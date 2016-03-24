百度前端
---

* 零基础HTML编码
> * 编写了一个没有css的页面，全是html
> * 增加VerifyUtils.java,验证公共方法

* v1.1.0 (2015-11-5)
> * 增加UnicodeUtils.java,用来从正常字符和unicode字符转码
> * 增加EmojiUtils.java,用来过滤emoji字符
> * 删除weixinpopular依赖

* v1.1.1 (2015-11-17)
> * DateUtils 增加中国通用时间(微信时间用)

* v1.1.2 (2015-11-17)
> * DateUtils 增加中国通用时间(微信时间用) yyyy年MM月dd日 HH:mm

* v1.1.2 (2015-12-3)
> * 修改ProperitesUtils方法,兼容Linux

* v1.2.0 (2015-12-18)
> * 增加HttpUtils,封装get请求,返回JsonObject

* v1.3.0 (2015-12-24)
> * 增加PriceUtils,分转元,元转分
> * 删除log4j依赖
> * 增加接口用抽象结果类

* v1.3.1 (2015-12-29)
> * HttpUtils 多态,增加返回String类型和特定Object类型的方法

* v1.3.2 (2015-12-29)
> * 修复不能反序列化父类的bug

* v1.3.3 (2015-12-29)
> * 修复HttpUtils调用可能无返回值问题

* v1.3.4 (2015-12-29)
> * HttpUtils增加状态判断和重试功能
> * HttpUtils转json方法,去掉报错问题
> * Result类增加附属属性:info

* v1.4.0(2016-01-06)
> * 增加通过图片url转成base64方法

* v1.5.0(2016-01-06)
> * 增加LogType成为公用方法

* v2.5.0(2016-01-07)
> * 修改log4j为logback依赖

* v2.5.1(2016-01-07)
> * 为logback增加日志筛选功能插件

* v2.6.0(2016-01-25)
> * 增加向flume输出的appender
> * PropertyUtils增加方法getCommonProperty:根据属性名称从默认环境变量${ESTIMATE_CONFIG_HOME}/config/config.properties文件中获取属性
> * PropertyUtils增加方法getApplicationProperty(applicationName,configName,propertyName):根据指定的应用路径名字,配置文件名字,属性名称从默认环境变量${ESTIMATE_CONFIG_HOME}获取属性
> * PropertyUtils增加方法getApplicationProperty(fileName,propertyName):根据指定的应用路径,属性名称从默认环境变量${ESTIMATE_CONFIG_HOME}获取属性

* v2.6.1(2016-01-25)
> * 修正null也作为空处理

* v2.6.2(2016-02-17)
> * 增加logback redis appender依赖

* v2.7.0(2016-02-18)
> * 增加accessTokenUtils 可通过该类中方法获取accessToken
> * 增加JsApiUtils 可通过该类中方法获取JsApi
> * 增加DataCubeUtils 可通过该类中方法获取某天的关注量
> * 在DateUtils中增加重载类getStartTimeOfDay,获取当天0点,返回日期格式

* v2.7.1(2016-02-26)
> * 修改JsApiUtils 变为静态方法

* v2.7.2(2016-03-01)
> * 修改AccessTokenUtils不存redis的bug

* v2.7.3(2016-03-16)
> * 增加UserInfoUtils,通过code换openId 和换UserInfo

* v2.7.4(2016-03-24)
> * 增加ShareSignUtil,获取分享所需要的签名