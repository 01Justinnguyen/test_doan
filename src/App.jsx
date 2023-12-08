import Container from '@mui/material/Container'
import SelectMode from './components/select-mode/SelectMode'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const App = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', bgcolor: 'primary.main' }}>
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
      <Box sx={{ display: 'flex', height: (theme) => `calc(100vh - ${theme.uiPath.headerHeight})` }}>
        <Box sx={{ width: '68px' }}>SideBar</Box>
        <Box sx={{ width: '100%' }}>Content</Box>
      </Box>
    </Container>
  )
}

export default App
