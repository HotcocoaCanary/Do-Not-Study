<template>
	<view class="">
			<uni-list-chat v-for="(item, idx) in list" :key="idx"
				:avatar-list="avatarList"
				:avatar-circle="false"
				:avatar="item.src"
				:title="item.title"
				:note="item.note">
			</uni-list-chat>
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"/>
			<uni-list>
				<uni-list-item title="第一章 操作系统概论" show-arrow></uni-list-item>
				<uni-list-item title="第二章 进程描述与控制" show-arrow></uni-list-item>
				<uni-list-item title="第三章 并发控制——互斥与同步" show-arrow></uni-list-item>
				<uni-list-item title="第四章 死锁处理" show-arrow></uni-list-item>
				<uni-list-item title="第五章 内存管理" show-arrow></uni-list-item>
				<uni-list-item title="第六章 处理机调度" show-arrow></uni-list-item>
				<uni-list-item title="第七章 I/O设备管理" show-arrow></uni-list-item>
				<uni-list-item title="第八章 文件管理" show-arrow></uni-list-item>
			</uni-list>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
					list: [
						{
							src:'/static/study/profile/profile1.jpg',
							title:'计算机操作系统（第二版）',
							note:'清华大学出版社',
						}
					],
					buttonGroup: [{
					text: '继续阅读',
					backgroundColor: '#3cc51f',
					color: '#fff'
					}],
				}
		},
		methods: {

		}
	}
</script>
