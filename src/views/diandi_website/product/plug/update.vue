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
  updateProPlug, getProPlug
} from '@/views/diandi_website/api/proplug.js'
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
          content: {
            type: 'textarea',
            label: '内容'
          }
        },
        order: [
          'title',
          'logo',
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
      getProPlug(id).then((res) => {
        this.formData = res.data
        this.nickName = res.data.member.nickName
      })
    },
    handleRequest(data) {
      updateProPlug(data).then((response) => {
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
        toName: 'product-plug-index',
        params: {}
      })
    }
  }
}
</script>
