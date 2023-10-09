import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { IconButton } from './index'
import { axe } from 'vitest-axe'
import { MdAdd } from 'react-icons/md'

describe('IconButton component', () => {
  it('mounts and has no detectable a11y violations', async () => {
    const { container } = render(
      <IconButton aria-label="Test">
        <MdAdd />
      </IconButton>,
    )

    expect(await axe(container)).toHaveNoViolations()
  })
})
