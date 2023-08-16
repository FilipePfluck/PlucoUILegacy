import * as RadixPopover from '@radix-ui/react-popover'
import { IconButton } from '@/components/primitives/buttons/IconButton'
import { Popover } from '..'
import { MdSettings } from 'react-icons/md'

export const ExamplePopover = () => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <IconButton size="lg" bg="gray" aria-label="Open popover">
          <MdSettings />
        </IconButton>
      </RadixPopover.Trigger>
      <Popover width="lg">
        <p>This is a popover</p>
        This is a popover this is a popover this is a popover this is a popover
        this is a popover this is a popover this is a popover.
      </Popover>
    </RadixPopover.Root>
  )
}
