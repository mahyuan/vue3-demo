<template>
  <div>
    {{ home }}
  </div>
</template>
<script>
import { ref } from 'vuex'
export default {
  setup() {
    let home = ref('this is home route')
    return {
      home
    }
  }

}
</script>