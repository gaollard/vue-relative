<template>
  <div class="yus-accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number, Array],
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      children: []
    };
  },
  methods: {
    switch(name) {

    }
  }
};
</script>

<style lang="postcss" scoped>
</style>
