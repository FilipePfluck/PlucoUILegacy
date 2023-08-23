import { ProgressProps as RadixProgressProps } from '@radix-ui/react-progress'
import * as S from './styles'

interface ProgressProps extends RadixProgressProps {
  progress: number
}

export const Progress = ({ progress, ...props }: ProgressProps) => {
  return (
    <S.Root value={progress} {...props}>
      <S.Indicator style={{ transform: `translateX(-${100 - progress}%)` }} />
    </S.Root>
  )
}
