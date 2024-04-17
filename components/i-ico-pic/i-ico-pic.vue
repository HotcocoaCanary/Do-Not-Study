<template>
  <view class="flex flex-wrap py-2">
    <view class="flex flex-column align-center justify-center py-1"
          v-for="(i, index) in imgs" :key="index" style="width: 25%;" hover-class="bg-light">
      <image :src="i.src" mode="widthFix" style="width: 70rpx;height: 70rpx;"></image>
      <text class="font-sm text-muted mt-1">{{i.name}}</text>  
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        //定义数组
        imgs: [
          { src: '/static/img/huodong.png', name: "活动" },
          { src: '/static/img/lianxi.png', name: "联系" },
          { src: '/static/img/miaosha.png', name: "秒杀" },
          { src: '/static/img/pintuan.png', name: "拼团" },
          { src: '/static/img/zhibo.png', name: "直播" },
          { src: '/static/img/zhuanlan.png', name: "专栏" },
          { src: '/static/img/shequ.png', name: "社区" },
		  { src: '/static/img/gengduo.png', name: "更多" }
        ]
      };
    },
    methods: {}
  };
</script>

<style>
  
</style>