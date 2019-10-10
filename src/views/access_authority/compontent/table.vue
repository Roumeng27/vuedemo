<template>
  <div class="acce_table">
      <el-table ref="multipleTable" :data="dableData" tooltip-effect="light" style="width: 100%"
            :header-cell-style="{'background-color': '#EFF3FF','color': '#666666','font-size':'12px'}"
            size="medium" @selection-change="handleSelectionChange" empty-text="暂无数据">
            <el-table-column type="selection" size="medium" align="center"></el-table-column>
            <el-table-column prop="name" label="角色" show-overflow-tooltip size="medium" align="left">
            </el-table-column>
            <el-table-column prop="remarks" label="创建时间" show-overflow-tooltip size="medium" align="left">
            </el-table-column>
            <el-table-column label="操作" width="250" align="center">
              <template slot-scope="scope">
                <el-button size='mini' type="primary" @click="addUser(true,4,scope.row)">查看</el-button>
                <el-button size='mini' type="primary" @click="editor(scope.row)">编辑</el-button>
                <el-button size='mini' type="danger" @click="deleBtn(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
  </div>
</template>

<script>
import deleteobj from '../../../api/accessApi/accessApi.js'
export default {
  components:{},
  props:{
      dableData:{
          required:true,
          default:[]
      }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{
      handleSelectionChange(){

      },
      editor(obj){
        this.$emit('editor_auth',obj)
      },
      deleBtn(obj){
        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = {
            id:obj.id
          }
          deleteobj.del_role(params).then(res =>{
            if(res.data.ret == 1){
              this.$message.success('删除成功');
              this.$emit('delete_role')
            }else{
              this.$message.error('删除失败')
            }
          })
        })
      }
  },
  created(){},
  mounted(){}
}
</script>
<style lang="scss" scoped>
.acce_table{
    margin-top: 10px;
}
</style>