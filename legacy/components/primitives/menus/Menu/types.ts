import * as Dropdown from '@radix-ui/react-dropdown-menu'
import * as Context from '@radix-ui/react-context-menu'

export type MenuType = 'dropdown' | 'context'

export type GenericContent<T extends MenuType> = T extends 'dropdown'
  ? Dropdown.DropdownMenuContentProps
  : Context.ContextMenuContentProps

export type MenuProps<T extends MenuType> = {
  type: T
} & GenericContent<T>
