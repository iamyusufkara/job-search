import { cleanup } from '@testing-library/vue'
import * as matchers from '@testing-library/jest-dom/matchers'
import { expect, afterEach } from 'vitest'

expect.extend(matchers)

// Nach jedem Test wird einmal zurückgesetzt, damit der nächste Test
afterEach(() => {
  cleanup()
})
