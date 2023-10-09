import { useState } from 'react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import * as Context from '@radix-ui/react-context-menu'

import * as S from '../styles'
import { MenuItem } from '../parts/Item'
import { Submenu } from '../parts/Submenu'
import { CheckboxItem } from '../parts/CheckboxItem'
import { RadioItem } from '../parts/RadioItem'
import { MenuProps, MenuType } from '../types'
import { styled } from '@/styled-system/jsx'

const DropdownContent = styled(Dropdown.Content, S.menuContentStyles)
const ContextContent = styled(Context.Content, S.menuContentStyles)

const DropdownArrow = styled(Dropdown.Arrow, S.menuArrowStyles)

const DropdownSeparator = styled(Dropdown.Separator, S.menuSeparatorStyles)
const ContextSeparator = styled(Context.Separator, S.menuSeparatorStyles)

const DropdownLabel = styled(Dropdown.Label, S.menuLabelStyles)
const ContextLabel = styled(Context.Label, S.menuLabelStyles)

export const RadixExampleMenu = <T extends MenuType>({
  type,
  ...props
}: MenuProps<T>) => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('Pedro Duarte')

  const Menu = type === 'dropdown' ? Dropdown : Context
  const Content = type === 'dropdown' ? DropdownContent : ContextContent
  const Separator = type === 'dropdown' ? DropdownSeparator : ContextSeparator
  const Label = type === 'dropdown' ? DropdownLabel : ContextLabel

  return (
    <Menu.Portal>
      <Content width="md" itemPaddingLeft="md" sideOffset={8} {...props}>
        {type === 'dropdown' && <DropdownArrow />}

        <Menu.Group>
          <MenuItem type={type} itemLabel="New Tab" rightSlot="⌘+T" />
          <MenuItem type={type} itemLabel="New Window" rightSlot="⌘+N" />
          <MenuItem
            type={type}
            itemLabel="New Private Window"
            rightSlot="⇧+⌘+N"
            disabled
          />
          <Submenu type={type} label="More Tools" itemPaddingLeft="md">
            <Menu.Group>
              <MenuItem type={type} itemLabel="Save Page As" rightSlot="⌘+S" />
              <MenuItem type={type} itemLabel="Create Shortcut" />
              <MenuItem type={type} itemLabel="Name Window" />
            </Menu.Group>
            <Separator />
            <MenuItem type={type} itemLabel="Developer Tools" />
          </Submenu>
        </Menu.Group>

        <Separator />

        <Menu.Group>
          <CheckboxItem
            type={type}
            itemLabel="Show Bookmarks"
            rightSlot="⌘+B"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          />
          <CheckboxItem
            type={type}
            itemLabel="Show Full URLs"
            rightSlot="⌘+B"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          />
        </Menu.Group>

        <Separator />

        <Menu.RadioGroup value={person} onValueChange={setPerson}>
          <Label>People</Label>
          <RadioItem
            type={type}
            value="Pedro Duarte"
            itemLabel="Pedro Duarte"
          />
          <RadioItem type={type} value="Colm Tuite" itemLabel="Colm Tuite" />
        </Menu.RadioGroup>
      </Content>
    </Menu.Portal>
  )
}
