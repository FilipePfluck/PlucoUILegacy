import type { Meta, StoryObj } from '@storybook/react'

import { FavoritePetTabs } from './implementations/FavoritePetTabs'
import { VegetableTabs } from './implementations/VegetableTabs'
import { ProteicTabs } from './implementations/ProteicTabs'

const meta: Meta<typeof FavoritePetTabs> = {
  component: FavoritePetTabs,
}

export default meta
type Story = StoryObj<typeof FavoritePetTabs>

export const Pets: Story = {
  render: FavoritePetTabs,
}

export const Vegetables: Story = {
  render: VegetableTabs,
}

export const Protein: Story = {
  render: ProteicTabs,
}
