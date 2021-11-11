<template>
  <div class="row">
    <div class="col-4 mx-auto">
      <div class="input">
        <form>
          <div class="mb-3">
            <input
              type="tel"
              class="form-control"
              id="InputTel"
              aria-describedby="telHelp"
              :placeholder="telPlaceholder"
              v-model="telRef.val"
              @blur="telValidation"
            />
            <div class="form-text warning" v-if="telRef.error">
              {{ telRef.message }}
            </div>
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="InputPassword"
              :placeholder="passwordPlaceholder"
              v-model="passwordRef.val"
              @blur="passwordValidation"
            />
            <div class="form-text warning">
              {{ passwordRef.message }}
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <div class="mb-5"></div>
  <div class="row">
    <div class="col-5 mx-auto">
      <validate-input :rules="emailRules" placeholder="请输入用户名"></validate-input>
      <validate-input :rules="emailRules" v-model="emailVal"></validate-input>
      {{ emailVal }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
interface dataProps {}
const emailRules: RulesProp = [
  { type: 'required', message: '邮箱地址不能为空' },
  { type: 'email', message: '请输入正确格式的邮箱地址' }
]
export default defineComponent({
  components: { ValidateInput },
  name: 'Login',
  setup() {
    const emailVal = ref('1047585654@qq.com')

    const telRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const passwordRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const telPlaceholder = ref('手机号或邮箱')
    const passwordPlaceholder = ref('密码')
    const telReg = /^1[3|4|5|7|8][0-9]{9}$/
    const telValidation = () => {
      if (telRef.val.trim() === '') {
        telPlaceholder.value = '请输入手机号或邮箱'
      } else if (telReg.test(telRef.val)) {
        telPlaceholder.value = '出错了'
      }
    }
    const passwordValidation = () => {
      if (passwordRef.val.trim() === '') {
        passwordPlaceholder.value = '请输入密码'
      }
    }
    return {
      telRef,
      passwordRef,
      telValidation,
      passwordValidation,
      telPlaceholder,
      passwordPlaceholder,
      emailRules,
      emailVal
    }
  }
})
</script>

<style lang="scss" scoped></style>

// TODO: 1. 校验用户名/密码 2. 搜索
