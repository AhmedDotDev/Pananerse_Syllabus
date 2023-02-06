import React from 'react';
import {Poppins } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  subsets: ['latin'],
  weight: '500' 
})

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Image,
  Container,
  HStack,
  Button,
  border,
  color,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import localFont from '@next/font/local'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Getting Ready for the Next Generation of the Internet',
      text:
        "Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies ",
      image:
        '/Web5.png',
      },
    {
      title: 'Certified Web 3.0 and Metaverse Developer ',
      text:
        "A One and Quarter Years Panaverse DAO Earn as you Learn Program   ",
      image:
      '/Web4.jpg',
    },
  
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>


      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        color={'#BC0C29'}
        _hover={{ bg: 'transparent' , color:'white' }}
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        _hover={{ bg: 'transparent' , color:'white' }}
        color={'#BC0C29'}
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative" mr="700px">
              <Stack 
                spacing={12}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading  fontFamily={'mono'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }} color="White">
                  {card.title}
                </Heading>
                <Text className={inter.className} fontSize={{ base: 'md', lg: 'lg' }} color="White">
                  {card.text}
                </Text>
                <HStack>
                <Button
              bg={'#BC0C29'}
              key={index}
              className={inter.className} fontWeight={200}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'gray.200' , color:'black' }}>
              Show me more
            </Button>
                </HStack>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}