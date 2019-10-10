<template>
  <div class="mypagination">
    <el-pagination :small='small' style="float:right" background @size-change="handleSizeChange"
      @current-change="handleCurrentChange" :current-page="currentPage"
      layout="total, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    currentPage: {
      type:Number,//子组件想要的类型
      required: false,//是否必传
      default: 1//默认值
    },
    small: {
      required: false,
      default: false
    },
    total:{
      required: true,
      default: 0
    },
    pageSize: {
      required: true,
      default: 10
    },
    pageSizes: {
      required: false,
      default: ()=>{
        return [10, 15, 20, 25, 30]
      }
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    handleSizeChange(num) {},
    //改变页码
    handleCurrentChange(num) {
      this.$emit("pageChange", num);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.mypagination {
  width: 100%;
  height: 40px;
  padding-top: 8px;
  background: #fff;
}
</style>