<template>
  <div class="authorblock-container">
    <header>🥇作者榜</header>
    <div class="user-list">作者</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
interface dataProps {}
export default defineComponent({
  name: '',
  setup() {
    const data = reactive({})
    return {}
  }
})
</script>

<style lang="scss" scoped>
.authorblock-container {
  width: 240px;
  height: 300px;
  background: cyan;
}
</style>
