<template>
  <view class="TW">
	<i-wd></i-wd>
  </view>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    isFirstItem(index) {
      return index === 0;
    },
    isLastItem(index) {
      return index === this.list.length - 1;
    }
  }
};
</script>

<style>
  uni-list {
    overflow: hidden; /* 为了使子项的负外边距不溢出 uni-list 容器 */
  }

  uni-list-item {
    margin-top: 10px;
    margin-bottom: 0px;
  }
  .TW{
	  background-color: darkgrey
  }
  
</style>