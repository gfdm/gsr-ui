<template>
  <li class="id-sidebar-item">
    <router-link
      exact
      class="id-sidebar-item__link"
      v-if="to"
      :to="to"
    >
      <slot />
    </router-link>
    <span
      class="id-sidebar-item__text"
      v-else
    >
      <slot />
    </span>
  </li>
</template>

<script>
  export default {
    name: 'IdSidebarItem',

    props: {
      to: String
    }
  }
</script>
