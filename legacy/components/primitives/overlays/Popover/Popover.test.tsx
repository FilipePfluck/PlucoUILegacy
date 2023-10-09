import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'

import { ExamplePopover } from './implementations/Example'
import { axe } from 'vitest-axe'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Dialog component', () => {
  const { container } = render(<ExamplePopover />)

  it('renders the trigger', () => {
    expect(screen.getByLabelText('Open popover')).toBeDefined()
  })

  it('has no detectable a11y violations', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should not show the content at the start', () => {
    expect(screen.queryByText('This is a popover')).toBeNull()
  })

  it('should show the content after clicking on the trigger', async () => {
    const trigger = screen.getByLabelText('Open popover')
    fireEvent.click(trigger)

    const content = await screen.findByText('This is a popover')

    expect(content).toBeDefined()
  })

  it('should close on esc press', async () => {
    const content = await screen.findByText('This is a popover')

    fireEvent.keyDown(content, { key: 'Escape', code: 'Escape' })

    expect(screen.queryByText('This is a popover')).toBeNull()
  })
})
