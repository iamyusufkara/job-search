import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import { useJobStore } from '@/stores/jobs'
import { describe, it, expect } from 'vitest'

describe('JobFiltersSidebarOrganizations', () => {
  it('renders unique list of organizaitons from jobs', async () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobStore()
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon', 'Apple'])

    render(JobFiltersSidebarOrganizations, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    })

    const button = screen.getByRole('button', { name: /organizaitons/i })
    await userEvent.click(button)

    const organizationListItems = screen.getAllByRole('listitem')
    const organizaitons = organizationListItems.map((node) => node.textContent)
    expect(organizaitons).toEqual(['Google', 'Amazon', 'Apple'])
  })
})
