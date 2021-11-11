<template>
  <div class="">
    <button class="rz-button" :class="classes" @click="onClick" :disabled="disabled">
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Button',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default',
      validator: (value: string) => {
        return ['primary', 'default', 'info', 'error', 'warning', 'success'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value: string) => {
        return ['small', 'medium', 'mini'].includes(value)
      }
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    }
  },
  computed: {
    classes() {
      return {
        [`rz-button--${this.type}`]: this.type,
        'is-plain': this.plain,
        'is-disabled': this.disabled,
        'is-round': this.round,
        'is-circle': this.circle,
        [`rz-button--${this.size}`]: this.size
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.rz-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

// rz-button--default
.rz-button--default {
  &:hover {
    background: #ecf5ff;
  }
  &:focus {
    background: #ecf5ff;
  }
  &:active {
    border-color: #3a8ee6;
  }
}
// rz-button-primary
.rz-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover {
    background: #66b1ff;
  }
  &:focus {
    outline: none;
  }
  &:active {
    color: #fff;
    background: #3a8ee6;
    // border-color: #3a8ee6;
  }
}
// rz-button--success
.rz-button--success {
  color: #fff;
  background: #67c23a;
  border-color: #67c23a;
  &:hover {
    background: #85ce61;
  }
  &:focus {
    background: #85ce61;
  }
  &:active {
    background: #5daf34;
    // border-color: #3a8ee6;
  }
}
// rz-button--info
.rz-button--info {
  color: #fff;
  background: #909399;
  border-color: #909399;
  &:hover {
    background: #a6a9ad;
  }
  &:focus {
    background: #a6a9ad;
  }
  &:active {
    background: #82848a;
  }
}
// rz-button--warning
.rz-button--warning {
  color: #fff;
  background: #e6a23c;
  border-color: #e6a23c;
  &:hover {
    background: #ebb563;
  }
  &:focus {
    background: #ebb563;
  }
  &:active {
    background: #cf9236;
  }
}
// rz-button--danger
.rz-button--danger {
  color: #fff;
  background: #f56c6c;
  border-color: #f56c6c;
  &:hover {
    background: #f78989;
  }
  &:focus {
    background: #f78989;
  }
  &:active {
    background: #dd6161;
  }
}

// is-plain
.rz-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover {
    color: #fff;
    background: #66b1ff;
  }
  &:focus {
    color: #fff;
    outline: none;
  }
  &:active {
    color: #fff;
    background: #3a8ee6;
    // border-color: #3a8ee6;
  }
}
.rz-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover {
    color: #fff;
    background: #85ce61;
  }
  &:focus {
    color: #fff;
    background: #85ce61;
  }
  &:active {
    background: #5daf34;
    // border-color: #3a8ee6;
  }
}
.rz-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover {
    color: #fff;
    background: #a6a9ad;
  }
  &:focus {
    color: #fff;
    background: #a6a9ad;
  }
  &:active {
    background: #82848a;
  }
}
.rz-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover {
    color: #fff;
    background: #ebb563;
  }
  &:focus {
    color: #fff;
    background: #ebb563;
  }
  &:active {
    background: #cf9236;
  }
}
.rz-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover {
    color: #fff;
    background: #f78989;
  }
  &:focus {
    color: #fff;
    background: #f78989;
  }
  &:active {
    background: #dd6161;
  }
}

// is-disabled
.rz-button.is-disabled,
.rz-button.is-disabled:focus,
.rz-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.rz-button--primary.is-disabled,
.rz-button--primary.is-disabled:active,
.rz-button--primary.is-disabled:focus,
.rz-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.rz-button--success.is-disabled,
.rz-button--success.is-disabled:active,
.rz-button--success.is-disabled:focus,
.rz-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.rz-button--info.is-disabled,
.rz-button--info.is-disabled:active,
.rz-button--info.is-disabled:focus,
.rz-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.rz-button--warning.is-disabled,
.rz-button--warning.is-disabled:active,
.rz-button--warning.is-disabled:focus,
.rz-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.rz-button--danger.is-disabled,
.rz-button--danger.is-disabled:active,
.rz-button--danger.is-disabled:focus,
.rz-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}

// 圆角
.rz-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形按钮
.rz-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// size
.rz-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.rz-button .rz-button--small {
  font-size: 12px;
  border-radius: 3px;
}

.rz-button--small {
  padding: 9px 15px !important;
  font-size: 12px;
  border-radius: 3px;
}

.rz-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
</style>
