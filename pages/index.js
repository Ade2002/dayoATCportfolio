/* eslint-disable @next/next/no-img-element */
import General from '../components/general/general'
import Hero from '../components/Home/Hero'
import Acad from '../components/Home/MyProjects'
import StartLearn from '../components/Home/startLearn'
import AreYou from '../components/Home/areYou'/* 
import Courses from '../components/Home/courses'
import LearnWithUs from '../components/Home/learnWithUs'
import HowItWorks from '../components/Home/howItWorks' 
import Testimonials from '../components/Home/testimonials'
*/
import Connect from '../components/Home/Connect'

export default function Home () {
  return (
    <General>
      <Hero />
      <Acad />
      <StartLearn />
      {/* <Courses /> */}
      <AreYou />
      {/* <LearnWithUs /> */}
      {/* <HowItWorks /> */}
      {/* <Testimonials /> */}
      <Connect />
    </General>
  )
}
