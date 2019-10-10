<template>
  <div class="mydialog">
    <el-dialog title="新建账号" :visible.sync="dialogshow" center v-dialogDrag :close-on-click-modal='false'>
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="账号名称">
          <el-input size="small" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input size="small" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input size="small" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="部门分组">
            <el-select v-model="formLabelAlign.name" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  watch:{
      dialogshow(n,o){
          console.log(n,o)
      }
  },
  data() {
    return {
        formLabelAlign:{
            name:''
        },
        options:[
            {
                value:0,
                label:'大数据组'
            },
            {
                value:1,
                label:'服务端'
            },
            {
                value:2,
                label:'前端'
            }
        ],
        dialogshow:false
    };
  },
  watch: {},
  computed: {
  },
  methods: {
      showDialog(flag){
          this.dialogshow = flag
      }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.mydialog /deep/{
    .el-dialog{
        width: 500px;
    }
}
</style>