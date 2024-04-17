<template>
	<view class="TW">
		<hr />
		<f-search-bar></f-search-bar>
		<hr />
		<i-swiper-bar></i-swiper-bar>
		<hr />
		<i-ico-pic></i-ico-pic>
		<hr />
		<view class="font-md py-3 px-2 font-weight-bold">>超值满减</view>
		<i-coupon></i-coupon>

		<hr />
		<!-- 拼团注释 -->
		<view class="cut-off"></view>
		<view class="font-md py-3 px-2 font-weight-bold">>超值折扣</view>
		<scroll-view scroll-x="true" class="scroll-row">
			<i-course-list v-for="(item,index) in groupList" :key="index" :item="item"
				@click="handleClick(item)"></i-course-list>
		</scroll-view>
		<hr />
		<!-- 最新列表展示   -->
		<view class="cut-off"></view>
		<view class="font-md py-3 px-2 font-weight-bold flex align-center justify-between">
			<text>>最新活动</text>
			<text class="font-sm text-light-muted">>查看全部</text>
		</view>
		<view class="">
			<i-course-list type='one' v-for="(item,index) in list" :key="index" :item="item"
				@click="handleClick(item)"></i-course-list>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				"groupList": [{
					"group_id": 19,
					"id": 12,
					"title": "风景插画",
					"cover": "https://img.zcool.cn/community/01e0015bdc140ba80121ab5d69a7a3.jpg@1280w_1l_2o_100sh.jpg",
					"price": "12.00",
					"t_price": "20.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}, {
					"group_id": 19,
					"id": 12,
					"title": "森林插画",
					"cover": "https://img.zcool.cn/community/01fdd35bed4c5ca80121ab5ddc7f12.jpg@3000w_1l_0o_100sh.jpg",
					"price": "6.00",
					"t_price": "10.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}, {
					"group_id": 19,
					"id": 12,
					"title": "艺术插画",
					"cover": "https://img.zcool.cn/community/018ad65be0385da80121ab5d9d06ed.jpg@3000w_1l_0o_100sh.jpg",
					"price": "10.00",
					"t_price": "18.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}],
				"list": [{
					"group_id": 19,
					"id": 12,
					"title": "影视设计营-电影概念",
					"cover": "https://img.zcool.cn/community/01deee5d807795a8012060be241920.jpg@2o.jpg",
					"price": "10.00",
					"t_price": "40.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}, {
					"group_id": 19,
					"id": 12,
					"title": "影视设计营-影视氛围",
					"cover": "https://img.zcool.cn/community/017bd85bd179d9a8012099c88cd0e0.jpg@3000w_1l_0o_100sh.jpg",
					"price": "24.00",
					"t_price": "50.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}, {
					"group_id": 19,
					"id": 12,
					"title": "游戏建模营-三维房屋",
					"cover": "https://img.zcool.cn/community/012c2b59b8feaba801212fb7d60380.jpg@1280w_1l_2o_100sh.jpg",
					"price": "66.00",
					"t_price": "100.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}, {
					"group_id": 19,
					"id": 12,
					"title": "游戏建模营-三维人物",
					"cover": "https://pic2.zhimg.com/v2-d66d88b4187b2bca0dfffe0888823b18_r.jpg?source=172ae18b",
					"price": "109.00",
					"t_price": "199.00",
					"type": "media",
					"start_time": "2021-04-15T16:00:00.000Z",
					"end_time": "2022-05-16T16:00:00.000Z"
				}]
			}
		},
		methods: {
			handleClick(item) {
				uni.navigateTo({
					url: '/pages/new-page?url=' + item.cover,
				});
			},
		}
	}
</script>

<style>
	.TW {
		background-color: lightgray;
	}
</style>