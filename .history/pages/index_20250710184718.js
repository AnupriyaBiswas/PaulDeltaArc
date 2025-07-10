import Head from 'next/head'
import About from '../components/About'
import VisionMission from '../components/VisionMission'
import CoreValues from '../components/CoreValues'
import WhyPaulDeltaArc from '../components/WhyPaulDeltaArc'
import Services from '../components/Services'
import FireProtectionSystems from '../components/FireProtectionSystems'
import ElectricalSystemsVentilation from '../components/ElectricalSystemsVentilation'
import PlumbingPublicHealth from '../components/PlumbingPublicHealth'
import BuildingAutomation from '../components/BuildingAutomation'
import SurveillanceAccessControl from '../components/SurveillanceAccessControl'
import AnnualMaintenanceContracts from '../components/AnnualMaintenanceContracts'
import IndustriesWeServe from '../components/IndustriesWeServe'
import OurApproach from '../components/OurApproach'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'


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
      <Services />
      {/* <FireProtectionSystems />
      <ElectricalSystemsVentilation />
      <PlumbingPublicHealth />
      <BuildingAutomation />
      <SurveillanceAccessControl />
      <AnnualMaintenanceContracts /> */}
      <IndustriesWeServe />
      <OurApproach />
      <Contact />
      <Footer />
    </ClientOnly>
    
 
    </div>
  )
}
