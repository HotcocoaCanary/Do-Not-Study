<template>
  <view class="course scroll-row-item course-two" @click="handleClick">
    <view class="position-relative">
      <image :src="item.cover" mode="" ></image>
      <view class="">{{ item.type | formatType }}</view>
    </view>
    <view class="flex flex-column">
      <text class="text-ellipsis mb-2">{{ item.title }}</text>
      <view class="font-sm text-light-muted">0人以抢</view>
      <view class="flex flex-1">
        <text class="font-md text-danger">￥{{ item.price }}</text>
        <text class="font-sm text-light-black text-through">￥{{ item.t_price }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  filters: {
    formatType(k) {
      switch (k) {
        case 'media':
          return '折扣';
        case 'audio':
          return '音频';
        case 'video':
          return '视频';
        case 'column':
          return '专栏';
        default:
          return '';
      }
    },
  },
  methods: {
    handleClick() {
      this.$router.push({ path: '/new-page', query: { url: this.item.cover } });
    },
  },
};
</script>

<style>
.course {
  display: flex;
  /* 其它样式 */
}

.course-two {
  width: 340rpx;
  margin-left: 20rpx;
  /* 其它样式 */
}

.course-two image {
  width: 340rpx;
  height: 190rpx;
  /* 其它样式 */
}

.course-two > view:first-child > view {
  position: absolute;
  right: 0px;
  bottom: 16rpx;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 6rpx;
  color: #FFFFFF;
  font-size: 20rpx;
  /* 其它样式 */
}
</style>