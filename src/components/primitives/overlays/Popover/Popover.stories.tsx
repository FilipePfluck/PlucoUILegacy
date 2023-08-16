import type { Meta, StoryObj } from '@storybook/react'

import { Popover } from './index'
import { ExamplePopover } from './implementations/Example'

const meta: Meta<typeof Popover> = {
  component: Popover,
}

export default meta
type Story = StoryObj<typeof Popover>

export const Dimensions: Story = {
  render: ExamplePopover,
}
