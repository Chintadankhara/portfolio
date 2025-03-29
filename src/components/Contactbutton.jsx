import React from 'react'
import { NavLink } from 'react-router-dom'
export const Contactbutton = () => {
    return (
        <>
            <NavLink to={'/contact'} className={'btn btn-primary text-white border border-light nav-item nav-link ms-auto ps-3 pe-3 pt-1 pb-1 mb-1 mt-1'} role='button'>Contact-Me</NavLink>
        </>
    )
}
