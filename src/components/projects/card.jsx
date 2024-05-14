import React from 'react'

const Card = ({titile, duration, description}) => {
  return (
    <div>
        <div>
            <p>{titile}</p>
            <p>{duration}</p>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default Card