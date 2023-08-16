import * as Dialog from '@radix-ui/react-dialog'
import { DrawerContent } from '..'

export const NonModalExample = () => {
  return (
    <Dialog.Root modal={false}>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <DrawerContent
        mode="non-modal"
        title="This is a non modal drawer"
        description="The focus is not trapped inside the drawer. This means the rest of the page is still interactable and visible to the screen reader. This drawer will not close if you click outside, but will do if you click the close button or press Esc."
      />
    </Dialog.Root>
  )
}
