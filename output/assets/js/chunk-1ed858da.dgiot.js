/*!
 *  build: 杭州数蛙科技有限公司 
 *  copyright: dgiot-dashboard 
 *  author: h7ml(h7ml@qq.com) 
 *  time: Tue Nov 16 2021 10:43:22 GMT+0000 (Coordinated Universal Time)
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ed858da"],{3941:function(e,t,a){"use strict";a("a1bc")},"3e38":function(e,t,a){"use strict";a("41ca")},"41ca":function(e,t,a){},5098:function(e,t,a){"use strict";a("b608")},"51e6":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"addApp"}},[a("div",{staticClass:"head"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/roles/applicationManagement"}}},[e._v(" "+e._s(e.$translateTitle("application.applicationmanagement"))+" ")]),a("el-breadcrumb-item",[e._v(" "+e._s("update"==e.actionType?"编辑应用":"新增应用")+" ")])],1),a("el-button",{attrs:{plain:"",size:"small",type:"primary"},on:{click:e.handleClickBack}},[e._v(" "+e._s(e.$translateTitle("application.return"))+" ")])],1),a("div",{staticClass:"form"},[a("div",{staticClass:"title"},[a("p",{staticStyle:{color:"#f00"}},[e._v(" "+e._s("*"+e.$translateTitle("application.mustfillin"))+" ")])]),a("el-form",{ref:"form",attrs:{"label-width":"180px",model:e.form}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"工程单位",prop:"department",rules:[{required:!0,message:"工程单位不能为空"}]}},[a("el-input",{attrs:{placeholder:"工程单位"},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.applicationname"),prop:"name",rules:[{required:!0,message:"工程名称不能为空"}]}},[a("el-input",{attrs:{placeholder:e.$translateTitle("application.applicationname"),readonly:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.applicationlink"),prop:"productIdentifier",rules:[{required:!0,message:"工程链接不能为空"}]}},[a("el-select",{attrs:{disabled:"",placeholder:"请选择"},model:{value:e.form.productIdentifier,callback:function(t){e.$set(e.form,"productIdentifier",t)},expression:"form.productIdentifier"}},e._l(e.applicationList,(function(t){return a("el-option",{key:t.id,attrs:{label:e.host+t.desc,value:t.desc}})})),1)],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.industrytype"),prop:"category",rules:[{required:!0,message:"请选择所属行业",trigger:"blur"}]}},[a("el-cascader",{ref:"category",attrs:{clearable:"",options:e.treeData,placeholder:e.$translateTitle("application.industrytype")},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1),a("el-form-item",{attrs:{label:"所属应用",rules:[{required:!0,message:"请选择所属应用",trigger:"blur"}]}},[a("el-input",{attrs:{placeholder:"请选择所属应用"},model:{value:e.form.relationApp,callback:function(t){e.$set(e.form,"relationApp",t)},expression:"form.relationApp"}},[a("template",{slot:"append"},[a("i",{class:[e.showTree?"el-icon-arrow-up":"el-icon-arrow-down"],staticStyle:{cursor:"pointer"},on:{click:function(t){e.showTree=!e.showTree}}})])],2),e.showTree?a("div",[a("el-tree",{attrs:{data:e.allApps,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1):e._e()],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.applicationdescription")}},[a("el-input",{attrs:{maxlength:"300",placeholder:e.$translateTitle("application.applicationdescription"),rows:4,"show-word-limit":"",type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1)]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:e.$translateTitle("application.applicationpictures")}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/upload","auto-upload":!1,"file-list":e.form.fileList,limit:1,"list-type":"picture","on-success":e.handleSuccess}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v(" "+e._s(e.$translateTitle("application.selectfile"))+" ")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload}},[e._v(" "+e._s(e.$translateTitle("application.uploadtoserver"))+" ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.form.img,expression:"form.img != ''"}]},[e._v(" "+e._s(e.$translateTitle("developer.path"))+":"+e._s(e.form.img)+" ")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" "+e._s(e.$translateTitle("application.onlyJPG/PNGfilescanbeuploadedandnomorethan500kb"))+" ")])],1)],1),a("el-form-item",{attrs:{label:"背景图片"}},[a("el-upload",{ref:"upload1",staticClass:"upload-demo",attrs:{action:"/upload","auto-upload":!1,"file-list":e.form.fileList1,limit:1,"list-type":"picture","on-success":e.handleSuccess1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v(" "+e._s(e.$translateTitle("application.selectfile"))+" ")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success"},on:{click:e.submitUpload1}},[e._v(" "+e._s(e.$translateTitle("application.uploadtoserver"))+" ")]),a("span",{directives:[{name:"show",rawName:"v-show",value:""!=e.form.img1,expression:"form.img1 != ''"}]},[e._v(" "+e._s(e.$translateTitle("developer.path"))+":"+e._s(e.form.img1)+" ")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v(" "+e._s(e.$translateTitle("application.onlyJPG/PNGfilescanbeuploadedandnomorethan500kb"))+" ")])],1)],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.copyrightinformation")}},[a("el-input",{attrs:{maxlength:"300",placeholder:e.$translateTitle("application.copyrightinformation"),rows:3,"show-word-limit":"",type:"textarea"},model:{value:e.form.copyright,callback:function(t){e.$set(e.form,"copyright",t)},expression:"form.copyright"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.monitoringpanel")}},[a("el-input",{attrs:{placeholder:e.$translateTitle("application.monitoringpanel")},model:{value:e.form.dashboard,callback:function(t){e.$set(e.form,"dashboard",t)},expression:"form.dashboard"}},[a("template",{slot:"prepend"},[e._v("http://")]),a("el-button",{staticStyle:{color:"#ffffff",background:"#409eff","border-radius":"1px 1px 1px 0"},attrs:{slot:"append",type:"primary"},on:{click:e.open12},slot:"append"},[e._v(" "+e._s(e.$translateTitle("application.preview"))+" ")])],2)],1)],1)])],1),a("el-divider",[a("b",[e._v(e._s(e.$translateTitle("application.applicationconfiguration")))])]),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:e.$translateTitle("application.applicationaccessscale"),prop:"scale",rules:[{required:!0,message:"请选择工程接入规模",trigger:"change"}]}},[a("el-select",{attrs:{clearable:""},model:{value:e.form.scale,callback:function(t){e.$set(e.form,"scale",e._n(t))},expression:"form.scale"}},e._l(e.form.scaleDate,(function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})})),1)],1)],1)])],1)],1),a("div",{staticClass:"btns"},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:"add"==e.actionType,expression:"actionType == 'add'"}],attrs:{type:"primary"},on:{click:e.handleClickSubmit}},[e._v(" "+e._s(e.$translateTitle("application.submission"))+" ")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"update"==e.actionType,expression:"actionType == 'update'"}],attrs:{type:"primary"},on:{click:e.handleClickUpdate}},[e._v(" 更新 ")])],1)],1)])},i=[],o=a("fb07"),l=a("e97b"),n=a("d0d7"),s=a.n(n),c=(a("04d6"),a("a0e0"),a("3dec"),a("d6a4"),a("16b8"),a("1d17"),a("4c87"),a("1c6f"),a("c4bc"),a("5880")),p=a("e0e9"),d=a("ed08"),u=a("58dd"),m=a("7212"),f=a("5dca"),h={data:function(){return{imageUrl:!1,host:window.location.origin+"/lot/",applicationList:[],form:{name:"",options:[],category:[],relationApp:"",number:"",code:"",scale:"",dashboard:"",product:[],department:"",scaleDate:[{id:0,value:100,label:"100"},{id:1,value:1e3,label:"1000"},{id:2,value:1e4,label:"1万"},{id:3,value:1e5,label:"10万"},{id:4,value:1e6,label:"100万"},{id:5,value:1e7,label:"1000万"},{id:6,value:1e8,label:"1亿"}],productIdentifier:"",fileList:[],fileList1:[],img:"",img1:"",copyright:"",desc:"",time:7200,secret:""},sessionToken:"",file:"",actionType:"",relationAppObjectId:"",content:{title:"",objectId:""},argu:{},Notification:"",showTree:!1,allApps:[],defaultProps:{children:"children",label:"label"},productlist:[]}},computed:Object(l["a"])(Object(l["a"])({},Object(c["mapGetters"])({roleTree:"user/roleTree"})),{},{treeData:function(){var e=JSON.parse(JSON.stringify(this.form.options));return e.filter((function(t){var a=e.filter((function(e){return t.id==e.parentid}));return a.length>0&&(t.children=a),0==t.parentid}))},applicationData:function(){return[]}}),created:function(){this.Industry(),this.randomSecret(),this.getProductList()},mounted:function(){this.initData()},beforeDestroy:function(){this.Notification&&this.Notification.close()},methods:{handleClickRefresh:function(){this.randomSecret()},onApplicationchange:function(e){},getProductList:function(e){var t=this;this.$query_object("Product",{}).then((function(e){e.results&&(t.productlist=e.results)}))},randomSecret:function(){var e=Math.ceil(25*Math.random());this.form.secret=Base64.encode(String.fromCharCode(65+e)+Math.ceil(1e7*Math.random())+Number(new Date))},initData:function(){var e=this;return Object(o["a"])(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.argu=e.$route.query,e.content.title=e.argu.title,e.actionType=e.argu.actionType,t.next=5,Object(u["app_count"])({limit:100,where:{}});case 5:a=t.sent,r=a.results,r&&(e.applicationList=r,"update"==e.actionType?(e.form.name=e.argu.name,e.form.scale=Number(Object(d["handleZero"])(e.argu.scale)),e.form.secret=e.argu.secret,e.form.productIdentifier=e.argu.productIdentifier,e.content.objectId=e.argu.objectId,e.form.department=e.argu.userUnit,e.form.desc=e.argu.desc,e.form.copyright=e.argu.copyright,e.argu.category&&(e.form.category=e.argu.category.split("/")),e.argu.dashboard?e.form.dashboard=e.argu.dashboard.substr(7):e.form.dashboard="",""!=e.argu.logo&&(e.form.img=e.argu.logo,e.form.fileList.push({name:"logo.png",url:e.argu.logo})),""!=e.argu.background&&(e.form.img1=e.argu.background,e.form.fileList1.push({name:"background.png",url:e.argu.background})),e.form.relationApp=e.argu.name):(e.relationAppObjectId=e.$route.query.appObjectId,e.form.relationApp=e.$route.query.name,e.form.productIdentifier=e.$route.query.desc,e.form.name=e.$route.query.desc));case 8:case"end":return t.stop()}}),t)})))()},handleClickBack:function(){this.$router.push({path:"/roles/applicationManagement"})},submitUpload:function(){this.$refs.upload.submit()},handleChangeFile:function(e){var t=e.target.files[0],a=t.name.substr(-3);t.size/1024>500?this.$message("上传图片大小不能超过500KB!"):"png"!=a&&"jpg"!=a?this.$message("上传图片格式不正确，必须是png或jpg格式！"):this.file=t},handleSuccess:function(e,t,a){this.form.img=e.path,this.$message({message:"上传成功！",type:"success"}),document.getElementsByClassName("el-icon-close")[0].setAttribute("display","none")},handleError:function(e,t,a){this.$message({message:"上传失败！",type:"error"})},isSubmit:function(){return""!=this.form.name&&""!=this.form.scale&&""!=this.form.productIdentifier||(this.$message("有必填项没有填写，无法提交！"),!1)},handleSuccess1:function(e,t,a){this.form.img1=e.path,this.$message({message:"上传成功！",type:"success"}),document.getElementsByClassName("el-icon-close")[0].setAttribute("display","none")},submitUpload1:function(){this.$refs.upload1.submit()},handleClickSubmit:function(){var e=this;return Object(o["a"])(s.a.mark((function t(){var a,r,i,o,l;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmit()){t.next=2;break}return t.abrupt("return");case 2:return a="role:"+e.form.relationApp,r={},r[a]={read:!0,write:!0},i={ACL:r,title:e.form.name,category:e.form.category.join("/"),scale:e.form.scale,productIdentifier:e.form.productIdentifier,copyright:e.form.copyright,desc:e.form.desc,logo:e.form.img,background:e.form.img1,userUnit:e.form.department,dashboard:""},""!=e.form.dashboard?i.dashboard="http://"+e.form.dashboard:i.dashboard="",t.next=9,Object(m["postProduct"])(i);case 9:o=t.sent,l=o.objectId,l&&e.addRelation(res.objectId,e.relationAppObjectId);case 12:case"end":return t.stop()}}),t)})))()},addRelation:function(e,t){var a=this;return Object(o["a"])(s.a.mark((function r(){var i;return s.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(f["postRelation"])({destClass:"Project",destId:e,destField:"app",srcClass:"App",srcId:t});case 2:i=r.sent,i?(a.$message({message:"添加部署成功！",type:"success"}),a.$router.push({path:"/roles/projectManagement"})):a.$message("部署失敗");case 4:case"end":return r.stop()}}),r)})))()},handleClickUpdate:function(){var e=this;return Object(o["a"])(s.a.mark((function t(){var a,r,i,o;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.isSubmit()){t.next=2;break}return t.abrupt("return");case 2:return a="role:"+e.form.relationApp,r={},r[a]={read:!0,write:!0},i={ACL:r,title:e.form.name,category:e.form.category.join("/"),scale:e.form.scale,productIdentifier:e.form.productIdentifier,copyright:e.form.copyright,desc:e.form.desc,logo:e.form.img,background:e.form.img1,userUnit:e.form.department,dashboard:""},""!=e.form.dashboard?i.dashboard="http://"+e.form.dashboard:i.dashboard="",t.next=9,Object(m["putProduct"])(e.argu.objectId,i);case 9:o=t.sent,o&&(e.$message({message:"修改成功！",type:"success"}),e.$router.push({path:"/roles/projectManagement"}));case 11:case"end":return t.stop()}}),t)})))()},handleNodeClick:function(e){this.showTree=!this.showTree,this.addchannel.applicationtText=e.name},Industry:function(){var e=this;return Object(o["a"])(s.a.mark((function t(){var a,r;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.allApps=e.roleTree,e.form.options=[],t.next=4,Object(p["queryDict"])({limit:1e3,where:{"data.key":"category"}});case 4:a=t.sent,a&&(r=a.results,r.map((function(t){var a={};a.value=t.data.CategoryName,a.label=t.data.CategoryName,a.id=t.data.Id,a.parentid=t.data.SuperId,e.form.options.push(a)})));case 6:case"end":return t.stop()}}),t)})))()},open12:function(){this.Notification=this.$notify({title:"面板预览",dangerouslyUseHTMLString:!0,duration:0,type:"success",message:'<div><iframe\n              src="http://'.concat(this.form.dashboard,'"\n              width="1000"\n              height="400"\n              frameborder="0"\n    ></iframe></div>')})}}},g=h,b=(a("eac83"),a("3e38"),a("bdd7")),v=Object(b["a"])(g,r,i,!1,null,"3b8e6dca",null);t["default"]=v.exports},a1bc:function(e,t,a){},a4f9:function(e,t,a){},b608:function(e,t,a){},dc8a:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"application dgiot-container"},[a("div",{staticClass:"addApplication"}),a("div",{staticClass:"appcontent",staticStyle:{position:"relative",display:"flex","flex-direction":"column","align-items":"center"}},[e._l(e.appdata,(function(t,r){return a("el-card",{key:r,staticClass:"box-card",staticStyle:{width:"80%","margin-bottom":"10px",border:"1px solid #cccccc"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("i",{staticClass:"iconfont icon-yingyong",staticStyle:{color:"#666666"}}),a("p",[e._v(e._s(t.name))])])]),a("el-col",{attrs:{span:16}},[a("div",{staticClass:"grid-content bg-purple"},[a("dl",[a("dt",[e._v(" "+e._s(e.$translateTitle("product.appid"))+" "),a("el-tooltip",{attrs:{content:e.$translateTitle("product.TheonlyapplicationIDintheSDKcallingprocess"),placement:"bottom"}},[a("i",{staticClass:"el-icon-question"})])],1),a("dd",[e._v(e._s(t.objectId))]),a("dt",[e._v(" "+e._s(e.$translateTitle("product.appsecret"))+" "),a("el-tooltip",{attrs:{content:e.$translateTitle("product.aaab"),placement:"bottom"}},[a("i",{staticClass:"el-icon-question"})])],1),t.isshow?a("dd",[e._v(" "+e._s(t.tag.appconfig.secret)+" ")]):e._e(),t.isshow?e._e():a("dd",[t.tag.appconfig.secret?a("i",[e._v(" "+e._s(t.tag.appconfig.secret.substr(0,4)+"********************"+t.tag.appconfig.secret.substr(24))+" "),a("el-button",{staticStyle:{position:"absolute",top:"30px","margin-left":"10px"},attrs:{round:"",size:"samll"},on:{click:function(a){return e.xianshi(t.objectId)}}},[e._v(" "+e._s(e.$translateTitle("product.fullkey"))+" ")])],1):e._e()]),a("dt",[e._v(" "+e._s(e.$translateTitle("task.Applicationname"))+" "),a("i",{staticClass:"el-icon-s-promotion"})]),t.name?a("dd",[e._v(" "+e._s(t.name)+" ")]):a("dd",[e._v("-")])])])]),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple"},[a("p",{staticClass:"editor"},[a("strong",[e._v(" "+e._s(e.$translateTitle("task.Operation")+":")+" ")])]),a("p",{staticClass:"editor"},[a("el-link",{attrs:{type:"primary"},nativeOn:{click:function(a){return e.updateapp(t)}}},[e._v(" "+e._s(e.$translateTitle("developer.Modifyapplication"))+" ")])],1),a("p",{staticClass:"editor"},[a("el-link",{attrs:{type:"primary"},nativeOn:{click:function(a){return e.nodeDeployment(t)}}},[e._v(" "+e._s(e.$translateTitle("developer.Nodedeployment"))+" ")])],1),a("p",{staticClass:"editor"},[a("el-link",{attrs:{type:"primary"},nativeOn:{click:function(a){return e.applicationDeployment(t)}}},[e._v(" "+e._s(e.$translateTitle("developer.Applicationdeployment"))+" ")])],1)])])],1)],1)})),a("el-pagination",{attrs:{layout:"total, sizes, prev, pager, next, jumper","page-size":e.pagesize,"page-sizes":[1,5,10],total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],2),a("el-dialog",{attrs:{"append-to-body":!0,"close-on-click-modal":!1,title:e.$translateTitle("developer.addapp"),visible:e.dialogVisible,width:"55%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"block",attrs:{"element-loading-background":"rgba(0, 0, 0, 0.8)","element-loading-spinner":"el-icon-loading","element-loading-text":e.$translateTitle("developer.Waitingtoreturn")}},[a("el-form",{ref:"form",attrs:{"label-width":"120px",model:e.form,rules:e.Rule}},[a("el-form-item",{attrs:{label:e.$translateTitle("application.applicationname"),prop:"desc"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.$translateTitle("application.applicationname")},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.tokeneffectivetime")}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enterapptime"),type:"number"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v(" "+e._s(e.$translateTitle("application.seconds"))+" ")])],1),a("el-form-item",{attrs:{label:e.$translateTitle("product.Wordpreviewserver")}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.$translateTitle("product.Wordpreviewserver")},model:{value:e.form.wordpreview,callback:function(t){e.$set(e.form,"wordpreview",t)},expression:"form.wordpreview"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("product.Wordproductionserver")}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.$translateTitle("product.Wordproductionserver")},model:{value:e.form.wordproduct,callback:function(t){e.$set(e.form,"wordproduct",t)},expression:"form.wordproduct"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.fileresources"),prop:"file"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.url},model:{value:e.form.file,callback:function(t){e.$set(e.form,"file",t)},expression:"form.file"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.Configurationresources"),prop:"topo"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:"$translateTitle('product.enter1') + url"},model:{value:e.form.topo,callback:function(t){e.$set(e.form,"topo",t)},expression:"form.topo"}})],1),a("el-form-item",{attrs:{label:"Graphql API",prop:"graphql"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:"$translateTitle('product.enter1') + url"},model:{value:e.form.graphql,callback:function(t){e.$set(e.form,"graphql",t)},expression:"form.graphql"}})],1),a("el-form-item",{attrs:{label:"Restful API",prop:"rest"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:"$translateTitle('product.enter1') + url"},model:{value:e.form.rest,callback:function(t){e.$set(e.form,"rest",t)},expression:"form.rest"}})],1),a("el-form-item",{attrs:{label:"home"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.$translateTitle("developer.path")},model:{value:e.form.home,callback:function(t){e.$set(e.form,"home",t)},expression:"form.home"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v(" "+e._s(e.$translateTitle("developer.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.Define("form")}}},[e._v(" "+e._s(e.$translateTitle("developer.determine"))+" ")])],1)]),a("el-dialog",{attrs:{"append-to-body":!0,"close-on-click-modal":!1,title:e.$translateTitle("product.modify")+e.$translateTitle("product.Applicationinformation"),visible:e.update,width:"55%"},on:{"update:visible":function(t){e.update=t}}},[a("div",{staticClass:"block"},[a("el-form",{ref:"form1",attrs:{"label-width":"170px",model:e.form1,rules:e.Rule}},[a("el-form-item",{attrs:{label:e.$translateTitle("application.Accesskey")}},[a("el-input",{staticStyle:{width:"80%"},attrs:{readonly:""},model:{value:e.form1.secret,callback:function(t){e.$set(e.form1,"secret",t)},expression:"form1.secret"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-refresh-right"},on:{click:e.handleClickRefresh},slot:"append"})],1)],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.tokeneffectivetime")}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enterapptime"),type:"number"},model:{value:e.form1.time,callback:function(t){e.$set(e.form1,"time",t)},expression:"form1.time"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v(" "+e._s(e.$translateTitle("task.Seconds"))+" ")])],1),a("el-form-item",{attrs:{label:e.$translateTitle("product.Wordpreviewserver")}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.$translateTitle("product.Wordpreviewserver")},model:{value:e.form1.wordpreview,callback:function(t){e.$set(e.form1,"wordpreview",t)},expression:"form1.wordpreview"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("product.Wordproductionserver")}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.$translateTitle("product.Wordproductionserver")},model:{value:e.form1.wordproduct,callback:function(t){e.$set(e.form1,"wordproduct",t)},expression:"form1.wordproduct"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.fileresources"),prop:"file"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:"$translateTitle('product.enter1') + url"},model:{value:e.form1.file,callback:function(t){e.$set(e.form1,"file",t)},expression:"form1.file"}})],1),a("el-form-item",{attrs:{label:e.$translateTitle("application.Configurationresources"),prop:"topo"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:"$translateTitle('product.enter1') + url"},model:{value:e.form1.topo,callback:function(t){e.$set(e.form1,"topo",t)},expression:"form1.topo"}})],1),a("el-form-item",{attrs:{label:"Graphql API",prop:"graphql"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:"$translateTitle('product.enter1') + url"},model:{value:e.form1.graphql,callback:function(t){e.$set(e.form1,"graphql",t)},expression:"form1.graphql"}})],1),a("el-form-item",{attrs:{label:"Restful API",prop:"rest"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:"$translateTitle('product.enter1') + url"},model:{value:e.form1.rest,callback:function(t){e.$set(e.form1,"rest",t)},expression:"form1.rest"}})],1),a("el-form-item",{attrs:{label:"home"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{placheholder:e.$translateTitle("product.enter1")+e.$translateTitle("developer.path")},model:{value:e.form1.home,callback:function(t){e.$set(e.form1,"home",t)},expression:"form1.home"}})],1)],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.update=!1}}},[e._v(" "+e._s(e.$translateTitle("developer.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.updatedDefine("form1")}}},[e._v(" "+e._s(e.$translateTitle("developer.determine"))+" ")])],1)])],1)},i=[],o=a("fb07"),l=a("d0d7"),n=a.n(l),s=(a("1d17"),a("37c6"),a("d6a4"),a("c4bc"),a("16b8"),a("5da95")),c=a("f43e").Base64,p={data:function(){var e=function(e,t,a){var r=/^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;""===t||null===t?a(new Error("请输入url地址")):r.test(t)?a():a(new Error("请输入正确的url地址"))};return{total:0,pagesize:10,start:0,update:!1,form1:{name:"",product:"",time:"",file:"",graphql:"",rest:"",topo:"",secret:"",desc:"",home:"",wordpreview:"http://pump.iotn2n.com:8012",wordproduct:"http://pump.iotn2n.com"},dialogVisible:!1,form:{name:"",product:"",time:"18000",file:"http://file.iotn2n.com/shapes/upload",graphql:"http://cad.iotn2n.com:5080/graphql",rest:"http://cad.iotn2n.com:5080/iotapi",topo:"http://shapes.iotn2n.com/",secret:"",home:"D:/shuwa/shuwa_data_center",wordpreview:"http://pump.iotn2n.com:8012",wordproduct:"http://pump.iotn2n.com/"},Rule:{desc:[{required:!0,message:"请输入应用名称",trigger:"blur"},{validator:function(e,t,a){0===t.length?a(new Error("应用名称不能为空")):a()}}],file:[{trigger:"blur",validator:e}],topo:[{trigger:"blur",validator:e}],graphql:[{trigger:"blur",validator:e}],rest:[{trigger:"blur",validator:e}]},appdata:[],objectid:"",selectapp:[],arr:[],loading:!1}},created:function(){},mounted:function(){this.getAppdetail(this.pagesize,this.start),this.$route.query&&this.$route.query.projectName&&(this.dialogVisible=!0,this.form.desc=this.$route.query.projectName)},methods:{Define:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.submit()}))},submit:function(){this.loading=!0;var e=Math.ceil(25*Math.random());c.encode(String.fromCharCode(65+e)+Math.ceil(1e7*Math.random())+Number(new Date)),this.form.file,this.form.graphql,this.form.rest,this.form.topo,this.form.home},getAppdetail:function(e,t){var a=this;return Object(o["a"])(n.a.mark((function r(){var i;return n.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:i={skip:t,limit:e,keys:"tag,name,desc,count(*)",order:"updatedAt"},Object(s["queryRole"])(i).then((function(e){a.appdata=e.results,a.appdata.map((function(e){e.tag.appconfig.secret&&(e.isshow=!1)})),a.total=e.count})).catch((function(e){}));case 2:case"end":return r.stop()}}),r)})))()},handleClickRefresh:function(){this.randomSecret()},randomSecret:function(){var e=Math.ceil(25*Math.random());this.form1.secret=c.encode(String.fromCharCode(65+e)+Math.ceil(1e7*Math.random())+Number(new Date))},handleSizeChange:function(e){this.pagesize=e,this.getAppdetail(this.pagesize,this.start)},handleCurrentChange:function(e){this.start=Number(e-1)*Number(this.pagesize),this.getAppdetail(this.pagesize,this.start)},updateapp:function(e){this.update=!0,this.form1.objectId=e.objectId,this.form1.time=e.tag.appconfig.expires,this.form1.file=e.tag.appconfig.file,this.form1.rest=e.tag.appconfig.rest,this.form1.topo=e.tag.appconfig.topo,this.form1.graphql=e.tag.appconfig.graphql,this.form1.home=e.tag.appconfig.home,this.form1.secret=e.tag.appconfig.secret,this.form1.desc=e.tag.appconfig.desc},updatedDefine:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.updateObj(t.form1.objectId)}))},updateObj:function(e){var t=this;return Object(o["a"])(n.a.mark((function a(){var r,i;return n.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r={expires:t.form1.time,file:t.form1.file,graphql:t.form1.graphql,rest:t.form1.rest,topo:t.form1.topo,home:t.form1.home,secret:t.form1.secret,wordpreview:t.form1.home,wordproduct:t.form1.secret},i={appconfig:{}},i.appconfig=r,a.next=5,Object(s["putRole"])(e,i).then((function(e){t.$message({type:"success",message:"应用修改成功"}),t.getAppdetail(10,0),t.update=!1})).catch((function(e){t.$message({type:"error",message:"应用修改失败"+e.error})}));case 5:case"end":return a.stop()}}),a)})))()},nodeDeployment:function(e){this.$router.push({path:"/roles/server_control",query:{appid:e.objectId,appsecret:e.tag.appconfig.secret}})},applicationDeployment:function(e){this.$router.push({path:"/applicationManagement/addApp",query:{actionType:"add",title:"新增应用",appObjectId:e.objectId,desc:e.desc,name:e.name}})},xianshi:function(e){for(var t,a=0;a<this.appdata.length;a++)this.appdata[a].objectId==e&&(t=this.appdata[a],this.appdata[a].isshow=!0,this.$set(this.appdata,a,t))}}},d=p,u=(a("5098"),a("faf2"),a("bdd7")),m=Object(u["a"])(d,r,i,!1,null,"bf28a7fa",null);t["default"]=m.exports},eac83:function(e,t,a){"use strict";a("f94e1")},f7ea:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"application dgiot-container"}},[a("vab-query-form-top-panel",[a("el-form",{ref:"form",attrs:{inline:!0,"label-width":"0"}},[a("el-form-item",[a("el-input",{attrs:{placeholder:e.$translateTitle("application.applicationname"),size:"mini"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return e.getAppMange(0)}}},[e._v(" "+e._s(e.$translateTitle("application.search"))+" ")])],1)],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"cell-style":{"text-align":"center"},data:e.tableData,"header-cell-style":{"text-align":"center"},height:e.tableHeight}},[a("el-table-column",{attrs:{label:e.$translateTitle("application.applicationidentification"),prop:"productIdentifier"}}),a("el-table-column",{attrs:{label:e.$translateTitle("application.applicationname"),prop:"title"}}),a("el-table-column",{attrs:{label:e.$translateTitle("developer.Applicationunit"),prop:"userUnit"}}),a("el-table-column",{attrs:{label:e.$translateTitle("application.scaleofservice"),prop:"scale",sortable:""}}),a("el-table-column",{attrs:{label:e.$translateTitle("application.industrytype"),prop:"category"}}),a("el-table-column",{attrs:{label:e.$translateTitle("application.createtime"),prop:"creation_time"}}),a("el-table-column",{attrs:{flex:"right",label:e.$translateTitle("developer.operation"),prop:"operation",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-popover",{ref:"popover-"+e.scope.$index,attrs:{placement:"top",width:"300"}},[a("p",[e._v(" "+e._s(e.$translateTitle("product.qdsczg"))+e._s(r.name)+e._s(e.$translateTitle("equipment.yym"))+" ")]),a("div",{staticStyle:{margin:"0","text-align":"right"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(t){e.scope._self.$refs["popover-"+e.scope.$index].doClose()}}},[e._v(" "+e._s(e.$translateTitle("developer.cancel"))+" ")]),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.makeSure(e.scope)}}},[e._v(" "+e._s(e.$translateTitle("developer.determine"))+" ")])],1),a("el-link",{attrs:{slot:"reference",icon:"el-icon-delete",type:"danger",underline:!1},slot:"reference"},[e._v(" "+e._s(e.$translateTitle("developer.delete"))+" ")])],1),a("el-button",{attrs:{icon:"el-icon-edit",size:"small",type:"text"},on:{click:function(t){return e.handleClickUpdate(e.scope)}}},[e._v(" "+e._s(e.$translateTitle("developer.edit"))+" ")]),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(t){return e.Gotoproduct(e.scope)}}},[a("i",{staticClass:"el-icon-s-management"}),e._v(" "+e._s(e.$translateTitle("leftbar.management"))+" ")]),a("el-link",{attrs:{type:"primary",underline:!1},on:{click:function(t){return e.applicationDeployment(r)}}},[e._v(" "+e._s(e.$translateTitle("developer.deploy"))+" ")])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.page.currentPage,layout:"total, sizes, prev, pager, next, jumper","page-size":e.page.pageSize,"page-sizes":e.page.pageSizes,total:e.page.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1)},i=[],o=(a("16b8"),a("80ab"),a("a98c"),a("f1e1"),a("1285")),l=a("7212"),n=a("ed08"),s=a("1c4e"),c={data:function(){return{tableHeight:this.$baseTableHeight(0),label:"我的应用",activeName:"app",dialogVisible:!1,name:"",page:{currentPage:0,pageSizes:[10,20,30],pageSize:10,total:0},description:"暂无数据",tableData:[],isShow:!1,arr:[]}},created:function(){this.getAppMange()},methods:{handleClickVisit:function(e){var t=e.$index,a=this.tableData[t].productIdentifier,r=window.location.origin+"/iot/"+a+"#/login";window.open(r,"__blank")},getAppMange:function(e){var t=this;0==e&&(this.page.currentPage=0),this.tableData=[];var a={};this.name&&(a.title=this.name),Object(s["getProject"])({limit:this.page.pageSize,skip:this.page.currentPage,count:"objectId",where:a}).then((function(e){var a=e.results;t.label="我的应用(".concat(e.count,")"),t.description="获取".concat(a.length,"条数据"),t.page.total=e.count;for(var r=0;r<a.length;r++){var i={};i.name=a[r].title,i.objectId=a[r].objectId,i.productIdentifier=a[r].productIdentifier,i.scale=Object(s["handleZero"])(a[r].scale),i.creation_time=Object(n["utc2beijing"])(a[r].createdAt),i.end_time=Object(n["utc2beijing"])(a[r].updatedAt),i.category=a[r].category,i.secret=a[r].secret,i.logo=a[r].logo,i.title=a[r].title,i.userUnit=a[r].userUnit,i.dashboard=a[r].dashboard,i.background=a[r].background,i.acl=a[r].ACL,i.desc=a[r].desc,i.copyright=a[r].copyright,t.tableData.push(i)}}))},handleSizeChange:function(e){this.page.pageSize=e,this.getAppMange()},handleCurrentChange:function(e){this.page.currentPage=(e-1)*this.page.pageSize,this.getAppMange()},handleClickLook:function(e){e.$index;var t='\n          <table\n              class="mailtable"\n              style="width:100%;"\n              border="0"\n              cellspacing="0"\n              cellpadding="0"\n            >\n              <tr>\n                  <td style="text-align:left;\n                  color: #74777a;\n                  font-weight: 400;\n                  background: #fafafc;\n                  width:200px;\n                  font-weight:bold;">App Id:</td>\n                  <td>'.concat(row.objectId,'</td>\n              </tr>\n              <tr ">\n                   <td style="color: #74777a;\n                  font-weight: 400;\n                  background: #fafafc;\n                  width:200px;\n                  padding-top:20px;\n                  font-weight:bold;">App Secret:\n                  </td>\n                  <td style="padding-top:20px;">').concat(row.secret,"</td>\n              </tr>\n              </table>\n          ");this.$alert(t,"应用详情",{dangerouslyUseHTMLString:!0})},handleClickUpdate:function(e){var t=e.row;this.$router.push({path:"/applicationManagement/addApp",query:{actionType:"update",title:"修改应用",name:t.name,scale:t.scale,creation_time:t.creation_time,end_time:t.end_time,category:t.category,productIdentifier:t.productIdentifier,secret:t.secret,objectId:t.objectId,logo:t.logo,userUnit:t.userUnit,dashboard:t.dashboard,background:t.background,desc:t.desc,copyright:t.copyright}})},makeSure:function(e){var t=this,a={count:"objectId",skip:0,limit:1,where:{product:row.objectId}};Object(o["queryDevice"])(a).then((function(a){a.count>0?t.$message("请先删除该产品下设备"):Object(l["getProduct"])(row.objectId).then((function(a){Object(l["delProduct"])(row.objectId).then((function(a){a&&(t.$message({type:"success",message:"删除成功"}),e._self.$refs["popover-".concat(e.$index)].doClose(),t.getAppMange())})).catch((function(e){}))})).catch((function(e){}))})).catch((function(e){}))},Gotoproduct:function(e){var t=[];for(var a in row.acl)t.push(a.substring(5));this.$store.dispatch("setProjectRole",t),this.$router.push({path:"/roles/product",query:{project:row.objectId}})},serverlictool:function(e){this.$router.push({path:"/roles/server_control",query:{appid:e.objectId,appsecret:e.secret}})},applicationDeployment:function(e){var t=this;e.name?Object(s["setUpLictool"])(e.name).then((function(e){e&&t.$message("正在部署中")})).catch((function(e){t.$message(e)})):this.$message("没有应用名")}}},p=c,d=(a("3941"),a("bdd7")),u=Object(d["a"])(p,r,i,!1,null,"09440c17",null);t["default"]=u.exports},f94e1:function(e,t,a){},faf2:function(e,t,a){"use strict";a("a4f9")}}]);