import AppsIcon from '@mui/icons-material/Apps'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { ControlRoomIcon } from '../Icon/controlRoomIcon/controlRoomIcon'
import SelectMode from '../ModeSelect'
import IconButton from '@mui/material/IconButton'
import Notification from './Menu/Support'
import Profile from './Menu/Profile'
import Support from './Menu/Notification'
const Header = () => {
  return (
    <div className="header">
      <Box
        px={2}
        sx={{
          width: '100%',
          height: (theme) => theme.uiPath.headerHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
          <IconButton aria-label="app" size="small">
            <AppsIcon sx={{ color: 'primary.main' }} />
          </IconButton>
          <ControlRoomIcon
            inheritViewBox
            sx={{
              width: '60px',
              ml: '10px',
              mr: 1,
              cursor: 'pointer'
            }}
          />
          <Typography
            variant="span"
            sx={{
              mt: '2px',
              fontSize: '16px',
              fontWeight: '900'
            }}>
            Automation Cloud
          </Typography>
          <sup className="text-[5px] mb-[13px]">TM</sup>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
          <SelectMode />

          {/* <Tooltip title="Notification">
            <Badge sx={{ cursor: 'pointer' }} color="secondary" variant="dot">
              <NotificationsNoneIcon />
            </Badge>
          </Tooltip> */}

          <Notification />

          {/* <Tooltip title="Support">
            <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
          </Tooltip> */}

          <Support />

          <Profile />
        </Box>
      </Box>
    </div>
  )
}

export default Header
