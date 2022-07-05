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
  createProBody
} from '@/views/diandi_website/api/probody.js'
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
          image_a: {
            label: 'a图',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          image_b: {
            label: 'b图',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          content: {
            label: '内容',
            type: 'textarea'
          }
        },
        order: [
          'title',
          'image_a',
          'image_b',
          'content'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createProBody(data).then((response) => {
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
        toName: 'product-probody-index',
        params: {}
      })
    }
  }
}
</script>
