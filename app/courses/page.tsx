'use client'

import CoreCourses from "../components/core_courses"
import CoursesSlider from "../components/courseslider"
import CourseTop from "../components/courses_breadcrumb"
import LargeWithNewsletter from "../components/footer"
import Nav from "../components/header"


export default function Courses() {
  return (
    <>
<Nav></Nav>
<CourseTop coursetype="Panaverse Courses" coursedesc="This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.
" coursetitle="Common In All Specializations"></CourseTop>

  <CoreCourses></CoreCourses>
  <CoursesSlider></CoursesSlider>

    <LargeWithNewsletter></LargeWithNewsletter>
    </>
  )
}
