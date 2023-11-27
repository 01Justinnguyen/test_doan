import { useState } from 'react'
import { Button, Layout, theme } from 'antd'
import Logo from '@/components/Logo'
import MenuList from '@/components/MenuList'
import ToggleThemeButton from '@/components/ToggleThemeButton'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header, Sider } = Layout
const DashboardSideBar = ({ children }) => {
  const [darkTheme, setDarkThem] = useState(true)
  const [collapsed, setCollapsed] = useState(false)

  const toggleTheme = () => {
    setDarkThem(!darkTheme)
  }
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <div className="dashboard-sidebar">
      <Layout>
        <Sider trigger={null} collapsed={collapsed} collapsible theme={darkTheme ? 'dark' : 'light'} className="text-white">
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button className="toggle" onClick={() => setCollapsed(!collapsed)} type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}></Button>
          </Header>
          <Layout>{children}</Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default DashboardSideBar
