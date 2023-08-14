import * as Dropdown from '@radix-ui/react-dropdown-menu'
import * as Context from '@radix-ui/react-context-menu'

import * as S from '../styles'

import { MdDelete, MdEdit, MdReply, MdShare, MdPushPin } from 'react-icons/md'
import { MenuItem } from '../parts/Item'
import { MenuType } from '../types'
import { styled } from '@/styled-system/jsx'

const DropdownContent = styled(Dropdown.Content, S.menuContentStyles)
const ContextContent = styled(Context.Content, S.menuContentStyles)

const DropdownArrow = styled(Dropdown.Arrow, S.menuArrowStyles)

type GenericContent<T extends MenuType> = T extends 'dropdown'
  ? Dropdown.DropdownMenuContentProps
  : Context.ContextMenuContentProps

type MessageMenuProps<T extends MenuType> = {
  type: T
} & GenericContent<T>

export const MessageMenu = <T extends MenuType>({
  type,
  ...props
}: MessageMenuProps<T>) => {
  const Portal = type === 'dropdown' ? Dropdown.Portal : Context.Portal
  const Content = type === 'dropdown' ? DropdownContent : ContextContent

  return (
    <Portal>
      <Content
        data-testid="MessageDropdownMenuContent"
        sideOffset={8}
        {...props}
      >
        {type === 'dropdown' && <DropdownArrow />}

        <MenuItem type={type} itemLabel="Edit message" rightSlot={<MdEdit />} />
        <MenuItem
          type={type}
          itemLabel="Delete message"
          rightSlot={<MdDelete />}
        />
        <MenuItem
          type={type}
          itemLabel="Pin message"
          rightSlot={<MdPushPin />}
        />
        <MenuItem type={type} itemLabel="Reply" rightSlot={<MdReply />} />
        <MenuItem type={type} itemLabel="Share" rightSlot={<MdShare />} />
      </Content>
    </Portal>
  )
}
