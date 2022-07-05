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
  updateProVersion, getProVersion
} from '@/views/diandi_website/api/version.js'
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
          link: {
            type: 'input',
            label: '链接地址'
          },
          image: {
            label: '图片',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          b_image: {
            label: '鼠标悬停图片',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          content: {
            label: '内容',
            type: 'textarea'// 只需要在这里指定为 image-uploader 即可
          }
        },
        order: [
          'title',
          'link',
          'image',
          'b_image',
          'content'
        ]
      }
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getViews()
  },
  methods: {
    getViews() {
      const id = this.id
      getProVersion(id).then((res) => {
        this.formData = res.data
        this.nickName = res.data.member.nickName
      })
    },
    handleRequest(data) {
      updateProVersion(data).then((response) => {
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
        toName: 'product-version-index',
        params: {}
      })
    }
  }
}
</script>
