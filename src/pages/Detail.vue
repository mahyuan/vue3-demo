<template>
  <div class="detail">
    {{ message }}
  </div>
</template>
<script>
import { ref } from 'vuex'

export default {
  setup() {
    let message = ref('this is message')
    return {
      message
    }
  }
}
</script>
