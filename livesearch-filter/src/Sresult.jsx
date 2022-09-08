import React from 'react'

const Sresult = (props) => {

const img = `https://source.unsplash.com/random/420x300/?${props.name}`

  return (
      <>
    <div className='Sresult'>
    <img src={img} alt="random"/>

    </div>
    </>
  )
}

export default Sresult;