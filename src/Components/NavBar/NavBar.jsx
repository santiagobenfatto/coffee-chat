import { AppBar, Toolbar, Avatar, Typography, Button } from '@mui/material'

const NavBar = () => {
    return (
        <AppBar sx={{
            position: 'sticky',
            backgroundColor: 'secondary.main',
            height: '80px',
            justifyContent:'center'
        }}>
            <Toolbar>
            <Avatar  alt='User Avatar' src='/' size="large" edge="start" color="inherit" sx={{ backgroundColor: 'primary.main', mr: 2 }}/>
            <Typography sx={{ flexGrow: 1}}>
                Coffee Chat
            </Typography>
            <Button variant="outlined"  sx={{ 
                border: 1,
                borderColor: 'secontary.contrastText',
                color: 'secondary.contrastText',
                backrgoundColor: 'secondary.light',
                 '&:hover': {
                    opacity: '0.6',
                    borderColor: ''
                 }
                }}>
                    Login
            </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar
