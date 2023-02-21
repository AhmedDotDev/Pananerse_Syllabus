"use client";
import { extendTheme } from '@chakra-ui/react';
import { BottomNavigationStyleConfig as BottomNavigation } from 'chakra-ui-bottom-navigation';

  import { ChakraProvider } from "@chakra-ui/react";
  const theme = extendTheme({
    components: {
      BottomNavigation,
    },
  });
export default function ChakraWrapper({children}:{children:React.ReactNode}){
    return (
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
    )
}