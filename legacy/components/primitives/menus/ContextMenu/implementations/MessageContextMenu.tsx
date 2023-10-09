import * as Context from '@radix-ui/react-context-menu'

import { MessageMenu } from '../../Menu/implementations/MessageMenu'
import * as S from '../styles'

export const MessageContextMenu = () => {
  return (
    <Context.Root>
      <S.Trigger>Right click here</S.Trigger>
      <MessageMenu type="context" />
    </Context.Root>
  )
}
