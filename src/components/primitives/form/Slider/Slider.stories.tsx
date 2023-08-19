import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from './index'
import { VolumeSlider } from './implementations/VolumeSlider'
import { RangeSlider } from './implementations/RangeSlider'

const meta: Meta<typeof Slider> = {
  component: Slider,
}

export default meta
type Story = StoryObj<typeof Slider>

export const Volume: Story = {
  render: VolumeSlider,
}

export const Range: Story = {
  render: RangeSlider,
}
