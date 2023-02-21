'use client'
import BottomNav from "@/app/components/bootomnav";
import CourseTop from "@/app/components/courses_breadcrumb";
import CourseOverView from "@/app/components/course_overview";
import Footer from "@/app/components/footer";
import Nav from "@/app/components/header";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Stack, VStack,Text,Image} from "@chakra-ui/react";
import { BottomNavigation, BottomNavigationIcon, BottomNavigationItem, BottomNavigationLabel } from "chakra-ui-bottom-navigation";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";


export default function quarterTwo() {
  return (
    <>
    <BottomNav quarter_four="./specialized-tracks/wms/q4" quarter_five="./specialized-tracks/wms/q4"></BottomNav>
    <Nav></Nav>
    
    <CourseTop coursetype="Core Track" coursedesc="Every participant of the program will cover the following 3 quarters" coursetitle="Q2"></CourseTop>
    <Stack direction={['column', 'row']} spacing='24px' px={"12"} py="20"> 
  <Box w={["100%","100%","80%"]}>
    <Stack>
    <CourseOverView courseCode="CS-101: Object-Oriented Programming using TypeScript
" coursedesc="We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. 
" duration={"13"} students="5000"></CourseOverView>
<br></br><br></br>
<p>I want below text to be wrapped in Chakra components like Heading, Text, Link HTML and CSS (Homework)</p>

<p>Learn HTML by Hira Khan (Watch Recorded Videos) https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6</p>

<p>Learn CSS Intro by Hira Khan (Watch Recorded Videos) https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob</p>

<p>Web 3.0 and Metaverse Theory</p>

<p> Introduction to Panaverse DAO https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing</p>

<p>Web 3.0 User Guide https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing</p>

<p>Complete Web 3 Assignments included in the Web 3 User Guide</p>

<p>Virtual and Augmented Metaverse User Guide https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing</p>

<p>Fundamentals of Typescript</p>

<p>TypeScript Presentation https://docs.google.com/presentation/d/1-7Kb3laJjJ68mOTF9v0fHImk5vTol0CeE43Sg8hoUXQ/edit?usp=sharing</p>

<p> Getting Started Exercises with TypeScript and Node.js https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md</p>

<p>Fundamentals of JavaScript and Node.js Quiz</p>

<p>Topics Covered in the Quiz:</p>

<p>Background of JavaScript and How to use JavaScript in Browser Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional) Intro to Node.js, .mjs files, Modules, NPM, import, export, and using external modules with npm: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  How to accept user input in your Node.js JavaScript programs, this will allow us to create interactive Node.js console programs using prompt-sync library. The last example in this presentation shows you how to use prompt-sync library in your Node.js programs: https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing  Note: After this point, we will do all our class work and exercises using Node.js in .mjs files. We will also be able to develop interactive Node.js console programs which will greatly help the students to learn. Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional) Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional) Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional) Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional) Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional) JavaScript promises, mastering the asynchronous https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript  New JavaScript Features in ECMAScript 2022 and 2021 https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg</p>

<p> 4. Object-Oriented Programming with TypeScript</p>

<p>Chapters 1-11 of Learning TypeScript: Enhance Your Web Development Skills Using Type-Safe JavaScript https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1</p>

<p>Learning Repository https://github.com/panaverse/learn-typescript</p>

<p>In Class Companion projects and articles for Learning TypeScript https://www.learningtypescript.com/</p>

<p>Homework Project  https://github.com/panaverse/typescript-node-projects</p>

<p> Fundamentals of TypeScript Quiz</p>

<p> TypeScript Professional Proficiency Quiz</p>

<p>5. TypeScript for React</p>

<p>Minimal TypeScript Crash Course For React With Interactive Code Exercises https://profy.dev/article/react-typescript</p>

<p>Quarter Break Assignments and Quizzes</p>

<p>During the Quarter Break, we do the following Assignments:</p>

<p>1. https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge</p>

<p>2. https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app</p>

<p>3. https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui</p>

<p>4. Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document: https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing</p>

<p>The best-developed Website will be hosted on www.panaverse.co domain.</p>

<p>5. Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing</p>

<p>The best-developed Website will be hosted on www.piaic.org domain.</p>

<p>After completing the above Five Assignments everyone will appear in the following two Quizzes covering Github and TypeScript:</p>

<p>Fundamentals of Version Control with Git Quiz</p>

<p>Version Control using Git and GitHub By Sir Zeeshan Hanif (Watch Recorded Videos) https://www.youtube.com/playlist?list=PLKueo-cldy_HjRnPUL4G3pWHS7FREAizF</p>

<p>Chapters 1, 2, 3, and 4 Learn Version Control with Git: A step-by-step course for the complete beginner by Tobias G&uuml;nther</p>

<p>We will also cover these readings: https://help.github.com/articles/markdown-basics/  http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github  http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences  https://git-scm.com/book/en/v2/Git-Branching-Rebasing  http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches</p>

<p>For practice: https://try.github.io/levels/1/challenges/1</p>

<p>Homework: https://www.datacamp.com/courses/introduction-to-git-for-data-science</p>

<p>Git Cheatsheet https://www.kdnuggets.com/2022/11/git-data-science-cheatsheet.html</p>

<p>Git Quiz Total Questions: 60, Total Time: 75 minutes</p>

<p>TypeScript Proficiency Quiz Total Questions: 63 Duration: 120 minutes</p>

<p>Study Material:</p>

<p>https://github.com/panaverse/learn-typescript</p>
</Stack></Box>
<Box w="20%">
 <Image mt={"10"} src="../breadcrumbside.png"/>


</Box>
</Stack>
    <Footer></Footer>
 </> )
}
