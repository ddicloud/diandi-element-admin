<template>
  <div class="app-container">
    <ele-form
      v-model="formData"
      v-bind="formConfig"
      :request-fn="handleRequest"
      @request-success="handleRequestSuccess"
    >
      <template>
        <el-form-item label="分类ID">
          <el-input
            v-model=" formData.cate_name"
            placeholder="请选择分类ID"
            :disabled="true"
          >
            <template slot="append">
              <el-button
                class="solid-right"
                style="color: #409eff"
                @click.prevent="showCate()"
              >浏览</el-button>
              <span class="padding-lr-xs">|</span>
              <el-button
                style="color: #f56c6c"
                @click.prevent=" formData.cate_name = ''
                                 formData.cate_id = 0"
              >清除</el-button>
            </template>
          </el-input>
        </el-form-item>
      </template></ele-form>
    <el-dialog
      title="选择分类ID"
      :visible.sync="dialognewFormBloc"
      width="80%"
    >
      <delivery @selectBloc="selectBloc" />
      <span slot="footer" class="dialog-footer" />
    </el-dialog>
  </div>
</template>

<script>
import delivery from '@/views/diandi_website/components/delivery'
import {
  createsysFun
} from '@/views/diandi_website/api/systemfun.js'
export default {
  components: {
    delivery
  },
  data() {
    return {
      dialognewFormBloc: false,
      formData: {
        cate_id: 0,
        cate_name: ''
      },
      formConfig: {
        formDesc: {
          title: {
            type: 'input',
            label: '标题'
          },
          icon: {
            label: 'icon',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          des: {
            label: '内容',
            type: 'textarea'// 只需要在这里指定为 image-uploader 即可
          }
        },
        order: [
          'title',
          'icon',
          'des'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createsysFun(data).then((response) => {
        if (response.code === 200) {
          this.$message.success(response.message)
          this.closePage()
        } else {
          this.$message.error(response.message)
        }
      })
      return Promise.resolve()
    },
    handleRequestSuccess() {
    },
    showCate() {
      this.dialognewFormBloc = true
    },
    selectBloc(row) {
      this.formData.cate_id = row.id
      this.formData.cate_name = row.name
      this.dialognewFormBloc = false
    },
    closePage() {
      this.$store.dispatch('app/closePage', {
        vm: this,
        fromName: this.$route.name,
        toName: 'product-systemfun-index',
        params: {}
      })
    }
  }
}
</script>
