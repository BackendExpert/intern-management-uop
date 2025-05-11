import React from 'react'

const DashHome = () => {
    const isAllowed = useRoleGuard(['intern', 'staff', 'security', 'admin', 'director'])
    if (!isAllowed) return null

    return (
        <div>DashHome</div>
    )
}

export default DashHome