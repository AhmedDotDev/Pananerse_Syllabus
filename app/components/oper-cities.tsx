'use client'
import React from "react";
import { Box, Center, Container, Image, Text } from "@chakra-ui/react";
import { chakra, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { BackgroundChanger, headingColorChanger, paraColorChanger } from "./Colors/themechanger";

interface Props {
  imgSrc: string;
  title: string;
  location: string;
  timing: string;
}

const Opr = ({ imgSrc, title, location, timing}: Props) => {
  return (
    <Box mt={5} mb={5}    _hover={{ transform: "scale(1.05)", boxShadow: "0px 0px 10px #BC0C29" }}
    transition="all 0.2s"   bg={BackgroundChanger()}
    borderRadius={15} h={140} w={{base:'100%',md:'100%',lg:'380px',xl:"250"}} display="flex" alignItems="center">
      <Image
        src={imgSrc}
        borderTopLeftRadius={15}
        borderBottomLeftRadius={15}
        // rounded="lg"
        width="120px"
        height="140px"
        objectFit="cover"
        mr={5}
      />
      <Box>
        <Text color={headingColorChanger()} fontWeight="bold" fontSize={{ base: '18', md: '14', lg: '18', xl:"20" }}>{title}</Text>
        <Text color={paraColorChanger()} pt={2} pb={1} fontSize={{ base: '12', md: '10', lg: '12', xl:"13" }}>{location}</Text>
        <Text color={paraColorChanger()} fontSize={{ base: '12', md: '10', lg: '12', xl:"13" }}>{timing}</Text>
      </Box>
    </Box>
  );
};


export default function Oper_Cities() {
  return (
    <>
      <Box py={20} px="12">
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Operational Cities
        </chakra.h1>
        <SimpleGrid columns={[1, 1, 3]}>
        <Box>
          <Opr
            imgSrc={"./bahria2.jpg"}
            title={"Karachi"}
            location={"Location: Bharia Auditorium"}
            timing={"Wed 6:00 pm to 10:00 pm"}
          />

          <Opr
            imgSrc={"./CECOS.jpg"}
            title={"Peshawar"}
            location={"Location: Peshawar CECOS"}
            timing={"Fri 3:00 pm to 7:00 pm"}
          />

        
        </Box>
          <Box px={8} >
         <Center> <Image _hover={{ transform: "scale(1.15)" }}
    transition="all 0.2s" display={'block'} mt="10" verticalAlign="center" maxWidth={'100%'} src='./pakistanMap.png' /></Center>
          </Box>
        <Box>
      

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
