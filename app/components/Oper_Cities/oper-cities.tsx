'use client'
import React from "react";
import { Box, Container, Image, Text } from "@chakra-ui/react";
import { chakra, SimpleGrid, useColorModeValue } from "@chakra-ui/react";

interface Props {
  imgSrc: string;
  title: string;
  location: string;
  timing: string;
}

const Opr = ({ imgSrc, title, location, timing}: Props) => {
  return (
    <Box mt={5} mb={5} bg={useColorModeValue('gray.200','gray.700')} borderRadius={30} h={160} w={{base:'100%',md:'100%',lg:'600px'}} display="flex" alignItems="center">
      <Image
        src={imgSrc}
        borderTopLeftRadius={30}
        borderBottomLeftRadius={30}
        // rounded="lg"
        width="200px"
        height="160px"
        objectFit="cover"
        mr={5}
      />
      <Box>
        <Text color={useColorModeValue('gray.700', 'gray.100')} fontWeight="bold" fontSize={20}>{title}</Text>
        <Text color={useColorModeValue('gray.700', 'gray.100')} pt={2} pb={1} >{location}</Text>
        <Text color={useColorModeValue('gray.700', 'gray.100')} >{timing}</Text>
      </Box>
    </Box>
  );
};


export default function Oper_Cities() {
  return (
    <>
      <Box py={20} paddingRight={7}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Operational Cities
        </chakra.h1>
        <SimpleGrid columns={[1, null, 2]}>
          <Box mt={105} px={8}>
          <Image display={'block'} maxWidth={'100%'} src='./pakistanMap.png' />
          </Box>
        <Box>
          <Opr
            imgSrc={"./bahria2.jpg"}
            title={"Karachi"}
            location={"Location: Bharia Auditorium"}
            timing={"Tue and Wed 6:00 pm to 10:00 pm"}
          />

          <Opr
            imgSrc={"./CECOS.jpg"}
            title={"Peshawar"}
            location={"Location: Peshawar CECOS"}
            timing={"Fri 3:00 pm to 7:00 pm"}
          />

          <Opr
            imgSrc={"./AirUni2.jpg"}
            title={"Islamabad"}
            location={"Location: Air University"}
            timing={"Sat 9:00 am to 6:00 pm"}
          />

          <Opr
            imgSrc={"./UMT.jpg"}
            title={"Lahore"}
            location={"Location: UMT"}
            timing={"Sun 9:00 am to 6:00 pm"}
          />
        </Box>
        </SimpleGrid>
      </Box>
      


    </>
  )
}
