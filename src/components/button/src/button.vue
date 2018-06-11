<template>
  <button class="id-button">
    <span v-if="$slots.default" @click.stop>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'IdButton'
  }
</script>
