import { useColorModeValue } from "@chakra-ui/react"
import React from 'react'

export function BackgroundChanger () {
    const backgroundColor = useColorModeValue("#ae1028", "gray.900");
    return backgroundColor;
}
export function headingColorChanger () {
    const colorchanger = useColorModeValue('white','gray.200' );    return colorchanger;
}
export function paraColorChanger () {
    const colorchanger = useColorModeValue('gray.100','gray.200' );     return colorchanger;
}
 