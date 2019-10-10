<template>
  <div id="home_page">
    <top-data></top-data>
    <ul>
      <el-button @click="creat()">报警发生</el-button>
      <li v-for="(item, index) in alarm" :key="index">
        {{item.name}}+{{item.id}}
      </li>
    </ul>
    
  </div>
</template>

<script>
import topData from './compontent/top.vue'
export default {
  components: {
    topData
  },
  props: {},
  data() {
    return {
      num:1,
      alarm:[
        {
          name:'第一条',
          id:1
        }
      ]//报警列表
    };
  },
  watch: {},
  computed: {},
  methods: {
    creat(){
      this.num +=1 ;
      var obj = {
        name:'第'+this.num+'条',
        id:''
      }
      obj.id = this.num;
      this.alarm.unshift(obj);
    }
  },
  created() {},
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
#home_page /deep/ {
  .grid-content{
    background: #fff;
    min-width: 200px;
    height: 100px;
    box-shadow:2px 2px 5px #0000000d;
        border-color: rgba(0, 0, 0, 0.05);
        .icon_left{
          float: left;
          margin: 20px;
          font-size: 40px;
          color: #40c9c6;
          cursor: pointer;
          &:hover{
            color:#fff;
            background: #40c9c6;
          }
        }
        .detail_num{
          float: right;
          height: 100px;
          line-height: 100px;
          font-size: 40px;
          margin-right: 20px;
          color: #666;
        }
  }
}
</style>