import { ToggleProps as RadixToggleProps } from '@radix-ui/react-toggle'
import * as S from './styles'
import { HTMLStyledProps } from '@/styled-system/jsx'

type ToggleProps = RadixToggleProps & HTMLStyledProps<'button'> & S.RootVariants

export const Toggle = ({ children, ...props }: ToggleProps) => {
  return <S.Root {...props}>{children}</S.Root>
}
