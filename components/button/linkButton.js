import Link from 'next/link'
import { motion } from 'framer-motion'

const LinkButtons = ({ classes, contents, to }) => {
  return (
    <Link href={to}>
      <motion.a
        initial={{ opacity: 0, y: '-10px' }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        className={classes}
      >
        {contents}
      </motion.a>
    </Link>
  )
}
export default LinkButtons
