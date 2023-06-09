import React, { useState } from 'react'
import { BiHide, BiPlus } from 'react-icons/bi'
import textCutter from '../../helpers/textCutter'

import './style.css'

const Event = ({ title, description, date, from, to, address}) => {

  const [detailsOn, setDetailsOn] = useState(false)

  const shortDesc = textCutter(description)

  return (
    <div className='flexed event'>
      <div className="flexed event--infos">
        <div className="event--infos--date">
          <h1>
            {date.day}<span>TH</span> {date.month}
          </h1>
        </div>
        <div className='flexed event--infos-right'>
          <div className="flexed event--infos--details">
            <h2>{title}</h2>
            {detailsOn && <p className='event--full-description'>{description}</p>}
            <p className='event--description'>{detailsOn ? description : shortDesc}</p>
            <button 
              className={`btn--event-details ${detailsOn && "btn--event-details_hide"}`}
              onClick={() => setDetailsOn((d) => !d)}
            >
              {detailsOn ? <BiHide /> : <BiPlus/>}
              {detailsOn ? "Hide" : "Event"} Details
            </button>
          </div>
          <div className="flexed event--infos--time">
            <h2>{from} - {to}</h2>
            <p>{address}</p>
          </div>
        </div>
      </div>
      <button 
        className={`btn--event-details btn--event-details_sc ${detailsOn && "btn--event-details_hide"}`}
        onClick={() => setDetailsOn((d) => !d)}
      >
        {detailsOn ? <BiHide /> : <BiPlus/>}
        {detailsOn ? "Hide" : "Event"} Details
      </button>
    </div>
  )
}

export default Event
