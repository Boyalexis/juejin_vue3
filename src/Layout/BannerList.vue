<template>
  <div class="bannerlist-container">
    <div v-for="banner in list" :key="banner.id" class="banner-item">
      <a :href="banner.toUrl">
        <img :src="banner.image" alt="" class="banner-image" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
interface bannerProps {
  id: number
  image: string
  toUrl: string
}
const bannerList = [
  {
    id: 1,
    image:
      'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eaa2826e18194184a2d8ffd6ddab8edb~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?',
    toUrl:
      'https://juejin.cn/post/7017605021889986596/?utm_source=web_banner2&utm_medium=banner&utm_campaign=zhuanti_xingneng_20211011'
  },
  {
    id: 2,
    image:
      'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7a1090d4f7f4af3a8bf76525692f05a~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?',
    toUrl: 'https://juejin.cn/pin/7017634587991867429'
  }
]
export default defineComponent({
  name: 'Banner',
  props: {},
  setup() {
    return {
      list: bannerList
    }
  }
})
</script>

<style lang="scss" scoped>
.bannerlist-container {
  .banner-item {
    width: 240px;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border-radius: 2px;
    margin-bottom: 1.3rem;
    font-size: 1.16rem;
    line-height: 1.29;
    color: #333;
    .banner-image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
