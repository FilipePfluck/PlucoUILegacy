import { SliderProps as RadixSliderProps } from '@radix-ui/react-slider'

import * as S from './styles'

interface SliderProps extends RadixSliderProps {
  labels: string[]
}

export const Slider = ({ ...props }: SliderProps) => {
  const value = props.value || props.defaultValue || [0]

  return (
    <S.Root {...props}>
      <S.Track>
        <S.Range />
      </S.Track>
      {value.map((_, i) => (
        <S.Thumb key={i} aria-label={props.labels[i]} />
      ))}
    </S.Root>
  )
}
