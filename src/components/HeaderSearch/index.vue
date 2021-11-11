<template>
  <li class="nav-item search">
    <form role="search" class="search-form" id="search-form" ref="formRef">
      <input
        type="search"
        maxlength="32"
        class="search-input"
        id="search-input"
        placeholder="搜索稀土掘金"
        ref="inputRef"
        v-model="search"
      />
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/8f68a2223e9650f14d6e6781cdcd717a.svg"
        alt="搜索"
        class="search-icon"
      />
    </form>
    <!-- 搜索历史 -->
    <div class="typehead"></div>
  </li>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'HeaderSearch',
  setup() {
    const data = reactive({})
    const search = ref('')

    // const handleInputFocus = (input: Element, form: Element): void => {
    //   input.classList.add('active')
    //   input.setAttribute('placeholder', '搜索文章/小册/标签/用户')
    //   form.classList.add('active')
    // }
    // const handleInputBlur = (input: Element, form: Element): void => {
    //   input.classList.remove('active')
    //   input.setAttribute('placeholder', '搜索稀土掘金')
    //   form.classList.remove('active')
    // }
    // onMounted(() => {
    //   const input: Element = document.getElementsByClassName('search-input')[0]
    //   const form: Element = document.getElementsByClassName('search-form')[0]

    //   input.addEventListener('focus', () => {
    //     handleInputFocus(input, form)
    //   })
    //   input.addEventListener('blur', () => {
    //     handleInputBlur(input, form)
    //   })
    // })
    return {
      search
      // handleInputFocus,
      // handleInputBlur
    }
  }
})
</script>

<style lang="scss" scoped>
.search-form {
  background-color: #f4f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  position: relative;
  .search-input {
    border: none;
    width: 11rem;
    padding: 0.6rem 0 0.6rem 1rem;
    box-shadow: none;
    outline: none;
    font-size: 1.1rem;
    color: #666;
    background-color: transparent;
    transition: width 0.3s;
  }
  .search-icon {
    display: block;
    width: 2.33rem;
    padding: 0 0.5rem;
    cursor: pointer;
  }
}
.search-form.active {
  border: 1px solid #1e80ff;
}
.search-form .search-input.active {
  width: 31.5rem;
}
// 搜索框
@media (max-width: 700px) {
  .nav-item.search {
    display: flex;
    padding-right: 1.2rem;
  }
}
@media (max-width: 375px) {
  .nav-item .search-form .search-input {
    width: 10rem;
  }
}
@media (max-width: 700px) {
  .nav-item .search-form .search-icon {
    display: none;
  }
}
</style>
