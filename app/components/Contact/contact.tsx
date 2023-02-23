'use client'
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,Image,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
  import { MdEmail, MdOutlineEmail } from 'react-icons/md';
  
  
  
 
  
  export default function ContactFormWithSocialButtons() {
    const { hasCopied, onCopy } = useClipboard('example@example.com');
  
    return (
    <>
 <Heading textAlign={'center'} paddingTop={'45px'} fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>Contact Panaverse</Heading>
      <Stack direction={['column', 'row']} spacing='24px' px={"12"} py="20">
      <Box mt={20} w={["100%","100%","50%" ]}>
    <Image src='./contact.png'/>
  </Box>
<Box w={["100%","100%","50%" ]}>
      <Flex borderRadius={20}
        bg={useColorModeValue('gray.200', 'gray.900')}
        align="center"
        justify="center"
        css={{
         
          backgroundAttachment: 'fixed',
        }}
        id="contact">
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack
                  align="center"
                  justify="space-around"
                  direction={{ base: 'row', md: 'column' }}>
                  <Tooltip
                    label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                    closeOnClick={false}
                    hasArrow>
                    <IconButton
                      aria-label="email"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<MdEmail />}
                      _hover={{
                        bg: '#ae1028',
                        color: useColorModeValue('ffffff', 'gray.900'),
                      }}
                      onClick={onCopy}
                      isRound
                    />
                  </Tooltip>
  
                  <Link href="#">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: '#ae1028',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="#">
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: '#ae1028',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
  
                  <Link href="#">
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: '#ae1028',
                        color: useColorModeValue('white', 'gray.700'),
                      }}
                      isRound
                    />
                  </Link>
                </Stack>
  
                <Box
                  bg={useColorModeValue('ffffff', 'gray.900')}
                  borderRadius="lg"
                  border={"1px solid #ae1028"}
                  p={8}
                  color={useColorModeValue('black', 'white')}
                  shadow="lg">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input type="text" name="name" placeholder="Your Name" />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
  
                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>
  
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>
  
                    <Button
                      colorScheme="blue"
                      bg="#ae1028"
                      color="white"
                      _hover={{
                        bg: 'gray.300',
                      }}
                    >
                       Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>
      </Box>
      </Stack>
      </>
    )
  }