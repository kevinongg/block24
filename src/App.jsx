import {puppyList} from './data.js'
import { useState } from 'react'

const App = () => {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  
  
  return (
    <>
    {
      puppies.map((puppy) => {
        return 
          <p onClick={()=>{}}  key={puppy.id}>{puppy.name} </p>
          
      })
    }
    
    </>
  )
}

export default App
