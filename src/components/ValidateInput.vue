<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :value="inputRef.val"
      @input="updateValue"
      :placeholder="placeholder"
      @blur="validateInput"
      :class="{ 'is-invalid': inputRef.error, 'is-valid': inputRef.success }"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'
interface RuleProp {
  type: 'required' | 'email'
  message: string
}
const emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
const telReg = /^1[3|4|5|7|8][0-9]{9}$/
export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    placeholder: String,
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      success: false,
      error: false,
      message: ''
    })
    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
        inputRef.success = allPassed
      }
    }
    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style lang="scss" scoped></style>
