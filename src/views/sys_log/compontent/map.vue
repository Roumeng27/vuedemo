<template>
  <div id="mymap">
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    initmap() {
      var map = new BMap.Map("mymap");
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.addControl(new BMap.NavigationControl());
      map.enableScrollWheelZoom();
      map.enableContinuousZoom();
    },
    check_flash() {
      for (var i = 0, len = navigator.plugins.length; i < len; i++) {
        var plugin = navigator.plugins[i];
        if (plugin.name == "Shockwave Flash") {
          if (plugin.filename == "internal-not-yet-present") {
            commFunc.confirm(
              "您当前浏览器flash插件版本较低，可能无法使用系统中导出Excel功能，现在去升级？",
              function() {
                window.open(
                  "https://get2.adobe.com/cn/flashplayer/otherversions/"
                );
              }
            );
          }
          break;
        }
      }
    },
    flashChecker() {
      var hasFlash = 0; //是否安装了flash
      var flashVersion = 0; //flash版本
      if (document.all) {
        var swf = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        if (swf) {
          hasFlash = 1;
          VSwf = swf.GetVariable("$version");
          flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
        }
      } else {
        if (navigator.plugins && navigator.plugins.length > 0) {
          var swf = navigator.plugins["Shockwave Flash"];
          if (swf) {
            hasFlash = 1;
            var words = swf.description.split(" ");
            for (var i = 0; i < words.length; ++i) {
              if (isNaN(parseInt(words[i]))) continue;
              flashVersion = parseInt(words[i]);
            }
          }
        }
      }
      return { f: hasFlash, v: flashVersion };
    }
  },
  created() {},
  mounted() {
    this.initmap();
    this.check_flash();
    var fls = this.flashChecker();
    console.log(fls)
    if (!fls.f) {
      if (confirm("您的浏览器未安装Flash插件，现在安装？")) {
        window.location.href = "http://get.adobe.com/cn/flashplayer/";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#mymap {
  width: 800px;
  height: 600px;
}
</style>