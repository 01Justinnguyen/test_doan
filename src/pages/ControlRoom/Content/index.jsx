import {} from 'react'
import Box from '@mui/material/Box'
import SideBar from '~/components/SideBar'
const Content = () => {
  return (
    <div className="content">
      <Box sx={{ display: 'flex', height: (theme) => `calc(100vh - ${theme.uiPath.headerHeight})` }}>
        <SideBar />
        <Box sx={{ width: '100%' }}>Content</Box>
      </Box>
    </div>
  )
}

export default Content
