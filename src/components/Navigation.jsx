import { NavLink } from "react-router-dom"
import { Contactbutton } from "./Contactbutton.jsx"

export const Navigation = () => {
    return (
        <>
            {/* Main navigation bar */}
            <nav className="navbar navbar-expand-md main  mt-3 sticky-top p-0">

                <div className="container">
                    <a href="#" className="navbar-brand">
                        <span className="ms-2" style={{ "color": "beige", "fontFamily": "monospace" }}>CD</span>
                    </a>
                    {/* Navigation toggler */}
                    <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#show">
                        <span><i className="bi bi-three-dots-vertical text-white" style={{ 'cursor': 'pointer' }}></i></span>
                    </button>

                    {/*Navigation toggler */}
                    <div className="offcanvas offmanualy  classtoggle " tabIndex="-1" id="show" aria-labelledby="offcanvasNavbarLabel">
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item ms-2">
                                    <NavLink to={'/'} className="nav-link" style={{ "color": "white" }}>Home</NavLink>
                                </li>
                            <li className="nav-item ms-2">
                                    <NavLink to={'/skills'} className="nav-link" style={{ "color": "white" }}>Skills</NavLink>
                                </li>
                                <li className="nav-item ms-2">
                                    <NavLink to={'/projects'} className="nav-link" style={{ "color": "white" }}>Projects</NavLink>
                                </li>
                            </ul>

                            <Contactbutton />

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
