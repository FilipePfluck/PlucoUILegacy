import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Avatar } from './index'
import { axe } from 'vitest-axe'

describe('Avatar component', () => {
  const { container } = render(<Avatar src="" alt="Joe Doe" />)

  it('mounts and has no detectable a11y violations', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })
})
