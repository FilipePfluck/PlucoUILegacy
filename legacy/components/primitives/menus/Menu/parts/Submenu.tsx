import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as ContextMenu from '@radix-ui/react-context-menu'

import * as S from '../styles'

import { MdChevronRight } from 'react-icons/md'
import { cx } from '@/styled-system/css'
import { MenuType } from '../types'
import { styled } from '@/styled-system/jsx'

type GenericSubmenu<T extends MenuType> = T extends 'dropdown'
  ? DropdownMenu.DropdownMenuSubTriggerProps
  : ContextMenu.ContextMenuSubTriggerProps

type SubmenuTriggerProps<T extends MenuType> = {
  type: T
  label: string
  itemPaddingLeft?: 'none' | 'md'
} & GenericSubmenu<T>

const DropdownSubTrigger = styled(DropdownMenu.SubTrigger, S.subMenuStyles)
const ContextSubTrigger = styled(ContextMenu.SubTrigger, S.subMenuStyles)

const DropdownSubContent = styled(DropdownMenu.SubContent, S.menuContentStyles)
const ContextSubContent = styled(ContextMenu.SubContent, S.menuContentStyles)

const RightSlot = styled('div', S.menuRightSlotStyles)

export const Submenu = <T extends MenuType>({
  label,
  children,
  itemPaddingLeft,
  className,
  type,
  ...props
}: SubmenuTriggerProps<T>) => {
  const triggerClassname = cx('menuItem', className)

  const Menu = type === 'dropdown' ? DropdownMenu : ContextMenu

  const SubTrigger =
    type === 'dropdown' ? DropdownSubTrigger : ContextSubTrigger

  const SubContent =
    type === 'dropdown' ? DropdownSubContent : ContextSubContent

  return (
    <Menu.Sub {...props}>
      <SubTrigger className={triggerClassname}>
        {label}
        <RightSlot>
          <MdChevronRight />
        </RightSlot>
      </SubTrigger>

      <Menu.Portal>
        <SubContent itemPaddingLeft={itemPaddingLeft} sideOffset={4}>
          {children}
        </SubContent>
      </Menu.Portal>
    </Menu.Sub>
  )
}
