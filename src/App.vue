<template>
  <div id="app">
    <li>niha</li>
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
</style>
<style lang="scss">
@import url("./assets/css/base.scss");
</style>

<script>
export default {
  created() {
    this.axios
      .post("/login/login", "loginname=system&pwd=ld@123456")
      .then((response) => {
        console.log(response);
      })
      .catch((responese) => {
        console.log(responese);
      });
  },
};
</script>
