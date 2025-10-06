import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
    const { user } = useSelector(reducer => reducer)
    return user?.userData ? children : <Navigate to="/signin" />
}
