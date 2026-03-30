"use client"
import Hero from '../hero/Hero'
import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import RandomQuote from '../quote/RandomQuote'
import { Contact } from '../contact/Contact'


const Content = () => {

  return (
        <div className="pt-16 sm:pt-20">
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <RandomQuote/>
          <div className="flex justify-center pt-10 pb-4">
            <Contact/>
          </div>
        </div>
  )
}

export default Content