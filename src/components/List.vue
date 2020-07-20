<template>
  <div class="contaienr">
    <form>
      <label for="name">
        name: <input
          v-model="form.name"
          v-log:name-action.focuss="form.name"
          type="text"
        >
      </label>
    </form>
    <h2>{{ form.name }}</h2>
    <button @click="dataInit">
      click
    </button>
    <div
      v-if="!loading"
      class="table-wrap"
    >
      <table border>
        <thead>
          <tr>
            <td width="100">
              ID
            </td>
            <td width="150">
              name
            </td>
            <td width="300">
              desc
            </td>
            <td width="200">
              image
            </td>
          </tr>
        </thead>
        <tbody v-if="list.length > 0">
          <tr
            v-for="item in list"
            :key="item.id"
          >
            <td :key="item.id">
              {{ item.id }}
            </td>
            <td :key="item.name">
              {{ item.name }}
            </td>
            <td>{{ item.desc }}</td>
            <td>
              <div class="cell-image">
                <img
                  :src="item.img"
                  :alt="item.name"
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import {
    defineComponent,
    ref,
    reactive,
    watchEffect,
    watch,
    computed,
    onMounted
  } from 'vue'

  export default defineComponent({
    name: 'List',
    props: {

    },
    setup(props, ctx) {
      let loading = ref(false)
      const form = reactive({
        name: 'form name',
        page_index: 1,
        page_size: 10
      })
      let list = reactive([{}])

      const page = reactive({
        total: 0,
        pageSize: [10, 20, 30, 50, 100]
      })
      watchEffect(() => {
        console.log('form change', form)
        console.log('list change', list[0])
        console.log('page change', page)

        console.log('context', ctx);

      })
      let index = 0
      const resetIndex = (_list) => {
        index++
        console.log('');
        if (index >= _list.length) {
          index = 0
        }
      }

      const dataInit = async () => {
        // ctx.$http()
        // ctx.prototype.$http()
        console.log('---ctx---', ctx.config);
        loading = true
        const res = await import('../data/list')
        console.log('import data:', res.default);
        const data = res.default.data
        list.splice(0, 1, data.list[index])
        resetIndex(data.list)
        setTimeout(() => {
          loading = false
        }, 3000)
      }
      onMounted(() => {

      })

      return {
        loading,
        form,
        list,
        page,
        dataInit
      }
    }
  })

</script>
<style lang="scss" scoped>
  .cell-image {
    width: 150px;
    display: flex;
    justify-content: center;
    align-content: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

</style>
