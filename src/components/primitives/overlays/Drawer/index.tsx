import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { IconButton } from '../../buttons/IconButton'
import { MdClose } from 'react-icons/md'
import { Scrollable } from '../../Scrollable'
import { css } from '@/styled-system/css'

interface DrawerProps extends Dialog.DialogContentProps {
  title?: string
  description?: string
  mode?: 'modal' | 'non-modal'
  side?: 'right' | 'left' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg'
}

export const DrawerContent = ({
  title,
  description,
  side,
  size,
  mode = 'modal',
  children,
  ...props
}: DrawerProps) => {
  return (
    <Dialog.Portal>
      {mode === 'modal' && <S.Overlay />}
      <S.Content
        {...(!description ? { 'aria-labeledby': undefined } : {})}
        {...(mode === 'non-modal'
          ? { onPointerDownOutside: (e) => e.preventDefault() }
          : {})}
        side={side}
        size={size}
        {...props}
      >
        <S.Header>
          <S.Title>{title}</S.Title>
          <Dialog.Close asChild>
            <IconButton aria-label="close" size="lg">
              <MdClose />
            </IconButton>
          </Dialog.Close>
        </S.Header>
        <Scrollable
          size="md"
          borderSize="md"
          className={css({
            w: 'calc(100% + 8px)',
          })}
        >
          {description && <S.Description>{description}</S.Description>}
          {children}
        </Scrollable>
      </S.Content>
    </Dialog.Portal>
  )
}
