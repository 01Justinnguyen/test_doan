import ArticleIcon from '@mui/icons-material/Article'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import ForumIcon from '@mui/icons-material/Forum'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SchoolIcon from '@mui/icons-material/School'
import SupportIcon from '@mui/icons-material/Support'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import * as React from 'react'
const Support = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Tooltip title="Support">
        <IconButton sx={{ padding: 0 }} id="basic-button-profile" aria-controls={open ? 'basic-menu-profile' : undefined} popup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
          {/* <Avatar alt="LiamDev" sx={{ width: 34, height: 34 }} src="https://avatars.githubusercontent.com/u/87435674?v=4" /> */}
          <Badge sx={{ cursor: 'pointer' }} color="secondary" variant="dot">
            <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '14px' }}
        id="basic-menu-profile"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          labelled: 'basic-button-profile'
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
        <Box sx={{ padding: '6px 16px' }}>
          <Typography variant="h6" fontSize={14}>
            Support ID
          </Typography>
          <Typography variant="span" sx={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}>
            3724-1631-1834-9338
            <IconButton sx={{ padding: '8px' }}>
              <ContentCopyIcon sx={{ fontSize: '16px', cursor: 'pointer' }} />
            </IconButton>
          </Typography>
        </Box>
        <Divider />
        {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
        <Box>
          <Typography sx={{ padding: '6px 16px' }} variant="h6" fontSize={14}>
            Help
          </Typography>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ArticleIcon fontSize="small" />
            </ListItemIcon>
            Documentation
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ForumIcon fontSize="small" />
            </ListItemIcon>
            Community forum
          </MenuItem>
        </Box>
        <Divider />
        <Box>
          <Typography sx={{ padding: '6px 16px' }} variant="h6" fontSize={14}>
            Training & tutorials
          </Typography>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SchoolIcon fontSize="small" />
            </ListItemIcon>
            UiPath Academy
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <YouTubeIcon fontSize="small" />
            </ListItemIcon>
            YouTube tutorials
          </MenuItem>
        </Box>
        <Divider />
        <Box>
          <Typography sx={{ padding: '6px 16px' }} variant="h6" fontSize={14}>
            Resources
          </Typography>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <TextSnippetIcon fontSize="small" />
            </ListItemIcon>
            Release Notes
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SupportIcon fontSize="small" />
            </ListItemIcon>
            Support
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <CloudDownloadIcon fontSize="small" />
            </ListItemIcon>
            Download
          </MenuItem>
        </Box>
        {/* <Divider />
        <Box>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Box> */}
      </Menu>
    </>
  )
}

export default Support
