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
    <!-- 检索 end -->
    <!-- 公共操作 star -->
    <fire-oper-menu
      :show-excel-export="true"
      :show-excel-import="true"
      @handleCreate="handleCreate"
    />
    <!-- 公共操作 end -->

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
      <template slot="username" slot-scope="{ row }">
        <span>{{ row.user ? row.user.username : "" }}</span>
      </template>
      <template slot="action" slot-scope="{ row, index }">
        <el-button
          type="primary"
          size="mini"
          style="margin-right: 10px"
          @click="amend(row, index)"
        >修改</el-button>

        <el-popconfirm
          confirm-button-text="确认"
          cancel-button-text="取消"
          icon="el-icon-info"
          icon-color="red"
          title="确认删除吗?"
          @confirm="delectRow(row, index)"
        >
          <el-button slot="reference" type="danger" size="mini">删除</el-button>
        </el-popconfirm>
      </template>
    </fire-table>
    <!-- 数据列表 end -->
  </div>
</template>

<script>
import {
  proAppList,
  deleteProApp
} from '@/views/diandi_website/api/proapp.js'
export default {
  components: {},
  data() {
    return {
      dialogTableVisible: false,
      // 表格数据 start
      tableColumns: [
        { label: '标题', prop: 'title' },
        // { label: '链接地址', prop: 'link' },
        { label: '标签一', prop: 'tip1' },
        { label: '标签二', prop: 'tip2' },
        { label: '创建时间', prop: 'create_time' },
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
          { label: '标题', type: 'input', value: 'WebsiteProApp[title]' }
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
      proAppList(that.filterInfo.data).then((response) => {
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
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    // 修改
    amend(row) {
      this.$router.push({
        name: 'product-proapp-update',
        params: {
          id: row.id,
          rowData: row
        }
      })
    },
    handleCreate() {
      this.$router.push({
        name: 'product-proapp-create'
      })
    },
    // 删除
    delectRow(row) {
      const that = this
      deleteProApp(row.id).then((response) => {
        that.dialogFormVisible = false
        if (response.code === 200) {
          this.$message.success(response.message)
          that.getList()
        } else {
          this.$message.error(response.message)
        }
      })
    },
    handleChange(value) {
      console.log(value)
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
