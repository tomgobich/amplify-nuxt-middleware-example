<template>
  <nuxt-link v-if="to" :to="to">
    <button
      :type="type"
      :disabled="loading || disabled"
      @click="onClick"
      :class="[
        'text-sm leading-none rounded',
        block ? 'block w-full' : 'inline-block',
        outline ? 'outline' : '',
        circle ? 'circle' : '',
        transparent ? 'no-bg' : '',
        variant,
        size
      ]"
    >
      <slot />
    </button>
  </nuxt-link>
  <button
    v-else
    :type="type"
    :disabled="loading || disabled"
    @click="onClick"
    :class="[
      'text-sm leading-none rounded',
      block ? 'block w-full' : 'inline-block',
      outline ? 'outline' : '',
      circle ? 'circle' : '',
      transparent ? 'no-bg' : '',
      variant,
      size
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    outline: Boolean,
    circle: Boolean,
    transparent: Boolean,
    to: [String, Object],
    type: {
      type: String,
      default: 'Button'
    },
    size: {
      type: String,
      default: 'md',
      validator(val) {
        return ['xs', 'sm', 'md', 'lg'].indexOf(val) !== -1
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator: val => {
        return (
          [
            'primary',
            'secondary',
            'success',
            'warning',
            'info',
            'error',
            'light',
            'dark'
          ].indexOf(val) > -1
        )
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin btn(
  $color,
  $bg,
  $borderColor,
  $outlineColor: $borderColor,
  $hoverColor: $bg
) {
  color: $color;
  background: $bg;
  border: 1px solid $bg;

  &:disabled {
    cursor: not-allowed;
    background: theme('colors.gray.500');
    color: theme('colors.gray.300');
    border: 1px solid theme('colors.gray.300');
  }

  &.outline {
    background: transparent;
    color: $outlineColor;
    border: 1px solid $borderColor;

    &:disabled {
      background: transparent;
      color: theme('colors.gray.500');
      border: 1px solid theme('colors.gray.500');
    }

    &:hover {
      color: $color;
      background: $bg;
      border: 1px solid $bg;
    }
  }

  &.no-bg:not(:hover) {
    background: transparent;
  }

  .active &,
  &:hover:not(:disabled):not(.outline) {
    color: $hoverColor;
    background: transparent;
    border: 1px solid $bg;
  }

  &:hover:not(:disabled) {
    box-shadow: 0px 0px 6px #{$bg}33;
  }
}

@mixin btnVariant($tailwindColor) {
  @include btn(
    theme('colors.#{$tailwindColor}.100'),
    theme('colors.#{$tailwindColor}.500'),
    theme('colors.#{$tailwindColor}.200'),
    theme('colors.#{$tailwindColor}.400')
  );
}

button {
  @apply .px-4 .py-3;
  display: inline-flex;
  align-items: center;
  transition: all 300ms ease-out;
  $primary: 'teal';
  $secondary: 'violet';
  $success: 'green';
  $warning: 'orange';
  $error: 'red';
  $info: 'blue';

  &.xs {
    @apply .p-1;
  }

  &.sm {
    @apply .p-2;
  }

  &.lg {
    @apply .px-6 .py-4;
  }

  &.circle {
    border-radius: 100%;
  }

  &.primary {
    @include btnVariant($primary);
  }

  &.secondary {
    @include btn(
      theme('colors.gray.100'),
      theme('colors.gray.800'),
      theme('colors.gray.400'),
      theme('colors.gray.400'),
      theme('colors.gray.400')
    );
  }

  &.success {
    @include btnVariant($success);
  }

  &.warning {
    @include btnVariant($warning);
  }

  &.error {
    @include btnVariant($error);
  }

  &.info {
    @include btnVariant($info);
  }

  &.light {
    @include btn(
      theme('colors.gray.800'),
      theme('colors.gray.100'),
      theme('colors.gray.100'),
      theme('colors.gray.600'),
      theme('colors.gray.800')
    );
  }

  &.dark {
    @include btn(
      theme('colors.gray.100'),
      theme('colors.gray.800'),
      theme('colors.gray.400'),
      theme('colors.gray.800')
    );
  }
}
</style>
