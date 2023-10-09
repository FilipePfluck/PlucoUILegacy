import { test, expect } from '@playwright/experimental-ct-react'
import AxeBuilder from '@axe-core/playwright'
import { IconButton } from './index'
import { MdScience } from 'react-icons/md'

test('should render and have no a11y violations', async ({ mount, page }) => {
  const component = await mount(
    <IconButton aria-label="Test" id="button">
      <MdScience />
    </IconButton>,
  )
  await expect(component).toHaveAttribute('aria-label', 'Test')

  const axe = await new AxeBuilder({ page }).include('#button').analyze()

  expect(axe.violations).toEqual([])
})
