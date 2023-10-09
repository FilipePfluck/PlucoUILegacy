import type { Meta, StoryObj } from '@storybook/react'

import { MessageDropdownMenu } from './implementations/MessageDropdownMenu'
import { ExampleDropdownMenu } from './implementations/ExampleDropdownMenu'

const meta: Meta<typeof MessageDropdownMenu> = {
  component: MessageDropdownMenu,
}

export default meta
type Story = StoryObj<typeof MessageDropdownMenu>

export const Message: Story = {
  render: MessageDropdownMenu,
}

export const Example: Story = {
  render: ExampleDropdownMenu,
}
