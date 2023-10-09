import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'
import { MdMail } from 'react-icons/md'
import { PasswordInput } from './PasswordInput'

const meta: Meta<typeof Input> = {
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: () => <Input placeholder="This is an input" />,
}

export const Disabled: Story = {
  render: () => (
    <Input placeholder="I am disabled" disabled icon={<MdMail />} />
  ),
}

export const Error: Story = {
  render: () => (
    <Input
      placeholder="I have an error"
      aria-invalid={true}
      icon={<MdMail />}
    />
  ),
}

export const WithIcon: Story = {
  render: () => <Input placeholder="Email" type="email" icon={<MdMail />} />,
}

export const Password: Story = {
  render: () => <PasswordInput />,
}
