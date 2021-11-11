<template>
  <!-- Navbar navbar-expand-lg 会在大于lg(992px)展开折叠(collapse)部分 -->
  <nav class="navbar navbar-expand-lg py-0 mx-auto main-header">
    <div class="container">
      <!-- logo -->
      <a class="logo" href="#">
        <!-- hide on screens smaller than lg -->
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg"
          alt=""
          class="logo-img d-lg-block d-none"
        />
        <!-- show on screens smaller than lg -->
        <img
          src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg"
          alt=""
          class="mobile d-md-block d-lg-none"
        />
      </a>

      <nav class="main-nav">
        <ul class="nav-list">
          <!-- 展开折叠部分按钮 target为下面id为navbarCollapseContent的div -->
          <li class="main-nav-list">
            <div class="phone-show-menu">
              <span>首页</span>
              <img
                src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/0911114f258a2f38db56a80c2c7dc90d.svg"
                alt=""
              />
            </div>

            <!-- collapse折叠部分 Navbar -->
            <div class="phone-hide">
              <ul class="navbar-nav mb-lg-0 navbar_ul">
                <li
                  v-for="item in NavbarData"
                  :key="item.id"
                  @click="setActiveIndex(item.id)"
                  class="nav-item link-item"
                  :class="{ active: activeIndex === item.id }"
                >
                  <a>{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="search-add">
            <!-- 搜索框和按钮组 -->
            <ul class="search-add-ul">
              <search />
              <li class="nav-item add">
                <span class="creator-link">
                  <button class="ui-btn creator-btn secondary medium default">创作者中心</button>
                </span>
                <div class="add-group">
                  <button class="add-btn" type="button">写文章</button>
                  <div class="more">
                    <img
                      src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/fd92e44e46bf428b65aa0dc78366a82a.svg"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <!-- 通知和头像 -->
          <div class="right-menu">
            <li class="nav-item notification">
              <a class="app-link" href="">
                <img
                  src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/c7f91fad712592633383df6aa430c93c.svg"
                  alt=""
                />
              </a>
            </li>
            <li class="nav-item menu">
              <!-- <div>
                <img
                  src="https://p9-passport.byteacctimg.com/img/user-avatar/9ad45a8f863c7dd123210246e3ad8080~300x300.image"
                  alt=""
                  class="avatar"
                />
              </div> -->
              <drop-down>
                <img
                  src="https://p9-passport.byteacctimg.com/img/user-avatar/9ad45a8f863c7dd123210246e3ad8080~300x300.image"
                  alt=""
                  class="avatar"
                />
              </drop-down>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  </nav>

  <!-- <ul v-if="!user?.isLogined" class="list-line mb-0">
        <li class="list-inline-item"><a href="" class="btn btn-outline-light my-2">登录</a></li>
        <li class="list-inline-item"><a href="" class="btn btn-outline-light my-2">注册</a></li>
      </ul> -->
  <!-- DropDown 下拉菜单 -->
  <!-- <drop-down v-else :title="`你好`"></drop-down> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, ref } from 'vue'
import { NavbarData } from '../utils/data'
import DropDown from '../components/DropDown.vue'
import Search from '@/components/HeaderSearch/index.vue'
export interface UserProps {
  isLogined: boolean
  name?: string
  uid?: number
  avatar?: string
}
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true
    }
  },
  setup() {
    function setActiveIndex(id: number) {
      activeIndex.value = id
    }
    const activeIndex = ref<number>(1)
    const handleInputFocus = (input: Element, form: Element, BtnGroup: Element): void => {
      input.classList.add('active')
      input.setAttribute('placeholder', '搜索文章/小册/标签/用户')
      form.classList.add('active')
      BtnGroup.classList.add('hide')
    }
    const handleInputBlur = (input: Element, form: Element, BtnGroup: Element): void => {
      input.classList.remove('active')
      input.setAttribute('placeholder', '搜索稀土掘金')
      form.classList.remove('active')
      BtnGroup.classList.remove('hide')
    }
    onMounted(() => {
      const input: Element = document.getElementsByClassName('search-input')[0]
      const form: Element = document.getElementsByClassName('search-form')[0]
      const BtnGroup = document.getElementsByClassName('add')[0]

      input.addEventListener('focus', () => {
        handleInputFocus(input, form, BtnGroup)
      })
      input.addEventListener('blur', () => {
        handleInputBlur(input, form, BtnGroup)
      })
    })
    return {
      NavbarData,
      activeIndex,
      setActiveIndex
    }
  },
  components: {
    DropDown,
    Search
  }
})
</script>

<style lang="scss" scoped>
.main-header {
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  z-index: 250;
}
.container {
  height: 5rem;
  display: flex;
  padding: 0 !important;
  max-width: 1200px !important;
  justify-content: center !important;
  flex-wrap: nowrap !important;
  background-color: #fff;
}
//
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.7rem;
  .logo-img {
    display: block;
    width: 116.82px;
    height: 24px;
  }
}

.nav-item {
  color: #86909c;
  padding: 0 1rem;
  font-size: 1.33rem;
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #007fff;
  }
}
.nav-item.link-item {
  height: 5rem;
}
.nav-item.link-item a {
  display: inline-block;
  height: 5rem;
  padding: 0 1rem;
  line-height: 5rem;
}
.nav-item.active {
  color: #007fff;
}
.nav-item:last-child {
  padding-right: 0;
}

.search-add-ul {
  width: 35rem;
  display: flex;
  justify-content: flex-start;
}

.right-menu {
  width: 90px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-item.add {
  cursor: default;
  width: 25rem;
  transition: width 0.3s;
  overflow: hidden;
}
.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.phone-show-menu {
  display: none;
}
.main-nav {
  height: 100%;
  flex: 1 0 auto;
}
.nav-list {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  margin: 0;
}
.main-nav-list {
  display: flex;
}
.search-add {
  flex: 1 1 auto;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  margin-right: 1rem;
}
.hide {
  width: 0;
  padding: 0;
  overflow: hidden;
}
.creator-link {
  position: relative;
  margin-right: 24px;
}
.add-group {
  display: flex;
  align-items: center;
  position: relative;
  height: 2.667rem;
  cursor: pointer;
}
// 写文章
.add-group .add-btn,
.add-group .more {
  height: 100%;
  color: #fff;
  background-color: #1e80ff;
  border-radius: 3px;
}
.add-group .more {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  border-left: 1px solid hsla(0, 0%, 100%, 0.1);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  box-sizing: border-box;
}
.add-group .add-btn {
  padding: 0 1.3rem;
  font-size: 1.167rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  white-space: nowrap;
}
.add .creator-link button.creator-btn {
  background-color: #e8f3ff;
  color: #1e80ff;
}
.ui-btn.medium {
  padding: 5px 16px;
}
.ui-btn.secondary {
  background-color: #fafafa;
  color: #1d2129;
}
.ui-btn {
  box-sizing: border-box;
  font-size: 14px;
  line-height: 22px;
  padding: 5px 16px;
  color: #fff;
  border: none;
  white-space: nowrap;
}
@media (max-width: 700px) {
  .search-add {
    margin-right: 0;
  }
}
@media (max-width: 980px) {
  .search-add-ul {
    width: auto;
  }
}
@media (max-width: 980px) {
  .phone-show-menu {
    height: 5rem;
    display: flex;
    align-items: center;
    color: #1e80ff;
    font-size: 1.33rem;
    justify-content: center;
    padding: 0;
    width: 5.66rem;
    span {
      margin-right: 0.6rem;
    }
  }
}
@media (max-width: 980px) {
  .main-nav-list {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff;
    z-index: 1;
  }
}

// logo
@media (max-width: 700px) {
  .logo {
    margin-right: 0.7rem;
  }
}

@media (max-width: 980px) {
  .container {
    width: 96%;
  }
}
@media (max-width: 992px) {
  .phone-hide {
    display: none;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
    border: 1px solid rgba(177, 180, 185, 0.45);
    border-radius: 4 px;
    font-size: 1.2rem;
  }
}
// @media (max-width: 980px) {
//   .add_group {
//     width: 0;
//   }
// }
</style>
