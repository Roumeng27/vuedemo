<template>
  <div id="nginx">
    <searchng></searchng>
    <mytable :dableData="dableData" ></mytable>
    <pagintion @pageChange='page_change' :pageSize='15'></pagintion>
  </div>
</template>

<script>
import searchng from '../compontent/search_nginx.vue'
import mytable from '../compontent/table.vue'
import pagintion from "../../../components/pagination/pagination.vue";
export default {
  components: {
    searchng,
    mytable,
    pagintion
  },
  props: {},
  data() {
    return {
      aaaa:true,
      dableData:[
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
    dianji(){
      this.aaaa = !this.aaaa
    },
    search_user(form) {
      $("#geoJsonTxt").html(this.JsonFormat());
    },
    //翻页
    page_change(num){

    },
    JsonFormat() {
      var json = {
        type: "FeatureCollection",
        features: {
          name: "dddd",
          age: 18,
          isShow:false
        }
      };
      if (typeof json != "string") {
        json = JSON.stringify(json, undefined, 2);
      }
      json = json
        .replace(/&/g, "&")
        .replace(/</g, "<")
        .replace(/>/g, ">");
      return json.replace(
        /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        function(match) {
          var cls = "number";
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = "key";
            } else {
              cls = "string";
            }
          } else if (/true|false/.test(match)) {
            cls = "boolean";
          } else if (/null/.test(match)) {
            cls = "null";
          }
          return '<span class="' + cls + '">' + match + "</span>";
        }
      );
    }
  },
  created() {},
  mounted() {
    
  }
};
</script>
<style lang="scss" scoped>
#nginx{
  height: 100%;
  width: 100%;
  background: #fff;
}

</style>