<template>
  <li :class="{ 'is-disabled': disabled }" v-for="item in DropDownData" :key="item.id">
    <a href="" class="dropdown-item">{{ item.text }}</a>
  </li>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { DropDownData } from '../utils/data'
interface dataProps {}
export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const data = reactive({})
    return {
      DropDownData
    }
  }
})
</script>

<style lang="scss" scoped>
.dropdown-option.is-disbaled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
