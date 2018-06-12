<template>
  <div id="app">
    <doc-header />
    <router-view />
  </div>
</template>

<script>
  import Header from '~docs/components/Header'

  export default {
    components: {
      [Header.name]: Header
    }
  }
</script>
