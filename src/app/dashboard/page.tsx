import React from 'react'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from 'next/navigation';

const Dashboard = () => {
    const { getUser } = getKindeServerSession();
    let user = getUser();

    if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

    return (
        <div>
            <p>{user.given_name}{" "}{user.family_name}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default Dashboard