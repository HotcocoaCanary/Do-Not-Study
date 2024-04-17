<template>
	<view class="TW">
		<uni-list style="margin: 10px;border-radius: 10px;">
			<uni-list-item style="border-radius: 10px;" :show-extra-icon="true" showArrow :extra-icon="extraIcon1" title="我的优惠卷" />
			<uni-list-item style="border-radius: 10px;" :show-extra-icon="true" showArrow :extra-icon="extraIcon2" title="常见问题" />
			<uni-list-item style="border-radius: 10px;" :show-extra-icon="true" showArrow :extra-icon="extraIcon3" title="设置" clickable @click="Toset()"/>
		</uni-list>
		<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				cover: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
				avatar: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png',
				extraIcon1: {
					color: '#707070',
					size: '22',
					type: 'wallet'
				},
				extraIcon2: {
					color: '#707070',
					size: '22',
					type: 'help'
				},
				extraIcon3: {
					color: '#707070',
					size: '22',
					type: 'gear'
				}
			};
		},
		methods: {
			Toset(){
				uni.navigateTo({
					url:"/pages/setting/setting"
				})
			},
			onClick(e) {
				console.log('执行click事件', e.data)
				uni.showToast({
					title: '点击反馈'
				});
			},
			switchChange(e) {
				uni.showToast({
					title: 'change:' + e.value,
					icon: 'none'
				});
			}
		}
	};
</script>
<style lang="scss">
    .TW {
        background-color: darkgrey;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
</style>
