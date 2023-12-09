import Container from '@mui/material/Container'
import {} from 'react'
import Header from '~/components/Header'
import Content from './Content'
const ControlRoom = () => {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
        <Header />
        <Content />
      </Container>
    </>
  )
}

export default ControlRoom
