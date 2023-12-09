import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import { display } from '@mui/system'
const Notification = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <div className="Notifications">
      <Tooltip title="Notifications">
        <IconButton
          sx={{ padding: 0 }}
          id="basic-button-notifications"
          aria-controls={open ? 'basic-menu-notifications' : undefined}
          popup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}>
          <NotificationsNoneIcon />
        </IconButton>
      </Tooltip>
      <Menu
        PaperProps={{
          style: {
            width: '500px'
          }
        }}
        sx={{ mt: '14px' }}
        id="basic-menu-notifications"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          labelled: 'basic-button-notifications'
        }}>
        {/* <MenuItem onClick={handleClose}>
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
        </MenuItem> */}
        <Box sx={{ padding: '6px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontSize={16}>
            Notifications
          </Typography>
          <Box>
            <FormControlLabel control={<Checkbox />} label="Required" />
            <OpenInNewIcon fontSize="small" />
          </Box>
          {/* <Typography variant="span" sx={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
            3724-1631-1834-9338
            <IconButton sx={{ padding: '8px' }}>
              <Badge sx={{ cursor: 'pointer' }} color="secondary">
                <ContentCopyIcon sx={{ fontSize: '16px', cursor: 'pointer' }} />
              </Badge>
            </IconButton>
          </Typography> */}
        </Box>
        <Divider />

        <Box sx={{ height: '42px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography>Service</Typography>
            <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
              <InputLabel id="demo-simple-select-autowidth-label">Choose</InputLabel>
              <Select displayEmpty labelId="demo-simple-select-autowidth-label" id="demo-simple-select-autowidth" value={age} onChange={handleChange} autoWidth label="Age">
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        {/* <MenuItem onClick={handleClose}>
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
        </MenuItem> */}
      </Menu>
    </div>
  )
}

export default Notification
