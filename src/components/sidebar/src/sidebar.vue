<template>
  <aside class="id-sidebar">
    <header class="id-sidebar__header">
      <slot name="header" />
    </header>
    <ul>
      <slot />
    </ul>
    <footer class="id-sidebar__footer">
      <slot name="footer" />
    </footer>
  </aside>
</template>

<script>
  export default {
    name: 'IdSidebar'
  }
</script>
