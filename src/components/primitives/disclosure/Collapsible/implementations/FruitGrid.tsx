import * as Collapsible from '@radix-ui/react-collapsible'
import * as S from '../styles'
import { Flex } from '@/styled-system/jsx'
import { IconButton } from '@/components/primitives/buttons/IconButton'
import { useRef, useState } from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

export const visibleFruits = ['🍎', '🍐', '🍊', '🍋']
export const hiddenFruits = [
  '🍌',
  '🍉',
  '🍇',
  '🍓',
  '🫐',
  '🍈',
  '🍒',
  '🍑',
  '🥭',
  '🍍',
  '🥥',
  '🥝',
]

function calculateDelay(i: number, numOfCols: number) {
  const r = Math.floor(i / numOfCols)
  const c = i % numOfCols
  return r * 0.1 + c * 0.1
}

const positionsDelays = hiddenFruits.map((_, index) => {
  return {
    base: calculateDelay(index, 1),
    md: calculateDelay(index, 2),
    lg: calculateDelay(index, 4),
  }
})

export const FruitGrid = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const collapsibleTriggerRef = useRef<HTMLButtonElement>(null)

  return (
    <Collapsible.Root
      open={isExpanded}
      onOpenChange={(state) => setIsExpanded(state)}
    >
      <Flex direction="column" gap="4">
        <S.FruitGrid>
          {visibleFruits.map((fruit, index) => (
            <S.FruitCard
              style={{
                // @ts-ignore
                '--delay-base': `${positionsDelays[index].base}s`,
                '--delay-md': `${positionsDelays[index].md}s`,
                '--delay-lg': `${positionsDelays[index].lg}s`,
              }}
              key={fruit}
            >
              {fruit}
            </S.FruitCard>
          ))}
        </S.FruitGrid>

        <S.CollapsibleContent>
          <S.FruitGrid>
            {hiddenFruits.map((fruit, index) => (
              <S.FruitCard
                key={fruit}
                style={{
                  // @ts-ignore
                  '--delay-base': `${positionsDelays[index].base}s`,
                  '--delay-md': `${positionsDelays[index].md}s`,
                  '--delay-lg': `${positionsDelays[index].lg}s`,
                }}
              >
                {fruit}
              </S.FruitCard>
            ))}
          </S.FruitGrid>
        </S.CollapsibleContent>

        <Flex gap="2" align="center">
          <S.CollapsibleDivider />
          <Collapsible.Trigger>
            <IconButton
              aria-label={isExpanded ? 'Show less fruits' : 'Show more fruits'}
              ref={collapsibleTriggerRef}
              onClick={() => setIsExpanded((state) => !state)}
              size="lg"
              bg="gray"
            >
              {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
            </IconButton>
          </Collapsible.Trigger>
          <S.CollapsibleDivider />
        </Flex>
      </Flex>
    </Collapsible.Root>
  )
}
