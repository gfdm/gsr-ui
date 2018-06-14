<template>
  <section class="id-doc-main id-doc-card">
    <div class="id-doc-card__item">
      <id-card>
        <span slot="title">Default</span>
        {{lorem}}
      </id-card>
    </div>

    <div class="id-doc-card__item">
      <id-card hoverable>
        <span slot="title">Hoverable</span>
        {{lorem}}
      </id-card>
    </div>
  </section>
</template>

<script>
  import './style'

  export default {
    data () {
      return {
        lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
