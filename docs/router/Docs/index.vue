<template>
  <div class="doc-container">
    <doc-menu />
    <router-view />
  </div>
</template>

<script>
  import Menu from '~docs/components/Menu'

  import './style'

  export default {
    components: {
      [Menu.name]: Menu
    }
  }
</script>
