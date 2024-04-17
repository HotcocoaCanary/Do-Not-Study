<template>
	<view>
		<!-- 添加自定义样式以美化uni-section标题 -->
		<uni-section class="custom-section" title="资料" type="line" padding  style="background-color: lightgray;">
			<scroll-view scroll-x="true" class="scroll-row">
				<!-- 使用v-for循环渲染文件夹 -->
				<uni-list :border="true" v-for="(file, index) in filelist" :key="index" style="background-color: darkgrey;border-radius: 15px;">
					<!-- 通过自定义的标题样式来美化列表标题 -->
					<view class="folder-title">{{ file.tit }}</view>
					<uni-list-chat v-for="(item, idx) in file.list" :key="idx"
					:avatar-list="avatarList"
					:avatar-circle="false"
					:avatar="item.src"
					:title="item.title"
					 style="background-color: darkgray;border-radius: 26px;"
					:note="item.note">
						<view class="chat-custom-right"  @click="navigatorTo(item)" style="background-color: darkgray;">
							<text class="chat-custom-text">{{ item.text }}</text>
							<uni-icons type="star-filled" color="#4e4e4e" size="18"></uni-icons>
						</view>
					</uni-list-chat>
				</uni-list>
			</scroll-view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				filelist:[
					{
						tit: '计算机',
						list: [
							{
								src:'/static/study/profile/profile1.jpg',
								title:'计算机操作系统（第二版）',
								note:'计算机操作系统（第二版）',
								text:'快来学我',
								url: '/pages/jumpTo/materials/metarials' //替换要跳转路径
							},
							{
								src:'/static/study/profile/js.jpg',
								title:'JavaScript 教程 | 菜鸟教程',
								note:'JavaScript 教程 ',
								text:'快进来吧',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/py.png',
								title:'Python 基础教程 | 新手教程',
								note:'Python 基础教程',
								text:'快进来吧',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/profile4.jpg',
								title:'HTML5',
								note:'HTML5',
								text:'网页！网页！',
								url: '/pages/jumpTo/materials/metarials'
							}
						]
					},
					{
						tit: '书籍',
						list: [
							{
								src:'/static/study/profile/shengqian.jpeg',
								title:'五块钱如何花三天',
								note:'生存小妙招',
								text:'快来学习',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/profile2.jpg',
								title:'学魔养成系统',
								note:'给你添蘑菇了',
								text:'快进来吧',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/profile3.jpg',
								title:'母猪的产后护理',
								note:'母猪的产后护理',
								text:'偶也！',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/bailan.jpg',
								title:'人生摆烂秘籍',
								note:'人生顺风车！',
								text:'划重点！！',
								url: '/pages/jumpTo/materials/metarials'
							}
						]
					},
					{
						tit: '其他',
						list: [
							{
								src:'/static/study/profile/te.png',
								title:'Terraria',
								note:'找搭子',
								text:'置顶',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/mic.png',
								title:'Minecraft java',
								note:'找搭子',
								text:'置顶',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/cf.png',
								title:'CF代打（最高荣耀强阿）',
								note:'连续四赛季荣耀之巅',
								text:'置顶',
								url: '/pages/jumpTo/materials/metarials'
							},
							{
								src:'/static/study/profile/valorant.jpg',
								title:'无畏契约国区代打（最高铂金）',
								note:'上赛季结算钻石',
								text:'置顶！',
								url: '/pages/jumpTo/materials/metarials'
							}
						]
					}
				]
			}
		},
		methods: {
			navigatorTo(item){
				this.$router.push('/pages/jumpTo/materials/materials');
			}
		}
	}
</script>

<style scoped>
  /* 添加文件夹标题的自定义样式 */
  .folder-title {
    font-size: 10px;
    font-weight: bold;
    color: #333;
    margin: 10px; /* 调整标题与文件列表之间的间距 */
  }

  .uni-list {
    display: inline-block;
    margin-right: 10px;
  }

  .chat-custom-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .chat-custom-text {
    font-size: 12px;
    color: #5b5b5b;
  }
</style>
