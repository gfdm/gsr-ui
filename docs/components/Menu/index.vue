<template>
  <aside class="doc-menu">
    <ul>
      <li v-for="(item, key) in menu" :key="key">
        <span>{{key}}</span>
        <ul>
          <li v-for="subItem in item" :key="subItem.name">
            <router-link :to="'/docs' + subItem.link" exact>
              {{subItem.name}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  import menu from '~docs/menu'
  import './style'

  export default {
    name: 'DocMenu',

    data () {
      return {
        menu
      }
    }
  }
</script>
