import type { Meta, StoryObj } from '@storybook/react'

import { EmojiDialog } from './implementations/EmojiDialog'

const meta: Meta<typeof EmojiDialog> = {
  component: EmojiDialog,
}

export default meta
type Story = StoryObj<typeof EmojiDialog>

export const Orange: Story = {
  render: () => (
    <EmojiDialog
      name="Orange"
      id="orange"
      emoji="🍊"
      description="The orange is a fruit of several citrus species of the Rutaceae family; primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as sour orange."
    />
  ),
}

export const Pineapple: Story = {
  render: () => (
    <EmojiDialog
      name="Pineapple"
      id="pineaplle"
      emoji="🍍"
      description="The pineapple is a tropical fruit produced by the plant of the same name, characterized as a monocotyledonous plant of the bromeliaceae family of the subfamily Bromelioideae. It is a symbol of tropical and subtropical regions."
    />
  ),
}
