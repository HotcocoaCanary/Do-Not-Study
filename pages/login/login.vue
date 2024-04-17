<template>
<view style="background-color: #FFFFFF;">
	<!-- 返回 -->
	<view class="login-back" @click="back">
		<uni-icons type="arrowleft" size="20"color="#ffffff"></uni-icons>
	</view>
	<!-- 背景颜色 -->
	<view class="login-bg"></view>
	<!-- 主体 -->
	<view class="login">
		<view class="flex">
			<text class="title">{{type=='login'?'登录':'注册'}}</text>
	</view>
		<view class=" login-form">
			<uni-icons type="person" size="20"></uni-icons>
			<input v-model="form.username" type="text" placeholder="请输入用户名" class="rounded font-md" />
			
	</view>
		<view class=" login-form">
			<uni-icons type="locked" size="20"></uni-icons>
			<input v-model="form.password" type="text" placeholder="请输入密码" class="rounded font-md" />
	</view>
		<view class=" login-form" v-if="type=='reg'">
			<uni-icons type="locked" size="20"></uni-icons>
			<input v-model="form.repassword" type="text" placeholder="请确认密码" class="rounded font-md" />
	</view>
		
		<view class="btn bg-main" hover-class="bg-main-hover" @click="submit">{{type=='login'?'登录':'注册'}}</view>
		<view class="flex align-center justify-between my-3 font">
			<text class="py-3 text-main" @click="changType">{{type=='login'?'注册账号':'去登录'}}</text>
			<text class="py-3 text-light-muted" @click="openForget">忘记密码？</text>
	</view>
		
		<!-- 微信图标  -->
		<view class="flex align-center justify-center weixin">
			<uni-icons type="weixin" size="30" color="#5ccc84"></uni-icons>
	</view>
		<!-- 底部 -->
		<checkbox-group @change="CheakboxChange" class="flex align-center justify-center py-2" v-if="type=='login'">
			<label class="text-light-muted">
				<checkbox style="transform:scale(0.7) ;"  />
				<text>
					已阅读并同意用户协议$隐私声明
				</text>
			</label>
		</checkbox-group>
	</view>
	
	
	
	
	
	
	</view>
</template>
<script>
	export default {
		data() {
			return {
				type: 'login',
				form: {
					username: '',
					password: '',
					repassword: ''
				}

			}
		},
	//登录的方法  
	login(data){
		return api.post("/mobile/login",data)
		
	},
	//注册账号 data 表示数据  就是我们username password  repassword
	//什么时候调用  点击注册的时候会去调用该方法   
	reg(data){
		return api.post("/mobile/reg",data)
		
	},
	
	
		methods: {
			CheakboxChange(e){
				this.confirm=!!e.detail.value.length
			},
			openForget(){
				uni.navigateTo({
					url:'../forget/forget',
				});
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
					 path: 'pages/index/index',
				});
			},
			changType() {
				this.type = this.type == 'login' ? 'reg' : 'login'
			},
			submit() {
				if(!this.confirm&&this.type=='login'){
					return this.$toast("请先阅读并同意用户协议")
				}
				uni.showLoading({
					title: '提交中......',
					mask: false
				});
				//调用注册的方法  需要传递的data
				let data = Object.assign(this.form, {});
				if (this.type == 'reg') {

					console.log(data)
					this.$api.reg(data).then(res => {
						this.$toast("注册成功")
						console.log(res)
						this.resetForm()
						this.changType()
					}).finally(() => {
						uni.hideLoading()
					})
					
				}
				else {
					this.$api.login(data).then(user => {
						this.$toast("登录成功")
						this.$store.dispatch('login',user)
				       this.resetForm()
					   if(!user.phone){
						   uni.redirectTo({
						   	url:"../phone/phone"
						   })
						   return 
					   }
					   setTimeout(()=>{this.back()}, 1000);
				
					}).finally(() => {
				
						uni.hideLoading()
				
					})
				
				
				
				}
			}
		}
	}
</script>
<style>
	.login-bg{
		height: 220rpx;
		background-image: linear-gradient(120deg,#93a49b 0%,#7c8997 100%);
	}
	.login-back{
		position: fixed;
		top: 0;
		left: 0;
		width: 75rpx;
		height: 75rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.login{
		position: absolute;
		top: 200rpx;
		left: 0;
		right: 0;
		background-color: #FFFFFF;
		border-top-left-radius: 30rpx;
		border-top-right-radius: 30rpx;
		padding: 60rpx 70rpx 0 70rpx;
		
	}
	.login .title{
		font-size: 22px;
		margin-bottom: 55rpx;
		color: #2e038a;
		
	}
	.login-form{
		position: relative;
		margin-bottom: 50rpx;
		
		
	}
	.login-form .uni-icons{
		position: absolute;
		left: 0; top: 0;
		width: 100rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #272727;	
	}
	.login-form input{
		height: 100rpx;
		padding-left: 100rpx;
		padding-right: 20rpx;
		background-color: #F5F5F5;
		
		
	}
	.btn{
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFFFFF;
		background-color: #9aa993;
		border-radius: 10rpx;
		
		
	}
	.weixin .uni-icons{
		border: 1rpx solid #a8ccb4;
		width: 80rpx;
		height: 80rpx;
		border-radius: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	
	
	
	
	
</style>
