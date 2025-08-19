<template>
  <div class="border-brand-gray-2 border-b border-solid py-5">
    <div class="flex cursor-pointer flex-wrap items-center justify-between" @click="open">
      <h3 class="text-base font-semibold">{{ header }}</h3>

      <font-awesome-icon :icon="caretIcon" />
    </div>
  </div>
  <div v-if="isOpen"><slot></slot></div>
</template>

<script>
export default {
  name: 'CollapsibleAccordion',
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
