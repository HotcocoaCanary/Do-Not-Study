<template>
	<view>
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input" @cancel="cancel" @clear="clear">
		</uni-search-bar>
		<view class="search-result">
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchValue: ''
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				console.log('----input:', res)
			},
			// 添加缺失的方法定义
			blur(res) {
				// 处理失焦事件
			},
			focus(e) {
				// 处理聚焦事件
			},
			clear(res) {
				// 处理清除事件
			},
			cancel(res) {
				// 处理取消事件
			}
		},
		onBackPress() {
			// 处理返回按钮事件
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		}
	}
</script>
<style lang="scss">

	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color:#666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>

