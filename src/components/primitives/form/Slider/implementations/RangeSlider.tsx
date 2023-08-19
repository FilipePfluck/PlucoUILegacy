'use client'

import { Flex } from '@/styled-system/jsx'
import { Slider } from '..'
import { useState } from 'react'

export const RangeSlider = () => {
  const [value, setValue] = useState([10, 90])

  return (
    <Flex align="center" gap="2" color="violet.11">
      <p>
        {value[0]} - {value[1]}
      </p>
      <Slider
        labels={['minimum value', 'maximum value']}
        defaultValue={[10, 90]}
        max={100}
        step={1}
        value={value}
        onValueChange={setValue}
      />
    </Flex>
  )
}
