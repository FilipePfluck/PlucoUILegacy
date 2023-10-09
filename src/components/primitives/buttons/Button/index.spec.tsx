import { test, expect } from '@playwright/experimental-ct-react'
import AxeBuilder from '@axe-core/playwright'
import { Button } from './index'

test('should render and have no a11y violations', async ({ mount, page }) => {
  const component = await mount(<Button id="button">Hello playwright</Button>)
  await expect(component).toContainText('Hello playwright')

  const axe = await new AxeBuilder({ page }).include('#button').analyze()

  expect(axe.violations).toEqual([])
})
