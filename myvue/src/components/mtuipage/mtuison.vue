<template>
    <div>
      <button @click="showIndicator">显示{{tit}}</button>
    </div>
</template>

<script>
import {Indicator} from 'mint-ui'
export default {
  name: 'mtuison',
  data: function () {
    return {
      tit: ''
    }
  },
  created: function () {
    let tit = this.$route.query.title
    this.tit = tit
  },
  methods: {
    showIndicator: function () {
      Indicator.open({
        text: '加载中..',
        spinnerType: 'snake'
      })
      setTimeout(() => {
        Indicator.close()
      }, 5000)
    }
  }
}
</script>

<style scoped>

</style>
