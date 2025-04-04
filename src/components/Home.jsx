import React, { useEffect, useRef } from 'react'
import img from '../assets/my.jpg'
import Typed from 'typed.js'
export const Home = () => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
          const typed = new Typed(textRef.current, {
            strings: ["I'm MERN stack developer...", "I'm FRONT-END developer...", "I'm BACK-END developer..."],
            typeSpeed: 100,
            backSpeed: 10,
            backDelay: 1000,
            loop: true
          });
    
          return () => typed.destroy();
        }
      }, [textRef]);
    

    return (
        <>
            <div className='container mt-5 righttoleft'>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={img} alt="profile" className='mainpic img-fluid' /> <br />
                    </div>

                    <div className='col-md-8 text-center mt-4'>
                        <span className='headmain'>
                            Hi there ,
                        </span><br />

                        <span className='specialdesign' ref={textRef}>
                        </span>
                        <span>

                            <p className='mt-5 
                            maintext text-capitalize text-warning'>I'm Chintan Dankhara, a 3rd-year college student passionate about buliding scalable and efficient web application using <span className='f'>MERN</span> stack.
                                As a college student i'm always looking for new challenges and opportunities to grow</p>
                        </span>
                        <a href="https://github.com/Chintadankhara">
                            <span className='git bi bi-github text-white'></span>
                        </a>
                        <a href="https://www.linkedin.com/in/chintan-dankhara-6306272a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><span className='linked bi bi-linkedin text-white'></span></a>
                    </div>

                </div>

            </div>
        </>
    )
}
