<template>
  <li class="id-sidebar-group">
    <div class="id-sidebar-group__title">
      {{title}}
    </div>
    <ul>
      <slot />
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'IdSidebarGroup',

    props: {
      title: String
    }
  }
</script>
