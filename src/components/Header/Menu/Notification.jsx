import MoreVertIcon from '@mui/icons-material/MoreVert'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import SettingsIcon from '@mui/icons-material/Settings'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const Notification = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const [anchorSetting, setAnchorSetting] = React.useState(null)
  const openSetting = Boolean(anchorSetting)
  const handleClickSetting = (event) => {
    setAnchorSetting(event.currentTarget)
  }
  const handleCloseSetting = () => {
    setAnchorSetting(null)
  }

  const [service, setService] = React.useState('')
  const [severity, setSeverity] = React.useState('')
  const handleChangeService = (event) => {
    setService(event.target.value)
  }
  const handleChangeSeverity = (event) => {
    setSeverity(event.target.value)
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
            width: '520px'
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
        <Box sx={{ padding: '6px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontSize={16}>
            Notifications
          </Typography>
          <Box>
            <FormControlLabel control={<Checkbox />} label="Required" sx={{ mr: '10px' }} />
            <IconButton>
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Divider />

        <Box sx={{ height: '50px', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
            <Typography fontSize={14}>Service</Typography>
            <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
              <Select displayEmpty labelId="demo-simple-select-autowidth-service" id="demo-simple-select-autowidth-service" value={service} onChange={handleChangeService} autoWidth>
                <MenuItem value="">All</MenuItem>
                <MenuItem value={10}>Actions</MenuItem>
                <MenuItem value={21}>Apps</MenuItem>
                <MenuItem value={22}>Cloud Robots</MenuItem>
                <MenuItem value={23}>Connections</MenuItem>
                <MenuItem value={24}>Licensing Purchase Service</MenuItem>
                <MenuItem value={25}>Licensing</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '6px 16px' }}>
            <Typography fontSize={14}>Severity</Typography>
            <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
              <Select
                displayEmpty
                labelId="demo-simple-select-autowidth-severity"
                id="demo-simple-select-autowidth-severity"
                value={severity}
                onChange={handleChangeSeverity}
                autoWidth
                sx={{ fontSize: '14px' }}>
                <MenuItem value="">All</MenuItem>
                <MenuItem value={10}>Info</MenuItem>
                <MenuItem value={11}>Success</MenuItem>
                <MenuItem value={12}>Warm</MenuItem>
                <MenuItem value={13}>Error</MenuItem>
                <MenuItem value={14}>Fatal</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Divider />

        <Box sx={{ height: 'calc(100vh - 300px)' }}>No notifications found</Box>
        <Divider />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', pt: '8px', pr: 2, gap: '6px' }}>
          <Tooltip title="Notification settings">
            <IconButton sx={{ p: '4px' }}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="More Action on all Notifications">
            <IconButton
              sx={{ p: '4px' }}
              id="basic-button-setting-notification"
              aria-controls={openSetting ? 'basic-menu-setting-notification' : undefined}
              popup="true"
              aria-expanded={openSetting ? 'true' : undefined}
              onClick={handleClickSetting}>
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            sx={{ mb: 2 }}
            id="basic-menu-setting-notification"
            anchorEl={anchorSetting}
            open={openSetting}
            onClose={handleCloseSetting}
            MenuListProps={{
              labelled: 'basic-button-setting-notification'
            }}>
            <MenuItem sx={{ p: '2px 12px' }} onClick={handleClose}>
              Mark all as read
            </MenuItem>
            <Divider />
            <MenuItem sx={{ p: '2px 12px' }} onClick={handleClose}>
              Clear all
            </MenuItem>
          </Menu>
        </Box>
      </Menu>
    </div>
  )
}

export default Notification
