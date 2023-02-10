'use client'
import Nav from './components/Header/header'
import LargeWithNewsletter from './components/Footer/footer'
import CaptionCarousel from './components/Hero/hero'
import About from './components/About/about'
import Testinomials from './components/Testinomials/testinomials'
import BasicStatistics from './components/Feature/feature'
import SimpleThreeColumns from './components/Feature/feature'

export default function Home() {
  return (
    <>
  <CaptionCarousel></CaptionCarousel>
  <About></About>
  <SimpleThreeColumns></SimpleThreeColumns>
  <Testinomials></Testinomials>
    <LargeWithNewsletter></LargeWithNewsletter>
    </>
    
  )
}
