import type { Meta, StoryObj } from '@storybook/react'

import { RadixExampleMenu } from './implementations/ExampleMenu'

const meta: Meta<typeof RadixExampleMenu> = {
  component: RadixExampleMenu,
}

export default meta
type Story = StoryObj<typeof RadixExampleMenu>

export const RadixExample: Story = {
  render: RadixExampleMenu,
}
