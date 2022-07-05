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
  updateproductPrice, getproductPrice
} from '@/views/diandi_website/api/price.js'
import {
  solutionList
} from '@/views/diandi_website/api/solution.js'
export default {
  data() {
    return {
      formData: {
        drift: 1,
        is_recommend: 1
      },
      formConfig: {
        formDesc: {
          name: {
            type: 'input',
            label: '产品名称'
          },
          des: {
            label: '描述',
            type: 'input'// 只需要在这里指定为 image-uploader 即可
          },
          price: {
            type: 'input',
            label: '产品价格',
            attrs: {
              type: 'number'
            }
          },
          show_price: {
            type: 'input',
            label: '展示价格',
            attrs: {
              type: 'number'
            }
          },
          drift: {
            type: 'radio',
            label: '价格浮动',
            isOptions: true,
            options: [
              {
                text: '不变',
                value: 1
              },
              {
                text: '增加',
                value: 2
              },
              {
                text: '减少',
                value: 3
              }
            ]
          },
          is_recommend: {
            type: 'radio',
            label: '是否推荐',
            isOptions: true,
            options: [
              {
                text: '是',
                value: 1
              },
              {
                text: '否',
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
          },
          fun: {
            type: 'textarea',
            label: '产品功能'
          },
          back_color: {
            type: 'color',
            label: '背景颜色'
          }
        },
        order: [
          'name',
          'des',
          'price',
          'show_price',
          'drift',
          'is_recommend',
          'solution_id',
          'fun',
          'back_color'
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
      getproductPrice(id).then((res) => {
        this.formData = res.data
        this.nickName = res.data.member.nickName
      })
    },
    handleRequest(data) {
      updateproductPrice(data).then((response) => {
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
        toName: 'product-price-index',
        params: {}
      })
    }
  }
}
</script>
