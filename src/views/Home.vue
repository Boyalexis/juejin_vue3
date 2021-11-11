<template>
  <div class="home">
    <Main />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Main from '@/Layout/Main.vue'
interface dataProps {}
export default defineComponent({
  name: 'Home',
  components: {
    Main
  },
  setup() {
    const data = reactive({})
    return {}
  }
})
</script>

<style lang="scss" scoped></style>
