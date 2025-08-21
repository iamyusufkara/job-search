<template>
  <main class="flex h-screen flex-col">
    <section class="pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2"><the-headline /><job-search-form /></div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            class="h-80 w-80 rounded-xl object-contain"
            src="https://images.pexels.com/photos/8837787/pexels-photo-8837787.jpeg"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="/jobs/results"
          class="bg-brand-gray-2 mx-5 flex h-96 w-72 flex-col rounded-lg border"
        >
          <img :src="slotProps.spotlight.img" class="object-contain" />
          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">
              {{ slotProps.spotlight.title }}
            </h3>
            <p class="mt-3 text-sm">
              {{ slotProps.spotlight.description }}
            </p>

            <router-link to="/jobs/results" class="text-brand-blue-1 px-6 pb-4 text-sm">
              Jobs anzeigen
            </router-link>
          </div>
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import SpotLight from '@/components/JobSearch/SpotLight.vue'

export default {
  name: 'HeroSection',
  components: {
    TheHeadline,
    JobSearchForm,
    SpotLight,
  },
}
</script>
