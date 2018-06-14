<template>
  <section class="id-doc-main id-doc-icon">
    <div
      class="id-doc-icon__block"
      v-for="(icon, key) in icons"
      :key="key"
    >
      <id-icon :icon="key" />
      <span>{{key}}</span>
    </div>

    <!-- padding block -->
    <div class="id-doc-icon__padding" v-for="i in 8" :key="i" />
  </section>
</template>

<script>
  import icons from 'feather-icons/dist/icons'
  import './style'

  export default {
    data () {
      return {
        icons
      }
    }
  }
</script>
