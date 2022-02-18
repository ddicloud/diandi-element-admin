<template>
  <div>
    <el-input v-model="iconName" placeholder="图标名称">
      <el-button slot="append" @click="slectIcon">
        选择图标
      </el-button>
    </el-input>

    <el-drawer
      title="图标选择"
      :visible.sync="dialogVisible"
      :direction="direction"
      :before-close="handleClose"
      append-to-body
    >
      <div class="icons-container">
        <el-tabs type="border-card">
          <el-tab-pane v-for="(item,index) of svgIcons" :key="index" :label="item.name">
            <div class="grid icon-content">
              <div v-for="(icon,idx) of iconList[item.key]" :key="idx" @click="handleClipboard(icon,$event)">
                <el-tooltip placement="top">
                  <div slot="content">
                    {{ generateElementIconCode(icon) }}
                  </div>
                  <div class="icon-item">
                    <i :class="'fa sub-el-icon  ' + icon" />
                    <span>{{ icon }}</span>
                  </div>
                </el-tooltip>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-drawer>

    <!--  <el-dialog title="图标选择" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" append-to-body>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import formMixin from 'diandi-ele-form/lib/mixins/formMixin'
import icons from './fire-icons.js'
export default {
  name: 'FireIcon',
  mixins: [formMixin],
  props: {
    // desc是此组件的描述, 结构为
    // { style: {}, class: {}, on: {}, attrs: {} }
    // value 是传递过来的值
    desc: {
      type: Object,
      default() {
        return {}
      }
    }
  }, // 必须引入mixin
  data() {
    return {
      direction: 'rtl',
      dialogVisible: false,
      iconName: '',
      iconList: {},
      svgIcons: [{
        key: 'webApplication',
        name: 'web应用'
      },
      {
        key: 'hand',
        name: '手势'
      },
      {
        key: 'transportation',
        name: '交通'
      },
      {
        key: 'gender',
        name: '性别'
      },
      {
        key: 'spinner',
        name: '加载'
      },
      {
        key: 'formControl',
        name: '常用操作'
      },
      {
        key: 'payment',
        name: '支付'
      },
      {
        key: 'chart',
        name: '图表统计'
      },
      {
        key: 'currency',
        name: '货币符号'
      },
      {
        key: 'textEditor',
        name: '文本编辑'
      },
      {
        key: 'directional',
        name: '指向'
      },
      {
        key: 'videoPlayer',
        name: '多媒体'
      },
      {
        key: 'brand',
        name: '商标'
      },
      {
        key: 'medical',
        name: '医疗'
      },
      {
        key: 'glyphicons',
        name: '字体图标'
      },
      {
        key: 'new',
        name: '其他'
      }
      ]
    }
  },
  computed: {
    errorLogs() {
      return this.$store.getters.errorLogs
    }
  },
  created() {
    const that = this
    const iconList = {}
    that.svgIcons.forEach((item, index) => {
      that.$set(iconList, item.key, icons[item.key])
    })
    console.log('iconList', iconList)
    that.iconList = iconList
  },
  methods: {
    slectIcon() {
      console.log('选择图标')

      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    generateIconCode(symbol) {
      return `<svg-icon icon-class="${symbol}" />`
    },
    generateElementIconCode(symbol) {
      return `<i class="el-icon-${symbol}" />`
    },
    handleClipboard(text, event) {
      const that = this
      that.iconName = 'fa ' + text
      that.$emit('input', that.iconName)
      this.dialogVisible = false
      console.log(text, event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .icons-container {
    margin: 10px 20px 0;
    height: 100vh;
    overflow: hidden;

    .icon-content {
      height: 90vh;
      overflow: overlay;
    }

    .grid {
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

    .icon-item {
      margin: 20px;
      height: 85px;
      text-align: center;
      width: 100px;
      float: left;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
    }

    span {
      display: block;
      font-size: 16px;
      margin-top: 10px;
    }

    .disabled {
      pointer-events: none;
    }
  }
</style>
