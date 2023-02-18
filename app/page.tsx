'use client'
import Nav from './components/Header/header'
import LargeWithNewsletter from './components/Footer/footer'
import CaptionCarousel from './components/Hero/hero'
import About from './components/About/about'
import SimpleThreeColumns from './components/Feature/feature'
import BasicStatistics from './components/Serve/serve'
import Oper_Cities from './components/Oper_Cities/oper-cities'

export default function Home() {
  return (
    <>
  <CaptionCarousel></CaptionCarousel>
  <About></About>
  <SimpleThreeColumns></SimpleThreeColumns>
  <BasicStatistics></BasicStatistics>
  <Oper_Cities></Oper_Cities>
    <LargeWithNewsletter></LargeWithNewsletter>
    </>
    
  )
}
