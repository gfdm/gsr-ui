<template>
  <section
    class="id-card"
    :class="{
      'is-hoverable': hoverable
    }"
  >
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

    props: {
      hoverable: Boolean
    }
  }
</script>
