import React from 'react'
import "./Card.css"
import logog from '../../../Assets/ICON/Icon_Order.svg'
function Card( props) {
  return (
    <div className='colot'>
        <div className='d-flex'>

      <img src={logog} alt='../' />
      <div className='opop'>

      <div className='heading'>
      {props.heading} </div>
      <div className='PERA'>
      {props.pera}
      </div>
      </div>
        </div>
    </div>
  )
}

export default Card
