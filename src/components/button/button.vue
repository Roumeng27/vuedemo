<template>
  <button @click="handleClick" class="m_button" :class="[
    {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-circle': circle,
    }
    ]">
    <slot></slot>
    </button>
</template>
<script>
export default {
  components: {},
  props: {
    buttonDisabled: {
      type: Boolean,
      default: false
    },
    loading: {},
    circle: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(evt) {
        this.$emit('click', evt);
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../scss/index.scss";
.is-disabled {
  cursor: not-allowed;
}
.is-circle{
    border-radius: 50%;
    @include wh(30px,30px);
}
.m_button {
  position: relative;
  //隐藏溢出的径向渐变背景
  overflow: hidden;
  @include wh(80px,30px);
  line-height: 30px;
  text-align: center;
  outline: none;
  cursor: pointer;
  background:$blue; 
  border: none;
  color: #fff;
  border-radius: 3px;
}

.m_button:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  //设置径向渐变
  background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.3s, opacity 0.5s;
}
.m_button:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  //设置初始状态
  transition: 0s;
}
.m_button:hover{
    opacity: 0.8;
}
</style>