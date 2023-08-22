import * as S from './styles'
import { ToastWithId } from './types'

export const Toast = ({
  title,
  description,
  id,
  onClose,
  onOpenChange,
  ...props
}: ToastWithId) => {
  return (
    <S.Root
      onOpenChange={(open) => {
        if (!open) {
          onClose(id)
        }
        if (onOpenChange) {
          onOpenChange(open)
        }
      }}
      key={id}
      {...props}
    >
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Root>
  )
}
