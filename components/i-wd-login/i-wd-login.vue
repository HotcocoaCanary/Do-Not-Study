<template>
	<view class="container">
		<view class="flex p-3" v-if="!user">
			<image class="rounded-circle bg-light" src="/static/img/1.png" mode="" style="width: 120rpx;height: 120rpx;"></image>
		<view class="flex flex-column pl-3 ">
			<view class="font-md mb-2" @click="openLogin()">立即登录</view>
			<view class="font-sm">登录解锁更多功能</view>
		</view>
		</view>
		<view class="flex p-3" v-else>
			<image class="rounded-circle bg-light"  :src="user.avatar" mode="" style="width: 120rpx;height: 120rpx;"></image>
		<view class="flex flex-column pl-3 ">
			<view class="font-md mb-2">{{user.nickname||user.username||user.phone}}</view>
			<view class="font-sm">{{user.desc||"暂无描述"}}</view>
		</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'//引入mapState
	
	export default {
		
		computed:{
			...mapState({
				user:state=>state.user
			})
		},
		
		data() {
			return {
				//user:null,
			}
		},
		created() {
		 this.user=this.$store.state.user;
		},
		methods: {
			openLogin(){
				uni.navigateTo({
					url:'/pages/login/login'
				})
		}
	}}
</script>
<style>
	.container {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
		padding-top: 10px;
		margin-bottom: 10px;
		
	}



</style>