import { render, screen } from '@testing-library/vue'

import MainNav from '@/components/Navigation/MainNav.vue'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    })
  }

  it('displays company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Hirely')
    expect(companyName).toBeInTheDocument()
  })

  it('displays menu items for navigation', () => {
    renderMainNav()
    const navigationMenuItems = screen.getAllByRole('listitem')
    const navigationMenuTexts = navigationMenuItems.map((item) => item.textContent)
    expect(navigationMenuTexts).toEqual(['Unser Team', 'Standorte', 'How we hire', 'Karriere'])
  })

  describe('when the user logs in', () => {
    it('displays user profile picture', async () => {
      renderMainNav()

      let profileImage = screen.queryByRole('img', {
        name: /user profile image/i,
      })

      const loginButton = screen.getByRole('button', {
        name: /Login/i,
      })

      await userEvent.click(loginButton)

      expect(profileImage).not.toBeInTheDocument()
    })
  })
})
