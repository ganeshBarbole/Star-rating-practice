import { useState } from "react";
import {  FaStar } from "react-icons/fa";

const App = ({noOfStars = 5}) => {

  const[rating,setRating] = useState(0)
  const[hover,setHover] = useState(0)

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex)
  }

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex)
  }

  const handleMouseLeave = (getCurrentIndex) => {
    setHover(rating)
  }

  return(
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center">
      {
        [...Array(noOfStars)].map((_,index) => {
          index+=1
          return(
            <FaStar
            className={`${index <= (hover || rating) ? 'text-yellow-400' : 'null'}`}
            key={index}
            onClick={()=> handleClick(index)}
            onMouseMove={()=> handleMouseEnter(index)}
            onMouseLeave={()=> handleMouseLeave(index)}
            size={40}
            />
          )
        }) 
      }
    </div>
  )
}

export default App;