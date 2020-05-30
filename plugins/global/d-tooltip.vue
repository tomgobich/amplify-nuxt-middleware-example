<template>
  <span class="btn-tooltip" v-tooltip="{
    content: content,
    placement: placement,
    classes: ['rounded bg-gray-900 text-gray-300 shadow p-4'],
    offset: 5,
    delay: {
      show: 500,
      hide: 300,
    },
  }">
    <slot />
  </span>
</template>

<script>
export default {
  props: {
    content: String,
    placement: {
      type: String,
      default: 'bottom-center'
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  max-width: 80vw;

  .tooltip-arrow {
    border-color: theme('colors.gray.300');
  }
}

.btn-tooltip {
  text-decoration: underline dotted;
}
</style>