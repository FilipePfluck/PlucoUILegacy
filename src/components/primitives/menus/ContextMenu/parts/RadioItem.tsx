import { ContextMenuRadioItemProps } from '@radix-ui/react-context-menu'
import { cx } from '@/styled-system/css'

import * as S from '../styles'

export interface MenuItemProps extends ContextMenuRadioItemProps {
  itemLabel: string
  rightSlot?: string
}

export const DropdownRadioItem = ({
  itemLabel,
  rightSlot,
  className,
  ...props
}: MenuItemProps) => {
  const itemClassname = cx('menuItem', className)

  return (
    <S.RadioItem
      className={itemClassname}
      onSelect={(e) => e.preventDefault()}
      {...props}
    >
      <S.ItemCheckedIndicator>•</S.ItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
    </S.RadioItem>
  )
}
