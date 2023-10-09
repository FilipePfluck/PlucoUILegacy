import { AvatarImageProps } from '@radix-ui/react-avatar'
import * as S from './styles'
import { MdPerson } from 'react-icons/md'

export const Avatar = ({ src, alt, ...props }: AvatarImageProps) => {
  return (
    <S.Root>
      <S.Image src={src} alt={alt} {...props} />
      <S.Fallback>
        <MdPerson />
      </S.Fallback>
    </S.Root>
  )
}
