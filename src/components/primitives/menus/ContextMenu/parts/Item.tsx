import { ReactNode } from 'react'
import { ContextMenuItemProps } from '@radix-ui/react-context-menu'
import { cx } from '@/styled-system/css'

import * as S from '../styles'

export interface MenuItemProps extends ContextMenuItemProps {
  itemLabel: string
  rightSlot?: ReactNode
}

export const MenuItem = ({
  itemLabel,
  rightSlot,
  className,
  ...props
}: MenuItemProps) => {
  const itemClassname = cx('menuItem', className)

  return (
    <S.Item className={itemClassname} {...props}>
      {itemLabel}
      {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
    </S.Item>
  )
}
