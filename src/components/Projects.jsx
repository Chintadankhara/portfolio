import React from 'react'
import { Navigation } from './Navigation'

export const Projects = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className="card p-5 col-md-6 text-center">
            <div>
              <h1 className="card-title text-warning">
                Subscription-Tracket API
              </h1>
              <p className='card-text text-white text-capitalize'>
              It's an api for managing subscription of an user with secure sign-in and sign-up with JWT authentication. It also has the rate limitar that access deny for unethical user. <br /> <br />
              <button className='btn btn bg-warning'>Click fore more info</button>
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
