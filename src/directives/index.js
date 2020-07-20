const directives = {}
directives.install = (app) => {
  app.directive('log', {
    beforeMount(el, binding) {
      // console.log('--beforeMount el--', el);
      // console.log('--beforeMount binding--', binding);
    },
    mounted(el, binding, vnode) {
      console.log('--el--', el);
      console.log('--binding--', binding);
      console.log('--vnode--', vnode);
      console.log('--instance--', binding.instance);
      const instance = binding.instacne
      el.focus()

      el.addEventListener('focus', focusHandle.bind(el))
      el.addEventListener('change', changeHandle)
      el.addEventListener('input', inputHandle)
      el.addEventListener('blur', blurHandle)
    },
    beforeDestroy(el, binding, vnode) {
      el.removeEventListener('focus', focusHandle)
      el.removeEventListener('change', changeHandle)
      el.removeEventListener('input', inputHandle)
      el.removeEventListener('blur', blurHandle)
    },
  })
}
export default directives

function focusHandle(event) {
  console.log('focus evnet', event.target.value);
  console.log('this', this);
  this.style.outline = '1px solid red'
}

function blurHandle(event) {
  this.style.outline = ''
  console.log('blur evnet', event.target.value);
}

function changeHandle(event) {
  console.log('change evnet', event.target.value);
}

function inputHandle(event) {
  console.log('input evnet', event.target.value);
}
