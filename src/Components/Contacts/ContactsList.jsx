import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'

const ContactsList = () => {
    return (
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="" />
                    </ListItemAvatar>
                    <ListItemText primary='Texto Primary' secondary='Esto es un texto secundario...'/>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="" />
                    </ListItemAvatar>
                    <ListItemText primary='Texto Primary' secondary='Esto es un texto secundario...'/>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="" />
                    </ListItemAvatar>
                    <ListItemText primary='Texto Primary' secondary='Esto es un texto secundario...'/>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="" />
                    </ListItemAvatar>
                    <ListItemText primary='Texto Primary' secondary={
                        <>
                        <Typography component='span' variant='body2' color='text.primary' sx={{ display: 'inline'}}>
                            Bestu
                        </Typography>
                        {' - Another secondary text'}
                        </>
                    }/>
                </ListItemButton>
            </ListItem>
            <Divider />
        </List>
     
    )
}

export default ContactsList
