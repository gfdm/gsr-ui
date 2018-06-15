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
      <li>
        <a
          href="https://github.com/gfdm/idola"
          target="_blank"
          rel="noopener noreferrer"
        >
          <id-icon icon="github" />
        </a>
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
