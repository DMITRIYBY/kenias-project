import localFont from 'next/font/local'
import { Lalezar, Nunito, Comic_Neue } from 'next/font/google'

// this font should be used as the mono variant for all themes

export const ttCommonsMono = localFont({
  src: '../fonts/ManropeMedium.ttf',
  variable: '--font-mono',
})

export const ttCommons = localFont({
  src: [
    {
      path: '../fonts/ManropeRegular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/ManropeMedium.ttf',
      weight: '600',
      style: 'medium',
    },
    {
      path: '../fonts/ManropeBold.ttf',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-body',
})

export const lalezar = Lalezar({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rewards',
})

export const ttCommonsExpanded = localFont({
  src: '../fonts/ManropeBold.ttf',
  variable: '--font-display',
})

// bonk skin

export const nunitoDisplay = Nunito({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-display',
})

export const nunitoBody = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
})

// pepe theme

export const comicNeueDisplay = Comic_Neue({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-display',
})

export const comicNeueBody = Comic_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-body',
})
