import * as Context from '@radix-ui/react-context-menu'
import { RadixExampleMenu } from '../../Menu/implementations/ExampleMenu'

import * as S from '../styles'

export const ExampleContextMenu = () => {
  return (
    <Context.Root>
      <S.Trigger>Right click here</S.Trigger>
      <RadixExampleMenu type="context" />
    </Context.Root>
  )
}
