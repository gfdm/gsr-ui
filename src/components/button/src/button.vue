<template>
  <button
    class="id-button"
    :class="[
      'id-button--' + type || ''
    ]"
    @click="$emit('click')"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'IdButton',

    props: {
      type: {
        type: String,
        default: 'primary',
        validator (value) {
          return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1
        }
      }
    }
  }
</script>
