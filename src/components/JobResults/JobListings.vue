<template>
  <main class="bg-brand-gray-2 flex-auto p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Seite {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="text-brand-blue-1 mx-3 text-sm font-semibold"
            >Zurück</router-link
          >

          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="text-brand-blue-1 mx-3 text-sm font-semibold"
            >Weiter</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    }
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1')
    },
    previousPage() {
      const previousPage = this.currentPage - 1
      const firstPage = 1
      return previousPage >= firstPage ? previousPage : undefined
    },
    nextPage() {
      const nextPage = this.currentPage + 1
      const lastPage = Math.ceil(this.jobs.length / 10)
      return nextPage <= lastPage ? nextPage : undefined
    },
    displayedJobs() {
      const pageString = this.currentPage
      const pageNumber = Number.parseInt(pageString)
      const firstJobIndex = (pageNumber - 1) * 10
      const lastJobIndex = pageNumber * 10
      return this.jobs.slice(firstJobIndex, lastJobIndex)
    },
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const response = await axios.get(`${baseUrl}/jobs`)
    this.jobs = response.data
  },
}
</script>
