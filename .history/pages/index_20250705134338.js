import Head from 'next/head'
import About from '../components/About'
import VisionMission from '../components/VisionMission'
import CoreValues from '../components/CoreValues'
import WhyPaulDeltaArc from '../components/WhyPaulDeltaArc'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

import ClientOnly from '../components/ClientOnly';




export default function Home() {
  return (
    <div>
    <ClientOnly>
      <Head>
        <title>Paul Delta Arc</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <VisionMission />
      <CoreValues/>
      <WhyPaulDeltaArc />
      <Skills />
      <Projects />
      <Contact />
    </ClientOnly>
    
 
    </div>
  )
}
