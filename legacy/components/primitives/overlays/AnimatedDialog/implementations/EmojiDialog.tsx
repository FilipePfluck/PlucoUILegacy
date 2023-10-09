import * as RadixDialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'

import { AnimatedDialogContent, AnimatedDialogTrigger } from '../index'
import { css } from '@/styled-system/css'
import { Flex } from '@/styled-system/jsx'

import * as S from '../styles'

interface GenericItem {
  id: string
  name: string
  emoji: string
  description: string
}

const nameTransition = {
  layout: {
    when: 'beforeChildren',
    duration: 0,
  },
  opacity: { duration: 0 },
}

export const EmojiDialog = ({ id, name, emoji, description }: GenericItem) => {
  return (
    <RadixDialog.Root>
      <AnimatedDialogTrigger id={id}>
        <motion.p transition={nameTransition} layoutId={`name-${id}`}>
          {name}
        </motion.p>
        <motion.p
          transition={{ duration: 0.15, ease: 'easeIn' }}
          layout
          layoutId={`emoji-${id}`}
          className={css({ ml: '2', fontSize: '16px' })}
        >
          {emoji}
        </motion.p>
      </AnimatedDialogTrigger>
      <AnimatedDialogContent
        title={name}
        titleMotionProps={{ transition: nameTransition }}
        id={id}
      >
        <Flex gap="4" alignItems="center" maxW="420px">
          <motion.p
            transition={{ duration: 0.25, ease: 'easeOut' }}
            layout
            layoutId={`emoji-${id}`}
            // framer motion auto layout was not working properly,
            // so I added custom animations on top of it
            initial={{
              fontSize: '16px',
              x: 48,
              y: -64,
            }}
            animate={{
              fontSize: '96px',
              x: 0,
              y: 0,
              transition: { duration: 0.25, ease: 'easeOut' },
            }}
          >
            {emoji}
          </motion.p>
          <motion.p
            className={S.modalDescriptionStyles}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            {description}
          </motion.p>
        </Flex>
      </AnimatedDialogContent>
    </RadixDialog.Root>
  )
}
