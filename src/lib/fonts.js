import { Playfair_Display, Inter } from 'next/font/google'

const playFairDisplay = Playfair_Display({
    display: 'swap',
    subsets: ['latin']
})

const inter = Inter({
    display: 'swap',
    subsets: ['latin']
})

export{
    playFairDisplay,
    inter
}