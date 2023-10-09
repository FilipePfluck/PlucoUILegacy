import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FavoritePetTabs } from './implementations/FavoritePetTabs'
import { axe } from 'vitest-axe'

const user = userEvent.setup()

describe('Tabs component', () => {
  const { container } = render(<FavoritePetTabs />)

  it('renders the triggers', () => {
    expect(screen.getByText('Cat 🐈')).toBeInTheDocument()
    expect(screen.getByText('Dog 🐕')).toBeInTheDocument()
  })

  it('has no detectable a11y violationd', async () => {
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should shot the content of a selected tab', () => {
    expect(
      screen.queryByText(
        'I am a dog person! My dog is my best friend, he is loyal and cute.',
      ),
    ).toBeInTheDocument()
  })

  it('should not show the content of an unselected tab', () => {
    expect(
      screen.queryByText(
        'I am a cat person! Cats are the best animals in the world',
      ),
    ).not.toBeInTheDocument()
  })

  it('should be able to select another tab', async () => {
    const trigger = screen.getByText('Cat 🐈')

    await user.click(trigger)

    expect(
      screen.queryByText(
        'I am a cat person! Cats are the best animals in the world',
      ),
    ).toBeInTheDocument()
  })
})
