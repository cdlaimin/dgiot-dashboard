<template>
  <div class="resourcechannel">
    <h3>通道管理</h3>
    <el-tabs v-model="activeName">
      <el-tab-pane :label="'通道管理' + '(' + total + ')'" name="first">
        <div class="firsttable">
          <el-form
            class="demo-form-inline"
            :inline="true"
            :model="channelformsearch"
            size="small"
          >
            <el-form-item>
              <el-input
                v-model="channelformsearch.name"
                :placeholder="$translateTitle('resource.name')"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native="Get_Re_Channel(0)">
                {{ $translateTitle('developer.search') }}
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native="addchanneltype">
                {{ $translateTitle('developer.selectchannel') }}
              </el-button>
            </el-form-item>
          </el-form>
          <!----------------------------------------------------资源通道表格------------------>
          <el-table
            :data="tableData"
            :row-class-name="getChannelEnable"
            style="width: 100%"
          >
            <el-table-column
              :label="$translateTitle('developer.channelnumber')"
            >
              <template #default="{ row }">
                <span>{{ row.objectId }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$translateTitle('developer.channelname')">
              <template #default="{ row }">
                <span>{{ row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column :label="$translateTitle('developer.channeltype')">
              <template #default="{ row }">
                <span v-if="row.type == 1">
                  {{ $translateTitle('developer.collectionchannel') }}
                </span>
                <span v-else-if="row.type == 2">
                  {{ $translateTitle('developer.resourcechannel') }}
                </span>
                <span v-else>任务通道</span>
              </template>
            </el-table-column>
            <el-table-column :label="$translateTitle('developer.servicetype')">
              <template #default="{ row }">
                <span>{{ row.cType }}</span>
              </template>
            </el-table-column>

            <el-table-column
              :label="$translateTitle('developer.channelstatus')"
            >
              <template #default="{ row }">
                <span v-if="row.status == 'ONLINE'" style="color: green">
                  在线
                </span>
                <span v-else style="color: red">离线</span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$translateTitle('developer.channeladdr')"
              width="200"
            >
              <template #default="{ row }">
                <span>{{ 'channel/' + row.objectId }}</span>
              </template>
            </el-table-column>

            <el-table-column :label="$translateTitle('developer.describe')">
              <template #default="{ row }">
                <span>{{ row.desc }}</span>
              </template>
            </el-table-column>
            <el-table-column
              :label="$translateTitle('developer.operation')"
              width="350"
            >
              <template #default="{ row, $index }">
                <el-button
                  slot="reference"
                  size="mini"
                  type="primary"
                  @click="editorChannel(row)"
                >
                  编辑
                </el-button>
                <el-button
                  v-if="row.isEnable == false"
                  size="mini"
                  type="success"
                  @click="qyChannel(row, 'enable')"
                >
                  {{ $translateTitle('developer.enable') }}
                </el-button>

                <el-button
                  v-else
                  size="mini"
                  type="danger"
                  @click="qyChannel(row, 'disable')"
                >
                  {{ $translateTitle('developer.prohibit') }}
                </el-button>
                <el-button
                  size="mini"
                  type="primary"
                  @click="updateChannel(row)"
                >
                  详情
                </el-button>
                <el-popover
                  :ref="`popover-${$index}`"
                  placement="top"
                  width="300"
                >
                  <p>确定删除这个{{ row.name }}通道吗？</p>
                  <div style="margin: 0; text-align: right">
                    <el-button
                      size="mini"
                      @click="row._self.$refs[`popover-${$index}`].doClose()"
                    >
                      {{ $translateTitle('developer.cancel') }}
                    </el-button>
                    <el-button
                      size="mini"
                      type="primary"
                      @click="deleteChannel(row, $index)"
                    >
                      {{ $translateTitle('developer.determine') }}
                    </el-button>
                  </div>
                  <el-button slot="reference" size="mini" type="danger">
                    {{ $translateTitle('developer.delete') }}
                  </el-button>
                </el-popover>
                <!-- <el-popover
                placement="top-start"
                title="标题"
                width="200"
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-button slot="reference" :disabled="row.attributes.status=='OFFLINE'">hover 激活</el-button>
              </el-popover> -->
                <el-tooltip
                  class="item"
                  content="请先启用通道"
                  :disabled="row.status != 'OFFLINE'"
                  effect="dark"
                  placement="top"
                >
                  <el-button
                    size="mini"
                    style="
                      position: absolute;
                      width: 100px;
                      height: 10px;
                      opacity: 0;
                    "
                    type="primary"
                    @click="subProTopic(row)"
                  />
                </el-tooltip>
                <el-button
                  :disabled="row.status == 'OFFLINE'"
                  size="mini"
                  type="primary"
                  @click="subProTopic(row)"
                >
                  订阅日志
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="elpagination" style="margin-top: 20px">
            <el-pagination
              layout="total, sizes, prev, pager, next, jumper"
              :page-size="length"
              :page-sizes="[10, 20, 30, 50]"
              :total="total"
              @current-change="channelCurrentChange"
              @size-change="channelSizeChange"
            />
          </div>
        </div>
      </el-tab-pane>
      <!--弹窗--->
      <el-dialog
        :append-to-body="true"
        :before-close="handleClose"
        :close-on-click-modal="false"
        :title="channelupdated + '通道'"
        top="0"
        :visible.sync="channelForm"
        width="50%"
      >
        <el-form
          ref="addchannel"
          label-width="120px"
          :model="addchannel"
          :rules="addrules"
        >
          <el-form-item label="通道类型" prop="region">
            <el-select
              v-model="addchannel.region"
              disabled
              placeholder="通道类型"
              @change="removeauto"
            >
              <el-option
                v-for="(item, index) in channelregion"
                :key="index"
                :label="item.title.zh"
                :value="item.cType"
              />
            </el-select>
            <el-row
              :gutter="24"
              style="
                width: 100%;
                height: 500px;
                overflow-x: hidden;
                overflow-y: scroll;
                line-height: 30px;
                text-align: center;
              "
            >
              <el-col
                v-for="(item, index) in channelregion"
                :key="index"
                :span="8"
                style="margin: 20px 0; cursor: pointer"
              >
                <el-card
                  class="box-card"
                  :shadow="addchannel.region == item.cType ? 'always' : 'hover'"
                  size="mini"
                  :style="{
                    color:
                      addchannel.region == item.cType ? '#00bad0' : '#c0c4cc',
                  }"
                >
                  <div slot="header" class="clearfix">
                    <span>{{ item.title.zh }}</span>
                    <el-button
                      :disabled="resourceid != ''"
                      size="mini"
                      style="float: right"
                      :type="
                        addchannel.region == item.cType ? 'success' : 'primary'
                      "
                      @click="setCard(item.cType)"
                    >
                      {{ addchannel.region == item.cType ? '已选择' : '选择' }}
                    </el-button>
                  </div>
                  <div class="text item">
                    <el-row :gutter="24">
                      <el-col :span="12">
                        <img
                          class="image"
                          src="https://imgs.iotku.com/2020/2/21/23efecea9bfdbbf8a132089e251fc6e7.png"
                          style="width: 50px; height: 50px"
                        />
                      </el-col>
                      <el-col :span="12">
                        <el-tag>{{ item.cType }}</el-tag>
                      </el-col>
                    </el-row>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item
            :label="$translateTitle('developer.channelname')"
            prop="name"
          >
            <el-input
              v-model="addchannel.name"
              autocomplete="off"
              :placeholder="$translateTitle('developer.channelname')"
            />
          </el-form-item>

          <!-- 所属应用(角色) app -->
          <!-- <el-form-item
            :label=" $translateTitle('application.applicationtype')"
            :rules="[
              { required: true, message: '请选择所属应用',trigger: 'blur'},
            ]"
          >
            <el-select v-model="addchannel.applicationtText" :placeholder=" $translateTitle('application.applicationtype')">
              <el-option
                v-for="item in applicationList"
                :key="item.id"
                :label="item.name"
                :value="item.name"/>
            </el-select>
          </el-form-item> -->
          <el-form-item
            label="所属应用"
            :rules="[
              { required: true, message: '请选择所属应用', trigger: 'blur' },
            ]"
          >
            <el-input
              v-model="addchannel.applicationtText"
              placeholder="请选择所属应用"
            >
              <template slot="append">
                <i
                  :class="[
                    showTree ? 'el-icon-arrow-up' : 'el-icon-arrow-down',
                  ]"
                  style="cursor: pointer"
                  @click="showTree = !showTree"
                />
              </template>
            </el-input>
            <div v-if="showTree">
              <el-tree
                :data="allApps"
                :props="defaultProps"
                @node-click="handleNodeClick"
              />
            </div>
          </el-form-item>

          <el-col v-for="(item, index) in arrlist" :key="index" :span="12">
            <el-form-item
              :label="item.title.zh"
              :prop="item.showname"
              :required="item.required"
            >
              <el-input
                v-if="item.type == 'string'"
                v-model="addchannel[item.showname]"
              />
              <el-input
                v-else-if="item.type == 'integer'"
                v-model.number="addchannel[item.showname]"
              />
              <el-select
                v-else-if="item.type == 'boolean'"
                v-model="addchannel[item.showname]"
                class="notauto"
                readonly
              >
                <el-option label="是" :value="true" />
                <el-option label="否" :value="false" />
              </el-select>
            </el-form-item>
          </el-col>
          <!---------------------统一的配置描述---------------------------->
          <el-form-item :label="$translateTitle('developer.describe')">
            <el-input
              v-model="addchannel.desc"
              autocomplete="off"
              :placeholder="$translateTitle('developer.describe')"
              :rows="3"
              type="textarea"
              @change="inputChange"
            />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="handleClose">
            {{ $translateTitle('developer.cancel') }}
          </el-button>
          <el-button
            type="primary"
            @click.native="addchannelForm('addchannel')"
          >
            {{ $translateTitle('developer.determine') }}
          </el-button>
        </div>
      </el-dialog>
      <!--详情展示-->
      <el-dialog
        :append-to-body="true"
        title="通道详情"
        :visible.sync="dialogVisible"
        width="50%"
      >
        <div>
          <el-row>
            <el-col :span="12">ID:</el-col>
            <el-col :span="12">
              {{ resourceid }}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">Resource Type:</el-col>
            <el-col :span="12">
              {{ resoucetype }}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">Description:</el-col>
            <el-col :span="12">
              {{ description }}
            </el-col>
          </el-row>

          <el-row v-for="(key, value) in detailchannel" :key="key">
            <el-col :span="12">
              {{ value }}
            </el-col>
            <el-col :span="12">
              {{ key }}
            </el-col>
          </el-row>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click.native="dialogVisible = false">
            确 定
          </el-button>
        </span>
      </el-dialog>
      <!--订阅日志-->
      <el-dialog
        :append-to-body="true"
        :before-close="handleCloseSubdialog"
        :title="channelname + '日志'"
        :visible.sync="subdialog"
        width="85%"
      >
        <div style="margin-top: 20px">
          <pre
            id="subdialog"
            class="ace_editor"
            style="width: 100%; min-height: 300px"
          >
                      <textarea
                        class="ace_text-input"
                        style="overflow:scroll"
                      />
          </pre>
        </div>
        <span slot="footer" class="dialog-footer" style="height: 30px">
          <el-switch
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            inactive-text="自动刷新"
            style="display: inline-block; margin-right: 10px"
            @change="stopsub"
          />
        </span>
      </el-dialog>
    </el-tabs>
  </div>
</template>
<script>
  import { delChannel, postChannel } from '@/api/Channel/index'
  import { mapGetters } from 'vuex'
  import { subupadte } from '@/api/System/index'
  import { queryRole } from '@/api/Role/index'
  import { resourceTypes } from '@/api/Rules'
  import { returnLogin } from '@/utils/utilwen'
  import { Websocket } from '@/utils/wxscoket.js'

  var subdialog

  export default {
    inject: ['reload'],
    data() {
      return {
        dialogVisible: false,
        isopen: 'suo',
        pwdType: 'password',
        tableData: [],
        channelForm: false,
        channelupdated: '新增',
        activeName: 'first',
        channelId: '',
        channelformsearch: {
          name: '',
        },
        channelregion: [],
        addchannel: {
          region: '',
          desc: '',
          applicationtText: '',
        },
        applicationList: [],
        addrules: {
          roles: [
            {
              required: true,
              message: '请选择所属应用',
              trigger: 'blur',
            },
          ],
          name: [
            {
              required: true,
              message: '请输入通道名称',
              trigger: 'blur',
            },
          ],
          region: [
            {
              required: true,
              message: '请选择服务类型',
              trigger: 'change',
            },
          ],
        },
        length: 10,
        start: 0,
        total: 0,
        selectregion: {},
        resourceid: '',
        resoucetype: '',
        description: '',
        detailchannel: '',
        // 订阅日志
        subdialog: false,
        value4: '',
        subdialogid: '',
        subdialogtimer: null,
        channelname: '',
        arrlist: [],
        channelrow: [],
        showTree: false,
        allApps: [],
        defaultProps: {
          children: 'children',
          label: 'label',
        },
      }
    },
    computed: {
      ...mapGetters({
        roleTree: 'user/roleTree',
      }),
    },
    mounted() {
      this.Get_Re_Channel(0)
      this.dialogType()
      this.getApplication()
    },
    methods: {
      setCard(item) {
        this.removeauto(item)
      },
      inputChange(val) {
        console.log(val)
      },
      // 验证
      validUrl(rule, value, callback) {
        const reg =
          /^[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/
        if (!reg.test(value)) {
          callback(new Error('需要输入正确的url'))
        } else {
          callback()
        }
      },
      validPort(rule, value, callback) {
        const reg =
          /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
        if (!reg.test(value)) {
          callback(new Error('需要输入正确的端口号'))
        } else {
          callback()
        }
      },
      // 初始化数据
      Get_Re_Channel(start) {
        if (start == 0) {
          this.start = 0
        }
        const params = {
          count: 'objectId',
          order: '-createdAt',
          limit: this.length,
          skip: this.start,
          where: {},
        }
        if (this.channelformsearch.name != '') {
          params.where.name = this.channelformsearch.name
        }
        this.$query_object('Channel', params)
          .then((res) => {
            if (res) {
              this.total = res.count
              this.tableData = res.results
            }
          })
          .catch((error) => {
            if (error.code == '209') {
              this.$message({
                type: 'warning',
                message: '登陆权限过期，请重新登录',
              })
              this.$router.push({
                path: '/login',
              })
            } else if (error.code == 119) {
              this.$message({
                type: 'error',
                message: '没有操作权限',
              })
            }
          })
      },
      // 获取应用列表
      async getApplication() {
        const params = {
          limit: 100,
        }
        const { results } = await queryRole(params)
        results.map((item) => {
          var obj = {}
          obj.id = item.id
          obj.name = item.desc
          this.applicationList.push(obj)
        })
      },
      handleNodeClick(data) {
        this.showTree = !this.showTree
        this.addchannel.applicationtText = data.name
      },
      // 初始化弹框数据
      async dialogType() {
        this.allApps = this.roleTree
        const res = await resourceTypes()
        this.channelregion = res
      },
      // 更新状态
      qyChannel(row, action) {
        subupadte(row.objectId, action)
          .then((resultes) => {
            if (resultes) {
              this.$message({
                type: 'success',
                message: `${action == 'enable' ? '启用成功' : '禁用成功'}`,
              })
            }
            this.Get_Re_Channel(0)
          })
          .catch((error) => {
            this.$message(error.error)
          })
      },
      // 编辑设备
      updateChannel(row) {
        console.log(row)
        this.dialogVisible = true
        this.resourceid = row.objectId
        this.detailchannel = row.config
        this.resoucetype = row.cType
        this.description = row.desc
      },
      addchannelForm(formName) {
        this.$refs[formName].validate(
          (valid) => {
            if (valid) {
              var obj = {}
              for (var key in this.addchannel) {
                obj[key] = this.addchannel[key]
              }
              delete obj.region
              delete obj.desc
              delete obj.type
              delete obj.isEnable
              delete obj.name
              console.log('addchannelForm', this.addchannel)
              const aclKey = 'role' + ':' + this.addchannel.applicationtText
              const aclObj = {}
              aclObj[aclKey] = {
                read: true,
                write: true,
              }
              const data = {
                ACL: aclObj,
                config: obj,
                name: this.addchannel.name,
                cType: this.addchannel.region,
                desc: this.addchannel.desc,
                // type: this.addchannel.type,
                // isEnable: this.addchannel.isEnable
              }
              this.addchannelaxios(data)
            }
          },
          (error) => {
            returnLogin(error)
          }
        )
      },
      async addchannelaxios(data) {
        await postChannel(data).then((results) => {
          if (results) {
            this.$message({
              type: 'success',
              message: this.channelupdated == '编辑' ? '编辑成功' : '创建成功',
            })
            this.$refs['addchannel'].resetFields()
            this.addchannel = {}
            // this.reload()
            this.channelForm = false
            this.resourceid = ''
            this.Get_Re_Channel(0)
          }
        })
      },
      // 删除通道
      deleteChannel(scope, $index) {
        delChannel(row.objectId)
          .then((results) => {
            this.$message({
              type: 'success',
              message: '删除成功',
            })
            scope._self.$refs[`popover-${$index}`].doClose()
            this.Get_Re_Channel(0)
          })
          .catch((e) => {
            console.log(e.error)
          })
      },
      addchanneltype() {
        this.channelForm = true
        this.channelupdated = '新增'
      },
      // 关闭弹窗
      handleClose() {
        this.addchannel = {}
        this.channelForm = false
        this.$refs['addchannel'].resetFields()
        this.resourceid = ''
      },
      getChannelEnable(row, rowIndex) {
        if (row.row.isEnable == true) {
          return 'green_active'
        } else {
          return 'red_active'
        }
      },
      // 分页
      channelSizeChange(val) {
        this.length = val
        this.Get_Re_Channel()
      },
      channelCurrentChange(val) {
        this.start = (val - 1) * this.length
        this.Get_Re_Channel()
      },
      arrSort(a, b) {
        var val1 = a.order
        var val2 = b.order
        if (val1 < val2) {
          return -1
        } else if (val1 > val2) {
          return 1
        } else {
          return 0
        }
      },
      orderObject(object) {
        var arr = []
        var obj = {}
        var obj1 = {
          roles: [
            {
              required: true,
              message: '请选择所属应用',
              trigger: 'blur',
            },
          ],
          name: [
            {
              required: true,
              message: '请输入通道名称',
              trigger: 'blur',
            },
          ],
          region: [
            {
              required: true,
              message: '请选择服务类型',
              trigger: 'change',
            },
          ],
        }
        for (var key in object) {
          object[key].showname = key
          arr.push(object[key])
        }
        return arr.sort(this.arrSort)
      },
      removeauto(val) {
        console.log(val)
        console.log(this.channelregion, this.allApps)
        var obj = {}
        var obj1 = {
          name: [
            {
              required: true,
              message: '请输入通道名称',
              trigger: 'blur',
            },
          ],
          region: [
            {
              required: true,
              message: '请选择服务类型',
              trigger: 'change',
            },
          ],
        }
        if (this.resourceid == '') {
          this.channelregion.map((item) => {
            if (item.cType == val) {
              this.selectregion = item
              this.arrlist = this.orderObject(this.selectregion.params)
              this.arrlist.map((item) => {
                if (item.default) {
                  obj[item.showname] = item.default
                } else {
                  obj[item.showname] = ''
                }
                if (item.required) {
                  if (item.type == 'string' || item.type == 'integer') {
                    obj1[item.showname] = [
                      {
                        required: true,
                        trigger: 'blur',
                      },
                    ]
                  } else {
                    obj1[item.showname] = [
                      {
                        required: true,
                        trigger: 'change',
                      },
                    ]
                  }
                }
              })
              obj.region = val
              obj.desc = ''
              obj.name = ''
              obj.type = this.selectregion.type
              obj.isEnable = false
            }
          })
        } else {
          this.channelregion.map((item) => {
            if (item.cType == val) {
              this.selectregion = item
              this.arrlist = this.orderObject(this.selectregion.params)
              this.arrlist.map((item) => {
                for (var key in this.channelrow.config) {
                  if (item.showname == key) {
                    obj[item.showname] = this.channelrow.config[key]
                  }
                  if (item.required) {
                    if (item.type == 'string' || item.type == 'integer') {
                      obj1[item.showname] = [
                        {
                          required: true,
                          trigger: 'blur',
                        },
                      ]
                    } else {
                      obj1[item.showname] = [
                        {
                          required: true,
                          trigger: 'change',
                        },
                      ]
                    }
                  }
                  obj.region = val
                  obj.desc = this.channelrow.desc
                  obj.name = this.channelrow.name
                  obj.type = this.selectregion.type
                  obj.isEnable = this.channelrow.isEnable
                }
              })
            }
          })
        }
        // 读取acl列表,获取所属应用名称
        console.log('this.channelrow', this.channelrow)
        if (this.channelrow.length > 0) {
          for (var key in this.channelrow.ACL.permissionsById) {
            obj.applicationtText = key ? key.substr(5) : ''
          }
        }

        this.addchannel = obj
        this.addchannel.region = val
        this.addrules = obj1
      },
      editorChannel(row) {
        this.channelrow = row
        this.resourceid = row.objectId
        this.channelForm = true
        this.channelupdated = '编辑'
        this.removeauto(row.cType)
      },
      // 弹窗订阅日志
      nowtime() {
        var timestamp3 = Date.parse(new Date())
        var date = new Date(timestamp3)
        var Y = date.getFullYear() + '年'
        var M =
          (date.getMonth() + 1 <= 10
            ? '0' + (date.getMonth() + 1)
            : date.getMonth() + 1) + '月'
        var D =
          (date.getDate() + 1 <= 10 ? '0' + date.getDate() : date.getDate()) +
          '日  '
        var h =
          (date.getHours() + 1 <= 10
            ? '0' + date.getHours()
            : date.getHours()) + ':'
        var m =
          (date.getMinutes() + 1 <= 10
            ? '0' + date.getMinutes()
            : date.getMinutes()) + ':'
        var s =
          date.getSeconds() + 1 <= 10
            ? '0' + date.getSeconds()
            : date.getSeconds()
        return h + m + s + ' '
      },
      subProTopic(row) {
        this.subdialog = true
        this.subdialogid = row.objectId
        this.channelname = row.objectId
        setTimeout(() => {
          subdialog = ace.edit('subdialog')
          subdialog.session.setMode('ace/mode/text') // 设置语言
          subdialog.setTheme('ace/theme/gob') // 设置主题
          subdialog.setReadOnly(true)
          subdialog.setOptions({
            enableBasicAutocompletion: false,
            enableSnippets: true,
            enableLiveAutocompletion: true, // 设置自动提示
          })
        })
        var info = {
          topic: 'log/channel/' + row.objectId,
          qos: 2,
        }
        var channeltopic = new RegExp('log/channel/' + row.objectId)
        var submessage = ''
        var _this = this
        Websocket.add_hook(channeltopic, function (Msg) {
          // 判断长度
          if (subdialog.session.getLength() >= 1000) {
            submessage = ''
          } else {
            submessage += _this.nowtime() + Msg + `\n`
          }
          subdialog.setValue(submessage)
          subdialog.gotoLine(subdialog.session.getLength())
        })
        // 订阅
        var text0 = JSON.stringify({ action: 'start_logger' })
        Websocket.subscribe(info, function (res) {
          if (res.result) {
            console.log(info)
            console.log('订阅成功')
            var sendInfo = {
              topic: 'channel/' + row.objectId,
              text: text0,
              retained: true,
              qos: 2,
            }
            Websocket.sendMessage(sendInfo)
            _this.subdialogtimer = window.setInterval(() => {
              Websocket.sendMessage(sendInfo)
            }, 600000)
          }
        })
      },
      stopsub(value) {
        var text0
        if (value == false) {
          // this.subaction = 'start'
          text0 = JSON.stringify({ action: 'stop_logger' })
        } else {
          // this.subaction = 'stop'
          text0 = JSON.stringify({ action: 'start_logger' })
        }
        var sendInfo = {
          topic: 'channel/' + this.subdialogid,
          text: text0,
          retained: true,
          qos: 2,
        }
        Websocket.sendMessage(sendInfo)
      },
      handleCloseSubdialog() {
        var text0 = JSON.stringify({ action: 'stop_logger' })
        var sendInfo = {
          topic: 'channel/' + this.subdialogid,
          text: text0,
          retained: true,
          qos: 2,
        }
        Websocket.sendMessage(sendInfo)
        this.subdialog = false
        window.clearInterval(this.subdialogtimer)
        this.subdialogtimer = null
      },
    },
  }
</script>
<style lang="scss" scoped>
  .resourcechannel {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;

    ::v-deep .green_active {
      color: green;
    }

    ::v-deep .red_active {
      color: red;
    }

    ::v-deep .el-button + .el-button {
      margin-left: 0;
    }

    ::v-deep .el-tabs__item {
      height: 50px;
      margin: 0;
      margin-top: 20px;
      font-family: auto;
      font-size: 16px;
      line-height: 50px;
    }

    ::v-deep .el-dialog__header {
      border-bottom: 1px solid #cccccc;
    }

    ::v-deep .el-dialog__body {
      .el-form {
        display: flex;
        flex-wrap: wrap;

        .el-form-item {
          width: 100%;
          margin-bottom: 22px;

          .el-select {
            width: 100%;
          }
        }

        .el-col {
          @media screen and (max-width: 1350px) {
            width: 100%;
          }
        }
      }

      ::v-deep .el-row {
        margin: 20px 0;
      }
    }

    ::v-deep .el-button--mini {
      margin: 2px 0;
    }

    ::v-deep .row-bg {
      .el-form-item__content {
        width: 100%;
      }
    }

    ::v-deep .el-dialog__wrapper {
      margin-bottom: 20px;
    }
  }
</style>
