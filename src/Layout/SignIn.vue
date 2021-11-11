<template>
  <div class="signin-container signin-tip">
    <div class="first-line">
      <div class="icon-text">
        <span class="title">晚上好</span>
      </div>
      <div class="btn signin-btn">
        <Button plain round size="small"> 已签到 </Button>
      </div>
    </div>
    <div class="second-line">您已经连续签到<span class="figure">65</span>天</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Button from '@/components/Button/index.vue'
interface dataProps {}
export default defineComponent({
  name: 'SignIn',
  components: {
    Button
  },
  setup() {
    const data = reactive({})
    return {}
  }
})
</script>

<style lang="scss" scoped>
.signin-container {
  width: 240px;
  height: 96px;
  margin-bottom: 16px;
}
.signin-tip {
  padding: 16px;
  background: #fff;
  box-sizing: border-box;
  .first-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    .icon-text {
      display: flex;
      .title {
        margin-top: 2px;
        color: #1d2129;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
  .second-line {
    margin-bottom: 2px;
    margin-left: 36px;
    color: #4e5969;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    .figure {
      line-height: 24px;
      font-size: 16px;
      font-weight: 500;
      color: #1d7dfa;
      margin: 0 4px;
    }
  }
}
</style>
