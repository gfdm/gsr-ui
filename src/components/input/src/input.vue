<template>
  <section class="id-input">
    <input v-if="type !== 'textarea'" v-bind="$attrs" />
    <textarea v-else v-bind="$attrs" />
  </section>
</template>

<script>
  export default {
    name: 'IdInput',

    data () {
      return {
      }
    },

    props: {
      type: {
        type: String,
        default: 'text',
        validator (value) {
          return ['text', 'password', 'textarea'].indexOf(value) !== -1
        }
      }
    }
  }
</script>
