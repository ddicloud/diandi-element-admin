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
  createProSlide
} from '@/views/diandi_website/api/slide.js'
export default {
  data() {
    return {
      formData: {
      },
      formConfig: {
        formDesc: {
          link: {
            type: 'input',
            label: '链接地址'
          },
          image: {
            label: '图片',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          }
        },
        order: [
          'link',
          'image'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createProSlide(data).then((response) => {
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
        toName: 'product-slide-index',
        params: {}
      })
    }
  }
}
</script>
