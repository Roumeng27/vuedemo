<template>
  <div class="acce_search">
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入内容" size='small'></el-input>
      </el-form-item>
      <el-form-item label="启用状态" prop="name">
        <el-select size='small' v-model="ruleForm.name" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入内容" size='small'></el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="name">
        <el-date-picker
          size='small'
          v-model="ruleForm.name"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
       <el-button size="small" icon="el-icon-search" type="primary" @click="search_user()">查询</el-button>
       <el-button size="small" icon="el-icon-plus" type="primary" @click="creat_user()">新建</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
          name:''
      },
      options:[
        {
          label:'全部',
          value:0
        },
        {
          label:'启用',
          value:1
        },
        {
          label:'禁用',
          value:2
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    search_user(){
      this.$emit('search_acco',this.ruleForm)
    },
    creat_user(){
      this.$emit('creat_acco',true)
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.acce_search /deep/{
    background: #fff;
    box-shadow: 3px 3px 5px #dcdfe6;
    .el-button{
        width: 80px;
        margin:10px 0 10px 20px;

    }
    .el-form-item{
        display: inline-block;
        margin:10px 0;
        
    }

}
</style>