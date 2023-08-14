import { IconButton } from '@/components/primitives/buttons/IconButton'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { MdMoreVert } from 'react-icons/md'
import { RadixExampleMenu } from '../../Menu/implementations/ExampleMenu'

export const ExampleDropdownMenu = () => {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <IconButton aria-label="Options" size="lg" bg="gray">
          <MdMoreVert />
        </IconButton>
      </Dropdown.Trigger>
      <RadixExampleMenu type="dropdown" />
    </Dropdown.Root>
  )
}
