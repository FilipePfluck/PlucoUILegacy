import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './index'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  render: () => (
    <Avatar
      src="https://avatars.githubusercontent.com/u/62773200?s=96&v=4"
      alt="Filipe Pfluck"
    />
  ),
}

export const Fallback: Story = {
  render: () => <Avatar src="" alt="Joe Doe" />,
}
