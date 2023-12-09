import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'

export default function SelectMode() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }

  return (
    <div className="mode-select">
      <FormControl sx={{ minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select labelId="label-select-dark-light-mode" id="select-dark-light-mode" value={mode} label="Mode" onChange={handleChange}>
          <MenuItem value="light">
            <Box className="flex items-center gap-x-2">
              <LightModeIcon fontSize="small" />
              Light
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{ gap: 1 }} className="flex items-center">
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
    </div>
  )
}
