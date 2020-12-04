import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({username, message}) {
    const isUser = username === message.u_name;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                        <h2>{message.u_name} : {message.text}</h2>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Message
