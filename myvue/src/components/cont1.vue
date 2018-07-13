<template>
    <div class="clearfloat fl cont1" :style="{width: cont1width+'%'}">
      <p class="fl earth">
        <img src=".././assets/img/earth.png" alt="">
      </p>
      <p class="fl line">
        <img src=".././assets/img/Line.png" alt="">
      </p>
      <p class="fr typeword" :style="{width: wordwidth+'%'}">
        <span class="type-span">{{type}}</span>
        <span class="typename-span">{{typename}}</span>
      </p>
    </div>
</template>

<script>
//  头部四个部分的内容组件
export default {
  name: 'cont1',
  props: ['type', 'typename', 'cont1width', 'wordwidth']
}
</script>

<style scoped>
.cont1{
  /*width:20%;*/
  position: relative;
  z-index:11;
  top:34%;
}
  .earth{
    margin-right:5px;
    margin-left:15%;
    margin-top: 3px;
  }
  .typeword{
    /*width:60%;*/
    margin-top: 3px;
  }
  span{
    display: block;
    text-align: left;
    color: white;
  }
  p{
    vertical-align: middle;
  }
  .type-span{
    font-size:14px;
    margin-bottom: 4px;
    text-align:left
  }
</style>
