import React from 'react'
import Order from './components/Order'


function App() {
  return (
    <div className='w-full h-screen grid grid-rows-1 grid-cols-1'>
      <div className='row-start-1 col-start-1 w-full'>
        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c2d1ff" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,202.7C384,203,480,117,576,117.3C672,117,768,203,864,213.3C960,224,1056,160,1152,117.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      <div className='w-full h-screen flex items-center justify-center row-start-1 col-start-1'>
        <Order/>
      </div>  
    </div>
  )
}
export default App
