<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin:0;
    padding:0;
    font-family:'雅黑',Arial;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
.clearfloat{
  zoom:1;
}
  .clearfloat:after{
    content: '';
    width: 0;
    height:0;
    visibility: hidden;
    display: block;
    clear: both;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  li{list-style: none}
  /*mint-ui的样式*/
  .myToast {
    width: 400px;
  }
  /*mint-ui的样式*/
</style>
