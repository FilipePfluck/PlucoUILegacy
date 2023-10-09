import type { Meta, StoryObj } from '@storybook/react'

import { ToggleGroup } from './index'
import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
} from 'react-icons/md'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
}

export default meta
type Story = StoryObj<typeof ToggleGroup>

const items = [
  {
    element: <MdFormatBold />,
    'aria-label': 'Bold',
    value: 'bold',
  },
  {
    element: <MdFormatItalic />,
    'aria-label': 'Italic',
    value: 'italic',
  },
  {
    element: <MdFormatStrikethrough />,
    'aria-label': 'Strike through',
    value: 'strikethrough',
  },
]

const items2 = [
  {
    element: <MdFormatAlignLeft />,
    'aria-label': 'Align left',
    value: 'left',
  },
  {
    element: <MdFormatAlignCenter />,
    'aria-label': 'Align center',
    value: 'center',
  },
  {
    element: <MdFormatAlignRight />,
    'aria-label': 'Align right',
    value: 'right',
  },
]

export const Multiple: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <ToggleGroup
        type="multiple"
        aria-label="Text formatting"
        spacing="tight"
        items={items}
      />

      <ToggleGroup
        type="multiple"
        aria-label="Text formatting"
        spacing="spaced"
        items={items}
      />
    </Flex>
  ),
}

export const Single: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <ToggleGroup
        type="single"
        aria-label="Text alignment"
        spacing="tight"
        items={items2}
      />

      <ToggleGroup
        type="single"
        aria-label="Text alignment"
        spacing="spaced"
        items={items2}
      />
    </Flex>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Flex direction="row" gap="4">
      <ToggleGroup
        type="multiple"
        aria-label="Text formatting"
        spacing="tight"
        orientation="vertical"
        items={items}
      />

      <ToggleGroup
        type="multiple"
        aria-label="Text formatting"
        spacing="spaced"
        orientation="vertical"
        items={items}
      />
    </Flex>
  ),
}
