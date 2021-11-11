<template>
  <Header :user="currentUser"></Header>
  <Main />
  <!-- <router-view></router-view> -->
</template>

<script lang="ts">
import Home from './views/Home.vue'
import Header, { UserProps } from './Layout/Header.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './Layout/Main.vue'
const currentUser: UserProps = {
  isLogined: false,
  name: 'alexis',
  uid: 12345,
  avatar:
    'https://p9-passport.byteacctimg.com/img/user-avatar/9ad45a8f863c7dd123210246e3ad8080~300x300.image'
}
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter()

    router.push('/')
    return {
      currentUser
    }
  }
}
</script>

<style lang="scss">
@import url(../src/common/reset.css);
$FONT_COLOR: #909090;
$ACTIVE_FONT_COLOR: #007fff;
a {
  text-decoration: none;
  cursor: pointer;
  color: $FONT_COLOR;
}
</style>
