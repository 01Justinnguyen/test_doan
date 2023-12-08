import Container from '@mui/material/Container'
import {} from 'react'
// import Grid from '@mui/material/Grid'
import Header from '~/components/Header'
import Content from './Content'
const ControlRoom = () => {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh', bgcolor: 'primary.main' }}>
        <Header />
        <Content />
      </Container>
    </>
  )
}

export default ControlRoom
