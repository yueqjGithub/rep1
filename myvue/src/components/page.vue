<template>
    <div class="page">
      <p class="title">{{titleText}}</p>
      <content1></content1>
      <!--两块数据列表-->
      <msg></msg>
      <!--两块数据列表-->
      <router-link to="/mtui">mtui</router-link>
    </div>
</template>

<script>
import content1 from './head.vue'
import msg from './msg.vue'
export default {
  name: 'page',
  data: function () {
    return {
      titleText: '平台数据展示'
    }
  },
  components: {
    content1: content1,
    msg: msg
  }
}
</script>
<style scoped>
.page{
  background-image: url('../assets/img/background.png');
  -webkit-background-size:100% 100%;
  background-size:100% 100%;
  background-position: 0 0;
  padding:15px;
}
.title{
  color: gray;
  text-align: left;
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 30px;
}
</style>
