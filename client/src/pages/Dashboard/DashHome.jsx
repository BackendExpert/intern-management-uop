import React from 'react'
import useRoleGuard from '../../hooks/useRoleGuard'
import secureLocalStorage from 'react-secure-storage'
import AdminDirDash from './AdminDirDash'

const DashHome = () => {
    const roleuser = secureLocalStorage.getItem('loginR')
    const isAllowed = useRoleGuard(['intern', 'staff', 'security', 'admin', 'director'])
    if (!isAllowed) return null

    if (roleuser === 'director') {
        return (
            <div>
                <AdminDirDash />
            </div>
        )
    }
    else if (roleuser === 'admin') {
        return (
            <div>
                <AdminDirDash />
            </div>
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