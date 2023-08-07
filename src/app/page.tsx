import { css } from '@/styled-system/css'

export default function Home() {
  return (
    <main
      className={css({ bg: 'slate.1', color: 'slate.12', minHeight: '100vh' })}
    >
      Hello world
    </main>
  )
}
