<template>
  <section class="id-doc-main is-flex">
    <div class="id-doc-main__block is-half">
      <id-card>
        <h3 slot="title">基础用法</h3>
        <id-input type="text" placeholder="Please input" />
      </id-card>
    </div>

    <div class="id-doc-main__block is-half">
      <id-card>
        <h3 slot="title">禁用状态</h3>
        <id-input type="text" disabled placeholder="Please input" />
      </id-card>
    </div>

    <div class="id-doc-main__block is-full">
      <id-card>
        <h3 slot="title">文本域</h3>
        <id-input type="textarea" placeholder="Please input" />
      </id-card>
    </div>
  </section>
</template>

<script>
  import './style'

  export default {
    data () {
      return {
      }
    }
  }
</script>
