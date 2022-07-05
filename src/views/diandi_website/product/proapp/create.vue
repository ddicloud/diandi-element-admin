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
  createProApp
} from '@/views/diandi_website/api/proapp.js'
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
          link: {
            type: 'input',
            label: '立即使用链接地址'
          },
          tip1: {
            type: 'input',
            label: '标签1'
          },
          tip2: {
            type: 'input',
            label: '标签2'
          },
          content: {
            type: 'textarea',
            label: '内容'
          }
        },
        order: [
          'title',
          'logo',
          'link',
          'tip1',
          'tip2',
          'content'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createProApp(data).then((response) => {
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
        toName: 'product-proapp-index',
        params: {}
      })
    }
  }
}
</script>
