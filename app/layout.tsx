'use client'
import ChakraWrapper from './components/chakra/chakraprovider'
import './globals.css'
import { ColorModeScript, theme } from '@chakra-ui/react'
import '../public/fonts/Poppins-Regular.ttf'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ColorModeScript initialColorMode={'dark'} />

        <ChakraWrapper>{children}</ChakraWrapper></body>
    </html>
  )
}
