<template>
  <section class="id-doc-main id-doc-installation">
    <id-card>
      <h3 class="id-doc-installation__title" slot="title">
        安装
      </h3>
      <code>npm i idola</code>
    </id-card>

    <id-card>
      <h3 class="id-doc-installation__title" slot="title">
        使用
      </h3>
      <code>import Vue from 'vue'</code><br>
      <code>import Idola from 'idola'</code><br>
      <code>import 'idola/lib/idola.css'</code><br><br>
      <code>Vue.use(Idola)</code>
    </id-card>
  </section>
</template>

<script>
  import './style'

  export default {
  }
</script>
