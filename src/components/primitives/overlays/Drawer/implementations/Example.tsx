import * as Dialog from '@radix-ui/react-dialog'
import { DrawerContent } from '..'

export const DrawerExample = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <DrawerContent
        title="This is a modal drawer"
        description="This is modal drawer. This means that it looks like a drawer, but behaves like a modal dialog. Focus is trapped inside this component, which means the rest of the page is not interactable, and has an overlay to make this clear for the user. This drawer will close if you click outside, or in the close button, or if you press Esc."
      />
    </Dialog.Root>
  )
}
