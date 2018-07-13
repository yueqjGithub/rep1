<template>
    <div :class=listclass class="msglist">
      <p class="listtitle clearfloat">
        <img src=".././assets/img/tit.png" alt="" class="flblock">
        <span class="listTitle_span flblock">{{listTitle}}</span>
        <span class="frblock msgcount_num">{{countNum}}条</span>
        <span class="frblock msgcount">总量</span>
      </p>
      <msgul></msgul>
      <modbg bgheight="237" bgtop="0" opa="0.1"></modbg>
    </div>
</template>

<script>
import modbg from './modbg.vue'
import msgul from './msgul.vue'
export default {
  name: 'msglist',
  props: ['listclass', 'listTitle', 'countNum'],
  components: {
    modbg: modbg,
    msgul: msgul
  }
}
</script>

<style scoped>
  .msglist{
    width:49.6%;
    padding-top: 5px;
    padding-bottom: 5px;
    position: relative;
  }
  .listTitle_span{
    color:white;
  }
  .listtitle{
    line-height:21px;
    margin:6px 0px;
  }
  .flblock{
    display: inline-block;
    float:left;
    /*margin-left:13px;*/
  }
  .listtitle img{
    margin:3px 2px 0px 5px;
  }
  .frblock{
    display:inline-block;
    float: right;
  }
  .msgcount{
    color:#eeeeee;
    font-size:12px;
  }
  .msgcount_num{
    color:#26cca6;
    font-weight:bold;
    font-size:16px;
    margin-right:15px;
  }
</style>
