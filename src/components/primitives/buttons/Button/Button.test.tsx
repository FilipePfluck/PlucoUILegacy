import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './index'
import { axe } from 'vitest-axe'

describe('Button component', () => {
  it('mounts and has no detectable a11y violations', async () => {
    const { container } = render(
      <Button intent="primary" size="md">
        Hello World
      </Button>,
    )

    expect(screen.getByText(/Hello World/i)).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })
})
