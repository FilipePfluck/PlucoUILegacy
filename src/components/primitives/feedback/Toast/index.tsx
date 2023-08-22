import * as S from './styles'
import { ToastWithId } from './types'
import {
  MdCheckCircle,
  MdClose,
  MdError,
  MdInfo,
  MdWarning,
} from 'react-icons/md'
import { Flex } from '@/styled-system/jsx'

export const Toast = ({
  title,
  description,
  id,
  onClose,
  onOpenChange,
  intent,
  withIcon,
  ...props
}: ToastWithId) => {
  return (
    <S.Root
      intent={intent}
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
      {withIcon && intent === 'danger' && <MdError size={24} />}
      {withIcon && intent === 'warning' && <MdWarning size={24} />}
      {withIcon && intent === 'info' && <MdInfo size={24} />}
      {withIcon && intent === 'success' && <MdCheckCircle size={24} />}
      <Flex direction="column" gap="2">
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </Flex>

      <S.Close aria-label="close">
        <MdClose />
      </S.Close>
    </S.Root>
  )
}
