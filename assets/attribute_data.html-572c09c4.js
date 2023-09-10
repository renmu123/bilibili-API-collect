import{_ as t,o as d,c as r,e}from"./app-b9d15712.js";const a={},h=e('<h1 id="视频属性数据说明" tabindex="-1"><a class="header-anchor" href="#视频属性数据说明" aria-hidden="true">#</a> 视频属性数据说明</h1><p><strong>PS</strong>：以下部分内容来源不明，且部分值前端不可见，有待验证</p><h2 id="attribute字段值-稿件属性位" tabindex="-1"><a class="header-anchor" href="#attribute字段值-稿件属性位" aria-hidden="true">#</a> attribute字段值(稿件属性位)</h2><p>该字段为二进制标志位，多个标志请用<code>OR</code>运算叠加</p><table><thead><tr><th>位</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>禁止排行</td><td></td></tr><tr><td>1</td><td>动态禁止</td><td>禁止APP推送动态</td></tr><tr><td>2</td><td>禁止网页输出</td><td></td></tr><tr><td>3</td><td>禁止客户端列表</td><td></td></tr><tr><td>4</td><td>搜索禁止</td><td>打全标题或av/bv号都搜索不到的那种</td></tr><tr><td>5</td><td>海外禁止</td><td></td></tr><tr><td>6</td><td>禁止推荐</td><td>禁止被APP端天马列表推荐</td></tr><tr><td>7</td><td>是否显示“禁止转载“标志</td><td><strong>注：未经作者授权 禁止转载</strong></td></tr><tr><td>8</td><td>是否高清</td><td>视频清晰度&gt;=1080P</td></tr><tr><td>9</td><td>是否PGC稿件</td><td>番剧&amp;影视</td></tr><tr><td>10</td><td>允许承包</td><td></td></tr><tr><td>11</td><td>是否番剧</td><td></td></tr><tr><td>12</td><td>是否私单</td><td>存在商业推广恰饭内容</td></tr><tr><td>13</td><td>是否限制地区</td><td>大多数番剧&amp;影视</td></tr><tr><td>14</td><td>禁止其他人添加TAG</td><td></td></tr><tr><td>15</td><td>？</td><td>大多数旧视频会有这个标志</td></tr><tr><td>16</td><td>跳转</td><td>番剧及影视av/bv-&gt;ep跳转</td></tr><tr><td>17</td><td>是否影视</td><td></td></tr><tr><td>18</td><td>是否付费</td><td></td></tr><tr><td>19</td><td>推送动态</td><td></td></tr><tr><td>20</td><td>家长模式</td><td></td></tr><tr><td>21</td><td>是否限制游客和外链</td><td>分为两种情况，默认全部网页限制referer跳转，但第二种未登录无法访问，可以通过未登陆b站访问https://api.bilibili.com/x/web-interface/view 返回的code为-403来判断</td></tr><tr><td>22</td><td>？</td><td></td></tr><tr><td>23</td><td>？</td><td></td></tr><tr><td>24</td><td>是否为联合投稿</td><td></td></tr><tr><td>25</td><td>？</td><td></td></tr><tr><td>26</td><td>？</td><td></td></tr><tr><td>27</td><td>？</td><td></td></tr><tr><td>28</td><td>？</td><td></td></tr><tr><td>29</td><td>是否为互动视频</td><td></td></tr></tbody></table><h2 id="state字段值-稿件状态" tabindex="-1"><a class="header-anchor" href="#state字段值-稿件状态" aria-hidden="true">#</a> state字段值(稿件状态)</h2><table><thead><tr><th>值</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>1</td><td>橙色通过</td><td></td></tr><tr><td>0</td><td>开放浏览</td><td></td></tr><tr><td>-1</td><td>待审</td><td></td></tr><tr><td>-2</td><td>被打回</td><td></td></tr><tr><td>-3</td><td>网警锁定</td><td></td></tr><tr><td>-4</td><td>被锁定</td><td>视频撞车了</td></tr><tr><td>-5</td><td>管理员锁定</td><td></td></tr><tr><td>-6</td><td>修复待审</td><td></td></tr><tr><td>-7</td><td>暂缓审核</td><td></td></tr><tr><td>-8</td><td>补档待审</td><td></td></tr><tr><td>-9</td><td>等待转码</td><td></td></tr><tr><td>-10</td><td>延迟审核</td><td></td></tr><tr><td>-11</td><td>视频源待修</td><td></td></tr><tr><td>-12</td><td>转储失败</td><td></td></tr><tr><td>-13</td><td>允许评论待审</td><td></td></tr><tr><td>-14</td><td>临时回收站</td><td></td></tr><tr><td>-15</td><td>分发中</td><td></td></tr><tr><td>-16</td><td>转码失败</td><td></td></tr><tr><td>-20</td><td>创建未提交</td><td></td></tr><tr><td>-30</td><td>创建已提交</td><td></td></tr><tr><td>-40</td><td>定时发布</td><td></td></tr><tr><td>-100</td><td>用户删除</td><td></td></tr></tbody></table>',7),i=[h];function o(c,s){return d(),r("div",null,i)}const b=t(a,[["render",o],["__file","attribute_data.html.vue"]]);export{b as default};
