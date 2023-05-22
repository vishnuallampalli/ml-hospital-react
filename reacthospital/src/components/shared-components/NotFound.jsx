import React from "react"
import gif from "../../assets/not_found.gif"

const NotFound = () => {
  return (
    <div>
      <img
        src={gif}
        width='400'
        height='300'
        className='img-fluid mx-auto d-block'
        alt='not found'
      />
    </div>
  )
}

export default NotFound
