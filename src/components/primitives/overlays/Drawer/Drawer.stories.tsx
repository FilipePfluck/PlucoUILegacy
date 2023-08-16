import type { Meta, StoryObj } from '@storybook/react'

import { DrawerExample } from './implementations/Example'
import { NonModalExample } from './implementations/NonModalExample'

const meta: Meta<typeof DrawerExample> = {
  component: DrawerExample,
}

export default meta
type Story = StoryObj<typeof DrawerExample>

export const Primary: Story = {
  render: () => <DrawerExample />,
}

export const NonModal: Story = {
  render: () => <NonModalExample />,
}
