<template>
  <header class="id-doc-header">
    <router-link to="/" class="id-doc-header__logo" />

    <ul class="id-doc-header__nav">
      <li>
        <router-link to="/" exact>首页</router-link>
      </li>
      <li>
        <router-link to="/docs">文档</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
  import './style'

  export default {
    name: 'DocHeader'
  }
</script>
