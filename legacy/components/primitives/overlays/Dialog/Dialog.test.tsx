import * as RadixDialog from '@radix-ui/react-dialog'

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dialog } from './index'
import { Button } from '@/components/primitives/buttons/Button'

describe('Dialog component', () => {
  const user = userEvent.setup()

  render(
    <RadixDialog.Root>
      <RadixDialog.Trigger data-testid="Dialog-trigger" asChild>
        <Button intent="primary" size="md">
          Open the modal
        </Button>
      </RadixDialog.Trigger>
      <Dialog title="This is a title" description="this is a description">
        <p data-testid="Dialog-content">Hello world</p>
      </Dialog>
    </RadixDialog.Root>,
  )

  it('renders the trigger', () => {
    expect(screen.getByText(/Open the modal/i)).toBeDefined()
  })

  it('should not show the content at the start', () => {
    expect(screen.queryByText('Hello world')).toBeNull()
  })

  it('should show the content after clicking on the trigger', async () => {
    const trigger = screen.getByTestId('Dialog-trigger')
    await user.click(trigger)

    const content = await screen.findByText('Hello world')

    expect(content).toBeDefined()
  })

  it('should close on esc press', async () => {
    await user.keyboard('[Escape]')

    expect(screen.queryByText('Hello world')).toBeNull()
  })
})
