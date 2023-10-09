import * as RadixDialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'
import { IconButton } from '../../buttons/IconButton'

import * as S from './styles'

type ExtraProps = {
  children: ReactNode
  id: string
  motionProps?: MotionProps
}

type AnimatedDialogTriggerProps = RadixDialog.DialogTriggerProps & ExtraProps

export const AnimatedDialogTrigger = ({
  children,
  id,
  motionProps,
  ...props
}: AnimatedDialogTriggerProps) => {
  return (
    <RadixDialog.Trigger asChild {...props}>
      <motion.button
        className={S.animatedTriggerStyles()}
        transition={{ duration: 0.15, ease: 'easeIn' }}
        layoutId={`container-${id}`}
        {...motionProps}
      >
        {children}
      </motion.button>
    </RadixDialog.Trigger>
  )
}

type AnimatedDialogContentProps = RadixDialog.DialogContentProps &
  ExtraProps & {
    title?: string
    titleMotionProps?: MotionProps
  }

export const AnimatedDialogContent = ({
  children,
  id,
  motionProps,
  titleMotionProps,
  title,
  ...props
}: AnimatedDialogContentProps) => {
  return (
    <AnimatePresence>
      <RadixDialog.Portal>
        <S.Overlay />
        <S.AnimatedDialogContent {...props}>
          <motion.div
            className={S.modalContentStyles}
            layoutId={`container-${id}`}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            {...motionProps}
          >
            <S.Header>
              <motion.p
                layoutId={`name-${id}`}
                className={S.modalNameStyles}
                {...titleMotionProps}
              >
                {title}
              </motion.p>

              <S.CloseButton asChild>
                <IconButton aria-label="Close">
                  <FiX />
                </IconButton>
              </S.CloseButton>
            </S.Header>

            {children}
          </motion.div>
        </S.AnimatedDialogContent>
      </RadixDialog.Portal>
    </AnimatePresence>
  )
}
