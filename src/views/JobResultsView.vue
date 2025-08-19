<template>
  <div class="flex w-full flex-row flex-nowrap"><job-filter-sidebar /> <job-listings /></div>
</template>

<script>
import JobFilterSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'

export default {
  name: 'JobResultsView',
  components: { JobFilterSidebar, JobListings },
}
</script>
