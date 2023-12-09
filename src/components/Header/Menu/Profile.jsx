import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'
const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className="mr-[6px] profile">
      <Tooltip title="Liam">
        <IconButton sx={{ padding: 0 }} id="basic-button-profile" aria-controls={open ? 'basic-menu-profile' : undefined} popup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
          <Avatar alt="LiamDev" sx={{ width: 34, height: 34 }} src="https://avatars.githubusercontent.com/u/87435674?v=4" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: 1 }}
        id="basic-menu-profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          labelled: 'basic-button-profile'
        }}>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: '28px', height: '28px', mr: 2 }} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start'
            }}>
            <Typography variant="span">Phúc Nguyễn</Typography>
            <Typography fontSize={'14px'} variant="span">
              phuc01112002@gmail.com
            </Typography>
          </Box>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: '28px', height: '28px', mr: 2 }} />
          My account
        </MenuItem> */}
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Preferences
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default Profile
