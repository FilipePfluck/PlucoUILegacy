import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Switch } from './index'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'

describe('Switch component', () => {
  const { container } = render(<Switch aria-label="Toggle switch" />)

  const user = userEvent.setup()

  it('mounts and has no detectable a11y violations', async () => {
    expect(screen.getByLabelText('Toggle switch')).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('checks when clicked', async () => {
    const switchElement = screen.getByRole('switch')
    await user.click(switchElement)

    expect(switchElement.getAttribute('aria-checked')).toBe('true')
  })

  it('unchecks when clicked again', async () => {
    const switchElement = screen.getByRole('switch')
    await user.click(switchElement)

    expect(switchElement.getAttribute('aria-checked')).toBe('false')
  })

  it('checks when pressing space while focused', async () => {
    const switchElement = screen.getByRole('switch')

    await user.keyboard('[Space]')

    expect(switchElement.getAttribute('aria-checked')).toBe('true')
  })
})
