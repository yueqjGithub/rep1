<template>
    <div class="msgul">
      <ul class="clearfloat son_ul">
        <li class="fl son_li span1">序号</li>
        <li class="fl son_li span2">用户名</li>
        <li class="fl son_li span3">交易对象（平台/个人）</li>
        <li class="fl son_li span4">交易金额</li>
        <li class="fl son_li span5">交易时间</li>
      </ul>
      <ul class="ful">
        <li v-for="item in personal" :key="item.id" class="fli" v-bind:class="{opbg:item.id%2==0}">
          <span class="span1">{{item.id}}</span>
          <span class="span2">{{item.name}}</span>
          <span class="span3">{{item.type}}</span>
          <span class="span4">{{item.money}}</span>
          <span class="span5">{{item.register_time}}</span>
        </li>
      </ul>
      <!--按钮-->
      <ul class="btul clearfloat">
        <li class="fl btbg prepage" @click="prePage"><img src=".././assets/img/button1.png" alt=""></li>
        <li class="fl btbg">{{cur}}</li>
        <li class="fl">/</li>
        <li class="fl allpage">{{allpage}}</li>
        <li class="fl btbg">GO</li>
        <li class="fl btbg nextpage" @click="nextPage"><img src=".././assets/img/button1.png" alt=""></li>
      </ul>
      <!--按钮-->
    </div>
</template>

<script>
import modbg from './modbg.vue'
export default {
  name: 'msgulRight',
  props: ['tit3', 'tit4', 'tit5'],
  data: function () {
    return {
      personal: [],
      cur: 1,
      allpage: '',
      percount: 8
    }
  },
  components: {
    modbg: modbg
  },
  created: function () {
    this.$http.get('../../static/data/web_api_2.json', {emulateJSON: true}).then(
      function (response) {
        // 获取总页数
        this.allpage = Math.ceil(response.data.data.length / this.percount)
        let min = (this.cur - 1) * this.percount
        let max = this.cur * this.percount
        let arr = []
        for (let i = min; i < max; i++) {
          if (response.data.data[i]) {
            arr.push(response.data.data[i])
          }
        }
        this.personal = arr
      }, function (response) {
        console.log(response)
      }
    )
  },
  methods: {
    nextPage: function () {
      if (this.cur < this.allpage) {
        this.cur += 1
        this.$http.get('../../static/data/web_api_2.json', {emulateJSON: true}).then(
          function (response) {
            // 获取总页数
            this.allpage = Math.ceil(response.data.data.length / this.percount)
            let min = (this.cur - 1) * this.percount
            let max = this.cur * this.percount
            let arr = []
            for (let i = min; i < max; i++) {
              if (response.data.data[i]) {
                arr.push(response.data.data[i])
              }
            }
            this.personal = arr
            console.log(this.personal)
          }, function (response) {
            console.log(response)
          }
        )
      }
    },
    prePage: function () {
      if (this.cur > 1) {
        this.cur -= 1
        this.$http.get('../../static/data/web_api_2.json', {emulateJSON: true}).then(
          function (response) {
            // 获取总页数
            this.allpage = Math.ceil(response.data.data.length / this.percount)
            let min = (this.cur - 1) * this.percount
            let max = this.cur * this.percount
            let arr = []
            for (let i = min; i < max; i++) {
              if (response.data.data[i]) {
                arr.push(response.data.data[i])
              }
            }
            this.personal = arr
          }, function (response) {
            console.log(response)
          }
        )
      }
    }
  }
}
</script>

<style scoped>
.msgul{
  width:100%;
  position: relative;
  z-index:11;
}
  .ful{
    width:100%;
    height: 144px;
  }
  .fli{
    width:100%;
    text-align: left;
  }
  .fli span{
    /*width:15.6%;*/
    color: white;
    font-size: 12px;
    text-align: center;
    /*margin-left:1%;*/
    display: inline-block;
  }
  .son_ul{
    width:100%;
    background: rgba(255,255,255,0.3);
  }
  .son_li{
    /*width:15.6%;*/
    color: white;
    font-size: 12px;
    text-align: center;
    /*margin-left:1%*/
  }
  .span1{
    width:8%
  }
  .span2{
    width:12%;
  }
  .span3{
    width:24%;
  }
  .span4{
    width:24%;
  }
  .span5{
    width:26%;
  }
  .span6{
    width:26%;
  }
  .opbg{
    background: rgba(255,255,255,0.1);
  }
  .btul{
    /*width:100%;*/
    margin-top: 10px;
    margin-left:33%;
  }
  .btul li{
    color: white;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
  }
  .btbg{
    background: rgba(57,87,112,0.7);
    width: 35px;
    margin:0 5px;
    color: white;
  }
  .allpage{
    margin:0 3px;
  }
  .nextpage img{
    transform: rotateY(180deg);
  }
</style>
