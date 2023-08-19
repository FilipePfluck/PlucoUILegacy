import {
  ToggleGroupSingleProps,
  ToggleGroupMultipleProps,
  ToggleGroupItemProps,
} from '@radix-ui/react-toggle-group'
import * as S from './styles'
import { ReactNode } from 'react'
import { RootVariants } from '../Toggle/styles'
import { HTMLStyledProps } from '@/styled-system/jsx'

type RadixToggleProps = ToggleGroupSingleProps | ToggleGroupMultipleProps

type ToggleItemProps = ToggleGroupItemProps &
  HTMLStyledProps<'button'> &
  RootVariants & {
    element: ReactNode
  }

type ToggleGroupProps = RadixToggleProps &
  S.ToggleGroupVariants & {
    items: ToggleItemProps[]
  }

export const ToggleGroup = ({
  items,
  orientation = 'horizontal',
  spacing,
  ...props
}: ToggleGroupProps) => {
  return (
    <S.Root
      orientation={orientation}
      direction={orientation}
      spacing={spacing}
      {...props}
    >
      {items.map(({ value, element, ...item }) => (
        <S.Item
          // If the toggle group is tight,
          // then we'll apply border radius to the item
          // based on the position
          // I.E the first and last child will receive border radius
          orderBasedBorderRadius={spacing === 'tight'}
          value={value}
          key={value}
          {...item}
        >
          {element}
        </S.Item>
      ))}
    </S.Root>
  )
}
