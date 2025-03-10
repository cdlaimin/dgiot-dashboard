<template>
  <div class="clients-subscriptions">
    <el-card class="el-card--self tabs-card">
      <el-row>
        <el-col class="card-subtitle" :span="12">
          {{ $t('clients.currentSubs') }}
        </el-col>

        <el-col class="oper-btn-group" :span="12">
          <el-button
            icon="el-icon-refresh"
            plain
            size="mini"
            type="success"
            @click="reload"
          >
            {{ $t('oper.refresh') }}
          </el-button>
          <el-button
            icon="el-icon-plus"
            plain
            size="mini"
            type="success"
            @click="open"
          >
            {{ $t('clients.addSubs') }}
          </el-button>
        </el-col>
      </el-row>

      <el-table
        v-loading="$store.state.loading"
        border
        class="client-sub-table"
        :data="tableData"
      >
        <el-table-column :label="$t('subscriptions.topic')" prop="topic" />
        <el-table-column :label="$t('subscriptions.qoS')" prop="qos" />
        <el-table-column :label="$t('oper.oper')" width="120px">
          <template slot-scope="{ row }">
            <el-button
              plain
              size="mini"
              type="danger"
              @click="handleUnsub(row)"
            >
              {{ $t('oper.unsubscribe') }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
      :append-to-body="true"
      class="create-subscribe"
      :title="$t('clients.addSubs')"
      :visible.sync="addVisible"
      width="400px"
      @keyup.enter.native="handleAdd"
    >
      <el-form
        ref="record"
        class="el-form--public"
        label-position="top"
        :model="record"
        :rules="rules"
        size="small"
      >
        <el-form-item :label="$t('subscriptions.topic')" prop="topic">
          <el-input v-model="record.topic" placeholder="Topic" />
        </el-form-item>
        <el-form-item label="QoS" prop="qos">
          <vab-emq-select
            v-model="record.qos"
            class="el-select--public"
            :field="{ list: [0, 1, 2] }"
            popper-class="el-select--public"
            size="small"
          />
        </el-form-item>
      </el-form>

      <div slot="footer">
        <el-button class="cache-btn" type="text" @click="handleClose">
          {{ $t('oper.cancel') }}
        </el-button>
        <el-button
          class="confirm-btn"
          :loading="$store.state.loading"
          type="success"
          @click="handleAdd"
        >
          {{ $t('oper.add') }}
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'ClientsSubscriptions',
    components: {},
    props: {
      clientId: {
        type: String,
        required: true,
      },
      tableData: {
        type: Array,
        required: true,
      },
      reload: {
        type: Function,
        default: () => {},
      },
      mountpoint: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        addVisible: false,
        record: {
          topic: '',
          qos: 0,
        },
        rules: {
          clientid: {
            required: true,
            message: this.$t('oper.pleaseEnter'),
          },
          topic: {
            required: true,
            message: this.$t('oper.pleaseEnter'),
          },
        },
      }
    },
    methods: {
      handleUnsub(row) {
        this.$msgbox
          .confirm(
            this.$t('oper.unsubscribeConfirm'),
            this.$t('oper.warning'),
            {
              type: 'warning',
            }
          )
          .then(() => {
            const { topic, clientid } = row
            let topicVal = this.mountpoint
              ? topic.replace(this.mountpoint, '')
              : topic
            const body = {
              topic: topicVal,
              clientid,
            }
            this.$httpPost('/mqtt/unsubscribe', body)
              .then(() => {
                this.reload()
              })
              .catch(() => {})
          })
          .catch(() => {})
      },
      open() {
        this.addVisible = true
        this.record.clientid = this.clientId
      },
      handleAdd() {
        this.$refs.record.validate((valid) => {
          if (!valid) {
            return
          }
          const body = {}
          Object.assign(body, this.record)
          this.$httpPost('/mqtt/subscribe', body)
            .then(() => {
              this.handleClose()
              this.reload()
            })
            .catch(() => {})
        })
      },
      handleClose() {
        this.$refs.record.resetFields()
        this.addVisible = false
      },
    },
  }
</script>

<style lang="scss">
  .clients-subscriptions {
    .oper-btn-group {
      margin: 24px 0;
      text-align: right;
    }

    .client-sub-table {
      margin-bottom: 24px;
    }

    .el-select--public {
      width: 100%;

      .el-input__inner {
        height: 32px !important;
        line-height: 32px !important;
      }
    }
  }
</style>
