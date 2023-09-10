import{_ as t}from"./battery-100-5a4d9900.js";import{_ as n,o as s,c as a,e as d}from"./app-b9d15712.js";const e={},o=d('<h1 id="包月充电" tabindex="-1"><a class="header-anchor" href="#包月充电" aria-hidden="true">#</a> 包月充电</h1><img src="'+t+`" width="100" height="100"><h2 id="up主包月充电详情" tabindex="-1"><a class="header-anchor" href="#up主包月充电详情" aria-hidden="true">#</a> UP主包月充电详情</h2><blockquote><p>https://api.bilibili.com/x/upower/item/detail</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>up_mid</td><td>num</td><td>目标用户mid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误<br>203101：UP主未开通包月充电功能</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>upower_rank</td><td>obj</td><td>充电详情</td><td></td></tr><tr><td>item</td><td>obj</td><td>充电欢迎语</td><td></td></tr><tr><td>user_card</td><td>obj</td><td>UP主信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>upower_rank</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>total</td><td>num</td><td>充电用户总数</td><td></td></tr><tr><td>total_desc</td><td>str</td><td>充电总数文字说明</td><td>示例：“1+”</td></tr><tr><td>list</td><td>array</td><td>充电用户列表</td><td>最多展示30个</td></tr></tbody></table><p><code>upower_rank</code>中的<code>list</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>用户1</td><td></td></tr><tr><td>n</td><td>obj</td><td>用户(n+1)</td><td>按照充电时间排序</td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p>数组<code>list</code>中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>rank</td><td>num</td><td>充电用户索引</td><td></td></tr><tr><td>mid</td><td>num</td><td>充电用户mid</td><td></td></tr><tr><td>nickname</td><td>str</td><td>充电用户昵称</td><td></td></tr><tr><td>avatar</td><td>str</td><td>充电用户头像url</td><td></td></tr></tbody></table><p><code>data</code>中的<code>item</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>intro_video_aid</td><td>str</td><td>充电介绍视频AV号</td><td></td></tr><tr><td>welcomes</td><td>str</td><td>充电介绍语</td><td></td></tr></tbody></table><p><code>data</code>中的<code>user_card</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>avatar</td><td>str</td><td>UP主头像url</td><td></td></tr><tr><td>nickname</td><td>str</td><td>UP主昵称</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>获取<code>mid=293793435</code>的包月充电详情</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/upower/item/detail&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;up_mid=293793435&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;upower_rank&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1+&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">425503913</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wuziqian211&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;intro_video_aid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;welcomes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;哈喽b站的小伙伴们，我的充电计划升级啦！ 感兴趣就多多支持我吧~(゜-゜)つロ&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;user_card&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会易姐QwQ&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="与up主的包月充电关系" tabindex="-1"><a class="header-anchor" href="#与up主的包月充电关系" aria-hidden="true">#</a> 与UP主的包月充电关系</h2><blockquote><p>https://api.bilibili.com/x/upower/charge/follow/info</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie(SESSDATA)或APP</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>up_mid</td><td>num</td><td>目标用户mid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>days</td><td>num</td><td>已保持多少天包月充电状态</td><td></td></tr><tr><td>up_card</td><td>obj</td><td>UP主信息</td><td></td></tr><tr><td>user_card</td><td>obj</td><td>自己的信息</td><td></td></tr><tr><td>remain_days</td><td>num</td><td>剩余天数</td><td>未处于包月充电状态为-1</td></tr><tr><td>remain_less_1day</td><td>num</td><td>剩余的天数小于1天</td><td>0：否<br>1：是<br>未处于包月充电状态为0</td></tr><tr><td>upower_rank</td><td>obj</td><td>充电详情</td><td></td></tr><tr><td>upower_icon</td><td>str</td><td>充电图标url</td><td></td></tr></tbody></table><p><code>data</code>中的<code>up_card</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>nickname</td><td>str</td><td>UP主昵称</td><td></td></tr><tr><td>official_title</td><td>str</td><td>UP主认证信息</td><td></td></tr><tr><td>avatar</td><td>str</td><td>UP主头像url</td><td></td></tr></tbody></table><p><code>data</code>中的<code>user_card</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>avatar</td><td>str</td><td>用户头像url</td><td></td></tr><tr><td>nickname</td><td>str</td><td>用户昵称</td><td></td></tr></tbody></table><p><code>data</code>中的<code>upower_rank</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>total</td><td>num</td><td>充电用户总数</td><td></td></tr><tr><td>total_desc</td><td>str</td><td>充电总数文字说明</td><td>示例：“1+”</td></tr><tr><td>list</td><td>array</td><td>充电用户列表</td><td>最多展示6个</td></tr></tbody></table><p><code>upower_rank</code>中的<code>list</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>用户1</td><td></td></tr><tr><td>n</td><td>obj</td><td>用户(n+1)</td><td>按照充电时间排序</td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p>数组<code>list</code>中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>rank</td><td>num</td><td>充电用户索引</td><td></td></tr><tr><td>mid</td><td>num</td><td>充电用户mid</td><td></td></tr><tr><td>nickname</td><td>str</td><td>充电用户昵称</td><td></td></tr><tr><td>avatar</td><td>str</td><td>充电用户头像url</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>获取与<code>mid=293793435</code>的包月充电关系</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/upower/charge/follow/info&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;up_mid=293793435&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;days&quot;</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
        <span class="token property">&quot;up_card&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会易姐QwQ&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;official_title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;user_card&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wuziqian211&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;remain_days&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
        <span class="token property">&quot;remain_less_1day&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;upower_rank&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;total_desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1+&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">425503913</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wuziqian211&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;upower_icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/garb/item/33e2e72d9a0c855f036b4cb55448f44af67a0635.png&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="包月充电用户排名" tabindex="-1"><a class="header-anchor" href="#包月充电用户排名" aria-hidden="true">#</a> 包月充电用户排名</h2><blockquote><p>https://api.bilibili.com/x/upower/up/member/rank/v2</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>up_mid</td><td>num</td><td>目标用户mid</td><td>必要</td><td></td></tr><tr><td>ps</td><td>num</td><td>每页项数</td><td>非必要</td><td>默认为20</td></tr><tr><td>pn</td><td>num</td><td>页码</td><td>非必要</td><td>默认为1</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>up_info</td><td>obj</td><td>UP主信息</td><td></td></tr><tr><td>rank_info</td><td>array</td><td>充电用户排名</td><td></td></tr><tr><td>user_info</td><td>obj</td><td>自己的信息</td><td></td></tr><tr><td>member_total</td><td>num</td><td>充电用户总数</td><td></td></tr></tbody></table><p><code>data</code>中的<code>up_info</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>UP主mid</td><td></td></tr><tr><td>nickname</td><td>str</td><td>UP主昵称</td><td></td></tr><tr><td>avatar</td><td>str</td><td>UP主头像url</td><td></td></tr><tr><td>type</td><td>num</td><td>UP主认证类型</td><td>-1：无<br>0：UP主认证<br>1：机构认证</td></tr><tr><td>title</td><td>str</td><td>UP主认证信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>rank_info</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>用户1</td><td></td></tr><tr><td>n</td><td>obj</td><td>用户(n+1)</td><td>按照充电排名排列</td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p>数组<code>rank_info</code>中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>充电用户mid</td><td></td></tr><tr><td>nickname</td><td>str</td><td>充电用户昵称</td><td></td></tr><tr><td>avatar</td><td>str</td><td>充电用户头像url</td><td></td></tr><tr><td>rank</td><td>num</td><td>充电用户排名</td><td></td></tr><tr><td>day</td><td>num</td><td>包月充电天数</td><td></td></tr><tr><td>expire_at</td><td>num</td><td>包月充电过期时间</td><td>恒为0</td></tr></tbody></table><p><code>data</code>中的<code>user_info</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>用户mid</td><td></td></tr><tr><td>nickname</td><td>str</td><td>用户昵称</td><td></td></tr><tr><td>avatar</td><td>str</td><td>用户头像url</td><td></td></tr><tr><td>rank</td><td>num</td><td>包月充电排名</td><td>不在包月充电用户列表里为-1</td></tr><tr><td>day</td><td>num</td><td>包月充电天数</td><td></td></tr><tr><td>expire_at</td><td>num</td><td>包月充电过期时间</td><td>单位为秒，若从未给UP主包月充电为0</td></tr></tbody></table><p><strong>示例：</strong></p><p>获取给<code>mid=293793435</code>包月充电的用户排名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/upower/up/member/rank/v2&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;up_mid=293793435&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;up_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">293793435</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;社会易姐QwQ&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i0.hdslb.com/bfs/face/aebb2639a0d47f2ce1fec0631f412eaf53d4a0be.jpg&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rank_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">425503913</span><span class="token punctuation">,</span>
                <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wuziqian211&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
                <span class="token property">&quot;expire_at&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;user_info&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;mid&quot;</span><span class="token operator">:</span> <span class="token number">425503913</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wuziqian211&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://i2.hdslb.com/bfs/face/390f4b18b8b15c1f2ecdb6ee44e572aa18b9b2d0.png&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;rank&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;day&quot;</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
            <span class="token property">&quot;expire_at&quot;</span><span class="token operator">:</span> <span class="token number">1678723199</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;member_total&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,73),p=[o];function r(c,l){return s(),a("div",null,p)}const b=n(e,[["render",r],["__file","monthly.html.vue"]]);export{b as default};
