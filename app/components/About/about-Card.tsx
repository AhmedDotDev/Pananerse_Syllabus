
'use client'
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Heading } from '@chakra-ui/react';
import { FcAssistant,FcMoneyTransfer, FcIdea, FcInTransit } from 'react-icons/fc';
import { BackgroundChanger, headingColorChanger, paraColorChanger } from '../Colors/themechanger';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack bg={BackgroundChanger()}
    padding={10} borderRadius={50} _hover={{ transform: "scale(1.1)", boxShadow: "0px 0px 10px #BC0C29" }}
    transition="all 0.2s">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text color={headingColorChanger()} fontWeight={600}>{title}</Text>
      <Text color={paraColorChanger()}>{text}</Text>
    </Stack>
  );
};

export default function AboutCards() {
  return (
    <Container maxW={'100%'}>
      {/* <Heading textAlign={'center'} paddingBottom={20} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>Dao Specialities</Heading> */}
    <Box>
      <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Hybrid Teaching Format'}
          text={
            'It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning also.'
          }
        />
        <Feature
          icon={<Icon as={FcMoneyTransfer} w={10} h={10} />}
          title={'Learn + Earn'}
          text={
            "In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning."
          }
        />
        <Feature
          icon={<Icon as={FcIdea} w={10} h={10} />}
          title={'Diverse Mission'}
          text={
            'Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030...'
          }
        />
      </SimpleGrid>
    </Box>
    </Container>
  );
}