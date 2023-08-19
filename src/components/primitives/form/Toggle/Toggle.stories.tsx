import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './index'
import { MdFormatItalic } from 'react-icons/md'

const meta: Meta<typeof Toggle> = {
  component: Toggle,
}

export default meta
type Story = StoryObj<typeof Toggle>

export const Primary: Story = {
  render: () => (
    <Toggle>
      <MdFormatItalic aria-label="Toggle Italic" />
    </Toggle>
  ),
}
