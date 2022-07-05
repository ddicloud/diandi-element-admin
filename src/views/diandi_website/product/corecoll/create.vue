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
  createProSelling
} from '@/views/diandi_website/api/corecoll.js'
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
          image: {
            label: 'logo',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          content: {
            type: 'textarea',
            label: '内容'
          }
        },
        order: [
          'title',
          'image',
          'content'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createProSelling(data).then((response) => {
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
        toName: 'product-corecoll-index',
        params: {}
      })
    }
  }
}
</script>
