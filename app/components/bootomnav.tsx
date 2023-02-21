import { BottomNavigation, BottomNavigationIcon, BottomNavigationItem, BottomNavigationLabel } from "chakra-ui-bottom-navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
interface BottomNavProps{
    quarter_four:string,quarter_five:string
}
export default function BottomNav({quarter_four,quarter_five}:BottomNavProps) {
    const router = useRouter();
    const [value, setValue] = useState('');
  
    const handleChange = useCallback(
      (path: string) => {
        router.push(path);
        setValue(path);
      },
      [router.push]
    );
  
    return (
      <BottomNavigation value={value} onChange={(newValue:string) => {
        handleChange(newValue as string);
      }}   bg={"#ae1028"} >
        <BottomNavigationItem value="/core-courses/q1">
          <BottomNavigationIcon as={SearchIcon} />
          <BottomNavigationLabel>Quarter 1</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value="/core-courses/q2">
          <BottomNavigationIcon as={SearchIcon} />
          <BottomNavigationLabel>Quarter 2</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value="/core-courses/q3">
          <BottomNavigationIcon as={SearchIcon} />
          <BottomNavigationLabel>Quarter 3</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value={quarter_four}>
          <BottomNavigationIcon as={SearchIcon} />
          <BottomNavigationLabel>Quarter 4</BottomNavigationLabel>
        </BottomNavigationItem>
        <BottomNavigationItem value={quarter_five}>
          <BottomNavigationIcon as={SearchIcon} />
          <BottomNavigationLabel>Quarter 5</BottomNavigationLabel>
        </BottomNavigationItem>
      </BottomNavigation>
    );
  };
  