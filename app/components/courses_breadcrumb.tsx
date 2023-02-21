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
    Heading,Image, Box, useColorModeValue
  } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { headingColorChanger, paraColorChanger } from './Colors/themechanger';
  interface CourseTopProps{
    coursetype:string,coursetitle:string,coursedesc:string
  }
  export default function CourseTop({coursetype,coursetitle,coursedesc}:CourseTopProps) {
    const router = useRouter();
    return (
      <Flex
      
        w={'full'}
        h={'auto'}
        bgGradient={useColorModeValue('linear(to-r, #ae1028, red.900)','linear(to-r, blackAlpha.600, transparent)')}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
            <SimpleGrid  columns={{ base: 1, md: 2, lg:2 }}>        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 3 })}
          >
          <Stack pl={[5,10,20]} w={[300, 400, 500]} align={'flex-start'}>
            <Text   fontWeight={"900"}            color={paraColorChanger()}  
>{coursetype}</Text>
            <Heading color={headingColorChanger()}>{coursetitle}</Heading>
            <br/><Text
            
              color={paraColorChanger()}  
              fontSize="13"         
              >
              {coursedesc}
            </Text>
            <Stack direction={'row'}>
            <Button
            mt={"10"}
            bg={'#BC0C29'}
            maxW={'fit-content'}
            fontWeight={200}
            rounded={'full'}
            color={'white'}
            onClick={() => router.push('./courses')}
            _hover={{ bg: 'gray.200', color: 'black' }}>

            Explore Courses
          </Button>
          
            </Stack>
          </Stack>
        </VStack>
      < Box maxW={"800"}>  <Image mt={"10"} src="../breadcrumbside.png"/></Box>
        </SimpleGrid>

      </Flex>
    );
  }