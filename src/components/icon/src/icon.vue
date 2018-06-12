<template>
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    class="id-icon"
    v-html="feather.icons[icon].toString()"
  />
</template>

<script>
  import feather from 'feather-icons'

  export default {
    name: 'IdIcon',

    data () {
      return {
        feather
      }
    },

    props: {
      icon: String
    }
  }
</script>
