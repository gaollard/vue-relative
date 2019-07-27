<template>
  <div>
    <mt-loadmore
      class="mint-loadmore"
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      @top-status-change="handleTopChange"
      ref="loadmore"
    >
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
      <ul>
        <li v-for="(item, index) in list" :key="index">{{ index }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import Vue from "vue";
import { Loadmore } from "mint-ui";
Vue.component(Loadmore.name, Loadmore);

export default {
  data() {
    return {
      list: [],
      pageIndex: 1,
      pageSize: 20,
      allLoaded: false,
      topStatus: ""
    };
  },
  mounted() {
    this.loadDataList();
  },
  methods: {
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadDataList(isRefresh) {
      const list = [];
      for (let index = 0; index < 20; index++) {
        list.push(index);
      }
      if (isRefresh) {
        this.list = list;
      } else {
        this.list = this.list.concat(list);
      }
    },
    loadTop() {
      setTimeout(() => {
        this.loadDataList(true);
        this.$refs.loadmore.onTopLoaded();
      }, 500);
    },
    loadBottom() {
      setTimeout(() => {
        this.loadDataList();
        this.$refs.loadmore.onBottomLoaded();
      }, 500);
    }
  }
};
</script>

<style scoped>
.mint-loadmore {
}

li {
  line-height: 24px;
  padding: 20px 0;
  text-align: center;
}
</style>
