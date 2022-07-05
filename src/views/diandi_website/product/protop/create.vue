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
  createProTop
} from '@/views/diandi_website/api/protop.js'
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
            label: '图片',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          logo_a: {
            label: 'logo',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          }
          // logo_b: {
          //   label: '鼠标悬停logo',
          //   type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          // }
        },
        order: [
          'title',
          'image',
          'logo_a'
          // 'logo_b'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createProTop(data).then((response) => {
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
        toName: 'product-protop-index',
        params: {}
      })
    }
  }
}
</script>
