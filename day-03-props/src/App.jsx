import React from 'react'
import Card from './components/Card'

const App = () => {

  
  return (
    <div className='parent'>
      <Card
      title='title 1'
       age={"age: 10"}
        text='loram ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
'
        img='https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg'
        />
      <Card
      title='title 2'
      age={`Age: ${20}`}
        text='loram text this is'
        img='https://images.unsplash.com/photo-1633621412960-6df85eff8c85?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3027'
        />
      <Card
      title='title 3'
      age={`Age: ${15}`}
        text='loram text this is'
        img='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740'
        />
    </div>
  )
}

export default App
