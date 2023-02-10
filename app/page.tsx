'use client'
import Nav from './components/Header/header'
import LargeWithNewsletter from './components/Footer/footer'
import CaptionCarousel from './components/Hero/hero'
import About from './components/About/about'
import Testinomials from './components/Testinomials/testinomials'
import SimpleThreeColumns from './components/Feature/feature'
import BasicStatistics from './components/Serve/serve'
import BoxCarousel from './components/Course_slider/slider'

export default function Home() {
  return (
    <>
    <Nav></Nav>
  <CaptionCarousel></CaptionCarousel>
  <About></About>
  <SimpleThreeColumns></SimpleThreeColumns>
  <BoxCarousel></BoxCarousel>
  <BasicStatistics></BasicStatistics>
  <Testinomials></Testinomials>
    <LargeWithNewsletter></LargeWithNewsletter>
    </>
    
  )
}
