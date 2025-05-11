import React from 'react'
import useRoleGuard from '../../hooks/useRoleGuard'
import secureLocalStorage from 'react-secure-storage'

const DashHome = () => {
    const roleuser = secureLocalStorage.getItem('loginR')
    const isAllowed = useRoleGuard(['intern', 'staff', 'security', 'admin', 'director'])
    if (!isAllowed) return null

    if (roleuser === 'director') {
        return (
            <div>director</div>
        )
    }
    else if (roleuser === 'admin') {
        return (
            <div>admin</div>
        )
    }
    else if (roleuser === 'security') {
        return (
            <div>security</div>
        )
    }
    else if (roleuser === 'staff') {
        return (
            <div>staff</div>
        )
    }
    else if (roleuser === 'intern') {
        return (
            <div>intern</div>
        )
    }
}

export default DashHome