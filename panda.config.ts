import { config } from './panda'
import { defineConfig } from '@pandacss/dev'
import radixColorsPreset from 'pandacss-preset-radix-colors'

export default defineConfig({
  preflight: true,
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [radixColorsPreset({ darkMode: true }), '@pandacss/preset-panda'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  ...config,
})
