import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './index'
import { MdAdd } from 'react-icons/md'
import { Flex } from '@/styled-system/jsx'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center" justify="center">
      <Flex gap="4" align="center" justify="center">
        <IconButton bg="primary" aria-label="add" size="md" rounded="lg">
          <MdAdd />
        </IconButton>
        <IconButton bg="primary" aria-label="add" size="lg" rounded="lg">
          <MdAdd />
        </IconButton>
      </Flex>
      <Flex gap="4" align="center" justify="center">
        <IconButton bg="primary" aria-label="add" size="md">
          <MdAdd />
        </IconButton>
        <IconButton bg="primary" aria-label="add" size="lg">
          <MdAdd />
        </IconButton>
      </Flex>
    </Flex>
  ),
}

export const Gray: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center" justify="center">
      <Flex gap="4" align="center" justify="center">
        <IconButton bg="gray" aria-label="add" size="md" rounded="lg">
          <MdAdd />
        </IconButton>
        <IconButton bg="gray" aria-label="add" size="lg" rounded="lg">
          <MdAdd />
        </IconButton>
      </Flex>
      <Flex gap="4" align="center" justify="center">
        <IconButton bg="gray" aria-label="add" size="md">
          <MdAdd />
        </IconButton>
        <IconButton bg="gray" aria-label="add" size="lg">
          <MdAdd />
        </IconButton>
      </Flex>
    </Flex>
  ),
}

export const Transparent: Story = {
  render: () => (
    <Flex direction="column" gap="4" align="center" justify="center">
      <Flex gap="4" align="center" justify="center">
        <IconButton bg="transparent" aria-label="add" size="md" rounded="lg">
          <MdAdd />
        </IconButton>
        <IconButton bg="transparent" aria-label="add" size="lg" rounded="lg">
          <MdAdd />
        </IconButton>
      </Flex>
      <Flex gap="4" align="center" justify="center">
        <IconButton bg="transparent" aria-label="add" size="md">
          <MdAdd />
        </IconButton>
        <IconButton bg="transparent" aria-label="add" size="lg">
          <MdAdd />
        </IconButton>
      </Flex>
    </Flex>
  ),
}
