import * as Dialog from '@radix-ui/react-dialog'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { styled } from '@/styled-system/jsx'
import { cva } from '@/styled-system/css'

const overlayStyles = cva({
  base: {
    bg: 'rgb(0, 0, 0, 0.25)',
    position: 'fixed',
    inset: '0px',
    _dataOpen: {
      animation: 'fadeIn',
    },
    _dataClosed: {
      animation: 'fadeOut',
    },
  },
})

export const Overlay = styled(Dialog.Overlay, overlayStyles)
export const AlertOverlay = styled(AlertDialog.Overlay, overlayStyles)

const contentStyles = cva({
  base: {
    position: 'fixed',
    center: 'absolute',

    display: 'flex',
    flexDirection: 'column',
    gap: '4',

    bg: 'componentBg',
    rounded: 'lg',
    boxShadow: 'md',
    p: '6',

    w: '90vw',
    maxW: '450px',
    maxH: '85vh',

    _focus: {
      outline: 'none',
    },

    "&[data-state='open']": {
      animation: 'openModal',
    },
    "&[data-state='closed']": {
      animation: 'closeModal',
    },
  },
})

export const Content = styled(Dialog.Content, contentStyles)
export const AlertContent = styled(AlertDialog.Content, contentStyles)

const titleStyles = cva({
  base: {
    fontWeight: 500,
    color: 'mauve.12',
    fontSize: 'lg',
  },
})

export const Title = styled(Dialog.Title, titleStyles)
export const AlertTitle = styled(AlertDialog.Title, titleStyles)

const descriptionStyles = cva({
  base: {
    color: 'mauve.11',
  },
})

export const Description = styled(Dialog.Description, descriptionStyles)
export const AlertDescription = styled(
  AlertDialog.Description,
  descriptionStyles,
)

export const Header = styled(
  'header',
  cva({
    base: {
      w: 'full',
      display: 'flex',
      align: 'center',
      justify: 'space-between',
      gap: '2',
    },
  }),
)

export const AlertButtonsContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      gap: '4',
      align: 'center',
      ml: 'auto',
      w: 'max-content',
      p: '2px',
      mt: '4',
    },
  }),
)

export const CloseButton = Dialog.Close

export const DialogStyles = {
  Overlay,
  Content,
  Title,
  Description,
  Header,
}

export const AlertDialogStyles = {
  Overlay: AlertOverlay,
  Content: AlertContent,
  Title: AlertTitle,
  Description: AlertDescription,
  Header,
}
