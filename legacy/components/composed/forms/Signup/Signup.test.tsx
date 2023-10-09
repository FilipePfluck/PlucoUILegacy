import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Signup } from './index'
import { axe } from 'vitest-axe'
import { messages } from './schema'

const ResizeObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

vi.stubGlobal('ResizeObserver', ResizeObserverMock)

describe('Sign up component', () => {
  const { container } = render(<Signup />)

  const user = userEvent.setup()

  const expectErrorsNotToBeInScreen = () => {
    expect(screen.queryByText(messages.nameRequired)).not.toBeInTheDocument()
    expect(screen.queryByText(messages.emailRequired)).not.toBeInTheDocument()
    expect(
      screen.queryByText(messages.passwordRequired),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(messages.confirmPasswordRequired),
    ).not.toBeInTheDocument()
    expect(screen.queryByText(messages.termsRequired)).not.toBeInTheDocument()
  }

  it('mounts and has no detectable a11y violations', async () => {
    expect(screen.getByText(/Sign up/i)).toBeDefined()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('should not show error messages by default', async () => {
    expectErrorsNotToBeInScreen()
  })

  it('does not allow to submit an empty form', async () => {
    const Button = screen.getByText('Sign up')

    await user.click(Button)

    expect(screen.getByText(messages.nameRequired)).toBeInTheDocument()
    expect(screen.getByText(messages.emailRequired)).toBeInTheDocument()
    expect(screen.getByText(messages.passwordRequired)).toBeInTheDocument()
    expect(
      screen.getByText(messages.confirmPasswordRequired),
    ).toBeInTheDocument()
    expect(screen.getByText(messages.termsRequired)).toBeInTheDocument()
  })

  it('should display a functional label', async () => {
    const emailLabel = screen.getByText('E-mail')
    const emailInput = screen.getByPlaceholderText('joedoe@gmail.com')

    await user.click(emailLabel)

    expect(emailInput).toHaveFocus()
  })

  it('should not allow an invalid email', async () => {
    await user.keyboard('Invalid Email')

    const Button = screen.getByText('Sign up')

    await user.click(Button)

    expect(screen.getByText(messages.emailInvalid)).toBeInTheDocument()
  })

  it('should not display error messages if all the fields are correct', async () => {
    const usernameLabel = screen.getByText('Username')
    const emailLabel = screen.getByText('E-mail')
    const passwordLabel = screen.getByText('Password')
    const confirmPasswordLabel = screen.getByText('Confirm password')
    const checkboxTrigger = screen.getByRole('checkbox')

    await user.click(usernameLabel)
    await user.keyboard('Joe Doe')
    await user.click(emailLabel)
    await user.keyboard('joedoe@example.com')
    await user.click(passwordLabel)
    await user.keyboard('1234567890')
    await user.click(confirmPasswordLabel)
    await user.keyboard('1234567890')
    await user.click(checkboxTrigger)

    expectErrorsNotToBeInScreen()
  })
})
