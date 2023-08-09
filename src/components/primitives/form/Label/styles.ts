import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const LabelContainer = styled(
  'label',
  cva({
    base: {
      display: 'flex',
      align: 'center',
      gap: '2',
      color: 'mauve.11',
      textStyle: 'bodyMd',
      w: 'max-content',
    },
  }),
)

export const LabelRequiredIndicator = styled(
  'span',
  cva({
    base: {
      color: 'red.11',
      fontSize: 'xs',
    },
  }),
)
