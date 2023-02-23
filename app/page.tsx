'use client'
import Nav from './components/header'
import LargeWithNewsletter from './components/footer'
import CaptionCarousel from './components/hero'
import About from './components/about'
import CoreCourses from './components/core_courses'
import BasicStatistics from './components/serve'
import Oper_Cities from './components/oper-cities'
import CoursesSlider from './components/courseslider'

export default function Home() {
  return (
    <>
  <CaptionCarousel></CaptionCarousel>
  <About></About>
  <CoreCourses></CoreCourses>
  <CoursesSlider></CoursesSlider>
  <BasicStatistics></BasicStatistics>
  <Oper_Cities></Oper_Cities>
    <LargeWithNewsletter></LargeWithNewsletter>
    </>
    
  )
}
