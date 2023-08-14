import { IconButton } from '@/components/primitives/buttons/IconButton'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { MdMoreVert } from 'react-icons/md'
import { MessageMenu } from '../../Menu/implementations/MessageMenu'

export const MessageDropdownMenu = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <IconButton aria-label="Options" size="lg" bg="gray">
          <MdMoreVert />
        </IconButton>
      </Dropdown.Trigger>
      <MessageMenu type="dropdown" />
    </Dropdown.Root>
  )
}
