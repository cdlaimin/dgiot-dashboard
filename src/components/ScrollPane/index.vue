<!--
 * @Author: h7ml
 * @Date: 2021-03-10 20:20:16
 * @LastEditTime: 2021-03-17 14:45:04
 * @LastEditors: h7ml
 * @FilePath: \dgiot-dashboard\src\components\ScrollPane\index.vue
 * @Description:
-->
<template>
  <el-scrollbar
    ref="scrollContainer"
    class="scroll-container"
    :vertical="false"
    @wheel.native.prevent="handleScroll"
  >
    <slot />
  </el-scrollbar>
</template>

<script>
  const tagAndTagSpacing = 4 // tagAndTagSpacing

  export default {
    name: 'ScrollPane',
    data() {
      return {
        left: 0,
      }
    },
    methods: {
      handleScroll(e) {
        const eventDelta = e.wheelDelta || -e.deltaY * 40
        const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
        $scrollWrapper.scrollLeft = $scrollWrapper.scrollLeft + eventDelta / 4
      },
      moveToTarget(currentTag) {
        const $container = this.$refs.scrollContainer.$el
        const $containerWidth = $container.offsetWidth
        const $scrollWrapper = this.$refs.scrollContainer.$refs.wrap
        const tagList = this.$parent.$refs.tag

        let firstTag = null
        let lastTag = null

        // find first tag and last tag
        if (tagList.length > 0) {
          firstTag = tagList[0]
          lastTag = tagList[tagList.length - 1]
        }

        if (firstTag === currentTag) {
          $scrollWrapper.scrollLeft = 0
        } else if (lastTag === currentTag) {
          $scrollWrapper.scrollLeft =
            $scrollWrapper.scrollWidth - $containerWidth
        } else {
          // find preTag and nextTag
          const currentIndex = tagList.findIndex((item) => item === currentTag)
          const prevTag = tagList[currentIndex - 1]
          const nextTag = tagList[currentIndex + 1]
          // the tag's offsetLeft after of nextTag
          const afterNextTagOffsetLeft =
            nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing

          // the tag's offsetLeft before of prevTag
          const beforePrevTagOffsetLeft =
            prevTag.$el.offsetLeft - tagAndTagSpacing

          if (
            afterNextTagOffsetLeft >
            $scrollWrapper.scrollLeft + $containerWidth
          ) {
            $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
          } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
            $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft
          }
        }
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .scroll-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;

    ::v-deep {
      .el-scrollbar__bar {
        bottom: 0px;
      }

      .el-scrollbar__wrap {
        height: 49px;
      }
    }
  }
</style>
