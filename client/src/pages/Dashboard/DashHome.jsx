import React from 'react'
import useRoleGuard from '../../hooks/useRoleGuard'

const DashHome = () => {
    const isAllowed = useRoleGuard(['intern', 'staff', 'security', 'admin', 'director'])
    if (!isAllowed) return null

    return (
        <div>DashHome</div>
    )
}

export default DashHome