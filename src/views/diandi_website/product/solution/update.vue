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
  updatesolution, getsolution
} from '@/views/diandi_website/api/solution.js'
import {
  solutioncateList
} from '@/views/diandi_website/api/solutioncate.js'
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
          cate_id: {
            type: 'select',
            label: '分类',
            isOptions: true,
            options: solutioncateList().then((res) => {
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
          'cate_id'
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
      getsolution(id).then((res) => {
        this.formData = res.data
      })
    },
    handleRequest(data) {
      updatesolution(data).then((response) => {
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
        toName: 'product-solution-index',
        params: {}
      })
    }
  }
}
</script>
