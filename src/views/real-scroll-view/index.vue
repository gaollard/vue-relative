<template>
  <div>
    <div class="scroll" @scroll="handleScroll">
      <div class="loading" v-if="loading">Loading...</div>
      <ul class="list">
        <li v-for="(item, index) in list" :key="index">{{ index }}</li>
      </ul>
    </div>
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
      topStatus: "",
      loading: false
    };
  },
  mounted() {
    this.loadDataList();
  },
  methods: {
    handleScroll(event) {
      const scroll = event.target;
      const scrollTop = scroll.scrollTop;
      console.log(scroll.scrollTop);
      if (this.loading) {
        return;
      }
      if (scrollTop === 0) {
        this.loading = true;
        this.loadDataList();
      }
    },
    loadDataList(isRefresh) {
      setTimeout(() => {
        const list = [];
        for (let index = 0; index < 20; index++) {
          list.push(index);
        }
        this.list = this.list.concat(list);
        this.loading = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.scroll {
  overflow: auto;
  height: 100vh;
}

.loading,
li {
  line-height: 24px;
  padding: 20px 0;
  text-align: center;
}
</style>
