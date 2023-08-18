import { css } from '@/styled-system/css'
import { TabContent, Tabs } from '../index'
import { Flex } from '@/styled-system/jsx'

const list = [
  { label: 'Cat 🐈', value: 'cat' },
  { label: 'Dog 🐕', value: 'dog' },
]

interface PetTabProps {
  emoji: string
  description: string
}

const PetTab = ({ emoji, description }: PetTabProps) => {
  return (
    <Flex direction="column" gap="4" align="center">
      <p className={css({ fontSize: '96px', w: 'max-content' })}>{emoji}</p>
      <p className={css({ maxW: '40', color: 'mauve.12' })}>{description}</p>
    </Flex>
  )
}

export const FavoritePetTabs = () => {
  return (
    <Tabs list={list} defaultValue="dog">
      <TabContent value="cat">
        <PetTab
          description="I am a cat person! Cats are the best animals in the world"
          emoji="🐈"
        />
      </TabContent>
      <TabContent value="dog">
        <PetTab
          description="I am a dog person! My dog is my best friend, he is loyal and cute."
          emoji="🐕"
        />
      </TabContent>
    </Tabs>
  )
}
