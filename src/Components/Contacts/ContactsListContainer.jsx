import { Box } from '@mui/material'
import NavBar from '../NavBar/NavBar.jsx'
import ContactsList from './ContactsList.jsx'

const ContactsListContainer = () => {
    return (
        <Box sx={{
            boxSizing: 'border-box',
            backgroundColor: 'primary.light',
            display: 'flex',
            flexDirection: 'column',
            width: '400px',
            height: '100%',
            borderRight: '1px white solid'
        }}>
            <NavBar />
            <ContactsList />
        </Box>
    )
}

export default ContactsListContainer
