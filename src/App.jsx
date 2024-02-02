import { Container } from '@mui/material'
import Display from './Components/Display/Display.jsx'

function App() {


  return (
    <Container disableGutters maxWidth='none' sx={{
      boxSizing: 'border-box',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      p: '24px',
      m: 'none'
      }}>
      <Display />
    </Container>
  )
}

export default App
