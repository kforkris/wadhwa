import React from 'react'
import HeroSection from "@/component/HeroSection"
import About from "@/component/About"
import Details from "@/component/Details"
import CurrentProject from "@/component/CurrentProjects"
import Design from "@/component/Design"
import Awards from "@/component/Awards"
import Testimonials from "@/component/Testimonials"
import Navbar from '@/component/Navbar'
import Innovative from "@/component/Innovative"
import Legacy from "@/component/Legacy"
import Contact from "@/component/ContactUs"
import Footer from "@/component/Footer"
const Homepage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <About />
        <Details />
        <CurrentProject />
        <Design />
        <Awards />
        <Innovative />
        <Testimonials />
        <Legacy />
        <Contact />
        <Footer />
    </>
  )
}

export default Homepage