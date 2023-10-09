import { describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Tooltip } from './index'
import { Provider } from '@radix-ui/react-tooltip'
import { axe } from 'vitest-axe'
import userEvent from '@testing-library/user-event'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Button component', () => {
  const { container } = render(
    <Provider>
      <Tooltip message="Orange">🍊</Tooltip>
    </Provider>,
  )

  it('renders the trigger and has no detectable a11y violation', async () => {
    expect(screen.getByText('🍊')).toBeInTheDocument()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('does not show the tooltip text by default', async () => {
    expect(screen.queryByText('Orange')).not.toBeInTheDocument()
  })

  it('shows the text after hovering the trigger', async () => {
    const trigger = screen.getByText('🍊')

    userEvent.hover(trigger)

    await waitFor(() =>
      expect(screen.queryAllByText('Orange')[0]).toBeInTheDocument(),
    )
  })
})
