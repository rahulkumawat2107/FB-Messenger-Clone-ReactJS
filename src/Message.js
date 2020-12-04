import { Card, CardContent, Typography } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './Message.css'

//forwardRef is used to keep track or a reference of an object

const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username;
    console.log("mesg compinen", message.username + message.message);
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        <h2>{message.username} : {message.message}</h2>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
