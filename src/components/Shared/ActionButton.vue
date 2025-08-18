<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: { type: String, required: true },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validtor(value) {
        return ['primary', 'secondary'].includes(value)
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      }
    },
  },
}
</script>

<style scoped>
@reference "../../index.css";

button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply bg-brand-blue-1 hover:shadow-blue rounded border-0 text-white;
}

.secondary {
  @apply text-brand-blue-1 hover:bg-brand-blue-2 bg-transparent hover:text-white;
}
</style>
