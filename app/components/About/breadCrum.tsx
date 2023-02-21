'use client'
import { useColorMode } from '@chakra-ui/core';
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    SimpleGrid,
    Heading,Image, Box, useColorModeValue, Center
  } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { headingColorChanger, paraColorChanger } from '../Colors/themechanger';

  interface CourseTopProps{
coursetitle:string
  }
  export default function CourseTop({coursetitle}:CourseTopProps) {
    const router = useRouter();
    return (
      <Flex
        w={'full'}
        h={''}
        bgGradient={useColorModeValue('linear(to-r, #ae1028, red.900)','linear(to-r, blackAlpha.600, transparent)')}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
            <SimpleGrid  columns={{ base: 1, md: 2, lg:2 }}>        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 3 })}
          >
          <Stack pl={[5,10,20]} w={[300, 400, 500]} align={'flex-start'}>
           <Box margin={'auto'} float={"right"}><Heading textAlign={'center'} float={"right"} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={headingColorChanger()}>{coursetitle}</Heading>
           <Text pt={20}><Link href={'../'}>Home</Link> &gt; About</Text></Box> 
          </Stack>
        </VStack>
        < Box maxW={"800"}><Image mt={"20"} ml={20} src="../about.png"/></Box>

        </SimpleGrid>

      </Flex>
    );
  }