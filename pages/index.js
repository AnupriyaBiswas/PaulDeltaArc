import Head from 'next/head'
import About from '../components/About'
import VisionMission from '../components/VisionMission'
import CoreValues from '../components/CoreValues'
import WhyPaulDeltaArc from '../components/WhyPaulDeltaArc'
import Services from '../components/Services'
import IndustriesWeServe from '../components/IndustriesWeServe'
import OurApproach from '../components/OurApproach'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Main from '../components/Main'
import LayoutWrapper from '../components/LayoutWrapper'
import ClientOnly from '../components/ClientOnly'

export default function Home() {
  return (
    <div>
      <ClientOnly>
        <Head>
          <title>Paul Delta Arc - Professional MEP Engineering Solutions</title>
          <meta name="description" content="Turnkey MEP Engineering Solutions - Comprehensive mechanical, electrical, and plumbing solutions engineered for optimal performance and sustainability." />
          <meta name="keywords" content="MEP engineering, mechanical engineering, electrical systems, plumbing solutions, HVAC, building automation, fire protection" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/fav.png" />
          
          {/* Preload critical assets */}
          <link rel="preload" href="/assets/hero.mp4" as="video" type="video/mp4" />
          <link rel="preload" href="/assets/mainLogo.png" as="image" />
          
          {/* Open Graph tags for professional sharing */}
          <meta property="og:title" content="Paul Delta Arc - Professional MEP Engineering Solutions" />
          <meta property="og:description" content="Powering Precision, Delivering Reliability - Comprehensive MEP engineering services" />
          <meta property="og:type" content="website" />
          
          {/* Additional performance hints */}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        </Head>

        <LayoutWrapper>
          <Main />
          <About />
          <VisionMission />
          <CoreValues />
          <WhyPaulDeltaArc />
          <Services />
          {/* 
          Commented components - uncomment when ready:
          <FireProtectionSystems />
          <ElectricalSystemsVentilation />
          <PlumbingPublicHealth />
          <BuildingAutomation />
          <SurveillanceAccessControl />
          <AnnualMaintenanceContracts /> 
          */}
          <IndustriesWeServe />
          <OurApproach />
          <Contact />
          <Footer />
        </LayoutWrapper>
      </ClientOnly>
    </div>
  )
}
