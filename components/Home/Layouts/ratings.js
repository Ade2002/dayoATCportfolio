import PrettyRating from 'pretty-rating-react'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar
  }
}

const Ratings = ({ value }) => (
  <>
    <PrettyRating value={value} icons={icons.star} />
  </>
)
export default Ratings
