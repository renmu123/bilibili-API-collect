import{_ as t,o as d,c as r,e}from"./app-b9d15712.js";const a={},h=e('<h1 id="公共错误码" tabindex="-1"><a class="header-anchor" href="#公共错误码" aria-hidden="true">#</a> 公共错误码</h1><p>下表为大部分接口返回值中<code>code</code>字段值中公共的错误代码</p><h2 id="权限类" tabindex="-1"><a class="header-anchor" href="#权限类" aria-hidden="true">#</a> 权限类</h2><table><thead><tr><th>代码</th><th>含义</th></tr></thead><tbody><tr><td>-1</td><td>应用程序不存在或已被封禁</td></tr><tr><td>-2</td><td>Access Key 错误</td></tr><tr><td>-3</td><td>API 校验密匙错误</td></tr><tr><td>-4</td><td>调用方对该 Method 没有权限</td></tr><tr><td>-101</td><td>账号未登录</td></tr><tr><td>-102</td><td>账号被封停</td></tr><tr><td>-103</td><td>积分不足</td></tr><tr><td>-104</td><td>硬币不足</td></tr><tr><td>-105</td><td>验证码错误</td></tr><tr><td>-106</td><td>账号非正式会员或在适应期</td></tr><tr><td>-107</td><td>应用不存在或者被封禁</td></tr><tr><td>-108</td><td>未绑定手机</td></tr><tr><td>-110</td><td>未绑定手机</td></tr><tr><td>-111</td><td>csrf 校验失败</td></tr><tr><td>-112</td><td>系统升级中</td></tr><tr><td>-113</td><td>账号尚未实名认证</td></tr><tr><td>-114</td><td>请先绑定手机</td></tr><tr><td>-115</td><td>请先完成实名认证</td></tr></tbody></table><h2 id="请求类" tabindex="-1"><a class="header-anchor" href="#请求类" aria-hidden="true">#</a> 请求类</h2><table><thead><tr><th>代码</th><th>含义</th></tr></thead><tbody><tr><td>-304</td><td>木有改动</td></tr><tr><td>-307</td><td>撞车跳转</td></tr><tr><td>-400</td><td>请求错误</td></tr><tr><td>-401</td><td>未认证 (或非法请求)</td></tr><tr><td>-403</td><td>访问权限不足</td></tr><tr><td>-404</td><td>啥都木有</td></tr><tr><td>-405</td><td>不支持该方法</td></tr><tr><td>-409</td><td>冲突</td></tr><tr><td>-412</td><td>请求被拦截 (客户端 ip 被服务端风控)</td></tr><tr><td>-500</td><td>服务器错误</td></tr><tr><td>-503</td><td>过载保护,服务暂不可用</td></tr><tr><td>-504</td><td>服务调用超时</td></tr><tr><td>-509</td><td>超出限制</td></tr><tr><td>-616</td><td>上传文件不存在</td></tr><tr><td>-617</td><td>上传文件太大</td></tr><tr><td>-625</td><td>登录失败次数太多</td></tr><tr><td>-626</td><td>用户不存在</td></tr><tr><td>-628</td><td>密码太弱</td></tr><tr><td>-629</td><td>用户名或密码错误</td></tr><tr><td>-632</td><td>操作对象数量限制</td></tr><tr><td>-643</td><td>被锁定</td></tr><tr><td>-650</td><td>用户等级太低</td></tr><tr><td>-652</td><td>重复的用户</td></tr><tr><td>-658</td><td>Token 过期</td></tr><tr><td>-662</td><td>密码时间戳过期</td></tr><tr><td>-688</td><td>地理区域限制</td></tr><tr><td>-689</td><td>版权限制</td></tr><tr><td>-701</td><td>扣节操失败</td></tr><tr><td>-799</td><td>请求过于频繁，请稍后再试</td></tr><tr><td>-8888</td><td>对不起，服务器开小差了~ (ಥ﹏ಥ)</td></tr></tbody></table>',6),c=[h];function o(n,s){return d(),r("div",null,c)}const l=t(a,[["render",o],["__file","errcode.html.vue"]]);export{l as default};
