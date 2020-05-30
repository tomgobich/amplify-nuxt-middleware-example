<template>
  <a v-if="href" :href="href" class="dropdown-item">
    <slot />
  </a>
  <nuxt-link v-else-if="to" :to="to" class="dropdown-item">
    <slot />
  </nuxt-link>
  <button v-else @click="onClick" class="dropdown-item">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    href: String,
    to: [String, Object]
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown-item {
  @apply .px-4 .py-2;
  display: block;
  color: theme('colors.gray.600');
  text-align: left;
  text-decoration: none;
  transition: color 300ms ease, background 300ms ease;

  &:hover {
    color: theme('colors.gray.900');
    background: theme('colors.gray.200');
    text-decoration: none;
  }
}
</style>
