<template>
  <view>
    <uni-section title="资讯" type="line" style="background-color: lightgray;">
		<hr />
    	<uni-list v-for="(item, index) in list" :key="index" >
			<uni-list-item  link :title="item.title" :note="item.note" @click="navigateToPage" style="background-color: darkgray;border-radius: 10px;">
				<template v-slot:footer>
					<image class="slot-image" :src="item.src" mode="widthFix"></image>
				</template>
			</uni-list-item>
    	</uni-list>
    </uni-section>
  </view>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
		   list: [
			   {
				   title:'新闻快报',
				   note:'今日国内最新消息',
				   src:'/static/study/mesage/mesage1.jpg'
			   },
			   {
			   		title:'公然挑衅',
			   		note:'宣布“过海峡”，美军耍什么花样？',
			   		src:'/static/study/mesage/mesage2.jpg'
			   },
			   {
			   		title:'寻人启事',
			   		note:'暖闻｜两年帮27位走失者回家，这位外卖小哥被赞是“超人”',
			   		src:'/static/study/mesage/mesage3.jpg'
			   },
		   ]
	  };
    },
    methods: {
		navigateToPage() {
		   this.$router.push('/pages/jumpTo/news/news');
		}
	},
}
</script>

<style lang="scss">
  .slot-box {
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: row;
    align-items: center;
  }

  .slot-image {
    /* #ifndef APP-NVUE */
    display: block;
    /* #endif */
    margin-right: 10px;
    width: 30px;
    height: 30px;
  }

  .slot-text {
    flex: 1;
    font-size: 14px;
    color: #4cd964;
    margin-right: 10px;
  }
</style>
