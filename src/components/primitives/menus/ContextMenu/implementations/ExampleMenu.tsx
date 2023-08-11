import { useState } from 'react'
import * as ContextMenu from '@radix-ui/react-context-menu'

import * as S from '../styles'
import { MenuItem } from '../parts/Item'
import { ContextSub } from '../parts/Submenu'
import { MenuCheckboxItem } from '../parts/CheckboxItem'
import { DropdownRadioItem } from '../parts/RadioItem'

export const RadixExampleMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(false)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <ContextMenu.Root>
      <S.ContextMenuTrigger>Right click here.</S.ContextMenuTrigger>
      <ContextMenu.Portal>
        <S.Content width="md" itemPaddingLeft="md">
          <ContextMenu.Group>
            <MenuItem itemLabel="New Tab" rightSlot="⌘+T" />
            <MenuItem itemLabel="New Window" rightSlot="⌘+N" />
            <MenuItem
              itemLabel="New Private Window"
              rightSlot="⇧+⌘+N"
              disabled
            />
            <ContextSub label="More Tools" itemPaddingLeft="md">
              <ContextMenu.Group>
                <MenuItem itemLabel="Save Page As" rightSlot="⌘+S" />
                <MenuItem itemLabel="Create Shortcut" />
                <MenuItem itemLabel="Name Window" />
              </ContextMenu.Group>
              <S.Separator />
              <MenuItem itemLabel="Developer Tools" />
            </ContextSub>
          </ContextMenu.Group>

          <S.Separator />

          <ContextMenu.Group>
            <MenuCheckboxItem
              itemLabel="Show Bookmarks"
              rightSlot="⌘+B"
              checked={bookmarksChecked}
              onCheckedChange={setBookmarksChecked}
            />
            <MenuCheckboxItem
              itemLabel="Show Full URLs"
              rightSlot="⌘+B"
              checked={urlsChecked}
              onCheckedChange={setUrlsChecked}
            />
          </ContextMenu.Group>

          <S.Separator />

          <ContextMenu.RadioGroup value={person} onValueChange={setPerson}>
            <S.Label>People</S.Label>
            <DropdownRadioItem value="Pedro Duarte" itemLabel="Pedro Duarte" />
            <DropdownRadioItem value="Colm Tuite" itemLabel="Colm Tuite" />
          </ContextMenu.RadioGroup>
        </S.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  )
}
