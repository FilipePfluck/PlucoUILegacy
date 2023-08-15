import * as RadixDialog from '@radix-ui/react-dialog'
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog'

import type { Meta, StoryObj } from '@storybook/react'

import { Dialog } from './index'
import { Button } from '@/components/primitives/buttons/Button'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Primary: Story = {
  render: () => (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <Button intent="primary" size="md">
          Open the modal
        </Button>
      </RadixDialog.Trigger>
      <Dialog
        title="This is a title"
        description="this is a description this is a description this is a description this is a description this is a description this is a description this is a description this is a description this is a description this is a description"
      />
    </RadixDialog.Root>
  ),
}

export const WithScroll: Story = {
  render: () => (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <Button intent="primary" size="md">
          Open the modal
        </Button>
      </RadixDialog.Trigger>
      <Dialog
        title="This is a title"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas laudantium amet modi autem quis quae at cumque cum nisi accusantium cupiditate unde fugiat perferendis itaque, sed praesentium quidem animi sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis delectus ipsam nemo amet adipisci, harum ducimus vitae doloremque rerum culpa mollitia eaque dolore sequi repellendus expedita tempore, eum nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic a, deleniti id iure consectetur molestiae, tempora inventore repellendus odit ipsam. Ex maiores aut voluptates, nulla odit vero quod magni. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quidem quo libero facilis hic vero animi consequuntur, nesciunt laudantium. Debitis suscipit omnis commodi facere quam similique molestias illum ducimus dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nulla ipsam dicta sed, veritatis suscipit eveniet, quos commodi labore incidunt ducimus. Perspiciatis autem obcaecati quidem, cumque facere aut est. Quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis dolorum veniam ad nihil repellendus! Maxime voluptate repudiandae veritatis facilis corrupti tenetur officia id dolore! Recusandae eos soluta assumenda consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut id temporibus laboriosam earum, magni rerum. Officiis, repellat maxime velit quibusdam amet explicabo sed adipisci. Officia a totam eveniet unde. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas similique deleniti quos accusantium accusamus a dicta, nihil eveniet, distinctio enim placeat numquam officia veritatis ipsum dolor! Sequi, saepe sint? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi rerum reiciendis quis cum provident labore sunt asperiores maxime aliquid deleniti tenetur excepturi, temporibus autem perspiciatis. Ad sed alias ex cum."
      />
    </RadixDialog.Root>
  ),
}

export const Alert: Story = {
  render: () => (
    <RadixAlertDialog.Root>
      <RadixAlertDialog.Trigger asChild>
        <Button intent="primary" size="md">
          Open the modal
        </Button>
      </RadixAlertDialog.Trigger>
      <Dialog
        type="alertDialog"
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        actionLabel="Yes, delete account"
        cancelLabel="Cancel"
        onActionClick={() => {
          console.log('You deleted your account')
        }}
        onCancelClick={() => {
          console.log('You canceled the action')
        }}
      />
    </RadixAlertDialog.Root>
  ),
}
