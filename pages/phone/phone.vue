<template>
<view style="background-color: #FFFFFF;">
	<!-- 返回 -->
	<view class="login-back" @click="back">
		<uni-icons type="arrowleft" size="20" color="#ffffff"></uni-icons>
	</view>
	<!-- 背景颜色 -->
	<view class="login-bg"></view>
	<!-- 主体 -->
	<view class="login">
		<view class="flex">
			<text class="title">绑定手机号</text>
	</view>
		<view class=" login-form">
			<uni-icons type="person" size="20"></uni-icons>
			<input  v-model="form.phone" type="text" placeholder="请输入手机号" class="rounded font-md" />
			
	</view>
		<view class=" login-form">
			<uni-icons type="locked" size="20"></uni-icons>
			<input  v-model="form.code" type="text" placeholder="验证码" class="rounded font-md" /> 
			<code-btn :phone="form.phone"></code-btn>
	</view>
		
		<view class="btn bg-main" hover-class="bg-main-hover" @click="submit">绑定</view>
		
	</view>
	
	
	
	
	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				confirm:false,
				form:{
					phone:'',
					code:''
				}
				
			}
		},
		methods: {
			CheckboxChange(e){
				this.confirm=!!e.detail.value.length
			},
			//清空表单
			resetForm() {
				this.form = {
					username: '',
					password: '',
					repassword: ''
				}
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			changType() {
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			submit() {
				uni.showLoading({
					title: '提交中......',
					mask: false
				});
				//调用注册的方法  需要传递的data
				let data = Object.assign(this.form, {});
				this.$api.bindMobile(data).then(res=>{
					this.$toast("绑定成功")
					this.$store.dispatch('updateInfo',data.phone)
					this.back()
				}).finally(()=>{
					uni.hideLoading()
					
				})
				
			}
		}
	}
</script>

<style>
	.login-bg {
		height: 220rpx;
		background-image: linear-gradient(120deg, #a0c0ad 0%, #90a5af 100%);
	}
	
	.login-back {
		position: fixed;
		top: 0;
		left: 0;
		width: 75rpx;
		height: 75rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	
	.login {
		position: absolute;
		top: 200rpx;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 60rpx 70rpx 0 70rpx;
		
	}
	
	.login .title {
		font-size: 22px;
		margin-bottom: 55rpx;
		color: #2e038a;
		
	}
	
	.login-form {
		position: relative;
		margin-bottom: 50rpx;
		
		
	}
	
	.login-form .uni-icons {
		position: absolute;
		left: 0;
		top: 0;
		width: 100rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #272727;
	}
	
	.login-form input {
		height: 100rpx;
		padding-left: 100rpx;
		padding-right: 20rpx;
		background-color: #F5F5F5;
		
		
	}
	
	.btn {
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		
		border-radius: 10rpx;
		
		
	}
	
	.weixin .uni-icons {
		border: 1rpx solid #5CCC84;
		width: 80rpx;
		height: 80rpx;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
</style>
