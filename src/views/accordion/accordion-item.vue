<template>
  <div class="yus-accordion-item">
    <div class="yus-accordion-item__header" @click="handleClick">
      <div class="yus-accordion-item__title">我的订单</div>
      <span class="yus-accordion-item__arrow">></span>
    </div>
    <div class="yus-accordion-item__body" ref="body" v-show="visible" v-if="inited">
      <div class="yus-accordion-item__content" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: [String, Number]
  },
  computed: {
    index() {
      return this.$parent.$children.indexOf(this);
    }
  },
  data() {
    return {
      visible: null,
      inited: null,
      expanded: false
    };
  },
  watch: {
    expanded(expanded, oldVal) {
      if (expanded) {
        this.visible = true;
        this.inited = true;
      }

      requestAnimationFrame(() => {
        const { body, content } = this.$refs;
        const { clientHeight } = content;
        console.log(clientHeight);
        if (clientHeight) {
          const contentHeight = `${clientHeight}px`;
          body.style.height = expanded ? 0 : contentHeight;
          requestAnimationFrame(() => {
            body.style.height = expanded ? contentHeight : 0;
          });
        }
      });
    }
  },
  created() {
    this.$parent.children.push(this);
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  methods: {
    handleClick() {
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="postcss" scoped>
.yus-accordion-item__header {
  position: relative;
  height: 44px;
  line-height: 44px;
  padding: 0 15px;
  border-bottom: 1px solid #f5f5f5;
}

.yus-accordion-item__content {
  padding: 12px 0;
}

.yus-accordion-item__arrow {
  position: absolute;
  right: 10px;
  top: 0px;
}

.yus-accordion-item__body {
  overflow: hidden;
  will-change: height;
  transition: height 300ms;
}
</style>
