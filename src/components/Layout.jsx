import React from 'react'
import { Navigation } from './Navigation.jsx'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    )
}
