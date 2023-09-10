import{_ as o,r as p,o as l,c as r,a as t,b as s,d as a,w as e,e as d}from"./app-b9d15712.js";const c={},i=d('<h1 id="操作" tabindex="-1"><a class="header-anchor" href="#操作" aria-hidden="true">#</a> 操作</h1><h2 id="提交答题" tabindex="-1"><a class="header-anchor" href="#提交答题" aria-hidden="true">#</a> 提交答题</h2><h3 id="提交基础题" tabindex="-1"><a class="header-anchor" href="#提交基础题" aria-hidden="true">#</a> 提交基础题</h3><blockquote><p>https://api.bilibili.com/x/answer/v4/base/check</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p>',7),u=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),b=t("td",null,"question_id",-1),h=t("td",null,"num",-1),k=t("td",null,"题目id",-1),m=t("td",null,"必要",-1),v=t("td",null,"ans_hash",-1),g=t("td",null,"str",-1),q=t("td",null,"选项hash",-1),_=t("td",null,"必要",-1),y=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,"CSRF Token（位于cookie）"),t("td",null,"Cookie方式必要"),t("td")],-1),x=d(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误<br>41014：答题过快或错误太多<br>41012：用户答题提交题目id不合法<br>41020：用户基础题已通过<br>41023：用户答题记录不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>passed</td><td>bool</td><td>选项是否正确</td><td>true：选项正确<br>false：选项错误</td></tr></tbody></table><p><strong>示例：</strong></p><p>提交题目id为<code>104</code>的题，选项hash为<code>cb4c8cc9424fc771f7c1598e74de498f</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/base/check&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;question_id=104&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ans_hash=cb4c8cc9424fc771f7c1598e74de498f&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;passed&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="提交附加题" tabindex="-1"><a class="header-anchor" href="#提交附加题" aria-hidden="true">#</a> 提交附加题</h3><blockquote><p>https://api.bilibili.com/x/answer/v4/base/check</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p>`,14),f=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),S=t("td",null,"question_id",-1),A=t("td",null,"num",-1),E=t("td",null,"题目id",-1),w=t("td",null,"必要",-1),j=t("td",null,"ans_hash",-1),T=t("td",null,"str",-1),C=t("td",null,"选项hash",-1),P=t("td",null,"必要",-1),F=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,"CSRF Token（位于cookie）"),t("td",null,"Cookie方式必要"),t("td")],-1),B=d(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误<br>41014：答题过快或错误太多<br>41012：用户答题提交题目id不合法<br>41023：用户答题记录不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>passed</td><td>bool</td><td>选项是否正确</td><td>true：选项正确<br>false：选项错误</td></tr></tbody></table><p><strong>示例：</strong></p><p>提交题目id为<code>104</code>的题，选项hash为<code>cb4c8cc9424fc771f7c1598e74de498f</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/base/check&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;question_id=104&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ans_hash=cb4c8cc9424fc771f7c1598e74de498f&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;passed&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="提交自选题" tabindex="-1"><a class="header-anchor" href="#提交自选题" aria-hidden="true">#</a> 提交自选题</h3><blockquote><p>https://api.bilibili.com/x/answer/v4/pro/check</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p>`,14),D=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),R=t("td",null,"question_id",-1),O=t("td",null,"num",-1),N=t("td",null,"题目id",-1),V=t("td",null,"必要",-1),G=t("td",null,"ans_hash",-1),L=t("td",null,"str",-1),z=t("td",null,"选项hash",-1),H=t("td",null,"必要",-1),I=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,"CSRF Token（位于cookie）"),t("td",null,"Cookie方式必要"),t("td")],-1),J=d(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误<br>41014：答题过快或错误太多<br>41012：用户答题提交题目id不合法<br>41023：用户答题记录不存在<br>41026：获取用户DB题目信息异常</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>passed</td><td>bool</td><td>true</td><td>恒为<code>true</code></td></tr></tbody></table><p><strong>示例：</strong></p><p>提交题目id为<code>2935</code>的题，选项hash为<code>ffd55cbe0624f466bee2ea3eb576a4d0</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/pro/check&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;question_id=2935&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;ans_hash=ffd55cbe0624f466bee2ea3eb576a4d0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;passed&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取验证码" tabindex="-1"><a class="header-anchor" href="#获取验证码" aria-hidden="true">#</a> 获取验证码</h2><blockquote><p>https://api.bilibili.com/x/answer/v4/captcha</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误<br>41010：用户答题非法访问<br>41014：答题过快或错误太多<br>41020：用户基础题已通过<br>41021：用户基础题未通过</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>str</td><td>验证码类型?</td><td>geetest：极验</td></tr><tr><td>gt</td><td>str</td><td>极验id</td><td></td></tr><tr><td>challenge</td><td>str</td><td>极验key</td><td></td></tr><tr><td>token</td><td>str</td><td>(?)</td><td></td></tr><tr><td>url</td><td>str</td><td>(?)</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/captcha&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;geetest&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;abc55d1fb914cb110cfb4c232a4b4c35&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;challenge&quot;</span><span class="token operator">:</span> <span class="token string">&quot;90a6e03e626e13ee186ddae0107c3ae2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="提交验证码" tabindex="-1"><a class="header-anchor" href="#提交验证码" aria-hidden="true">#</a> 提交验证码</h2><blockquote><p>https://api.bilibili.com/x/answer/v4/captcha/check</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>注：</strong></p><p>旧版<code>edition=0</code>同时提交自选题分类以及验证码</p><p>新版<code>edition=2</code>仅仅提交验证码</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>types</td><td>nums</td><td>自选题分类(旧版)</td><td>非必要</td><td>新版不需要此字段</td></tr><tr><td>type</td><td>str</td><td>验证码类型</td><td>非必要</td><td></td></tr><tr><td>bilibili_token</td><td>str</td><td></td><td>非必要</td><td></td></tr><tr><td>bilibili_code</td><td>str</td><td></td><td>非必要</td><td></td></tr><tr><td>geetest_challenge</td><td>str</td><td>极验key</td><td>非必要</td><td></td></tr><tr><td>geetest_seccode</td><td>str</td><td>极验结果+|jordan</td><td>非必要</td><td></td></tr><tr><td>geetest_validate</td><td>str</td><td>极验结果</td><td>非必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token(位于cookie)</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-105：验证码错误<br>-400：请求错误<br>41010：用户答题非法访问<br>41014：答题过快或错误太多<br>41021：用户基础题未通过<br>41031：自选题未通过</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/captcha/check&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;types=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;type=geetest&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;bilibili_token=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;bilibili_code=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;geetest_challenge=3f809a7a9c51edca751fd26c032c182d&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;geetest_seccode=513ec576a275a3eb250829202d4dce46|jordan&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;geetest_validate=513ec576a275a3eb250829202d4dce46&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="提交自选题分类" tabindex="-1"><a class="header-anchor" href="#提交自选题分类" aria-hidden="true">#</a> 提交自选题分类</h2><blockquote><p>https://api.bilibili.com/x/answer/v4/pro/type/check</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>types</td><td>nums</td><td>自选题分类(新版)</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token(位于cookie)</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误<br>41010：用户答题非法访问<br>41014：答题过快或错误太多<br>41021：用户基础题未通过<br>41031：自选题未通过<br>41052：用户题目类型不合法<br>41055：基础附加题未通过</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>选择<code>游戏</code> <code>影视</code> <code>科教/知识</code> <code>动画/动漫</code>分类</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/pro/type/check&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;types=1,2,3,4&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="提前交卷" tabindex="-1"><a class="header-anchor" href="#提前交卷" aria-hidden="true">#</a> 提前交卷</h2><blockquote><p>https://api.bilibili.com/x/answer/v4/submit</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p>当当前得分&gt;=60时，可请求本接口提前完成答题</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>CSRF Token(位于cookie)</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误<br>41014：答题过快或错误太多<br>41023：用户答题记录不存在<br>41031：自选题未通过</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>hid</td><td>num</td><td>答题会话id</td><td></td></tr><tr><td>mid</td><td>num</td><td>答题用户mid</td><td></td></tr><tr><td>score</td><td>num</td><td>得分</td><td></td></tr><tr><td>status</td><td>num</td><td>0</td><td></td></tr><tr><td>number</td><td>num</td><td>0</td><td></td></tr><tr><td>result</td><td>str</td><td>succeed</td><td></td></tr><tr><td>stage</td><td>str</td><td>result</td><td></td></tr><tr><td>version</td><td>str</td><td>版本</td><td>目前为<code>v4</code></td></tr><tr><td>start_time</td><td>num</td><td>本次答题开始时间</td><td>时间戳</td></tr><tr><td>first_answer</td><td>num</td><td>0</td><td></td></tr><tr><td>progress</td><td>str</td><td></td><td></td></tr><tr><td>text</td><td>str</td><td></td><td></td></tr><tr><td>url</td><td>str</td><td></td><td></td></tr><tr><td>in_reg_audit</td><td>bool</td><td></td><td></td></tr><tr><td>edition</td><td>num</td><td>答题版本</td><td>0：旧版（40+10+50）<br>2：新版（40+30+30）</td></tr><tr><td>rewards</td><td>null</td><td></td><td></td></tr><tr><td>captcha</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/answer/v4/submit&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;hid&quot;</span><span class="token operator">:</span> <span class="token number">1623207905520705</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">293793435</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score&quot;</span><span class="token operator">:</span> <span class="token number">63</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;succeed&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;result&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;v4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;start_time&quot;</span><span class="token operator">:</span> <span class="token number">1636889218</span><span class="token punctuation">,</span>
        <span class="token property">&quot;first_answer&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;progress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;in_reg_audit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;edition&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rewards&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;captcha&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,64);function K(M,Q){const n=p("RouterLink");return l(),r("div",null,[i,t("table",null,[u,t("tbody",null,[t("tr",null,[b,h,k,m,t("td",null,[s("从"),a(n,{to:"/docs/newbie_exam/fetch.html#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98"},{default:e(()=>[s("拉取基础题api")]),_:1}),s("获得")])]),t("tr",null,[v,g,q,_,t("td",null,[s("从"),a(n,{to:"/docs/newbie_exam/fetch.html#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98"},{default:e(()=>[s("拉取基础题api")]),_:1}),s("获得")])]),y])]),x,t("table",null,[f,t("tbody",null,[t("tr",null,[S,A,E,w,t("td",null,[s("从"),a(n,{to:"/docs/newbie_exam/fetch.html#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98"},{default:e(()=>[s("拉取基础题api")]),_:1}),s("获得")])]),t("tr",null,[j,T,C,P,t("td",null,[s("从"),a(n,{to:"/docs/newbie_exam/fetch.html#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98"},{default:e(()=>[s("拉取基础题api")]),_:1}),s("获得")])]),F])]),B,t("table",null,[D,t("tbody",null,[t("tr",null,[R,O,N,V,t("td",null,[s("从"),a(n,{to:"/docs/newbie_exam/fetch.html#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98"},{default:e(()=>[s("拉取基础题api")]),_:1}),s("获得")])]),t("tr",null,[G,L,z,H,t("td",null,[s("从"),a(n,{to:"/docs/newbie_exam/fetch.html#%E6%8B%89%E5%8F%96%E5%9F%BA%E7%A1%80%E9%A2%98"},{default:e(()=>[s("拉取基础题api")]),_:1}),s("获得")])]),I])]),J])}const W=o(c,[["render",K],["__file","action.html.vue"]]);export{W as default};
