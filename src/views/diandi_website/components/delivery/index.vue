<template>
  <div class="app-container">
    <!-- 检索 start -->
    <el-filter
      size="medium"
      :data="filterInfo.data"
      :field-list="filterInfo.fieldList"
      :show-selection="false"
      @handleFilter="handleFilter"
      @handleReset="handleReset"
      @handleEvent="handleEvent"
    />

    <!-- 数据列表 start -->
    <fire-table
      ref="table"
      :list="list"
      :total="total"
      :list-loading="listLoading"
      :columns="tableColumns"
      :list-query="filterInfo.data"
      @getList="getList"
      @handleSelectionChange="handleSelectionChange"
    >
      <template slot="is_website" slot-scope="{ row }">
        {{ row.is_website===1?'是':'不是' }}
      </template>
      <template slot="action" slot-scope="{ row }">
        <el-button
          type="success"
          size="small"
          @click="selectBloc(row)"
        >选择</el-button>
      </template>
    </fire-table>
    <!-- 数据列表 end -->
  </div>
</template>

<script>
import {
  sysfuncateList
} from '@/views/diandi_website/api/sysfuncate.js'
export default {
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      // 表格数据 start
      tableColumns: [
        { label: '标题', prop: 'name' },
        { label: 'icon', prop: 'image', slot: 'image' },
        { label: '是否是官网', prop: 'is_website', slot: 'is_website' },
        { label: '创建时间', prop: 'created_at' },
        {
          label: '操作',
          slot: 'action',
          fixed: 'right',
          width: 200
        }
      ],
      // 表格数据end
      // 检索 start
      filterInfo: {
        data: {
          page: 1,
          pageSize: 10
        },
        fieldList: [
          { label: '标题', type: 'input', value: 'PartyAnswer[title]' }
        ]
      },
      total: 0,
      list: [],
      excelList: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleSelectionChange(val) {
      console.log('传递来的', val)
    },
    handleRequestSuccess() {
    },
    selectType(val) {
      console.log(val)
    },
    getList() {
      const that = this
      that.listLoading = true
      sysfuncateList(that.filterInfo.data).then((response) => {
        that.total = response.data.dataProvider.total
        that.list = response.data.dataProvider.allModels
        console.log('列表数据层级测试', that.list)
        that.listLoading = false
      })
    },
    //  搜索
    handleFilter(row) {
      const that = this
      console.log(row)
      that.$set(that.filterInfo, 'data', row)
      console.log('检索前', that.filterInfo.data)
      that.getList()
    },
    handleReset(row) {
      console.log(row)
    },
    handleEvent(row) {
      console.log(row)
    },
    selectBloc(row) {
      this.$emit('selectBloc', row)
    }
  }
}
</script>
<style scoped>
.active {
  color: #fff;
  background-color: #409eff;
}
.isActive {
  color: #fff;
  background-color: #9ca1a1;
}
</style>
s
