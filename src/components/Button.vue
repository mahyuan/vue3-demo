<template>
  <div
    :class="['button', {
      primary: type === 'primary'
    }, {
      round: round == 'round'
    }]"
    :style="style"
  >
    <slot>点击</slot>
  </div>
</template>
<script>
  // import { ref, reactive, watch, computed, onMounted } from 'vue'
  export default {
    props: {
      color: {
        type: String,
        default: 'blue'
      },
      type: {
        type: String,
        default: 'primary'
      },
      round: {
        type: Boolean,
        default: false
      },
      style: {
        type: String,
        default: ''
      }
    },
    setup() {
      return {

      }
    }
  }

</script>
<style lang="scss" scoped>
  .button {
    width: fit-content;
    min-width: 80px;
    height: 30px;
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;

    &.primary {
      color: #fff;
      background: rgba(60, 60, 241, 0.705);
    }

    &.round {
      border-radius: 50%;
    }
  }

</style>
