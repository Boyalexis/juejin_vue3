<template>
  <aside class="right-panel">这里是右边的部分</aside>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
interface dataProps {}
export default defineComponent({
  name: 'RightPanel',
  setup() {
    const data = reactive({})
    return {}
  }
})
</script>

<style lang="scss" scoped>
.right-panel {
  width: 20rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}
</style>
