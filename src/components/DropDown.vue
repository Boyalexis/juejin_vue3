<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="my-2" @click.prevent="toggleOpen" data-bs-toggle="dropdown" aria-expanded="false">
      <slot></slot>
    </a>

    <!-- 下拉菜单 -->
    <ul class="dropdown-menu dropdown-menu-end" :style="{ display: 'block' }" v-if="isOpen">
      <drop-down-item></drop-down-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, toRefs, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
import DropDownItem from './DropDownItem.vue'
interface dataProps {}
export default defineComponent({
  components: { DropDownItem },
  name: 'Dropdown',
  // props: {
  //   title: {
  //     type: String,
  //     required: true
  //   }
  // },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)

    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>

<style lang="scss" scoped>
.dropdown {
  float: left;
}
.dropdown-menu-end {
  right: 0;
  left: auto;
  top: 100%;
}
</style>
