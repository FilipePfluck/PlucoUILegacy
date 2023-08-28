import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FruitGrid } from './implementations/FruitGrid'
import { axe } from 'vitest-axe'

const user = userEvent.setup()

describe('Collapsible component', () => {
  const { container } = render(<FruitGrid />)

  it('renders the initial content', () => {
    expect(screen.getByText('🍎')).toBeInTheDocument()
    expect(screen.getByText('🍐')).toBeInTheDocument()
  })

  it('does not render the collapsed content by default', async () => {
    expect(screen.queryByText('🫐')).not.toBeInTheDocument()
    expect(screen.queryByText('🥝')).not.toBeInTheDocument()
  })

  it('has no detectable a11y violationd', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  it('expands after clicking the trigger', async () => {
    const trigger = screen.getByRole('button')

    await user.click(trigger)

    expect(screen.getByText('🫐')).toBeInTheDocument()
    expect(screen.getByText('🥝')).toBeInTheDocument()
  })
})
