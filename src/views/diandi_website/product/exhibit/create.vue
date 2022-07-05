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
  createsysWorth
} from '@/views/diandi_website/api/exhibit.js'
import {
  solutionList
} from '@/views/diandi_website/api/solution.js'
export default {
  data() {
    return {
      formData: {},
      formConfig: {
        formDesc: {
          title: {
            type: 'input',
            label: '标题'
          },
          subtitle: {
            type: 'input',
            label: '副标题'
          },
          icon: {
            label: 'icon',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          image: {
            label: '图片',
            type: 'image-uploader'// 只需要在这里指定为 image-uploader 即可
          },
          link: {
            type: 'input',
            label: '链接'
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
          },
          content: {
            type: 'textarea',
            label: '链接'
          }
        },
        order: [
          'title',
          'subtitle',
          'icon',
          'image',
          'link',
          'solution_id',
          'content'
        ]
      }
    }
  },
  methods: {
    handleRequest(data) {
      createsysWorth(data).then((response) => {
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
        toName: 'product-exhibit-index',
        params: {}
      })
    }
  }
}
</script>
