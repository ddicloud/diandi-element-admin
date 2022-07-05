<template>
  <div class="app-container">
    <ele-form
      v-model="formData"
      v-bind="formConfig"
      :request-fn="handleRequest"
      @request-success="handleRequestSuccess"
    />
  </div>
</template>

<script>
import {
  createProCore
} from '@/views/diandi_website/api/procore.js'
export default {
  data() {
    return {
      formData: {
      },
      formConfig: {
        formDesc: {
          title: {
            type: 'input',
            label: '标题'
          },
          logo: {
            label: 'logo',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          // link: {
          //   type: 'input',
          //   label: '立即使用链接地址'
          // },
          // describe: {
          //   type: 'input',
          //   label: '描述'
          // },
          content: {
            type: 'textarea',
            label: '内容'
          }
        },
        order: [
          'title',
          'logo',
          // 'link',
          // 'describe',
          'content'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createProCore(data).then((response) => {
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
    closePage() {
      this.$store.dispatch('app/closePage', {
        vm: this,
        fromName: this.$route.name,
        toName: 'product-corefunction-index',
        params: {}
      })
    }
  }
}
</script>
