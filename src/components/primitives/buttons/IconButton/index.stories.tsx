import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './index'
import { MdAdd, MdClose } from 'react-icons/md'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

export const iconButton: Story = {
  args: {
    children: <MdClose />,
  },
  parameters: {
    controls: {
      include: ['size', 'intent', 'roundness'],
    },
  },
}

export const Primary: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center" justify="center">
      <Flex gap="4" align="center" justify="center">
        <IconButton aria-label="add" size="md">
          <MdAdd />
        </IconButton>
        <IconButton aria-label="add" size="lg">
          <MdAdd />
        </IconButton>
      </Flex>
    </Flex>
  ),
}

export const Secondary: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center" justify="center">
      <Flex gap="4" align="center" justify="center">
        <IconButton intent="secondary" aria-label="add" size="md">
          <MdAdd />
        </IconButton>
        <IconButton intent="secondary" aria-label="add" size="lg">
          <MdAdd />
        </IconButton>
      </Flex>
    </Flex>
  ),
}

export const Danger: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center" justify="center">
      <Flex gap="4" align="center" justify="center">
        <IconButton intent="danger" aria-label="add" size="md">
          <MdAdd />
        </IconButton>
        <IconButton intent="danger" aria-label="add" size="lg">
          <MdAdd />
        </IconButton>
      </Flex>
    </Flex>
  ),
}

export const Ghost: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center" justify="center">
      <Flex gap="4" align="center" justify="center">
        <IconButton intent="ghost" aria-label="add" size="md">
          <MdAdd />
        </IconButton>
        <IconButton intent="ghost" aria-label="add" size="lg">
          <MdAdd />
        </IconButton>
      </Flex>
    </Flex>
  ),
}
