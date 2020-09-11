<template>
  <el-container class>
    <el-header>
      <div class="logo"></div>
      <el-menu
        class="nav"
        :default-active="curUrl"
        router
        @select="selectMenu"
        mode="horizontal"
        background-color="#4267ff"
        text-color="#fff"
        active-text-color="#fff"
      >
        <el-menu-item
          v-for="(item, index) in menuList"
          :index="item.index"
          :key="index"
        >{{item.name}}</el-menu-item>
      </el-menu>
      <div class="toolbar"></div>
    </el-header>
    <el-container class="main">
      <el-aside width="200px">
        <el-menu
          :default-active="menuList[curIndex].children[0].index"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="test"
          router
        >
          <el-menu-item
            v-for=" (item, indey) in menuList[curIndex].children"
            :key="indey"
            :index="item.index"
          >
            <i class="el-icon-setting"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  data() {
    return {
      curIndex: 0,
      childcCurUrl: "/home/sjfx",
      curUrl: "/home/sjfx",
      menuList: [
        {
          name: "首页",
          index: "/home/sjfx",
          children: [
            { name: "数据分析", index: "/home/sjfx" },
            { name: "安全大屏", index: "/home/aqdp" },
            { name: "快速查询", index: "/home/kscx" },
          ],
        },
        {
          name: "资产管理",
          index: "/assetManage/zcqd",
          children: [
            { name: "资产清单", index: "/assetManage/zcqd" },
            { name: "资产添加", index: "/assetManage/zctj" },
            { name: "IP库维护", index: "/assetManage/ipwh" },
          ],
        },
        {
          name: "风险管理",
          index: "/riskManage/ldqd",
          children: [
            { name: "漏洞清单", index: "/riskManage/ldqd" },
            { name: "漏洞添加", index: "/riskManage/ldtj" },
          ],
        },
        {
          name: "智能监测",
          index: "/intelMonitor/sdsm",
          children: [
            { name: "深度扫描", index: "/intelMonitor/sdsm" },
            { name: "资产监测", index: "/intelMonitor/zcjc" },
            { name: "风险监测", index: "/intelMonitor/fxjc" },
            { name: "白名单", index: "/intelMonitor/bmd" },
          ],
        },
        {
          name: "统计报表",
          index: "/statisticsReport/zcmx",
          children: [
            { name: "资产明细", index: "/statisticsReport/zcmx" },
            { name: "风评报告", index: "/statisticsReport/fpbg" },
          ],
        },
        {
          name: "我的任务",
          index: "/myTask/zchj",
          children: [
            { name: "资产稽核", index: "/myTask/zchj" },
            { name: "风险处置", index: "/myTask/fxcz" },
          ],
        },
        {
          name: "系统配置",
          index: "/sysConfig/yhgl",
          children: [
            { name: "用户管理", index: "/sysConfig/yhgl" },
            { name: "组织管理", index: "/sysConfig/zzgl" },
            { name: "权限分组", index: "/sysConfig/qxfz" },
            { name: "日志审计", index: "/sysConfig/rzsj" },
          ],
        },
      ],
    };
  },

  components: {},

  methods: {
    test(index, indey) {
      // this.childcCurUrl = index;
      // console.log(233333, this.childcCurUrl)
    },
    selectMenu(index) {
      // this.curUrl = index;
      this.menuList.forEach((item, indey) => {
        if (item.index == index) {
          this.curIndex = indey;
          // this.childcCurUrl = index;
          // console.log(this.childcCurUrl)
          // this.childcCurUrl = this.menuList[indey].children[0].index
        }
      });
    },
  },

  created() {
    this.curUrl = this.$route.path == "/" ? "/home/sjfx" : this.$route.path;
    // this.childcCurUrl = this.$route.path == "/" ? "/home/sjfx" : this.$route.path;
    // console.log('childcCurUrl', this.childcCurUrl)
    this.menuList.forEach((item, indey) => {
      if (item.index.split("/")[1] == this.$route.path.split("/")[1]) {
        this.curIndex = indey;
      }
    });
  },

  watch: {
    childcCurUrl(a, b) {
      console.log('watch', a, b)
      this.$forceUpdate()
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
  border: none;
}
.el-aside {
  height: calc(100vh - 60px);
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 60px;
  left: 0;
}
.el-header {
  height: 60px;
  padding: 0;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  background-color: #4267ff;
  .logo {
    width: 200px;
    background-color: #4267ff;
  }
  .nav {
    height: 100%;
    flex: 1;
    background-color: red;
  }
  .toolbar {
    width: 30%;
    background-color: #4267ff;
  }
}
.el-main {
  margin-left: 200px;
  margin-top: 60px;
  height: 2000px;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
