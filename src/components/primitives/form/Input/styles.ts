import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const InputContainer = styled(
  'label',
  cva({
    base: {
      maxW: 'full',
      bg: 'mauve.3',
      boxShadow: 'md',
      transition: '0.2s',

      display: 'flex',
      align: 'center',
      gap: '2',

      borderWidth: '2px',
      borderColor: {
        base: 'mauve.7',
        _focusWithin: 'purple.7',
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
        boxShadow: '0 0 0px 1000px rgba(0,0,0,0) inset',
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
        base: 'purple.8',
        // @ts-ignore
        '.group:has(:disabled) &': 'mauve.10',
        '.group:has([aria-invalid="true"]) &': 'red.8',
        '.group:has(:focus-within) &': 'purple.8',
      },
    },
  }),
)

export const InputIconButton = styled(
  'button',
  cva({
    base: {
      bg: 'transparent',
      p: '1',
      rounded: 'full',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'purple.400',
      '.group:has(:disabled) &': {
        color: 'gray.400',
      },
    },
  }),
)
