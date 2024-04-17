<template>
	<view>
		<uni-list :border="false">
			<uni-list-item :border="false" title="账户安全" showArrow></uni-list-item>
			<uni-list-item :border="false" title="清除缓存" note="">
				<text slot='footer'>26M</text>
			</uni-list-item>
			<uni-list-item :border="false" title="检查更新" showArrow></uni-list-item>
			<uni-list-item :border="false" title="当前版本" note="">
				<text slot='footer'>1.0.1</text>
			</uni-list-item>
		</uni-list>
		<view class="p-3" @click="handleLogout()">
			<main-buttom>退出登录</main-buttom>
			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			handleLogout(){
				uni.showModal({
					content:'是否要退出登录？',
					success: (res) => {
						console.log(res)
						if(res.cancel){
							return
						}
						//删除缓存  
						this.$api.logout()
						this.$store.dispatch('logout').then(res=>{
							this.$toast("退出登录成功")
						})
						
					}
				})
			}
		}
	}
</script>

<style>
	.p-3{
		margin: auto;
		text-align: center;
		background-color: aquamarine;
		border-radius: 50px;
		width: 85%;
	}
</style>
