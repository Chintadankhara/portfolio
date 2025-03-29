import React from 'react'
import { Navigation } from './Navigation'

export const Skills = () => {
    return (
        <>
            <div className='container righttoleft'>
                <div className='row text-center'>
                    <div className='col-md-6 mt-5'>
                        <div className='card' >
                            <div className='card-body'>
                                <h1 className="card-title  text-warning">
                                    Core Concept
                                </h1>
                                <p className='card-text text-white'
                                >
                                    OOP, DSA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className='card text-center' >
                            <div className='card-body'>
                                <h1 className='card-title text-warning'>
                                    Programming Language
                                </h1>
                                <p className='card-text  text-white'>
                                    C, Java, Python, Javascript
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className='card' >
                            <div className='card-body'>
                                <h1 className="card-title text-warning">
                                    Front-end Technology
                                </h1>
                                <p className='card-text  text-white'>
                                    HTML, CSS, Bootstrap(Framework) , React Js (Library)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className='card' >
                            <div className='card-body'>
                                <h1 className="card-title text-warning">
                                    Back-end Technology
                                </h1>
                                <p className='card-text  text-white'>
                                    Node Js,Express Js, EJS (Template-Engine)
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className='card' >
                            <div className='card-body'>
                                <h1 className="card-title text-warning">
                                    Databases
                                </h1>
                                <p className='card-text  text-white '>
                                    MySql, MongoDB
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className='card' >
                            <div className='card-body'>
                                <h1 className="card-title text-warning">
                                    Inter-personal
                                </h1>
                                <p className='card-text  text-white'>
                                    Communication, Team-work & Collaboration, Adaptability & Flexibility, Time Management
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
