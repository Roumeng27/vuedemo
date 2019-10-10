<template>
  <div class="mydialog_auth">
    <el-dialog title="编辑角色" :visible.sync="dialogshow" center v-dialogDrag :close-on-click-modal='false'>
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="角色名称">
          <el-input size="small" v-model="formLabelAlign.name"></el-input>
        </el-form-item>
      </el-form>
      <div class="tree_auth">
        <div class="auth_name">导航权限</div>
        <div class="treeBox">
          <el-tree :data="treeData"  :default-expand-all='true' show-checkbox node-key="id"
            :default-checked-keys="default_check" :props="defaultProps">
          </el-tree>
        </div>
      </div>
      <div class="tree_fun">
        <div class="auth_name">功能权限</div>
        <div class="treeBox">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
          </el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
      <div class="sub_btn">
        <el-button style="width:80px" size="small" type="primary">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  watch: {
    dialogshow(n, o) {
      console.log(n, o);
    }
  },
  data() {
    return {
      formLabelAlign: {
        name: ""
      },
      options: [
        {
          value: 0,
          label: "大数据组"
        },
        {
          value: 1,
          label: "服务端"
        },
        {
          value: 2,
          label: "前端"
        }
      ],
      defaultProps: {
        children: "children",
        label: "label",
        isLeaf:'leaf'
      },
      default_check: [],
      treeData: [
        {
          id: 1,
          label: "日志管理",

          children: [
            {
              id: 3,
              label: "nginx日志",
              leaf:true
            },
            {
              id: 4,
              label: "808日志",
              leaf:true
            },
          ]
        },
        {
          id: 2,
          label: "信息管理",
          children: [
            {
              id: 5,
              label: "账号管理",
              leaf:true
            },
            {
              id: 6,
              label: "权限管理",
              leaf:true
            }
          ]
        }
      ],
      dialogshow: false,
      checkAll: false,
      checkedCities: [],
      cities: ['新建',"编辑", "删除", "查看", "新建2","编辑2", "删除2", "查看2"],
      isIndeterminate: true
    };
  },
  watch: {},
  computed: {},
  methods: {
    showDialog(flag) {
      this.dialogshow = flag;
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
      console.log(value);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.mydialog_auth /deep/ {
  .el-dialog {
    width: 500px;
  }
  .sub_btn {
    width: 80px;
    margin: 20px auto 0;
  }
  .tree_auth {
    max-height: 230px;
    overflow: auto;
    .auth_name {
      padding-left: 20px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
    .treeBox {
      margin-left: 70px;
    }
  }
  .tree_fun {
    max-height: 230px;
    overflow: auto;
    .auth_name {
      padding-left: 20px;
      height: 30px;
      line-height: 30px;
      font-size: 12px;
    }
    .treeBox {
      margin-left: 75px;
      width: 360px;
    }
  }
}
</style>