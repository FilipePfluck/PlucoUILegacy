import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const LabelContainer = styled(
  'label',
  cva({
    base: {
      display: 'flex',
      align: 'center',
      gap: '2',
      color: 'slate.10',
      textStyle: 'bodyMd',
    },
  }),
)

export const LabelRequiredIndicator = styled(
  'span',
  cva({
    base: {
      color: 'red.10',
      fontSize: 'xs',
    },
  }),
)
