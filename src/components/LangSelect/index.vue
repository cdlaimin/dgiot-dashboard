<template>
  <div>
    <el-dropdown
      class="international"
      trigger="click"
      @command="handleSetLanguage"
    >
      <div>
        <dgiot-icon class-name="international-icon" icon-class="language" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="zh" :disabled="language === 'zh'">
          中文
        </el-dropdown-item>
        <el-dropdown-item command="en" :disabled="language === 'en'">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
  export default {
    name: 'LangSelect',
    computed: {
      language() {
        return this.$store.getters.language
      },
    },
    methods: {
      handleSetLanguage(lang) {
        this.$i18n.locale = lang
        this.$store.dispatch('setLanguage', lang)
        this.$message({
          message: 'Switch Language Success',
          type: 'success',
          duration: 1000,
        })
      },
    },
  }
</script>

<style scoped>
  .international-icon {
    font-size: 25px;
    vertical-align: -5px !important;
    cursor: pointer;
  }
</style>
