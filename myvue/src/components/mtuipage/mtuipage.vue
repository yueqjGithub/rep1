<template>
    <div>
      <button @click="showMsg">点开可以看Toast哟</button>
      <router-link :to="{path:'/son',query:{title:'indiractor'}}">
        <p>
          查看indiractor
        </p>
      </router-link>
      <router-view name="a" class="aview"></router-view>
      <router-link to="/loadmore">loadmore</router-link>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
  name: 'mtpage',
  data: function () {
    return {
      isToast: false
    }
  },
  methods: {
    showMsg: function () {
      Toast({
        message: '加载中',
        position: 'middle',
        duration: '55000',
        className: 'myToast'
      })
    }
  }
}
</script>

<style scoped>
.aview{
  width:40%;
  margin:0 auto;
  border: 1px solid black
}
</style>
