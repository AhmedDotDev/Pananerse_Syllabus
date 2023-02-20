'use client;'
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Stack, useColorModeValue,Text,Image, Center } from "@chakra-ui/react";
import { Carousel, LeftButton, Provider, RightButton } from "chakra-ui-carousel";
import Link from "next/link";
import { BackgroundChanger, headingColorChanger } from "./Colors/themechanger";
interface CourseCardProps {
  title: string;
  text: string;
  learn: string;
img:string
}

const CourseCard = ({ title, text , learn,img}: CourseCardProps) => {
  return (
   <Box > <Stack borderRadius={"20"}     bg={BackgroundChanger()} >
      <Image  borderTopRadius={"20"} src={img} height="220"/>
     <Box px="10" pt={"2"} pb="8" > <Text color={useColorModeValue('gray.100', 'gray.300')}  fontWeight={800}>{title}</Text>
      <Text color={useColorModeValue('gray.200', 'gray.300')}>{text}</Text><br></br>
      <Text color={useColorModeValue('gray.100', 'gray.300')} fontSize={'12px'}   fontWeight={800}> <Link href={learn} >Learn More →</Link></Text> 
</Box>
    </Stack>
    </Box>
  );
};
export default function Example() {
  const coursedata=[
    {
      title:"Web 3.0 (Blockchain) and Metaverse Specialization",
      desc:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by...",
    img:"./web3_coursecard.jpg"
    },
    {
      title:"Artificial Intelligence (AI) and Deep Learning Specialization",
      desc:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      img:"./ai_coursecard.jpg"
    },
    {
      title:"Cloud-Native Computing Specialization",
      desc:"Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads that are built in the cloud and take full advantage....",
      img:"./cloud_coursecard.jpg"
    },
    {
      title:"Ambient Computing and IoT Specialization",
      desc:"The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
      img:"./iot_coursecard.jpg"
    },
    {
      title:"Genomics and Bioinformatics Specialization",
      desc:"Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics ...",
      img:"./bio_coursecard.jpg"
    },
    {
      title:"Network Programmability and Automation Specialization",
      desc:"More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols...",
      img:"./network_coursecard.jpg"
    },
  ];
  return (
    <Box px="12">
            <Heading textAlign={'center'} paddingBottom={20} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>Specialized Tracks</Heading>

 <Provider>
        <Carousel  gap={50}>
{
  coursedata.map((c)=>{
return (
  <CourseCard title={c.title} text={c.desc} learn={"adasdasd"} img={c.img  }/>
)
  })
}
        </Carousel>
        <Center py={"12"}    >        <LeftButton
          bgColor="#BC0C29"
          customIcon={<ArrowLeftIcon />}
          textColor={"white"}
 
        />
        <RightButton   ml={"10"}        bgColor="#BC0C29"
 customIcon={<ArrowRightIcon /> }            textColor={"white"}
 /></Center>

      </Provider>
    </Box>
  );
}