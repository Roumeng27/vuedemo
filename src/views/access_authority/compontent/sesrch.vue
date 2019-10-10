<template>
  <div class="acce_search">
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色ID：" prop="name">
        <el-input v-model="ruleForm.id" placeholder="请输入内容" size='small' :clearable='true'></el-input>
      </el-form-item>
       <el-button size="small" icon="el-icon-search" type="primary" @click="search()">查询</el-button>
       <el-button size="small" icon="el-icon-plus" type="primary" @click="create()">新建</el-button>
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
          id:''
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    search(){
      this.$emit('search_data',this.ruleForm)
    },
    create(){
      this.$emit('create_role')
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
        margin-left: 20px;
    }
    .el-form-item{
        display: inline-block;
        margin:10px 0;
    }
}
</style>