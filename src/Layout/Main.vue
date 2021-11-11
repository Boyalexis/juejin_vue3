<template>
  <main class="container main-container with-view-nav">
    <div class="view">
      <nav role="navigation" class="view-nav">
        <div class="nav-list">
          <ul class="left-list">
            <li
              v-for="item in NavListData"
              :key="item.id"
              class="nav-item"
              :class="{ active: activeIndex === item.id }"
              @click="setActiveIndex(item.id)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </nav>
      <div class="view-container">
        <article-list></article-list>
        <right-panel></right-panel>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
// import ArticleList from '@/components/ArticleList/index.vue'
import ArticleList from '../components/ArticleList/index.vue'
import RightPanel from '@/components/RightPanel/index.vue'
import { NavListData } from '../utils/data'
export default defineComponent({
  name: 'Main',
  setup() {
    const activeIndex = ref(1)
    const setActiveIndex = (id: number): void => {
      activeIndex.value = id
    }
    return {
      NavListData,
      activeIndex,
      setActiveIndex
    }
  },
  components: {
    ArticleList,
    RightPanel
  }
})
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  padding: 0;
}
.main-container > .view {
  margin-top: 4.67rem;
}
.view .view-nav {
  position: fixed;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
  transform: translateZ(0);
  left: 0;
  background-color: #fff;
}
.view .view-container {
  position: relative;
}
.view-nav .nav-list {
  position: relative;
  max-width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  line-height: 1;
}
.nav-list .left-list {
  display: flex;
  height: 100%;
}
.view-nav .nav-list .nav-item {
  height: 100%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  font-size: 1.16rem;
  color: #71777c;
  padding: 0 1rem;
}
.nav-item.active {
  color: #007fff !important;
}
</style>
