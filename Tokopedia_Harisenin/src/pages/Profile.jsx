import React from 'react'
import Sidebar from '../components/ProfileComponent/Sidebar'
import TabsMenu from '../components/ProfileComponent/TabsMenu'

const Profile = () => {
  return (
    <div className="flex justify-center">
        <Sidebar />
        <TabsMenu />
    </div>
  )
}

export default Profile