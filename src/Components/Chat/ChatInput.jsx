import { Box, IconButton, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const ChatInput = () => {
    return (
        <Box component='form' sx={{
            backgroundColor: 'secondary.main',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height:'100px'
        }}>
            <TextField maxRows={3} placeholder='Escribe un mensaje' focused={false} sx={{
                backgroundColor: 'secondary.light',
                width: '90%',
                border: 'none',
                borderRadius: 2,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover fieldset': {
                      border: 'none',
                    },
                    '&.Mui-focused fieldset': {
                      border: 'none',
                    }
                }
            }} />
            <IconButton>
                <SendIcon />
            </IconButton>
        </Box>
    )
}

export default ChatInput
