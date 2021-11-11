<template>
  <div class="article-list">
    <header class="list-header">
      <nav class="list-nav">
        <ul class="nav-list">
          <li
            v-for="item in headerItemList"
            :key="item.id"
            :class="{ active: activeIndex === item.id }"
            class="nav-item"
            @click="setActiveIndex(item.id)"
          >
            <router-link :to="item.to">{{ item.name }}</router-link>
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
import { defineComponent, ref } from 'vue'
interface dataProps {
  id: number
  name: string
  to: string
}
const headerItemList: dataProps[] = [
  {
    id: 1,
    name: '热门',
    to: '/'
  },
  {
    id: 2,
    name: '最新',
    to: '/?sort=newest'
  },
  {
    id: 3,
    name: '热榜',
    to: '/sort=three_days_hottest'
  }
]
export default defineComponent({
  name: '',
  setup() {
    const activeIndex = ref(1)
    const setActiveIndex = (id: number): void => {
      activeIndex.value = id
    }
    return {
      activeIndex,
      setActiveIndex,
      headerItemList
    }
  }
})
</script>

<style lang="scss" scoped>
.article-list {
  background-color: #fff;
  margin-right: 21.667rem;
  border-radius: 2px;
  width: 700px;
}
.list-header {
  padding: 1.3rem 1rem;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  .list-nav {
    .nav-list {
      display: flex;
      margin: 0;
      padding: 0;
      .nav-item {
        list-style: none;
        font-size: 1.17rem;
        padding: 0 1.2rem;
        border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
        &.active {
          color: #007fff;
        }
      }
    }
  }
}
.entry-list-wrap {
  .item {
    list-style: none;
    .advertisement {
      position: relative;
      cursor: pointer;
      padding: 12px 20px 0;
      .meta-container {
        display: flex;
        align-items: center;
        .user-message {
          max-width: 162px;
          font-size: 13px;
          line-height: 22px;
          color: #4e5969;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
        }
        .dividing {
          width: 1px;
          height: 14px;
          background: #e5e6eb;
          margin: 0 8px;
        }
        .date {
          line-height: 22px;
          font-size: 13px;
          color: #86909c;
        }
      }
      .main {
        display: flex;
        margin-top: 6px;
        padding-bottom: 12px;
        border-bottom: 1px solid #e5e6eb;
        .info-box {
          .title {
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            color: #1d2129;
            margin-bottom: 8px;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
          .description {
            font-weight: 400;
            font-size: 13px;
            line-height: 22px;
            color: #86909c;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
        }
        .thumb {
          flex: 0 0 auto;
          width: 120px;
          height: 80px;
          margin-left: 24px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
