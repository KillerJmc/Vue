<template>
  <div class="main">
    <activity>
      <router-view/>
    </activity>

    <simple-tab-bar/>
  </div>
</template>

<script>
  import SimpleTabBar from "./components/content/tabbar/SimpleTabBar";
  import Activity from "./views/activity/Activity";

  export default {
    components: {SimpleTabBar, Activity}
  }

</script>

<style>
  @import 'assets/style.css';

  .main {
    height: 640px;
    width: 360px;
    border: 1px blue solid;
  }
</style>
