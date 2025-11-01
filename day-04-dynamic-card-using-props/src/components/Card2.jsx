import React from 'react'

const Card2 = (props) => {
  return (
    <div className="card" id={props.index}>
        <div className="card-header">
            <span className="price">{props.price}</span>
            <iconify-icon icon={props.bookmark} width="24"></iconify-icon>
        </div>
        <h2>{ props.title } card 2</h2>
        <div className="card-footer">
            <div className="company">
                <iconify-icon icon={props.icon}></iconify-icon>
                <p>{props.company}</p>
            </div>
            <button className="view-button">{props.buttonText}</button>
        </div>
    </div>
  )
}

export default Card2
