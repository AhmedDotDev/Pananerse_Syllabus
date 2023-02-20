import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
import { BackgroundChanger } from './Colors/themechanger';
  
  interface StatsCardProps {
    title: string;
    stat: string;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
      <Stat
      bg={BackgroundChanger()}
      _hover={{boxShadow: "0px 0px 10px #BC0C29" }}
      transition="all 0.1s"
        px={{ base: 4, md: 8 }}
        py={'5'}
        color={'white'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.400', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} pb={75} px={"12"}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          What is our company doing?
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'We have'} stat={'trained 50k+ people'} />
          <StatsCard title={'From'} stat={'20 cities & countries'} />
          <StatsCard title={'Who have'} stat={'earned $100k+ '} />
        </SimpleGrid>
      </Box>
    );
  }