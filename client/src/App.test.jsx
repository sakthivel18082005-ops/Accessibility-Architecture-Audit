
import { render, screen, waitFor } from '@testing-library/react'
import { vi, describe, test, expect, beforeEach } from 'vitest'
import App from './App'

describe('Accessible Service Directory', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve([
              {
                id: 1,
                name: 'Government Services',
                category: 'Government',
                description: 'Access government services and information.',
              },
              {
                id: 2,
                name: 'Education Services',
                category: 'Education',
                description: 'Find educational resources and opportunities.',
              },
              {
                id: 3,
                name: 'Healthcare Services',
                category: 'Healthcare',
                description: 'Explore healthcare information and services.',
              },
              {
                id: 4,
                name: 'Public Information',
                category: 'Information',
                description: 'Find public announcements and useful information.',
              },
            ]),
        }),
      ),
    )
  })

  test('displays all four services', async () => {
    render(<App />)

    expect(await screen.findByText('Government Services')).toBeInTheDocument()
    expect(screen.getByText('Education Services')).toBeInTheDocument()
    expect(screen.getByText('Healthcare Services')).toBeInTheDocument()
    expect(screen.getByText('Public Information')).toBeInTheDocument()
  })

  test('filters services using the search box', async () => {
    render(<App />)

    const searchInput = screen.getByLabelText('Search for a service')

    await waitFor(() => {
      expect(screen.getByText('4 services found')).toBeInTheDocument()
    })

    await screen.findByText('Education Services')

    await import('@testing-library/user-event').then(async ({ default: userEvent }) => {
      const user = userEvent.setup()
      await user.type(searchInput, 'Education')
    })

    expect(screen.getByText('Education Services')).toBeInTheDocument()
    expect(screen.queryByText('Government Services')).not.toBeInTheDocument()
  })
})
