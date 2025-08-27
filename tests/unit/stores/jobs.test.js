import { createPinia, setActivePinia } from 'pinia'
import axios from 'axios'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { useJobsStore } from '@/stores/jobs'
import { useUserStore } from '@/stores/user'

vi.mock('axios')

describe('state', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('stores job listings', () => {
    const store = useJobsStore()
    expect(store.jobs).toEqual([])
  })
})

describe('actions', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
})

describe('FETCH_JOBS', () => {
  it('makes API request and stores received jobs', async () => {
    axios.get.mockResolvedValue({ data: ['Job 1', 'Job 2'] })
    const store = useJobsStore()
    await store.FETCH_JOBS()
    expect(store.jobs).toEqual(['Job 1', 'Job 2'])
  })
})

describe('getters', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from list of jobs', () => {
      const store = useJobsStore()

      store.jobs = [
        { organization: 'Google' },
        { organization: 'Amazon' },
        { organization: 'Apple' },
      ]

      const result = store.UNIQUE_ORGANIZATIONS
      expect(result).toEqual(new Set(['Google', 'Amazon', 'Apple']))
    })
  })

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const store = useJobsStore()
      store.jobs = [{ jobType: 'Full-time' }, { jobType: 'Temporary' }, { jobType: 'Part-time' }]
      const result = store.UNIQUE_JOB_TYPES
      expect(result).toEqual(new Set(['Full-time', 'Temporary']))
    })
  })
})
