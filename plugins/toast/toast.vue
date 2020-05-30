<template>
  <div class="toast-container">
    <transition-group name="fade" mode="out-in">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        :class="['toast', toast.type.toLowerCase()]"
        class="toast-group"
      >
        <span class="message">{{ toast.message }}</span>
        <button @click="removeToast(toast.id)" class="flex ml-3">
          <eva-icon name="close" animation="pulse" fill="currentColor" />
        </button>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      toasts: state => state.toasts.list,
      toastTypes: state => state.toasts.toastTypes
    })
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions('toasts', ['clearToast']),
    removeToast: function(id) {
      this.clearToast(id)
    }
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: opacity 500ms;
}

.fade-leave-active {
  transition: opacity 100ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-active .toast-group,
.fade-leave-to .toast-group {
  transition: none !important;
  animation: none !important;

  &:nth-last-child(1),
  &:nth-last-child(2),
  &:nth-last-child(3),
  &:nth-last-child(4) {
    animation: none !important;
  }
}

.toast-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  max-width: 75vw;
  z-index: 2000;
  transition: transform 0.4s, opacity 0.4s ease;

  .toast-group {
    transform: translate3d(0, -0, -0) scale(1);
    transition: all 0.4s ease;
    position: absolute;
    bottom: 0;
    height: rem(72);
    right: 0;

    &:nth-last-child(1) {
      animation: toast-show-1 0.4s ease forwards;
      z-index: 2002;
    }

    &:nth-last-child(2) {
      animation: toast-show-2 0.4s ease forwards;
      z-index: 2001;
    }

    &:nth-last-child(3) {
      animation: toast-show-3 0.4s ease forwards;
      z-index: 2000;
    }

    &:nth-last-child(4) {
      animation: toast-show-4 0.4s ease forwards;
      z-index: 2000;
    }

    &:nth-last-child(n + 5) {
      visibility: hidden;
    }
  }
}
@keyframes toast-show-1 {
  from {
    transform: translate3d(0, 72px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes toast-show-2 {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }
  to {
    transform: translate3d(0, -14px, 0) scale(0.95);
  }
}

@keyframes toast-show-3 {
  from {
    transform: translate3d(0, -14px, 0) scale(0.95);
  }
  to {
    transform: translate3d(0, -28px, 0) scale(0.9);
  }
}

@keyframes toast-show-4 {
  from {
    transform: translate3d(0, -28px, 0) scale(0.9);
    opacity: 1;
  }
  to {
    transform: translate3d(0, -32px, 0) scale(0.85);
    opacity: 0;
  }
}

.toast {
  @apply .px-3 .py-2 .rounded;
  border: 0;
  width: 450px;
  height: 3rem;
  color: theme('colors.gray.200');
  background: theme('colors.gray.800');
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.12);

  &.error {
    background: theme('colors.red.500');
    color: theme('colors.red.100');
  }

  &.warning {
    background: theme('colors.orange.500');
    color: theme('colors.orange.100');
  }

  &.success {
    background: theme('colors.green.500');
    color: theme('colors.green.100');
  }

  &.info {
    background: theme('colors.blue.500');
    color: theme('colors.blue.100');
  }

  .message {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    flex: 1;
    max-width: 70%;
    margin: 0;
    padding: 0;
  }
}
</style>
