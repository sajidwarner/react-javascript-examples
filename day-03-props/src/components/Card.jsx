import React from 'react'

const Card = (props) => {

    console.log(props);
  return (
    <div>
       <div className="card">
        <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      <p>{props.age}</p>
      <button>View</button>
      </div>
    </div>
  )
}

export default Card
