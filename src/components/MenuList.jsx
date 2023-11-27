import React from 'react'
import { Menu } from 'antd'
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
const MenuList = ({ darkTheme }) => {
  const navigate = useNavigate()
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="h-[88vh] mt-[2rem] flex flex-col gap-[15px] text-[1rem]">
      <Menu.Item onClick={() => navigate('/')} key="home" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        Activity
      </Menu.Item>
      <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Manage">
        <Menu.Item key="manage-users" onClick={() => navigate('/dashboard/manage-users')}>
          Manage Users
        </Menu.Item>
        <Menu.Item key="task-2">Task 2</Menu.Item>
        <Menu.SubMenu key="subtasks" title="SubTasks">
          <Menu.Item key="Subtask-1"></Menu.Item>
          <Menu.Item key="Subtask-2">SubTask 2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item>
      <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item>
    </Menu>
  )
}

export default MenuList
