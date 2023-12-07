import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#007fff'
        },
        secondary: {
          main: '#90969e'
        }
      }
    },
    dark: {
      // palette: {
      //   primary: {
      //     main: '#007fff'
      //   },
      //   secondary: {
      //     main: '#90969e'
      //   }
      // }
    }
  }
})

export default theme
