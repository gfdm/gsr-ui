<template>
  <header class="doc-header">
    <div class="doc-header__logo" />

    <ul class="doc-header__nav">
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
