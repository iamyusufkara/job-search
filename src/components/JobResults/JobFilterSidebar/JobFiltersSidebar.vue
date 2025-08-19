<template>
  <div class="border-brand-gray-1 flex w-96 flex-col border-r border-solid bg-white p-4">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">Filter</h3>
        <div class="flex items-center text-sm">
          <action-button text="Filter zurücksetzen" type="secondary" />
        </div>
      </div>
      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import JobFiltersSidebarOrganizations from './JobFiltersSidebarOrganizations.vue'

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    JobFiltersSidebarOrganizations,
  },
}
</script>
