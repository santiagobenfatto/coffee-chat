import { Container } from '@mui/material'
import ChatContainer from '../Chat/ChatContainer.jsx'
import ContactsListContainer from '../Contacts/ContactsListContainer.jsx';

const Display = () => {
    return (
        <Container disableGutters maxWidth='xl' sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: 'secondary.dark',
            width: '100%',
            height: '100%',
            maxHeight:'100%'
          }}>
            <ContactsListContainer />
            <ChatContainer />
          </Container>
    );
}

export default Display
