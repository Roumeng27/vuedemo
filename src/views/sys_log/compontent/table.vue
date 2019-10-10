<template>
  <div class="acce_table">
      <el-table ref="multipleTable" :data="dableData" tooltip-effect="light" style="width: 100%"
            :header-cell-style="{'background-color': '#EFF3FF','color': '#666666','font-size':'12px'}"
            size="medium" @selection-change="handleSelectionChange" empty-text="暂无数据">
            <el-table-column type="selection" size="medium" align="center"></el-table-column>
            <el-table-column prop="roleName" label="角色" show-overflow-tooltip size="medium" align="left">
            </el-table-column>
            <el-table-column prop="op_time" label="创建时间" show-overflow-tooltip size="medium" align="left">
            </el-table-column>
            <el-table-column label="操作" width="250" align="center">
              <template slot-scope="scope">
                <el-button size='mini' type="primary" @click="acc_auth(true,scope.row)">权限</el-button>
                <el-button size='mini' type="primary" @click="addUser(true,scope.row)">编辑</el-button>
                <el-button size='mini' type="danger" @click="equipmentDeleBtn(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
  </div>
</template>

<script>
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
      addUser(flag,obj){
        this.$emit('editor',obj);
      },
      acc_auth(flag,obj){
        this.$emit('editor',obj);
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