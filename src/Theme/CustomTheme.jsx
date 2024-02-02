import { createTheme } from '@mui/material'
import { blue, brown } from '@mui/material/colors'


const customTheme = createTheme({
    palette: {
       primary: {
            main: blue[700],
            light: blue[500],
            dark: blue[900],
            contrastText: '#ffff'
       },
       secondary: {
            main: brown[500],
            light: brown[300],
            dark: brown[700],
            contrastText: brown[50]
       }
    }
})


export default customTheme