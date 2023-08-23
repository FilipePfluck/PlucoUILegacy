import type { Meta, StoryObj } from '@storybook/react'

import { Progress } from './index'

const meta: Meta<typeof Progress> = {
  component: Progress,
}

export default meta
type Story = StoryObj<typeof Progress>

export const Primary: Story = {
  render: () => <Progress progress={60} />,
}
