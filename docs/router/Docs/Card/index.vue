<template>
  <section class="id-doc-main is-flex">
    <div class="id-doc-main__block is-half">
      <id-card>
        <h3 slot="title">基础用法</h3>
        {{lorem}}
      </id-card>
    </div>

    <div class="id-doc-main__block is-half">
      <id-card hoverable>
        <h3 slot="title">可浮起卡片</h3>
        {{lorem}}
      </id-card>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
