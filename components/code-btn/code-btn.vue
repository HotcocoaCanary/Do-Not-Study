<template>
	<view class="code-btn bg-main" hover-class="bg-main-hover" @click="sendCode">
		{{time>0?time+'s':'发送'}}
	</view>
</template>

<script>
	export default {
		props:{
					phone:{
						type:[Number,String],
						default:''
					}
				},
		data() {
			return {
				time: 0
			}
		},
		methods: {
			sendCode() {
				if (this.time > 0) {
					return
				}
				this.$api.getCaptcha({
					phone: this.phone
				}).then(res => {
					console.log(res)
					if (typeof res == 'number') {
						this.$toast("验证码" + res)
					} else {
						this.$toast("发送成功")
					}
				})
			},
		}
	}
</script>

<style>
	.code-btn {
		width: 200rpx;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		font-size: 14rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-top-right-radius: 8rpx;
		border-bottom-right-radius: 8rpx;




	}
</style>