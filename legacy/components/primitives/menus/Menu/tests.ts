import { expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

interface menuSharedTestsProps {
  openMenuWithMouse: () => Promise<void>
  openMenuWithKeyboard: () => Promise<void>
}

const checkIfItemsAreInTheDocument = () => {
  const menuItemOne = screen.queryByText('New Tab')
  const menuItemTwo = screen.queryByText('New Window')

  expect(menuItemOne).toBeInTheDocument()
  expect(menuItemTwo).toBeInTheDocument()
}

const checkIfItemsAreNotInTheDocument = () => {
  const menuItemOne = screen.queryByText('New Tab')
  const menuItemTwo = screen.queryByText('New Window')

  expect(menuItemOne).not.toBeInTheDocument()
  expect(menuItemTwo).not.toBeInTheDocument()
}

export const menuSharedTests = ({
  openMenuWithMouse,
  openMenuWithKeyboard,
}: menuSharedTestsProps) => {
  const user = userEvent.setup()

  it('does not display the menu items when the menu is not open', () => {
    checkIfItemsAreNotInTheDocument()
  })

  it('displays the menu items when the menu is open', async () => {
    await openMenuWithMouse()

    checkIfItemsAreInTheDocument()
  })

  it('checks the checkboxItem', async () => {
    const checkboxItem = screen.getByText('Show Full URLs')

    await user.click(checkboxItem)

    expect(checkboxItem.getAttribute('aria-checked')).toBe('true')
  })

  it('checks the radioItem', async () => {
    const pedroDuarte = screen.getByText('Pedro Duarte')
    expect(pedroDuarte.getAttribute('aria-checked')).toBe('true')
    const colmTuite = screen.getByText('Colm Tuite')
    expect(colmTuite.getAttribute('aria-checked')).toBe('false')

    await user.click(colmTuite)

    expect(pedroDuarte.getAttribute('aria-checked')).toBe('false')
    expect(colmTuite.getAttribute('aria-checked')).toBe('true')
  })

  it('closes the menu when clicking outside', async () => {
    const outsideElement = document.createElement('div')
    outsideElement.style.pointerEvents = 'auto'
    document.body.appendChild(outsideElement)

    await user.click(outsideElement)

    checkIfItemsAreNotInTheDocument()

    document.body.removeChild(outsideElement)
  })

  it('is able to open the menu with the keyboard', async () => {
    await openMenuWithKeyboard()

    checkIfItemsAreInTheDocument()
  })

  it('moves focus with the arrow keys', async () => {
    await user.keyboard('[ArrowDown][ArrowDown]')

    const menuItemTwo = screen.queryByText('New Window')

    expect(menuItemTwo).toHaveFocus()

    await user.keyboard('[ArrowUp]')

    const menuItemOne = screen.queryByText('New Tab')

    expect(menuItemOne).toHaveFocus()
  })

  it('opens the submenu with the arrow keys', async () => {
    await user.keyboard('[ArrowDown][ArrowDown][ArrowRight]')

    const menuItemOne = screen.queryByText('Save Page As')
    const menuItemTwo = screen.queryByText('Create Shortcut')

    expect(menuItemOne).toBeInTheDocument()
    expect(menuItemTwo).toBeInTheDocument()
    expect(menuItemOne).toHaveFocus()
  })

  it('closes the submenu with the arrow keys', async () => {
    await user.keyboard('[ArrowLeft]')

    const submenuTrigger = screen.getByText('More Tools')

    expect(submenuTrigger).toHaveFocus()
  })

  it('preserves checkbox state between renders', async () => {
    const checkboxItem = screen.getByText('Show Full URLs')

    expect(checkboxItem.getAttribute('aria-checked')).toBe('true')
  })

  it('preserves radio state between renders', async () => {
    const pedroDuarte = screen.getByText('Pedro Duarte')
    const colmTuite = screen.getByText('Colm Tuite')

    expect(pedroDuarte.getAttribute('aria-checked')).toBe('false')
    expect(colmTuite.getAttribute('aria-checked')).toBe('true')
  })

  it('checks the checkbox item with the keyboard', async () => {
    await user.keyboard('[ArrowDown][Space]')

    const showBookmarks = screen.getByText('Show Bookmarks')
    expect(showBookmarks.getAttribute('aria-checked')).toBe('false')

    await user.keyboard('[Space]')
    expect(showBookmarks.getAttribute('aria-checked')).toBe('true')
  })

  it('closes the menu when pressing esc', async () => {
    await user.keyboard('[Escape]')

    checkIfItemsAreNotInTheDocument()
  })
}
