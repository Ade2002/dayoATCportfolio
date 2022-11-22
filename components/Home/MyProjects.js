/* eslint-disable @next/next/no-img-element */
import LandingPageStyles from '../../styles/partial/home.module.scss'
import { motion } from 'framer-motion'
import LinkButtons from '../button/linkButton'
import HeaderStyles from '../../styles/partial/header.module.scss'

const Services = () => {
  return (
    <section
      className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.section}`}
      id={`${LandingPageStyles.services}`}
    >
      <div>
        <motion.span
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}
          className={`cOrange`}
        >
          <svg
            width='54'
            height='5'
            viewBox='0 0 54 5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='2.5'
              y1='2.5'
              x2='51.5'
              y2='2.5'
              stroke='#FB4B04'
              strokeWidth='5'
              strokeLinecap='round'
            />
          </svg>{' '}
          About Me
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          My Services.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          Hello! My name is Sikiru Ademola, and I like to produce content on the
          internet. The decision to attempt creating custom WordPress themes
          sparked my interest in web development and led to a long-term passion
          for the field.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          My primary emphasis these days is creating accessible, inclusive
          products and digital experiences at African Trainovation Hub for a
          range of customers. Fast-forward to now, and I&apos;ve had the
          pleasure of working on several projects utilizing diverse tools like
          as HTML, CSS, JAVASCRIPT, and REACT JS.
        </motion.p>
        <div
          className={`${LandingPageStyles.flex_cr} ${LandingPageStyles.buttons}`}
        >
          <LinkButtons
            classes={`${HeaderStyles.linkButton} ${HeaderStyles.bgOrange} wow animate__animated animate__slideInUp`}
            contents={`Hire me`}
            to={`workstation`}
          />
          <LinkButtons
            classes={`${HeaderStyles.linkButton} ${HeaderStyles.secondaryButton} wow animate__animated animate__slideInUp cOrange
`}
            contents={`Explore`}
            to={`workstation`}
          />
        </div>
      </div>
      <motion.img
        initial={{ opacity: 0, y: '100px' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className={`wow animate__animated animate__slideInUp`}
        src='myService.png'
        alt='LaptopWomanFk'
      />
    </section>
  )
}

export default Services
