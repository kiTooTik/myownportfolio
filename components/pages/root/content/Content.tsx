"use client"
import Hero from '../hero/Hero'
import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import RandomQuote from '../quote/RandomQuote'


const Content = () => {

  return (
        <div className="pt-16 sm:pt-20">
          <Hero/>
          <About/>
          <Projects/>
          <Skills/>
          <RandomQuote/>
        </div>
  )
}

export default Content