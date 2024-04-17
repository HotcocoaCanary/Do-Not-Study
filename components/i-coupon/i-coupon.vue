<template>
  <view>
    <view class="p-2">
      <scroll-view scroll-x="true" class="scroll-row">
        <view v-for="i in 3" class="coupon" @click="redirectToPage">
          <view>
            <text>￥100</text>
            <text class="font">满￥200可用</text>
          </view>
          <view>
            领取
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    redirectToPage() {
      // 在这里执行页面导航逻辑，使用 $router.push 方法
      this.$router.push('/pages/newpages/receive/receive'); // 替换为您希望跳转的页面路径
    }
  }
};
</script>

<style>
	.coupon {
		width: 310rpx;
		display: inline-flex;
		color: #FFFFFF;
		margin-right: 30rpx;

	}

	.coupon>view:first-child {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx 30rpx;
		background-color: #8d9fa4;
		border-right: 4rpx dashed;

	}
	.coupon>view:last-child{
		width: 120rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #989e8f;
		font-size: 30rpx;	
	}
</style>
