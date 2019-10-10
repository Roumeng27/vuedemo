<template>
  <div class="access_authority">
    <mysearch @search_data='searchData' @create_role='createRole'></mysearch>
    <mytable :dableData="dableData" @editor_auth='editor_auth' @delete_role='delete_role'></mytable>
    <pagintion @pageChange='page_change' :pageSize='15' :total='page_total'></pagintion>
    <mydialog ref='mydilog' @dialog_change='dialog_change'></mydialog>
    <mydialogauth ref='mydilogauth'></mydialogauth>
  </div>
</template>

<script>
import mysearch from "./compontent/sesrch.vue";
import mytable from "./compontent/table.vue";
import pagintion from "../../components/pagination/pagination.vue";
import mydialog from "./compontent/dialog.vue";
import mydialogauth from "./compontent/dialog_auth.vue";
import acc_http from "../../api/accessApi/accessApi.js";
export default {
  components: {
    mysearch,
    mytable,
    pagintion,
    mydialog,
    mydialogauth
  },
  props: {},
  data() {
    return {
      dableData: [],
      search_form: {
        id: ""
      },
      page_total: 0
    };
  },
  watch: {},
  computed: {},
  methods: {
    //翻页
    page_change(num) {
      this.get_rolelist(num);
    },
    //查询
    searchData(obj) {
      this.search_form = obj;
      this.get_rolelist(1);
    },
    //新增
    createRole() {
      this.$refs.mydilog.showDialog(true);
    },
    //编辑
    editor_auth(obj) {
      this.$refs.mydilogauth.showDialog(true);
    },
    //删除
    delete_role() {
      this.get_rolelist(1);
    },
    get_rolelist(num) {
      var params = {
        user_id: this.search_form.id,
        page_num: num,
        page_count: 10
      };
      acc_http.get_rolelist(params).then(res => {
        if (res.data.ret == 1) {
          this.dableData = res.data.roles;
          this.page_total = res.data.total;
        }
      });
    },
    dialog_change() {
      this.get_rolelist(1);
    },
    change_icon(){
      const changeFavicon = link => {
        let $favicon = document.querySelector('link[rel="icon"]');
        // If a <link rel="icon"> element already exists,
        // change its href to the given link.
        if ($favicon !== null) {
          $favicon.href = link;
          // Otherwise, create a new element and append it to <head>.
        } else {
          $favicon = document.createElement("link");
          $favicon.rel = "icon";
          $favicon.href = link;
          document.head.appendChild($favicon);
        }
      };
      let icon = ''; // 图片地址
      changeFavicon(icon); // 动态修改网站图标
      let title = ''; // 网站标题
      document.title = title; // 动态修改网站标题
    }
  },
  created() {
    this.get_rolelist(1);
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.access_authority {
}
</style>