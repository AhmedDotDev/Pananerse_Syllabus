'use client'
import AboutCards from "../components/About/about-Card"
import AboutContent from "../components/About/about-content"
import CourseTop from "../components/About/breadCrum"
import LargeWithNewsletter from "../components/footer"
import Nav from "../components/header"


export default function aboutUs() {
  return (
    <>
    <Nav></Nav>
    <CourseTop coursetitle="About Us"></CourseTop>
    <AboutContent></AboutContent>
    <LargeWithNewsletter></LargeWithNewsletter>
    </>
    
  )
}
