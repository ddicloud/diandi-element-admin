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
  updatesysfuncate, getsysfuncate
} from '@/views/diandi_website/api/sysfuncate.js'
import {
  solutionList
} from '@/views/diandi_website/api/solution.js'
export default {
  data() {
    return {
      formData: {
        is_website: 1
      },
      formConfig: {
        formDesc: {
          name: {
            type: 'input',
            label: '标题'
          },
          icon: {
            label: 'icon',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          des: {
            label: '描述',
            type: 'textarea'// 只需要在这里指定为 image-uploader 即可
          },
          is_website: {
            type: 'radio',
            label: '是否是官网',
            isOptions: true,
            options: [
              {
                text: '是',
                value: 1
              },
              {
                text: '不是',
                value: -1
              }
            ]
          },
          solution_id: {
            type: 'select',
            label: '解決方案',
            isOptions: true,
            options: solutionList().then((res) => {
              const arr = []
              res.data.dataProvider.allModels.forEach((item, index) => {
                arr.push({
                  text: item.name,
                  value: item.id
                })
              })
              return arr
            })
          }
        },
        order: [
          'name',
          'icon',
          'des',
          'is_website',
          'solution_id'
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
      getsysfuncate(id).then((res) => {
        this.formData = res.data
        this.nickName = res.data.member.nickName
      })
    },
    handleRequest(data) {
      updatesysfuncate(data).then((response) => {
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
        toName: 'product-sysfuncate-index',
        params: {}
      })
    }
  }
}
</script>
