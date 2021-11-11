<template>
  <div class="articlelist-container">
    <header class="list-header">
      <nav class="list-nav">
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="#">热门</router-link>
          </li>
          <li class="nav-item">
            <router-link to="#">最新</router-link>
          </li>
          <li class="nav-item">
            <router-link to="#">热榜</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <div class="entry-list-wrap">
      <li class="item">
        <div class="advertisement">
          <div class="meta-container">
            <div class="user-message">掘金酱</div>
            <div class="dividing"></div>
            <div class="date">9小时前</div>
          </div>
          <div class="main">
            <div class="info-box">
              <span class="title">🏆技术专题十二期｜性能优化实战记录</span>
              <span class="description"
                >性能是留住用户很重要的一环，开发者们希望用户能在网站上进行有意义的交互。你做过哪些性能优化的项目呢？研究过哪些有关性能优化的案例？关于性能优化你有什么想说的？欢迎参加本期性能优化话题征文活动。</span
              >
            </div>
            <img
              src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5449e154b06487ab1abb31dfb75aa13~tplv-k3u1fbpfcp-no-mark:720:720:720:480.awebp?"
              alt=""
              class="thumb"
            />
          </div>
        </div>
      </li>
    </div>
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
.articlelist-container {
}
</style>
