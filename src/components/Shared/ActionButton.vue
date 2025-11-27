<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary'].includes(value)
    },
  },
})

const { type } = toRefs(props)

const buttonClass = computed(() => {
  return {
    [type.value]: true,
  }
})
</script>

<style scoped>
/*
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply bg-brand-blue-1 hover:shadow-blue rounded text-white;
}

.secondary {
  @apply text-brand-blue-1 hover:bg-brand-blue-2 bg-transparent hover:text-white;
}
*/
</style>
