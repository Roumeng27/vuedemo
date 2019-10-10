<template>
  <div class="mydialog">
    <el-dialog title="新建角色" :visible.sync="dialogshow" center v-dialogDrag :close-on-click-modal='false'>
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="角色名称">
          <el-input size="small" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="角色名称">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="formLabelAlign.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div class="sub_btn">
        <el-button style="width:80px" size="small" type="primary" @click="submit()">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import acc_http from '../../../api/accessApi/accessApi.js'
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
            name:'',
            remark:''
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
      },
      submit(){
        var params = {
          name:this.formLabelAlign.name,
          remarks:this.formLabelAlign.remark
        }
        acc_http.creatRole(params).then(res =>{
          if(res.data.ret == 1){
            this.$message.success('创建成功')
            this.dialogshow = false;
            this.$emit('dialog_change')
          }
        })
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
    .sub_btn{
      width: 80px;
      margin: 0 auto;
    }
}
</style>