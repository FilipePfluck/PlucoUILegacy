import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress } from './index'
import { axe } from 'vitest-axe'

describe('Collapsible component', () => {
  const { container } = render(
    <Progress name="Progress of tests" progress={60} />,
  )

  it('has no detectable a11y violationd', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  it('has correct aria properties', async () => {
    const progressbar = screen.getByRole('progressbar')

    const valueMax = progressbar.getAttribute('aria-valuemax')
    const valueMin = progressbar.getAttribute('aria-valuemax')
    const valueNow = progressbar.getAttribute('aria-valuemax')

    expect(valueMax).toBeTruthy()
    expect(valueMin).toBeTruthy()
    expect(valueNow).toBeTruthy()
  })
})
