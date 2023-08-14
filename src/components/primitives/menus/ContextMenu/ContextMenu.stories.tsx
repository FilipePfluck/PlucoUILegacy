import type { Meta, StoryObj } from '@storybook/react'

import { MessageContextMenu } from './implementations/MessageContextMenu'
import { ExampleContextMenu } from './implementations/ExampleContextMenu'

const meta: Meta<typeof MessageContextMenu> = {
  component: MessageContextMenu,
}

export default meta
type Story = StoryObj<typeof MessageContextMenu>

export const Message: Story = {
  render: MessageContextMenu,
}

export const Example: Story = {
  render: ExampleContextMenu,
}
