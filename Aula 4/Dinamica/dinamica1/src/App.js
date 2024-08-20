import {useState} from 'react'
import {FaStar} from 'react-icons/fa'

 function StarRating(nStarts) {
  const [rate, setRate] = useState(0)
  const starList = Array.from ({length: nStarts}, (_,k) => k+1)
  function evaluate(star){
    setRate(star)
  }
  return(
    
    <>
    {
      starList.map(
        (n) => <FaStar onClick={_=>evaluate(n)}
        color={n<=rate ? 'gold' : 'lightgray'}
        >

        </FaStar>
      )
    }
    <p>O rate atual é {rate}</p>
    </>
  )

}

export default StarRating;
