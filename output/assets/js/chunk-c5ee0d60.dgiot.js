/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Mon Nov 15 2021 07:40:34 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5ee0d60"],{1573:function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},1580:function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"1e6c":function(t,e,a){"use strict";a.r(e),e["default"]={type:"bmap",label:"地图",config:{url:"https://github.com/dream2023/vue-ele-form-bmap",attrs:{config:{ak:{type:"input",label:"密钥",required:!0},zoom:{type:"number",label:"缩放比",attrs:{min:1}},isScrollWheelZoom:{type:"switch",label:"滚轮缩放大小"},mapHeight:{type:"number",label:"地图高度",attrs:{min:0,step:50}},isShowNavigation:{type:"switch",label:"是否显示缩略控件"},isShowGeolocation:{type:"switch",label:"是否显示自动定位控件"},placeholder:{type:"input",label:"搜索占位符"}},data:{ak:"9YLHZRPvUNLhi34Oh2ojqeGSpzCf1rVG"}},common:{config:{default:{type:"data-editor",label:"默认值",attrs:{types:["string","object"],rows:4}}}}}}},"217f":function(t,e,a){},2436:function(t,e,a){t.exports={"menu-color":"rgba(255,255,255,.95)","menu-color-active":"rgba(255,255,255,.95)","menu-background":"#282c34","column-second-menu-background":"#fff"}},"26a4f":function(t,e,a){},"3c14":function(t,e,a){"use strict";a.r(e),e["default"]={type:"markdown-editor",label:"markdown编辑器",config:{url:"https://github.com/dream2023/vue-ele-form-markdown-editor",attrs:{config:{fontSize:{type:"input",label:"编辑区域文字大小"},scrollStyle:{type:"switch",label:"开启滚动条样式(暂时仅支持chrome)"},boxShadow:{type:"switch",label:"开启边框阴影"},boxShadowStyle:{type:"input",label:"边框阴影样式"},transition:{type:"switch",label:"是否开启过渡动画"},toolbarsBackground:{type:"color",label:"工具栏背景颜色"},previewBackground:{type:"color",label:"预览框背景颜色"},subfield:{type:"switch",label:"true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)"},defaultOpen:{type:"radio",label:"默认展示区域",options:["edit","preview"]},placeholder:{type:"input",label:"输入框为空时默认提示文本"},editable:{type:"switch",label:"是否允许编辑"},toolbarsFlag:{type:"switch",label:"工具栏是否显示"},navigation:{type:"switch",label:"默认展示目录"},shortCut:{type:"switch",label:"是否启用快捷键"},autofocus:{type:"switch",label:"自动聚焦到文本框"},ishljs:{type:"switch",label:"代码高亮"},toolbars:{type:"data-editor",label:"工具栏",attrs:{types:["object"],rows:10}},action:{type:"input",label:"上传地址",required:!0},fileSize:{type:"input",label:"文件大小限制(MB)",attrs:{type:"number",min:0}},name:{type:"input",label:"上传的文件字段名",required:!0},withCredentials:{type:"switch",label:"支持发送 cookie 凭证信息"},data:{type:"data-editor",label:"上传时附带的额外参数",attrs:{types:["object"]}},headers:{type:"data-editor",label:"设置上传的请求头部",attrs:{types:["object"]}}},data:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}},common:{config:{default:{type:"textarea",label:"默认值",default:""}}}}}},"4f6a":function(t,e,a){"use strict";a.r(e),e["default"]={type:"image-uploader",label:"上传图片",config:{url:"https://github.com/dream2023/vue-ele-form-image-uploader",attrs:{config:{action:{type:"input",label:"上传地址",required:!0},name:{type:"input",label:"上传的文件字段名",required:!0},corp:{type:"switch",label:"是否剪裁"},cropHeight:{type:"number",label:"裁剪高度",vif:function(t){return t.corp},attrs:{min:0}},cropWidth:{type:"number",label:"裁剪宽度",vif:function(t){return t.corp},attrs:{min:0}},multiple:{type:"switch",label:"是否支持多选文件"},limit:{type:"input",label:"文件个数显示",vif:function(t){return t.multiple},attrs:{min:0,type:"number"}},size:{type:"number",label:"图片显示大小",attrs:{min:0,step:10}},fileSize:{type:"number",label:"文件大小限制(MB)",attrs:{min:0}},lazy:{type:"switch",label:"图片懒加载"},drag:{type:"switch",label:"是否启用拖拽上传"},withCredentials:{type:"switch",label:"支持发送 cookie 凭证信息"},isShowTip:{type:"switch",label:"是否显示提示"},title:{type:"input",label:"弹窗标题"},thumbSuffix:{type:"input",label:"略图后缀, 例如七牛云缩略图样式 (?imageView2/1/w/20/h/20)"},fileType:{type:"data-editor",label:'文件类型, 例如["png", "jpg", "jpeg"]',attrs:{types:["array"]}},data:{type:"data-editor",label:"上传时附带的额外参数",attrs:{types:["array","object"]}},headers:{type:"data-editor",label:"设置上传的请求头部",attrs:{types:["object"]}}},data:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}}}}},"5bac":function(t,e,a){},"6c08a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABd1BMVEUAAAAz/8w547M94K093q863q094bA+3q0+3a4+3q0+3q4/3q4+3q4546pA368+3q4+3q0+3a4z5rM/3q4/3a0+3q0+3q0/3q0/3a4/3q493a8+3q0/3a4+3q0/3q493q893q0+364+3q4/3q4z3ao+3a484a8/364+3a4956o63K4/3a0+3a1A3608368+3a1A5rM+4Kw/3a5Az489368/3q0/3a4/4K9DzphCz5VC0JU+360/3q0/3rBB0pZCz5VCz5U/3q5D0ZZDz5VCz5ZD0JU/3q5Bz5RDz5VDzpZDz5ZDz5VDz5VCzpVBz5RA1ZVCzpZDzpZEz5dA0ZZCzpZCzpdD05ZAzJlCzpVDzpZDzpVDzpVEzJlCzpZDzpVA/4BDzpVCz5ZDz5ZCz5VDzpZBzpZBzpdBz5ZCz5ZCzpZCzpRCz5dCzpVCz5U325JC0JVCz5ZAz5c5445BzpVDzpZCz5VCzpU51ZxDz5VB0ZQ/3q5Dz5b///9RxxHiAAAAenRSTlMABRsyNh8qjM39/r9eCSDA7XgKVfOsg/fDdVNOcqjvbFSddLcP1TOO4hUWao84QMQUSvsQUPz4SSrobFf0PTPvZWU99P5X6E/4/FBb/ftKGPfCQDiSaS4U543W7A+2cwSdVe2pck5TdcSDH3+t8w6M8iAJXqjqzRI1NywcbtAAAAABYktHRHzRtiBfAAAAB3RJTUUH5QoMBBo1a6wRrAAAAT5JREFUOMtjYBjWgJGJmYWVkZAqNnYOziog4OLm4cWjjI+/CgEEBIVwqRMWqUIBojjUiaEqqxJnxa9OQlJKWkZWrqpKHrs6BbAqLkU2qN+VlLGrUxEAqVNVIxh66iB1GpoE1WmJg1zPRjg6tEEG6hBSpaunpw8y0ICQQkMjaMgYCWPIGaPwTEzB6szMMdRZWFqh8K25gOpsbDHU2dlXVzugiDhWVclhhqGTc3V1tYsripi8G2bYuHtUg4CnF2rUYKjz9qmGAF8/QsHhHwBUFhgUFExIYQjIvFDC0RUGcmNAOEF14REgAyMJqrOLAqmLjsEuGxsXD42SBBewjxOxq7Oqrk5KTklNS8+AhkwmdnVZAdWoIBuHs3JQleUm4nJ/Xn4BkrrAQjxeLSouKQUp8inLtyAYLuUVQZVFw7sgBgAb/3xXjRnKcgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0xMlQwNDoyMzo1NSswMDowMBfvnsMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMTJUMDQ6MjM6NTMrMDA6MDAFYhNFAAAAAElFTkSuQmCC"},"719a4":function(t,e,a){"use strict";a.r(e),e["default"]={type:"video-uploader",label:"上传视频",config:{url:"https://github.com/dream2023/vue-ele-form-video-uploader",attrs:{config:{action:{type:"input",label:"上传地址",required:!0},name:{type:"input",label:"上传的文件字段名",required:!0},fileSize:{type:"input",label:"文件大小限制(MB)",attrs:{type:"number",min:0}},width:{type:"number",label:"显示宽度",attrs:{step:10,min:0}},height:{type:"number",label:"显示高度(默认auto)",attrs:{step:10,min:0}},fileType:{type:"data-editor",label:"文件类型",attrs:{types:["array"],rows:4}},isShowTip:{type:"switch",label:"是否显示提示"},withCredentials:{type:"switch",label:"支持发送 cookie 凭证信息"},data:{type:"data-editor",label:"上传时附带的额外参数",attrs:{types:["object"]}},headers:{type:"data-editor",label:"设置上传的请求头部",attrs:{types:["object"]}}},data:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}}}}},"75e2":function(t,e,a){"use strict";a.r(e),e["default"]={type:"quill-editor",label:"富文本编辑器",config:{url:"https://github.com/dream2023/vue-ele-form-quill-editor",attrs:{config:{action:{type:"input",label:"上传地址",required:!0},editorOptions:{type:"data-editor",label:"编辑器设置",tip:"请参考: https://github.com/davidroyer/vue2-editor",attrs:{types:["object"]}},placeholder:{type:"input",label:"占位符"},fileSize:{type:"input",label:"文件大小限制(MB)",attrs:{type:"number",min:0}},name:{type:"input",label:"上传的文件字段名",required:!0},withCredentials:{type:"switch",label:"支持发送 cookie 凭证信息"},data:{type:"data-editor",label:"上传时附带的额外参数",attrs:{types:["object"]}},headers:{type:"data-editor",label:"设置上传的请求头部",attrs:{types:["object"]}},editorToolbar:{type:"data-editor",label:"自定义toolbar",attrs:{types:["array"]}}},data:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}},common:{config:{default:{type:"textarea",label:"默认值"}}}}}},"77fa":function(t,e,a){"use strict";a.r(e),e["default"]={type:"table-editor",label:"表格内容编辑组件",config:{url:"https://github.com/dream2023/vue-ele-form-table-editor",attrs:{config:{columns:{type:"data-editor",label:"table 列",required:!0,attrs:{types:["array","object"]},rows:12},isShowDelete:{type:"switch",label:"是否显示删除"},isShowAdd:{type:"switch",label:"是否显示新增按钮"},addBtnText:{type:"input",label:"新增按钮文本"},newColumnValue:{type:"data-editor",label:"新增列的值",attrs:{types:["object"]}},rules:{type:"data-editor",label:"校检规则",attrs:{types:["object","array"],rows:10}},extraBtns:{type:"data-editor",label:"右侧其它按钮",attrs:{types:["array"]}},deleteBtnAttr:{type:"data-editor",label:"删除按钮属性",attrs:{types:["object"]}},tableAttrs:{type:"data-editor",label:"表格属性",attrs:{types:["object"]}}},data:{columns:[{type:"index",width:50},{prop:"grade",label:"年级"},{prop:"name",label:"姓名",content:{type:"el-input",attrs:{placeholder:"学员姓名"}}},{label:"缴费",width:200,content:["已缴纳: ",{type:"el-input",valueKey:"tuition",style:{width:"100px",marginRight:"10px"}}]},{prop:"dream",label:"梦想",content:{type:"el-select",options:[{text:"科学家",value:"scientist"},{text:"警察",value:"policeman"},"程序员"]}}],newColumnValue:{grade:"三年级二班"}}},common:{config:{default:{type:"data-editor",label:"默认值",attrs:{types:["array"]}}},data:{default:[{grade:"三年级二班",name:"小张",sex:1,tuition:2e3,unPay:100,dream:""}]}}}}},"7a36":function(t,e,a){"use strict";a.r(e),e["default"]={type:"data-editor",label:"JSON编辑器",config:{url:"https://github.com/dream2023/vue-ele-form-upload-file",attrs:{config:{height:{type:"input",label:"高度"},plus:{type:"switch",label:"是否显示全屏按钮"},options:{type:"data-editor",label:"配置",attrs:{types:["object"]}}},data:{}},common:{config:{default:{type:"data-editor",label:"默认值",attrs:{types:["object","array"]}}}}}}},"85d8":function(t,e){},"8ff2":function(t,e,a){"use strict";a.r(e),e["default"]={type:"upload-file",label:"文件上传",config:{url:"https://github.com/dream2023/vue-ele-form-upload-file",attrs:{config:{action:{type:"input",label:"上传地址",required:!0},name:{type:"input",label:"上传的文件字段名",required:!0},placeholder:{type:"input",label:"上传按钮文本"},fileSize:{type:"input",label:"文件大小限制(MB)",attrs:{type:"number",min:0}},fileType:{type:"data-editor",label:'文件类型, 例如["png", "jpg", "jpeg"]',attrs:{types:["array"],rows:4}},multiple:{type:"switch",label:"是否支持多选文件"},limit:{type:"input",label:"文件个数显示",vif:function(t){return t.multiple},attrs:{type:"number",min:0}},isCanDownload:{type:"switch",label:"是否显示下载"},isCanDelete:{type:"switch",label:"是否可删除"},isCanUploadSame:{type:"switch",label:"是否可上传相同文件"},isShowTip:{type:"switch",label:"是否显示提示"},withCredentials:{type:"switch",label:"支持发送 cookie 凭证信息"},data:{type:"data-editor",label:"上传时附带的额外参数",attrs:{types:["object"]}},headers:{type:"data-editor",label:"设置上传的请求头部",attrs:{types:["object"]}}},data:{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"}}}}},"97dc":function(t,e,a){"use strict";a.r(e),e["default"]={type:"codemirror",label:"代码编辑器",config:{url:"https://github.com/dream2023/vue-ele-form-codemirror",attrs:{config:{options:{type:"data-editor",label:"配置",attrs:{types:["object"],rows:10}}}},common:{config:{default:{type:"textarea",label:"默认值"}}}}}},c139:function(t,e,a){"use strict";a.r(e),e["default"]={type:"gallery",label:"图片及视频展示",config:{url:"https://github.com/dream2023/vue-ele-form-gallery",attrs:{config:{type:{type:"select",label:"类型",options:["image","video","iframe"]},width:{type:"number",label:"缩略图宽度",attrs:{min:0,step:10}},height:{type:"number",label:"缩略图高度",attrs:{min:0,step:10}},lazy:{type:"switch",label:"缩略图是否懒加载"},thumbSuffix:{type:"input",label:"缩略图后缀"},thumbStyle:{type:"data-editor",label:"缩略图样式",attrs:{types:["object"]}},carouselAttrs:{type:"data-editor",label:"轮播图属性",attrs:{types:["object"]}}},data:{}},common:{config:{default:{type:"dynamic",label:"默认值",attrs:{columns:{type:"el-input",attrs:{placeholder:"图片链接"}}}}},data:{default:["https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg","https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"]}}}}},c74a:function(t,e,a){"use strict";a.r(e),e["default"]={type:"tree-select",label:"树形下拉选择器",config:{url:"https://github.com/dream2023/vue-ele-form-tree-select",attrs:{config:{placeholder:{type:"input",label:"占位符"},appendToBody:{type:"switch",label:"弹窗插入body"},multiple:{type:"switch",label:"是否开启多选模式"},searchable:{type:"switch",label:"是否开启搜索功能"},async:{type:"switch",label:"是否开启异步搜索"},autoFocus:{type:"switch",label:"是否自动聚焦"},clearable:{type:"switch",label:"是否显示清除图标"},limit:{type:"number",label:"多选数量显示",vif:function(t){return t.multiple},attrs:{min:1}},maxHeight:{type:"number",label:"弹出菜单高度",attrs:{min:0,step:10}},alwaysOpen:{type:"switch",label:"一直打开选项菜单"},flattenSearchResults:{type:"switch",label:"是否展平搜索结果",vif:function(t){return t.async}},autoLoadRootOptions:{type:"switch",label:"是否自定加载根节点选项"}}},common:{config:{default:{type:"tree-select",label:"默认值",prop:function(t){return t.prop},optionsLinkageFields:function(t){return t.optionsLinkageFields},options:function(t){return t.options}}},data:{isOptions:!0,options:[{id:"a",label:"a",children:[{id:"aa",label:"aa"},{id:"ab",label:"ab"}]},{id:"b",label:"b"},{id:"c",label:"c"}]}}}}},c8a3:function(t,e,a){},c9e6:function(t,e,a){"use strict";a.r(e),e["default"]={type:"dynamic",label:"动态组件",config:{url:"https://github.com/dream2023/vue-ele-form-dynamic",attrs:{config:{columns:{type:"data-editor",label:"列",required:!0,tip:"可以是数组或者对象",attrs:{types:["array","object"]}},rules:{type:"data-editor",label:"校检规则",tip:"当columns为数组时, 则rules必须为对象类型, 指定校检字段, 当columns为对象时, 则rules为数组类型",attrs:{types:["array","object"],rows:10}},delimiter:{type:"input",label:"分割符"}},data:{}},common:{config:{default:{type:"data-editor",label:"默认值",attrs:{types:["array","object"]}}},data:{default:[]}}}}},fe49:function(t,e,a){"use strict";a.r(e);var l=a("71bc");e["default"]={type:"textarea",label:"多行输入框",sort:2,config:{url:"https://element.eleme.cn/#/zh-CN/component/input#wen-ben-yu",attrs:{config:{autoSave:{type:"switch",label:"是否自动保存"},types:{type:"dynamic",label:"数据类型"},placeholder:{type:"input",label:"输入框占位文本",attrs:{clearable:!0}},rows:{type:"number",label:"输入框行",attrs:{min:1}},autosizeType:{type:"radio",label:"自适应内容高度值类型",default:"switch",options:[{text:"自适应",value:"switch"},{text:"最大最小值",value:"data-editor"}]},autosize:{type:function(t){return t.autosizeType},default:function(t){return"switch"!==t.autosizeType&&{minRows:2,maxRows:6}},label:"自适应内容高度配置",attrs:function(t){if("data-editor"===t.autosizeType)return{types:["object"],rows:4}},rules:[{trigger:"blur",validator:function(t,e,a){"object"===Object(l["a"])(e)?e.minRows&&e.maxRows||a("对象必须包含 minRows 和 maxRows"):"boolean"!==typeof e&&a("数据类型不正确")}}]},resize:{type:"select",label:"控制是否能被用户缩放",options:["both","horizontal","vertical"],attrs:{clearable:!0}},showWordLimit:{type:"switch",label:"是否显示输入字数统计",vif:function(t){return t.minlength||t.maxlength}},clearable:{type:"switch",label:"是否可清空"},autofocus:{type:"switch",label:"原生属性，自动获取焦点"},tabindex:{type:"input",label:"输入框的tabindex",attrs:{clearable:!0}},validateEvent:{type:"switch",label:"输入时是否触发表单的校验"}},data:{}}}}}}]);