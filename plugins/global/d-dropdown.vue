<template>
  <div :class="['dropdown', { active: isOpen }]">
    <div @click.stop="toggle">
      <slot />
    </div>
    <slide-y-up-transition>
      <div
        v-if="isOpen"
        :class="['dropdown-menu', align]"
        v-click-outside="onOutsideClick"
      >
        <svg class="icon" width="24" height="12" viewBox="0 0 24 12">
          <path
            fill="currentColor"
            stroke-width="1px"
            stroke="currentColor"
            fill-rule="evenodd"
            d="M20 12l-8-8-12 12"
          ></path>
        </svg>
        <slot name="dropdown" />
      </div>
    </slide-y-up-transition>
  </div>
</template>

<script>
import { SlideYUpTransition } from 'vue2-transitions'
import ClickOutside from 'vue-click-outside'

export default {
  components: {
    SlideYUpTransition
  },

  directives: {
    ClickOutside
  },

  props: {
    align: {
      default: 'center',
      validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1
      }
    }
  },

  data: () => ({
    isOpen: false
  }),

  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },

    onOutsideClick(e) {
      if (this.isOpen) this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;

  .dropdown-menu {
    @apply .shadow-xl .rounded-lg .py-3 .text-sm;
    position: absolute;
    top: 100%;
    z-index: 9999;
    display: inline-flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    color: theme('colors.gray.700');
    background: theme('colors.white');
    width: 200px;
    text-align: left;
    margin-top: 12px;
    transition: opacity 300ms ease, margin-top 300ms ease;
    contain: layout;

    &.center {
      left: 50%;
      transform: translate(-50%);
    }

    &.left {
      left: 5px;

      .icon {
        left: 19px;
        transform: unset;
      }
    }

    &.right {
      right: -5px;

      .icon {
        right: 19px;
        left: unset;
        transform: unset;
      }
    }

    .icon {
      content: '';
      color: theme('colors.white');
      position: absolute;
      user-select: none;
      top: -12px;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
