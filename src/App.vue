<template>
  <div>
    <div class="count-wrap">
      <div class="count">count is {{ count }}</div>
      <div class="plusone">plus one is {{ plusOne }}</div>
      <button @click="increment">count++</button>
    </div>
    <el-button  type="primary" round color="red">搜索</el-button>
    <el-button  type="text"  color="ping">查询</el-button>
    <HelloWorld :count="count"></HelloWorld>
    <List></List>
  </div>
</template>

<script>

import { render, ref, computed, watch, onMounted } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'

export default {
  components: {
    HelloWorld,
    List
  },
  provide: {
    user: 'hyuan'
  },
  setup(props,context) {
    const count = ref(0)
    const plusOne = computed(() => count.value + 1)

    const increment = () => { count.value++ }

    watch(() => count.value * 2, val => {
      console.log(`count * 2 is ${val}`)
    })

    onMounted(() => {
      console.log(`mounted`)
    })

/*  template: `
      <div>
    <span>count is {{ count }}</span>
    <span>plus one is {{ plusOne }}</span>
    <button @click="increment">count++</button>
  </div>
  ` */

    return {
      count,
      plusOne,
      increment
    }
  }
}
</script>
<style lang="scss">
.count-wrap {
  border: 1px solid red;
  margin: 10px 20px 30px;
  padding: 10px;
  .count {
    color: gray;
  }
  .plusone {
    color: red;
  }
}
</style>