import {} from 'react'
import Box from '@mui/material/Box'
import SelectMode from '../ModeSelect'
const Header = () => {
  return (
    <div className="header">
      <Box
        sx={{
          bgcolor: 'primary.light',
          width: '100%',
          height: (theme) => theme.uiPath.headerHeight,
          display: 'flex',
          alignItems: 'center'
        }}>
        <SelectMode />
      </Box>
    </div>
  )
}

export default Header
