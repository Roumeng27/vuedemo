<template>
  <div class="account">
    <mysearch @search_acco='search_user' @creat_acco='creat_acco'></mysearch>
    <mytable :dableData="dableData" @editor='editor_acc'></mytable>
    <pagintion @pageChange='page_change' :pageSize='15'></pagintion>
    <mydialog ref='mydilog'></mydialog>
    
  </div>
</template>

<script>
import mysearch from "./compontent/sesrch.vue";
import mytable from "./compontent/table.vue";
import pagintion from "../../components/pagination/pagination.vue";
import mydialog from "./compontent/dialog.vue";
import accountHttp from "../../api/accountApi/index.js";
export default {
  components: {
    mysearch,
    mytable,
    pagintion,
    mydialog
  },
  props: {},
  data() {
    return {
      dableData: [
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        },
        {
          roleName: "超级管理员",
          op_time: "2019-9-18 18:24:26"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    aaa() {
      this.show_dalog = true;
    },
    page_change(num) {},
    search_user(form) {
      $("#geoJsonTxt").html(this.JsonFormat());
      var params = {
        merchant_id: "multilevel_f1_20181121",
        dtoken: "3293dffb789625b757c080476a005c22"
      };
      // accountHttp(params).then(res => {
      //   console.log(res);
      // });
    },
    creat_acco(flag) {
      this.$refs.mydilog.showDialog(true);
    },
    editor_acc(obj) {
      console.log(obj);
      this.show_dalog = true;
      this.$refs.mydilog.showDialog(true);
    }
    
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.account {
  height: 100%;
  overflow: auto;
}


</style>