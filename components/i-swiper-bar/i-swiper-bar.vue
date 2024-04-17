<template>
		<!-- 轮播 -->
			   <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			   	<swiper-item class="flex justify-center" v-for="(item,index) in swiper" :key="index">
			   		<image :src="item.src" mode="aspectFill"
					style="width: 720rpx;height: 300rpx;" class="rounded shadow"></image>
			   	</swiper-item>
			   </swiper>
</template>

<script>
	export default {
data() {
	return {
		//定义数组  
		swiper:[
			{src:'/static/img/1.jpg'},
			{src:'/static/img/2.png'},
			{src:'/static/img/3.png'},
			]			
		
	}
},
	methods: {
		
	}
}
</script>

<style>

</style>
