<template>
	<view class="picture">
		<view class="title">豪华江景</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 560rpx;">
			<swiper-item class="flex justify-center" v-for="(item,index) in swiper" :key="index">
			   	<image :src="item.src" mode="aspectFill"
				style="width: 720rpx;height: 700rpx;" class="rounded shadow"></image>
			</swiper-item>
		</swiper>
		<uni-section title="详情" type="line"></uni-section>
		<view class="text">
			您是否厌倦了拥挤的街道，喧闹的车流，灰暗的天空？
			您是否渴望一览城市的繁华，感受江水的清澈，呼吸新鲜的空气？
			您是否想要尝试不一样的旅行，体验不同的文化，发现不同的美味？
			那就快来我们的城市江景酒店吧！
			我们的酒店位于一条宽阔的河流旁，周围是高耸的摩天大楼，是城市的中心地带。
			我们的酒店拥有各种风格的客房，每一间都可以欣赏到迷人的江景，还有舒适的床铺，让您睡得安稳。
			我们的酒店还提供多种服务，我们有专业的前台，为您解答各种问题，还有专属的导游，为您推荐最佳的旅游路线，让您玩得尽兴。
			我们的城市江景酒店，是您感受城市魅力，享受江景美景的最佳选择。
		</view>
		<uni-section title="评论" type="line"></uni-section>
		<uni-card title="@皮皮" :isFull="true" extra="发布于 30分钟前" :thumbnail="img1">
				<text class="uni-body">这家酒店的江景真的很棒，从窗户就可以看到河流和摩天大楼，感觉很震撼。酒店的位置也很好，交通方便，周围有很多商场和餐厅。酒店的服务也很热情，前台和导游都很专业，给了我们很多旅游建议。我们在这里住得很舒服，很满意。</text>
		</uni-card>
		<uni-card title="@oyxb_HT" :isFull="true" extra="发布于 2小时前" :thumbnail="img2">
				<text class="uni-body">非常好江景，使我大脑旋转，爱来自瓷器</text>
		</uni-card>
		<uni-card title="@毁灭凤凰人" :isFull="true" extra="发布于 一天前" :thumbnail="img3">
				<text class="uni-body">豪华江景泰裤辣</text>
		</uni-card>
		<uni-load-more :status="status" :content-text="contentText" />
		<template>
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup" />
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiper:[
					{src:'/static/img/lake1.png'},
					{src:'/static/img/lake2.png'},
					{src:'/static/study/favorable/class1.jpg'}
					],
				img1: '/static/img/Avatar_special_03.png',
				img2: '/static/img/Avatar_def_11.png',
				img3: '/static/img/Avatar_def_06.png',
				contentText: {
					contentdown: '查看更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				},
			    buttonGroup: [{
				text: '立即购买',
				backgroundColor: '#3cc51f',
				color: '#fff'
				}],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
  .title {
	text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin: 10px; /* 调整标题与文件列表之间的间距 */
  }
  .text{
	  margin: 10px 10px;
	  line-height: 30px;
  }
</style>
