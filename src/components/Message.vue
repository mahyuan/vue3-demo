<template>
  <div class="message">
    <p>{{ user }}</p>
    <p> {{ customMsg }}</p>
  </div>
</template>
<script>
  import {
    defineComponent,
    computed,
    onMounted
  } from 'vue'
  export default defineComponent({
    inject: ['user'],
    props: {
      count: {
        type: Number,
        default: -1
      }
    },
    created() {
      console.log(`------Injected property: ${this.user}`) // > Injected property: John Doe
    },
    setup(props) {
      // console.log('---user---', user)
      onMounted(() => {

        // console.log('---this---', this);
        // console.log('---$data---', ctx.$data);
      })

      const customMsg = computed(() => {
        return props.count
      })


      return {
        customMsg
      }
    }
  })

</script>
<style lang="scss" scoped>
  .message {
    display: inline-block;
    font-size: 25px;
  }

</style>
