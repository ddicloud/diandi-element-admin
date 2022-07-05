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
  updatesolutioncate, getsolutioncate
} from '@/views/diandi_website/api/solutioncate.js'
export default {
  data() {
    return {
      formData: {
      },
      formConfig: {
        formDesc: {
          name: {
            type: 'input',
            label: '名称'
          },
          des: {
            label: '描述',
            type: 'textarea'// 只需要在这里指定为 image-uploader 即可
          }
          // is_website: {
          //   type: 'radio',
          //   label: '是否是官网',
          //   isOptions: true,
          //   options: [
          //     {
          //       text: '是',
          //       value: 1
          //     },
          //     {
          //       text: '不是',
          //       value: -1
          //     }
          //   ]
          // }
        },
        order: [
          'name',
          'des'
          // 'is_website'
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
      getsolutioncate(id).then((res) => {
        this.formData = res.data
        this.nickName = res.data.member.nickName
      })
    },
    handleRequest(data) {
      updatesolutioncate(data).then((response) => {
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
        toName: 'product-solutcate-index',
        params: {}
      })
    }
  }
}
</script>
