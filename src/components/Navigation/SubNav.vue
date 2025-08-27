<template>
  <div class="border-brand-gray-1 h-16 w-full border-b border-solid bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span> Jobs gefunden</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useJobsStore, FILTERED_JOBS } from '@/stores/jobs'

export default {
  name: 'SubNav',
  computed: {
    ...mapState(useJobsStore, [FILTERED_JOBS]),
    onJobResultsPage() {
      return this.$route.name === 'JobResults'
    },
  },
}
</script>
