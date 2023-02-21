import { Box , Flex, Heading, SimpleGrid, Stat, StatLabel, StatNumber, Text, useColorModeValue} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { paraColorChanger2 } from "./Colors/themechanger";
interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        bg="#ae1028"
        shadow={'xl'}
  
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel color="#fff" fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber color="#fff" fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
interface courseOverViewProps{
    courseCode:string,
    coursedesc:string,
    duration:string,
    students:string
}
export default function CourseOverView({courseCode,coursedesc,duration, students}:courseOverViewProps){
return (
    <Box>
<Text color={paraColorChanger2()} fontWeight={"800"}>{courseCode}</Text>
<Heading py="5">Course Description:</Heading>
<Text py="5">{coursedesc}</Text>
<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Students'}
          stat={students}
          icon={<BsFillPeopleFill size={'3em'} color="#fff"/>}
        />
        <StatsCard
          title={'Duration'}
          stat={duration}
          icon={<GiSandsOfTime size={'3em'} color="#fff"/>}
        />

  
      </SimpleGrid>
    </Box>
)
}