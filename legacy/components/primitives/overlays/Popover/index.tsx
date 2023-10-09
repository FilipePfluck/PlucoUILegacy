import * as RadixPopover from '@radix-ui/react-popover'
import * as S from './styles'
import { IconButton } from '../../buttons/IconButton'
import { MdClose } from 'react-icons/md'

interface PopoverProps extends RadixPopover.PopoverContentProps {
  width?: 'sm' | 'md' | 'lg' | 'full' | 'auto'
}

export const Popover = ({
  children,
  sideOffset = 16,
  width,
  ...props
}: PopoverProps) => {
  return (
    <RadixPopover.Portal>
      <S.Content width={width} sideOffset={sideOffset} {...props}>
        {children}
        <S.CloseButton asChild>
          <IconButton aria-label="close">
            <MdClose />
          </IconButton>
        </S.CloseButton>
        <S.Arrow />
      </S.Content>
    </RadixPopover.Portal>
  )
}
