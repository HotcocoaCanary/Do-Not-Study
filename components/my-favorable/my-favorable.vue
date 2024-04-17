<template>
  <uni-section title="今日特惠" type="line" padding style="background-color: lightgray;">
    <scroll-view scroll-x="true" class="scroll-row">
      <view class="coupon" v-for="(item, index) in list" :key="index" style="background-color: darkgray;">
        <view class="coupon-content" @click="navigateTo(item)">
          <!-- 使用数据中的封面图像 -->
          <view class="content-left">
            <image :src="item.cover" mode="aspectFill" class="coupon-image" style="height: 100%;width: 100%;"></image>
          </view>
          <view class="content-right">
            <text class="coupon-title">{{ item.title }}</text>
            原价：<text class="coupon-text"><strike>￥{{ item.t_price }}</strike></text>
            现价：<text class="coupon-text">￥{{ item.price }}</text>
			有效期：<text class="coupon-text">{{ item.start_time }} 至 {{ item.end_time }}</text>
          </view>
        </view>
      </view>
    </scroll-view>
  </uni-section>
</template>

<script>
export default {
  data() {
    return {
      list: [
			{
      			cover:'/static/study/favorable/class1.jpg',
      			title:'豪华江景\n',
      			t_price:'1999/天 \n',
      			price:'999/天\n',
      			start_time:'3-20',
      			end_time:'4-20',
				url: '/pages/jumpTo/discounts/discounts' //替换跳转路径
      		},
      		{
      			cover:'/static/study/favorable/class2.jpg',
      			title:'壮美湖景\n',
      			t_price:'1888/天\n',
      			price:'888/天\n',
      			start_time:'3-20',
      			end_time:'4-20',
				url: '/pages/jumpTo/discounts/discounts'
      		},
      		{
      			cover:'/static/study/favorable/class3.jpg',
      			title:'仙境山村\n',
      			t_price:'1299/天\n',
      			price:'666/天\n',
      			start_time:'3-20',
      			end_time:'4-20',
				url: '/pages/jumpTo/discounts/discounts'
      		},
			{
				cover:'/static/study/favorable/class4.jpg',
				title:'酷辣御姐\n',
				t_price:'∞\n',
				price:'9999\n',
				start_time:'12.30 23：59',
				end_time:'12.31 0：00',
				url: '/pages/jumpTo/discounts/discounts'
			},
      		]
		};
	},
	methods: {
		navigateTo(item) {
			this.$router.push(item.url);
		},
	}
};
</script>

<style scoped>
.p-2 {
  padding: 2px;
}

.scroll-row {
  white-space: nowrap;
  overflow-x: auto;
}

.coupon {
  display: inline-block;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 400px; /* 调整宽度，根据需要的布局调整 */
}

.coupon-content {
  display: flex;
}

.content-left {
  flex: 1;
}

.content-right {
  flex: 1;
  padding: 10px;
  text-align: left;
}

.coupon-image {
  width: 100%;
  height: 100px;
  border-radius: 5px;
}

.coupon-title {
  font-size: 16px;
  margin-bottom: 5px;
}

.coupon-text {
  font-size: 14px;
  color: red; /* 修改为红色 */
  margin-top: 3px;
}

</style>
