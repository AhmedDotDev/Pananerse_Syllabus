
'use client'
import { Box, Container, Heading,Stack,Text } from "@chakra-ui/react";
import Link from "next/link";
import AboutCards from "./about-Card";

export default function AboutContent(){
  return(
<>
<Heading textAlign={'center'} paddingTop={'45px'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>About Panaverse</Heading>
<Stack direction={['column', 'row']} spacing='24px' px={"12"} py="20">
  <Box w={["100%","100%","40%" ]}>
    <AboutCards></AboutCards>
  </Box>
<Box w={["100%","100%","60%" ]}>
<Box px={12}>
<Heading  py={5}>The Panaverse Community and Syllabus</Heading>
<Text>The internet is without a doubt the most important technological development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.<br/><br/>

Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.<br/>
<Link href={"https://www.citivelocity.com/citigps/metaverse-and-money/"}>https://www.citivelocity.com/citigps/metaverse-and-money/</Link> <br/><br/>

<b>The Program in a Nutshell: Earn While You Learn;</b><br/>
In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.<br/><br/>

<b>Program of Studies;</b><br/>
This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.<br/>
</Text>
</Box>
</Box>
</Stack>
</>
  );
}