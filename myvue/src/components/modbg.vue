<template>
    <div class="modebg" v-bind:style="{height: bgheight+'px',top: bgtop+'px', opacity: opa}"></div>
</template>

<script>
export default {
  name: 'modeBg',
  props: ['bgheight', 'bgtop', 'opa']
}
</script>

<style scoped>
.modebg{
  position: absolute;
  z-index:10;
  width:100%;
  /*height:100%;*/
  /*min-height: 204px;*/
  background-color: white;
  /*opacity: 0.1;*/
  border: 2px solid #385c75;
}
</style>
