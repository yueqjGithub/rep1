<template>
    <div class="clearfloat head">
      <cont1 type="网站名" typename="香港中炎投资" cont1width="20" wordwidth="60"></cont1>
      <cont1 type="公司名称" typename="香港中炎投资集团有限公司" cont1width="24" wordwidth="64"></cont1>
      <cont1 type="URL" typename="https://www.csg.ac.cn" cont1width="24" wordwidth="64"></cont1>
      <cont1 type="用户数" typename="123560" cont1width="16" wordwidth="60"></cont1>
      <cont1 type="积分总量" typename="5468956"  cont1width="16" wordwidth="60"></cont1>
      <modeBg bgheight="180" opa="0.1"></modeBg>
    </div>
</template>

<script>
import modeBg from './modbg.vue'
import cont1 from './cont1.vue'
export default {
  name: 'content1',
  components: {
    modeBg: modeBg,
    cont1: cont1
  }
}
</script>

<style scoped>
  .head{
    width:100%;
    height: 180px;
    position: relative;
  }
</style>
