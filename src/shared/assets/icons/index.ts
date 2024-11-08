import cleanIcon from './common/clean.svg'
import cancelIcon from './common/cancel.svg'
import viteIcon from './vite.svg'

export const icons = {
  clean: cleanIcon,
  cancel: cancelIcon,
  vite: viteIcon,
} as const

export type IconName = keyof typeof icons 