import { ProgressProps as RadixProgressProps } from '@radix-ui/react-progress'
import * as S from './styles'

interface ProgressProps extends RadixProgressProps {
  progress: number
  // name is required for a11y
  name: string
}

export const Progress = ({ progress, name, ...props }: ProgressProps) => {
  return (
    <S.Root value={progress} aria-label={name} {...props}>
      <S.Indicator style={{ transform: `translateX(-${100 - progress}%)` }} />
    </S.Root>
  )
}
