import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { IconButton } from '../../buttons/IconButton'

export const InputContainer = styled(
  'label',
  cva({
    base: {
      maxW: 'full',
      bg: 'componentBg',
      boxShadow: 'md',
      transition: '0.2s',

      display: 'flex',
      align: 'center',
      gap: '2',

      borderWidth: '2px',
      borderColor: {
        base: 'mauve.7',
        _focusWithin: 'violet.7',
        _invalidWithin: 'red.7',
      },
      '&:has(:disabled)': {
        bg: 'mauve.4',
        cursor: 'not-allowed',
      },
    },

    variants: {
      size: {
        sm: {
          px: '2',
        },
        md: {
          px: '4',
        },
      },

      width: {
        auto: {},
        sm: {
          w: '24',
        },
        md: {
          w: '40',
        },
        lg: {
          w: '64',
        },
        full: {
          w: 'full',
        },
      },

      roundedCorners: {
        none: {},
        right: {
          borderRightRadius: 'md',
        },
        left: {
          borderLeftRadius: 'md',
        },
        all: {
          rounded: 'md',
        },
      },
    },

    defaultVariants: {
      size: 'md',
      width: 'auto',
      roundedCorners: 'all',
    },
  }),
)

export const Input = styled(
  'input',
  cva({
    base: {
      maxW: 'full',
      bg: 'transparent',
      color: 'mauve.12',
      fontSize: 'sm',
      outline: 'none',
      _placeholder: {
        color: {
          base: 'mauve.11',
        },
        fontSize: 'sm',
      },
      _disabled: {
        cursor: 'not-allowed',
        color: 'mauve.10',
      },
      _autofill: {
        boxShadow: '0 0 0px 1000px token(colors.componentBg) inset',
        WebkitTextFillColor: 'token(colors.mauve.12)',
        caretColor: 'mauve.12',
      },
    },

    variants: {
      size: {
        sm: {
          py: '1',
        },
        md: {
          py: '2',
        },
      },
    },

    defaultVariants: {
      size: 'md',
    },
  }),
)

export const InputIcon = styled(
  'div',
  cva({
    base: {
      fontSize: 'md',
      transition: '0.2s',
      color: {
        base: 'violet.9',
        // @ts-ignore
        '.group:has(:disabled) &': 'mauve.9',
        '.group:has([aria-invalid="true"]) &': 'red.9',
        '.group:has(:focus-within) &': 'violet.9',
      },
    },
  }),
)

export const InputIconButton = styled(
  IconButton,
  cva({
    base: {
      color: 'violet.9 !important',
      '.group:has(:disabled) &': {
        color: 'mauve.9 !important',
      },
      '.group:has([aria-invalid="true"]) &': {
        color: 'red.9 !important',
      },
      ml: 'auto',
    },
  }),
)
