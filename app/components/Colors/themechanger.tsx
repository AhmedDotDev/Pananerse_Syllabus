import { useColorModeValue } from "@chakra-ui/react"
import React from 'react'

export function BackgroundChanger () {
    const backgroundColor = useColorModeValue("white", "gray.900");
    return backgroundColor;
}
export function ColorChanger () {
    const colorchanger = useColorModeValue('gray.800','white' );    return colorchanger;
}

 