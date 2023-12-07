import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

export default function SelectMode() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Age</InputLabel>
      <Select labelId="label-select-dark-light-mode" id="select-dark-light-mode" value={mode} label="Age" onChange={handleChange}>
        <MenuItem value="light">
          <Box className="flex items-center gap-x-2">
            <LightModeIcon fontSize="small" />
            Light
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box className="flex items-center gap-x-2">
            <SettingsBrightnessIcon fontSize="small" />
            System
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box className="flex items-center gap-x-2">
            <DarkModeIcon fontSize="small" />
            Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
