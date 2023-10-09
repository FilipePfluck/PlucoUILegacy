import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ExampleContextMenu } from './implementations/ExampleContextMenu'
import { axe } from 'vitest-axe'
import { menuSharedTests } from '../Menu/tests'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Context Menu component', () => {
  const { container } = render(<ExampleContextMenu />)

  it('renders and has no detectable a11y violationd', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  const openWithMouse = async () => {
    const trigger = screen.getByText('Right click here')
    trigger.focus()

    fireEvent.contextMenu(trigger)
  }

  // context menu does not support trigger with keyboard
  const openWithKeyboard = async () => {
    const trigger = screen.getByText('Right click here')
    trigger.focus()

    fireEvent.contextMenu(trigger)
  }

  menuSharedTests({
    openMenuWithKeyboard: openWithKeyboard,
    openMenuWithMouse: openWithMouse,
  })
})
