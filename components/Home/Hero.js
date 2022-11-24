/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import LandingPageStyles from '../../styles/partial/home.module.scss'
import LinkButtons from '../button/linkButton'
import HeaderStyles from '../../styles/partial/header.module.scss'
import { motion } from 'framer-motion'
import FooterStyles from '../../styles/partial/footer.module.scss'

const Hero = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.section}`}
      id={`${LandingPageStyles.academy}`}
    >
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
        >
          It&#39;s time to learn and acquire&shy; digital&shy; Tech skills.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Acquire the 21st century skills so as to improve your relevance and
          employability in this ever changing world.
        </motion.p>
        <LinkButtons
          classes={`${HeaderStyles.linkButton} ${HeaderStyles.bgBlack} wow animate__animated animate__fadeInDown`}
          contents={`Get Started`}
          to={`www.acadon.atc.com.ng`}
        />
      </div>
      <motion.img
        initial={{ opacity: 0, y: '100px' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className={`${LandingPageStyles.none_m}  wow animate__animated animate__fadeIn`}
        src='LaptopWomanFk.png'
        alt='LaptopWomanFk'
      />
      <img
        className={`wow animate__animated animate__fadeIn`}
        src='laptopWomanMobile.png'
        alt='LaptopWomanFk'
      />
    </section>
  )
}

export default Hero
