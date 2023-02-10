'use client;'
import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex,useColorModeValue, chakra, Heading, Container, Image } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
// import localFont from '@next/font/local'
import Link from 'next/link';
// const MartianMono = localFont({ src: '../../../public/fonts/martianmono.ttf' , weight:'400'})
import {Poppins } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const poopins = Poppins({
  subsets: ['latin'],
  weight: '500' 
})
interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  learn: string;

}

const Feature = ({ title, text, icon , learn}: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        // bg={'gray.100'}
        p='10px'
        bg={useColorModeValue('gray.100', 'gray.300')}
        mb={1}>
        {icon}
      </Flex>
      <Text  color={useColorModeValue('gray.100', 'gray.300')}  fontWeight={800}>{title}</Text>
      <Text color={useColorModeValue('gray.200', 'gray.300')}>{text}</Text>
      <Text className={poopins.className} color={useColorModeValue('gray.100', 'gray.300')} fontSize={'12px'}  fontWeight={800}> <Link href={learn} >Learn More →</Link></Text> 

    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Container marginTop={20} marginBottom={20} maxW={'6xl'} py={12}>
      <Heading textAlign={'center'} paddingBottom={20} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>Common Courses</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <Box bg={useColorModeValue('#BC0C29', 'gray.300')}
 padding={10} borderRadius={50}>
        <Feature
          icon={<Image src='./number-1.png' /> }
          title={'Quarter I (Core)'}
          text={
            'Learn the fundamentals of Object-Oriented programming using JavaScript and TypeScript and the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. '}
            learn='./a'
        />
        </Box>
        <Box bg={useColorModeValue('#BC0C29', 'gray.300')}
 padding={10} borderRadius={50}>
        <Feature
          icon={<Image src='./number-2.png' /> }
          title={'Quarter II (Core)'}
          text={
            'Develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, you will be able to develop and deploy web platforms like Facebook, Shopify, etc.'
          }
          learn='./a'

        />
        </Box>
        <Box bg={useColorModeValue('#BC0C29', 'gray.300')}
 padding={10} borderRadius={50}>
        <Feature
          icon={<Image src='./number-3.png' /> }
          title={'Quarter III (Core)'}
          text={
            '$-101: Dollar Making Bootcamp - You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform'
          }
          learn='./a'

        />
        </Box>
      </SimpleGrid>
    </Container>
  );
}