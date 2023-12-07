import React from 'react'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import HomeIcon from '@mui/icons-material/Home'
import Stack from '@mui/material/Stack'
import { pink } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

const App = () => {
  return (
    <div>
      <div>
        <AccessAlarmIcon />
        <br />
        <ThreeDRotation />
      </div>
      <div>Anh yêu em nhiều lắm</div>
      <Button variant="contained">Hello world</Button>
      <Stack direction="row" spacing={0}>
        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="success" />
        <HomeIcon color="action" />
        <HomeIcon color="disabled" />
        <HomeIcon sx={{ color: pink[100] }} />
      </Stack>

      <Typography variant="h4" color="text.secondary">
        Anh yêu em nhiều lắm
      </Typography>
    </div>
  )
}

export default App
