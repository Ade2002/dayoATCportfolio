/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import HeaderStyles from '../../styles/partial/header.module.scss'
import Link from 'next/link'
import LinkButtons from '../button/linkButton'

const Header = ({ LinkButtonClasses, LinkButtonContents, LinkButtonTo }) => {
  let bgHeaderWhite = '#0E0D0D'
  let bgHeaderTransparent = '#00000000'
  let minHeight = '50'

  const close = true
  const [nav, setNav] = useState(close)
  const NavOptions = e => {
    e.stopPropagation()
    setNav(!nav)
  }
  useEffect(() => {
    window.onscroll = () => {
      let scrolling =
        document.body.scrollTop > minHeight ||
        document.documentElement.scrollTop > minHeight
      let headerBg = document.getElementsByTagName('header')[0]
      if (!scrolling) {
        //@top
        headerBg.style.backgroundColor = bgHeaderTransparent
      } else {
        headerBg.style.backgroundColor = bgHeaderWhite
      }
    }
    const resetHeader = () => setNav(close)
    window.addEventListener('click', resetHeader)
    return () => window.removeEventListener('click', resetHeader)
  })

  return (
    <header className={HeaderStyles.header}>
      <Link href='/'>
        <a className={`${HeaderStyles.logo}`}>
          <svg
            width='29'
            height='19'
            viewBox='0 0 29 19'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.6445 18L11.4023 13.9219H5.15625L3.91406 18H0L6.04688 0.796875H10.4883L16.5586 18H12.6445ZM10.5352 10.875L9.29297 6.89062C9.21484 6.625 9.10938 6.28516 8.97656 5.87109C8.85156 5.44922 8.72266 5.02344 8.58984 4.59375C8.46484 4.15625 8.36328 3.77734 8.28516 3.45703C8.20703 3.77734 8.09766 4.17578 7.95703 4.65234C7.82422 5.12109 7.69531 5.56641 7.57031 5.98828C7.44531 6.41016 7.35547 6.71094 7.30078 6.89062L6.07031 10.875H10.5352ZM28.8398 13.2422C28.8398 14.2578 28.5938 15.1406 28.1016 15.8906C27.6094 16.6406 26.8906 17.2188 25.9453 17.625C25.0078 18.0312 23.8672 18.2344 22.5234 18.2344C21.9297 18.2344 21.3477 18.1953 20.7773 18.1172C20.2148 18.0391 19.6719 17.9258 19.1484 17.7773C18.6328 17.6211 18.1406 17.4297 17.6719 17.2031V13.8281C18.4844 14.1875 19.3281 14.5117 20.2031 14.8008C21.0781 15.0898 21.9453 15.2344 22.8047 15.2344C23.3984 15.2344 23.875 15.1562 24.2344 15C24.6016 14.8438 24.8672 14.6289 25.0312 14.3555C25.1953 14.082 25.2773 13.7695 25.2773 13.418C25.2773 12.9883 25.1328 12.6211 24.8438 12.3164C24.5547 12.0117 24.1562 11.7266 23.6484 11.4609C23.1484 11.1953 22.582 10.9102 21.9492 10.6055C21.5508 10.418 21.1172 10.1914 20.6484 9.92578C20.1797 9.65234 19.7344 9.32031 19.3125 8.92969C18.8906 8.53906 18.543 8.06641 18.2695 7.51172C18.0039 6.94922 17.8711 6.27734 17.8711 5.49609C17.8711 4.47266 18.1055 3.59766 18.5742 2.87109C19.043 2.14453 19.7109 1.58984 20.5781 1.20703C21.4531 0.816406 22.4844 0.621094 23.6719 0.621094C24.5625 0.621094 25.4102 0.726562 26.2148 0.9375C27.0273 1.14062 27.875 1.4375 28.7578 1.82812L27.5859 4.65234C26.7969 4.33203 26.0898 4.08594 25.4648 3.91406C24.8398 3.73438 24.2031 3.64453 23.5547 3.64453C23.1016 3.64453 22.7148 3.71875 22.3945 3.86719C22.0742 4.00781 21.832 4.21094 21.668 4.47656C21.5039 4.73438 21.4219 5.03516 21.4219 5.37891C21.4219 5.78516 21.5391 6.12891 21.7734 6.41016C22.0156 6.68359 22.375 6.94922 22.8516 7.20703C23.3359 7.46484 23.9375 7.76562 24.6562 8.10938C25.5312 8.52344 26.2773 8.95703 26.8945 9.41016C27.5195 9.85547 28 10.3828 28.3359 10.9922C28.6719 11.5938 28.8398 12.3438 28.8398 13.2422Z'
              fill='#FB4B04'
            />
          </svg>
        </a>
      </Link>
      <motion.span
        initial={{ opacity: 0, y: '-10px' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className={`${nav ? HeaderStyles.none_t : ''} ${HeaderStyles.flex_c} ${
          HeaderStyles.navLinks
        }
        `}
      >
        <Link href='/courses'>
        Servicehgs
        </Link>
        <Link href='https://www.atc.com.ng/contact/'>
          <a>Projects</a>
        </Link>
        <Link href='https://www.atc.com.ng/faq/'>
          <a>Testimonials</a>
        </Link>
        <Link href='https://www.atc.com.ng/faq/'>
          <a>Connect</a>
        </Link>
        <LinkButtons
          classes={LinkButtonClasses}
          contents={LinkButtonContents}
          to={LinkButtonTo}
        />
      </motion.span>

      <span className={`${HeaderStyles.icon}`} onClick={NavOptions}>
        <svg
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='#FB4B04'
          clipRule='#FB4B04'
        >
          <path
            d='M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z'
            fill='#FB4B04'
            stroke='#FB4B04'
            strokeWidth='1.5'
          />
          <path d='M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z' />
        </svg>
        <svg
          className='none'
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fillRule='evenodd'
          clipRule='evenodd'
        >
          <path
            d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'
            stroke='#fb4b04'
            strokeWidth='1.5'
          />
        </svg>
      </span>
    </header>
  )
}
export default Header
