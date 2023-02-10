import React, { useState } from "react";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

export default function BoxCarousel() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const boxes = [
    {
      id: 1,
      title: "Box 1",
      description: "This is the first box",
      image: "/box-1.png",
    },
    {
      id: 2,
      title: "Box 2",
      description: "This is the second box",
      image: "/box-2.png",
    },
    {
      id: 3,
      title: "Box 3",
      description: "This is the third box",
      image: "/box-3.png",
    },
    {
        id: 4,
        title: "Box 4",
        description: "This is the first box",
        image: "/box-1.png",
      },
      {
        id: 5,
        title: "Box 5",
        description: "This is the first box",
        image: "/box-1.png",
      },
  ];

  return (
    <Container marginTop={20} marginBottom={20} maxW={'6xl'} py={12}>
        <Button onClick={handlePrev}>Prev</Button>
        <Box p={5} shadow="md" rounded="lg">
          <Image src={boxes[1].image} alt={boxes[1].title} />
          <Text fontWeight="bold" mt={2}>
            {boxes[1].title}
          </Text>
          <Text mt={2}>{boxes[index].description}</Text>
        </Box>
        <Box p={5} shadow="md" rounded="lg">
          <Image src={boxes[2].image} alt={boxes[2].title} />
          <Text fontWeight="bold" mt={2}>
            {boxes[2].title}
          </Text>
          <Text mt={2}>{boxes[index].description}</Text>
        </Box>
        <Box p={5} shadow="md" rounded="lg">
          <Image src={boxes[3].image} alt={boxes[3].title} />
          <Text fontWeight="bold" mt={2}>
            {boxes[3].title}
          </Text>
          <Text mt={2}>{boxes[index].description}</Text>
        </Box>
        <Button onClick={handleNext}>Next</Button>
  </Container>
  );
};
