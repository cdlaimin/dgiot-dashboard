import canvas from '@/utils/konva/core/canvas'
import addNodeEvent from '@/utils/konva/common'
import { parseQueryString } from '@/utils'
let info = {
  tagevent: [],
  tag: [],
  evidence: [],
}
/**
 * @description 组态Stage公共函数
 * @type {{handleChildren(*=): void}}
 */
const topoStage = {
  handleChildren(args) {
    const { layer } = canvas
    info['handleArray'] = args
    const { stage } = args
    stage.find('Star').forEach((node) => {
      info['Star'] = stage.find('Star')
      node.setAttrs({
        x: 5,
        fill: 'red',
      })
      const bgSrc = node.getAttr('src').includes('//')
        ? node.getAttr('src')
        : Cookies.get('fileServer') + node.getAttr('src').includes('//')
      localStorage.setItem('konvaBg', bgSrc)
      // node.destroy()
      canvas.bgNode = node
      addNodeEvent({
        type: 'bgMoveToBottom',
        bgNode: node,
        layer: args.layer,
        stage: args.stage,
      })
    })
    stage.find('Label').forEach((node) => {
      info['Label'] = stage.find('Label')
      if (node.getAttr('name') == 'thing') {
        const nodeTags = node.getChildren()
        nodeTags.forEach((tag) => {
          info['tag'].push(tag)
          const event = tag.getAttr('name')
          node.on('mouseover', function (e) {
            document.body.style.cursor = 'pointer'
          })
          node.on('mouseout', function (e) {
            document.body.style.cursor = 'default'
          })
          node.on('contextmenu', (e) => {
            canvas.contextmenu = e.target
            dgiotlog.log('contextmenu', e.target)
          })
          tag.on('click', (e) => {
            dgiotlog.log(e)
            canvas.clickItem = e.target
            canvas.contextmenu = e.target
            dgiotlog.log('tag click', e.target.attrs)
          })
          if (event) {
            info.tagevent.push({
              tag: tag,
              event: event,
              name: tag.getAttr('name'),
            })
            addNodeEvent({
              type: node.getAttr('name'),
              event: `${event}`,
              node: node,
            })
          }
        })
      }
    })
    stage.find('Text').forEach((node) => {
      info['Text'] = stage.find('Text')
      if (node.getAttr('hidden') === true) node.hide()
      // node.setAttrs({
      //   scaleX: args.saleInfo.scaleX,
      //   scaleY: args.saleInfo.scaleY,
      // })
      node.on('contextmenu', (e) => {
        canvas.contextmenu = e.target
        dgiotlog.log('contextmenu', e.target)
      })
      node.on('click', (e) => {
        canvas.contextmenu = {}
        canvas.clickItem = e.target
        dgiotlog.log('click', e.target.attrs)
      })
      node.on('mouseover', function (e) {
        document.body.style.cursor = 'pointer'
      })
      node.on('mouseout', function (e) {
        document.body.style.cursor = 'default'
      })
    })
    stage.find('Path').forEach((node) => {
      info['Path'] = stage.find('Path')

      if (node.getAttr('name') == 'evidence') {
        if (location.href.includes('preview')) {
          node.setAttrs({
            draggable: false,
          })
          const urlObj = new parseQueryString(location.href)
          if (urlObj.step == 3)
            node.setAttrs({
              fill: 'yellow',
            })
        }

        // canvas.layer.batchDraw()
        // canvas.stage.batchDraw()

        info['evidence'].push(node)
        addNodeEvent({
          type: node.getAttr('name'),
          node: node,
        })
      }
      // node.setAttrs({
      //   scaleX: args.saleInfo.scaleX,
      //   scaleY: args.saleInfo.scaleY,
      // })
      // 定义事件监听
      // node.on('mouseover', function(e) {
      //   dgiotlog.log('鼠标mouseover')
      //   layer.draw()
      // })
      // node.on('mouseout', function() {
      //   dgiotlog.log('鼠标mouseout')
      //   layer.draw()
      // })
      // node.on('mousedown', function(e){
      //   dgiotlog.log('mousedown',e)
      //   layer.draw()
      // })
      // node.on('mouseup', function(e) {
      //   dgiotlog.log('鼠标移出星',e)
      //   layer.draw()
      // })
      // node.on('contextmenu',e=>{
      //   canvas.contextmenu = e.target
      //   dgiotlog.log('contextmenu',e.target)
      // })
      node.on('mouseover', function (e) {
        document.body.style.cursor = 'pointer'
      })
      node.on('mouseout', function (e) {
        document.body.style.cursor = 'default'
      })
      node.on('click', (e) => {
        dgiotlog.log(e, 'eeeeee')
        canvas.clickItem = e.target
        canvas.contextmenu = {}
        dgiotlog.log('click', e.target.attrs)
      })
    })
    console.groupCollapsed(
      '%ctopoStage log',
      'color:#009a61; font-size: 28px; font-weight: 300'
    )
    dgiotlog.info(info)
    console.groupEnd()
  },
}
export default topoStage
