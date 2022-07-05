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
  proAppconfigView, createconfigProApp
} from '@/views/diandi_website/api/proconfig.js'
export default {
  data() {
    return {
      formData: {
      },
      formConfig: {
        formDesc: {
          image_a: {
            label: '公众号演示二维码',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          image_b: {
            label: '商城二维码',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          image_c: {
            label: '官方公众号二维码',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          image_d: {
            label: '官方商城二维码',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          }
        },
        order: [
          'image_a',
          'image_b',
          'image_c',
          'image_d'
        ]
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      const id = 1
      proAppconfigView(id).then((res) => {
        this.formData = res.data
      })
    },
    handleRequest(data) {
      createconfigProApp(data).then((response) => {
        if (response.code === 200) {
          this.$message.success(response.message)
          this.getList()
        } else {
          this.$message.error(response.message)
        }
      })
      return Promise.resolve()
    },
    handleRequestSuccess() {
    }
  }
}
</script>
