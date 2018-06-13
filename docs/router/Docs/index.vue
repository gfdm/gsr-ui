<template>
  <div class="id-doc-container">
    <id-sidebar :activeIndex="$route.path">
      <id-sidebar-group
        v-for="(item, key) in menu"
        :key="key"
        :title="key"
      >
        <id-sidebar-item
          v-for="subItem in item"
          :key="subItem.name"
          :to="'/docs' + subItem.link"
        >
          {{subItem.name}}
        </id-sidebar-item>
      </id-sidebar-group>
    </id-sidebar>
    <router-view />
  </div>
</template>

<script>
  import menu from '~docs/menu'
  import './style'

  export default {
    data () {
      return {
        menu
      }
    }
  }
</script>
