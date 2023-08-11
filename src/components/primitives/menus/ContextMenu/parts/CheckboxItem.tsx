import { MenuCheckboxItemProps } from '@radix-ui/react-context-menu'
import { MdCheck } from 'react-icons/md'
import { cx } from '@/styled-system/css'

import * as S from '../styles'

export interface MenuItemProps extends MenuCheckboxItemProps {
  itemLabel: string
  rightSlot?: string
}

export const MenuCheckboxItem = ({
  itemLabel,
  rightSlot,
  className,
  ...props
}: MenuItemProps) => {
  const itemClassname = cx('menuItem', className)

  return (
    <S.CheckboxItem
      className={itemClassname}
      onSelect={(e) => e.preventDefault()}
      {...props}
    >
      <S.ItemCheckedIndicator>
        <MdCheck />
      </S.ItemCheckedIndicator>
      {itemLabel}
      {rightSlot && <S.RightSlot>{rightSlot}</S.RightSlot>}
    </S.CheckboxItem>
  )
}
