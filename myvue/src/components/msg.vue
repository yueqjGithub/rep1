<template>
    <div class="clearfloat msg">
      <!--左边-->
      <msglist listclass="fl" listTitle="网站注册用户数" countNum="65535"></msglist>
      <!--右边-->
      <msg-right listclass="fr" listTitle="订单交易数据" countNum="56487"></msg-right>
    </div>
</template>

<script>
import msglist from './msglist.vue'
import msglistRight from './msglist_right.vue'
export default {
  name: 'msg',
  components: {
    msglist: msglist,
    msgRight: msglistRight
  }
}
</script>

<style scoped>
.msg{
  margin:15px 0px;
  width:100%;
}
</style>
