import type { Meta, StoryObj } from '@storybook/react'

import { Toast } from './index'
import { ToastProvider, useToast } from './ToastContext'
import { Button } from '../../buttons/Button'

const meta: Meta<typeof Toast> = {
  component: Toast,
}

export default meta
type Story = StoryObj<typeof Toast>

const ToastStory = () => {
  return (
    <ToastProvider>
      <ToastContent />
    </ToastProvider>
  )
}

const ToastContent = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up',
          description: 'Tuesday, August 29, 2023 at 1:18 PM',
        })
      }}
    >
      Schedule
    </Button>
  )
}

export const Primary: Story = {
  render: ToastStory,
}
