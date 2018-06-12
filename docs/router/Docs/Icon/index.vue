<template>
  <section class="id-doc-main">
    <id-icon
      v-for="(icon, key) in icons"
      :key="key"
      :icon="key"
    />
  </section>
</template>

<script>
  import icons from 'feather-icons/dist/icons'

  export default {
    data () {
      return {
        icons
      }
    }
  }
</script>
