import React from 'react'
import { Navigation } from './Navigation'

export const Contact = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <div className='card-body text-center'>
            <h2 className='styleofskillsname mt-4'>
              <span className='bi bi-envelope text-white'></span> <br />
               <a href="mailto:chintandankhara10@gmail.com"><button className='btn btn-warning'>Click here</button></a>
            </h2>
            <h2 className='styleofskillsname mt-4'>
              <span className='bi bi-linkedin text-white'></span> <br />
               <a href="https://www.linkedin.com/in/chintan-dankhara-6306272a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><button className='btn btn-warning'>Click here</button></a>
            </h2>
            <h2 className='styleofskillsname mt-4'>
              <span className='bi bi-github text-white'></span>  <br />
              <a href="https://github.com/Chintadankhara"><button className='btn btn-warning'>Click here</button></a>
            </h2>
            <h2 className='styleofskillsname mt-4 mb-4'>
              <span className='bi bi-instagram text-white'></span> <br />
               <a href="https:www.instagram.com/_chintan1845/"><button className='btn btn-warning'>Click here</button></a>
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
