<template>
	<view id="back">
		<i-wd-login></i-wd-login>
		<view class="flex flex-wrap py-2 wd-bar" style="padding: 10px;">
			<navigator url="/pages/index/index" open-type="switchTab"
				class="flex flex-column align-center justify-center py-1" v-for="(item, i) in imgs" :key="i"
				style="width: 25%;" hover-class="bg-light">
				<image :src="item.src" mode="widthFix" style="width: 40rpx; height: 40rpx;"></image>
				<text class="font-sm text-muted mt-1">{{item.name}}</text>
			</navigator>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				imgs: [{
						src: '/static/img/dingdan.png',
						name: "订单"
					},
					{
						src: '/static/img/xiaoxi.png',
						name: "消息"
					},
					{
						src: '/static/img/shoucang.png',
						name: "收藏"
					},
					{
						src: '/static/img/xuexi.png',
						name: "在学"
					},
				]
			};
		},
		methods: {}
	};
</script>

<style>
	.wd-bar {
		margin: 0 auto;
		width: 80%;
		height: 40px;
		background-color: white;
		border-radius: 8px;
		padding-top: 15px;
		padding-bottom: 5px;

	}

	#back {
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
		background-color: #c1c1c1;
	}
</style>