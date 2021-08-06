/*
 * @Author: h7ml
 * @Date: 2021-03-15 09:07:01
 * @LastEditTime: 2021-03-18 15:18:53
 * @LastEditors: h7ml
 * @FilePath: \dgiot_dashboard\src\config\cdn.config.js
 * @Description:
 */
let staticUrl = {
  css: [
    'https://unpkg.com/ant-design-vue/dist/antd.min.css',
    'https://unpkg.com/iview/dist/styles/iview.css',
    // 'https://unpkg.com/vuetify/dist/vuetify.min.css',
    'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/styles/google.css',
    'https://unpkg.com/mdi/css/materialdesignicons.min.css',
    'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/loading/dots.css',
    'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/loading/gauge.css',
    'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/loading/inner-circles.css',
    'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/loading/plus.css',
    'https://unpkg.com/jsoneditor/dist/jsoneditor.min.css',
    'https://unpkg.com/normalize.css/normalize.css',
    'https://unpkg.com/nprogress/nprogress.css',
    'https://unpkg.com/v-charts/lib/style.min.css',
    'https://unpkg.com/codemirror/lib/codemirror.css',
    'https://unpkg.com/codemirror/addon/lint/lint.css',
    'https://unpkg.com/codemirror/theme/rubyblue.css',
    // 'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/topology-vue/topology-vue.css',
    'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/css/loading.css',
    'https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css"',
    'https://unpkg.com/prismjs/themes/prism-tomorrow.css',
    'https://unpkg.com/vue-prism-editor/dist/prismeditor.min.css',
    'https://unpkg.com/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.min.css',
  ],
  js: [
    'https://unpkg.com/vue/dist/vue.js', // 这里如果使用了min.js 则无法在控制台使用vue-devtools
    'https://unpkg.com/vue-router/dist/vue-router.min.js',
    'https://unpkg.com/vue-i18n/dist/vue-i18n.min.js',
    'https://unpkg.com/cos-js-sdk-v5/dist/cos-js-sdk-v5.min.js',
    'https://unpkg.com/nprogress/nprogress.js',
    'https://unpkg.com/js-md5/build/md5.min.js',
    'https://unpkg.com/ace-builds/src-min/ace.js',
    'https://unpkg.com/ace-builds/src-min/ext-language_tools.js',
    'https://unpkg.com/ace-builds/src-min/mode-json.js',
    'https://unpkg.com/ace-builds/src-min/theme-monokai.js',
    'https://unpkg.com/ace-builds/src-min/mode-erlang.js',
    'https://unpkg.com/ace-builds/src-min/mode-sql.js',
    'https://unpkg.com/ace-builds/src-min/theme-eclipse.js',
    'https://unpkg.com/ace-builds/src-min/mode-json.js',
    'https://unpkg.com/ace-builds/src-min/mode-text.js',
    'https://unpkg.com/ace-builds/src-min/theme-gob.js',
    'https://unpkg.com/ace-builds/src-min/theme-twilight.js',
    'https://unpkg.com/ace-builds/src-min/mode-mysql.js',
    'https://unpkg.com/ace-builds/src-min/mode-python.js',
    'https://unpkg.com/vuedraggable/dist/vuedraggable.umd.min.js',
    'https://unpkg.com/qs/dist/qs.js',
    'https://dgiot-1253666439.cos.ap-shanghai-fsi.myqcloud.com/platform/assets/js/mqttws31.js',
    'https://unpkg.com/konva/konva.min.js',
    'https://unpkg.com/vue-konva/umd/vue-konva.min.js',
    'https://unpkg.com/topology-vue/topology-vue.umd.min.js',
    // 'https://cdn.bootcdn.net/ajax/libs/paho-mqtt/1.1.0/paho-mqtt.js',
    'https://unpkg.com/mockjs/dist/mock.js',
    'https://unpkg.com/js-base64/base64.js',
    'https://unpkg.com/vuex/dist/vuex.min.js',
    'https://unpkg.com/sortablejs/Sortable.min.js',
    'https://unpkg.com/mqtt/dist/mqtt.min.js',
    'https://unpkg.com/jszip/dist/jszip.min.js',
    'https://unpkg.com/jquery/dist/jquery.min.js',
    'https://unpkg.com/echarts/dist/echarts.min.js',
    'https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js',
    'https://cdn.jsdelivr.net/npm/echarts-amap/dist/echarts-amap.min.js',
    'https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js',
    'https://unpkg.com/echarts/theme/macarons.js',
    'https://unpkg.com/dayjs/dayjs.min.js',
    'https://unpkg.com/lodash/lodash.min.js',
    'https://unpkg.com/clipboard/dist/clipboard.min.js',
    'https://unpkg.com/axios/dist/axios.min.js',
    'https://unpkg.com/js-cookie',
    'https://unpkg.com/vue-baidu-map/index.js',
    'https://unpkg.com/moment/min/moment.min.js',
    'https://unpkg.com/v-charts/lib/index.min.js',
    'https://unpkg.com/xlsx/dist/xlsx.min.js',
    'https://unpkg.com/screenfull/dist/screenfull.js',
    'https://unpkg.com/jsplumb/dist/js/jsplumb.min.js',
    'https://unpkg.com/jsencrypt/bin/jsencrypt.min.js',
    'https://unpkg.com/vuedraggable/dist/vuedraggable.umd.min.js',
    'https://unpkg.com/element-china-area-data/dist/app.js',
    'https://unpkg.com/codemirror/lib/codemirror.js',
    'https://unpkg.com/codemirror/mode/javascript/javascript.js',
    'https://unpkg.com/codemirror/addon/lint/json-lint.js',
    'https://unpkg.com/vue-codemirror/dist/vue-codemirror.js',
    'https://unpkg.com/file-saver/dist/FileSaver.min.js',
    'https://map.qq.com/api/js?v=2.exp&key=OXUBZ-TOX3S-HIXO7-6ITJZ-I7X6F-PTF3T',
    'https://s4.cnzz.com/z_stat.php?id=1279876845&web_id=1279876845',
    'https://unpkg.com/vue-amap/dist/index.js',
    'https://unpkg.com/jsoneditor/dist/jsoneditor.min.js',
    'https://dn-bts.bugtags.cn/sdk/bugtags-2.0.2.js',
    'https://unpkg.com/vue-flv-player/dist/vue-flv-player.umd.min.js',
    'https://unpkg.com/ezuikit-js',
    'https://unpkg.com/f-render',
    'https://unpkg.com/vue-ele-form',
    'https://unpkg.com/fuzzy',
    'https://unpkg.com/vue-prism-editor',
    'https://unpkg.com/flv.js/dist/flv.min.js',
    'https://unpkg.com/prismjs/components/prism-clike.min.js',
    'https://unpkg.com/prismjs/components/prism-core.min.js',
    // 'https://unpkg.com/prismjs@1.24.1/components/prism-javascript.min.js',
    'https://unpkg.com/vue-ele-form-dynamic/src/index.js',
    'https://unpkg.com/vue-ele-form-data-editor/src/index.js',
    'https://unpkg.com/vue2-perfect-scrollbar',
    'https://unpkg.com/vue-multipane',
    'https://unpkg.com/ant-design-vue/dist/antd.min.js',
    'https://unpkg.com/iview/dist/iview.min.js',
    'https://unpkg.com/vuetify/dist/vuetify.min.js',
  ],
}
if (process.env.NODE_ENV !== 'development') {
  staticUrl.js[0] = 'https://unpkg.com/vue/dist/vue.min.js'
}

module.exports = { staticUrl }
