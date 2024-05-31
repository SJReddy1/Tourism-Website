import React from 'react'
import { useUserContext } from './userContext'
import { Outlet, Navigate } from 'react-router-dom'


function ProtectedRoutes() {
     const res = localStorage.getItem('current-user')
     const user = JSON.parse(res)
     
     return (user?.data.role === 'admin') ? <Outlet/> : <Navigate to='/404'/>
}

export default ProtectedRoutes
