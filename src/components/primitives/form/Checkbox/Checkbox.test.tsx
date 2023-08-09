import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Checkbox } from './index'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'

describe('Checkbox component', () => {
  const { container } = render(
    <Checkbox id="checkbox-test" label="This is a checkbox" />,
  )

  const user = userEvent.setup()

  it('mounts and has no detectable a11y violations', async () => {
    expect(screen.getByText('This is a checkbox')).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('checks when clicked', async () => {
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(checkbox.getAttribute('aria-checked')).toBe('true')
  })

  it('unchecks when clicked again', async () => {
    const checkbox = screen.getByRole('checkbox')
    await user.click(checkbox)

    expect(checkbox.getAttribute('aria-checked')).toBe('false')
  })

  it('checks when pressing space while focused', async () => {
    const checkbox = screen.getByRole('checkbox')

    await user.keyboard('[Space]')

    expect(checkbox.getAttribute('aria-checked')).toBe('true')
  })
})
