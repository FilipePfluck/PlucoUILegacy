import * as ContextMenu from '@radix-ui/react-context-menu'

import * as S from '../styles'

import { MdChevronRight } from 'react-icons/md'
import { cx } from '@/styled-system/css'

interface ContextSubTriggerProps
  extends ContextMenu.ContextMenuSubTriggerProps {
  label: string
  itemPaddingLeft?: 'none' | 'md'
}

export const ContextSub = ({
  label,
  children,
  itemPaddingLeft,
  className,
  ...props
}: ContextSubTriggerProps) => {
  const triggerClassname = cx('menuItem', className)

  return (
    <ContextMenu.Sub {...props}>
      <S.SubTrigger className={triggerClassname}>
        {label}
        <S.RightSlot>
          <MdChevronRight />
        </S.RightSlot>
      </S.SubTrigger>

      <ContextMenu.Portal>
        <S.SubContent itemPaddingLeft={itemPaddingLeft} sideOffset={4}>
          {children}
        </S.SubContent>
      </ContextMenu.Portal>
    </ContextMenu.Sub>
  )
}
