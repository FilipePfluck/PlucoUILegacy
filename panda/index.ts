import { Config } from '@pandacss/types'

import { conditions } from './conditions'
import { utilities } from './utilities'
import { globalCss } from './globalCss'
import { tokens } from './tokens'
import { keyframes } from './keyframes'
import { textStyles } from './textStyles'

export const config: Config = {
  utilities,
  conditions,
  globalCss,
  theme: {
    extend: {
      keyframes,
      tokens,
      textStyles,
    },
  },
}
