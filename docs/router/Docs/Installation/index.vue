<template>
  <section class="id-doc-main">
    <div class="id-doc-main__block is-full">
      <id-card>
        <h3 slot="title">安装</h3>
        <code>npm i idola</code>
      </id-card>
    </div>

    <div class="id-doc-main__block is-full">
      <id-card>
        <h3 slot="title">使用</h3>
        <code>import Vue from 'vue'</code><br>
        <code>import Idola from 'idola'</code><br>
        <code>import 'idola/lib/idola.css'</code><br><br>
        <code>Vue.use(Idola)</code>
      </id-card>
    </div>
  </section>
</template>
