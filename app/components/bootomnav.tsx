'use client'
import { BottomNavigation, BottomNavigationIcon, BottomNavigationItem, BottomNavigationLabel } from "chakra-ui-bottom-navigation";
import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
interface BottomNavProps{
    quarter_four:string,quarter_five:string
}
export default function BottomNav({quarter_four,quarter_five}:BottomNavProps) {
    const router = useRouter();
    const router2 = useRouter();

    const [value, setValue] = useState('');
  
    const handleChange = useCallback(
      (path: string) => {
        router.push(path);
        setValue(path);
      },
      [router.push]
    );
  
    return (
      <BottomNavigation maxW={"100%"} zIndex={9999} h={"50px"} bg="red" value={value} onChange={(newValue:string) => {
        handleChange(newValue as string);
      }}  variant="float">
        <BottomNavigationItem value="./core-courses/q1">
          <BottomNavigationLabel color={"white"} >Q1</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value="./core-courses/q2">
          <BottomNavigationLabel color={"white"}>Q2</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value="./core-courses/q3">
          <BottomNavigationLabel color={"white"}>Q3</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value={quarter_four}>
          <BottomNavigationLabel color={"white"}>Q4</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value={quarter_five}>
          <BottomNavigationLabel color={"white"}>Q5</BottomNavigationLabel>
        </BottomNavigationItem>
      </BottomNavigation>
    );
  };
  