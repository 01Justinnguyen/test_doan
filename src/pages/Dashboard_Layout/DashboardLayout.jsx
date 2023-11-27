import {} from 'react'
import DashboardSideBar from './DashboardSideBar'
import { Outlet } from 'react-router-dom'
import { Button, Layout, theme } from 'antd'

const DashboardLayout = () => {
  return (
    <div>
      <DashboardSideBar>
        <Outlet></Outlet>
      </DashboardSideBar>
    </div>
  )
}

export default DashboardLayout
