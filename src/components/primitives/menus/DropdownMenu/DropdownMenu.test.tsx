import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ExampleDropdownMenu } from './implementations/ExampleDropdownMenu'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { menuSharedTests } from '../Menu/tests'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Dropdown Menu component', () => {
  const { container } = render(<ExampleDropdownMenu />)

  const user = userEvent.setup()

  it('renders and has no detectable a11y violationd', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  const openWithMouse = async () => {
    const trigger = screen.getByLabelText('Options')

    await user.click(trigger)
  }

  const openWithKeyboard = async () => {
    const trigger = screen.getByLabelText('Options')
    trigger.focus()

    await userEvent.type(trigger, ' ')
  }

  menuSharedTests({
    openMenuWithKeyboard: openWithKeyboard,
    openMenuWithMouse: openWithMouse,
  })
})
