<template>
  <div class="hello">
    <h1 class="message">
      {{ message }}
    </h1>
    <p class="countvalue">
      get count value from parent component:
      <span>{{ countValue }}</span>
      <Messagae :count="countValue" />
    </p>

    <!-- <iframe height="265" style="width: 100%;" scrolling="no" title="fireworks seen in the countryside" src="https://codepen.io/mhy-web/embed/eYJWaaO?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href='https://codepen.io/mhy-web/pen/eYJWaaO'>fireworks seen in the countryside</a> by mhy-web
    (<a href='https://codepen.io/mhy-web'>@mhy-web</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe> -->
  </div>
</template>
<script>
  import {
    defineComponent,
    ref,
    computed
  } from 'vue'
  import Messagae from './Message.vue'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      count: String
    },
    components: {
      Messagae
    },
    setup(props) {
      const message = ref('hello hyuan')
      const countValue = computed(() => {
        console.log('props.count', props.count)
        return props.count * 2
      })
      return {
        message,
        countValue
      }
    }
  })

</script>
<style lang="scss" scoped>
  .hello {
    margin: 10px auto;
    background: #f3f3f3;
    width: 400px;
    // height: 200px;
    padding: 20px;
    border-radius: 10px;

    .message {
      display: inline-block;
      font-style: italic;
      font-weight: 700;
      font-size: 45px;
      line-height: 50px;
    }

    .countvalue {
      font-size: 24px;
      color: #0f0;

      span {
        font-size: 1.5em;
        color: #f0f;
      }
    }
  }

</style>
