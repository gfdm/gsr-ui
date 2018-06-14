<template>
  <li class="id-sidebar-item">
    <router-link
      exact
      class="id-sidebar-item__subitem"
      v-if="to"
      :to="to"
    >
      <id-icon v-if="icon" :icon="icon" />
      <slot />
    </router-link>
  </li>
</template>

<script>
  import IdIcon from '~/components/icon'

  export default {
    name: 'IdSidebarItem',

    props: {
      to: String,
      icon: String
    },

    components: {
      [IdIcon.name]: IdIcon
    }
  }
</script>
