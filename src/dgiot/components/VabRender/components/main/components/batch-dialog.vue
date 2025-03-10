<template>
  <ele-form-dialog
    v-model="formData"
    :dialog-attrs="{
      'close-on-click-modal': false,
      'append-to-body': true,
    }"
    :form-desc="formDesc"
    label-position="left"
    title="批量添加表单项"
    :visible="visible"
    width="800px"
    @request="handleAdd"
    @update:visible="$emit('change')"
  />
</template>

<script>
  export default {
    name: 'VabRenderMainBatchDialog',
    inject: ['VabRender'],
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        formData: {
          type: 'dynamic',
          formItems: [],
        },
      }
    },
    computed: {
      // 字段出现的次数
      fieldCountObj() {
        return _.countBy(this.VabRender.formItemList, (o) =>
          String(o.field).trim()
        )
      },
      formDesc() {
        return {
          type: {
            type: 'radio',
            label: '添加方式',
            default: 'dynamic',
            options: [
              {
                text: '逐个新增',
                value: 'dynamic',
              },
              {
                text: '产品字典',
                value: 'dict',
              },
              {
                text: '产品模型',
                value: 'module',
              },
              {
                text: '数据库导入(待开发)',
                value: 'mysql',
                attrs: { disabled: true },
              },
            ],
          },
          formItems: {
            type: 'dynamic',
            label: '表单项',
            isTypeChangeReloadValue: false,
            attrs: {
              columns: [
                {
                  type: 'el-input',
                  valueKey: 'field',
                  attrs: {
                    placeholder: '请输入 field',
                  },
                },
                {
                  type: 'el-input',
                  valueKey: 'label',
                  attrs: {
                    placeholder: '请输入 label',
                  },
                },
                {
                  type: 'el-select',
                  valueKey: 'type',
                  slots: {
                    default: (h) => {
                      return this.VabRender.sortedComps.map((item) =>
                        h('el-option', {
                          attrs: {
                            label: `${item.type} - ${item.label}`,
                            value: item.type,
                          },
                        })
                      )
                    },
                  },
                  attrs: {
                    filterable: true,
                    placeholder: '请输入选择 type',
                  },
                },
              ],
            },
            rules: {
              type: 'array',
              validator: (rule, value, callback) => {
                let errorArr = []
                if (Array.isArray(value) && value.length) {
                  // 当前输入表单的字段统计个数
                  const currentFieldCountObj = _.countBy(value, (o) =>
                    String(o.field).trim()
                  )

                  // 合并后的字段统计个数
                  const mergedCountObj = Object.assign(
                    {},
                    currentFieldCountObj,
                    _.mapValues(this.fieldCountObj, (val, field) => {
                      return currentFieldCountObj[field]
                        ? val + currentFieldCountObj[field]
                        : val
                    })
                  )

                  // 字段不可重复
                  errorArr = value
                    .map((item, index) =>
                      mergedCountObj[item.field] > 1
                        ? `第${index + 1}行的 field 重复`
                        : null
                    )
                    .filter(Boolean)

                  // 字段不可为空
                  errorArr = errorArr.concat(
                    value
                      .map((item, index) => {
                        const errMsg = []
                        if (!item.field) errMsg.push('field')
                        if (!item.label) errMsg.push('label')
                        if (!item.type) errMsg.push('type')

                        return errMsg.length
                          ? `第${index + 1}行的 ${errMsg.join('、')} 未填写`
                          : null
                      })
                      .filter(Boolean)
                  )
                }
                errorArr.length
                  ? callback(new Error(errorArr.join(' & ')))
                  : callback()
              },
            },
          },
        }
      },
    },
    watch: {
      visible(val) {
        if (val) {
          this.formData = {
            type: 'dynamic',
            formItems: [],
          }
        }
      },
    },
    methods: {
      handleAdd({ formItems }) {
        try {
          const newFormItems = formItems.map(({ field, label, type }) => ({
            ...this.VabRender.getFormItemByType(type),
            field: String(field).trim(),
            label: String(label).trim(),
          }))

          this.VabRender.formItemList = [
            ...this.VabRender.formItemList,
            ...newFormItems,
          ]

          this.$message.success('添加成功')
          // 恢复数据
          this.formData = {
            type: 'dynamic',
            formItems: [],
          }

          this.$emit('change', false)
        } catch (err) {
          dgiotlog.error(err)
        }
      },
    },
  }
</script>
