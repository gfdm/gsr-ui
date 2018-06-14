<template>
  <section class="id-card">
    <header class="id-card__header">
      <slot name="title" />
    </header>
    <section class="id-card__body">
      <slot />
    </section>
  </section>
</template>

<script>
  export default {
    name: 'IdCard',

    data () {
      return {
      }
    },

    props: {
      title: String
    }
  }
</script>
