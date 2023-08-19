import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Toggle } from './index'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { MdFormatItalic } from 'react-icons/md'

describe('Toggle component', () => {
  const { container } = render(
    <Toggle>
      <MdFormatItalic aria-label="Italic" />
    </Toggle>,
  )

  const user = userEvent.setup()

  it('mounts and has no detectable a11y violations', async () => {
    expect(screen.getByRole('button')).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('checks when clicked', async () => {
    const toggle = screen.getByRole('button')
    await user.click(toggle)

    expect(toggle.getAttribute('aria-pressed')).toBe('true')
  })

  it('unchecks when clicked again', async () => {
    const toggle = screen.getByRole('button')
    await user.click(toggle)

    expect(toggle.getAttribute('aria-pressed')).toBe('false')
  })

  it('checks when pressing space while focused', async () => {
    const toggle = screen.getByRole('button')

    expect(toggle).toHaveFocus()

    await user.keyboard('[Space]')

    expect(toggle.getAttribute('aria-pressed')).toBe('true')
  })
})
