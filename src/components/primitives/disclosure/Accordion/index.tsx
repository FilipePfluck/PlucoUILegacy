import { AccordionProps as ArkAccordionProps } from '@ark-ui/react'

import * as S from './styles'

type AccordionProps = ArkAccordionProps & {
  items: {
    id: string
    title: string
    content: string
  }[]
}

export const Accordion = ({ items, ...props }: AccordionProps) => {
  return (
    <S.Root {...props}>
      {items.map((item) => (
        <S.Item value={item.id} key={item.id}>
          <S.Trigger>{item.title}</S.Trigger>
          <S.Content>{item.content}</S.Content>
        </S.Item>
      ))}
    </S.Root>
  )
}
