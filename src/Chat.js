import React, {useState, useEffect} from 'react'
import { Button, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';


function Chat() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    //console.log(input);
    
    const sendMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    }

    console.log(messages)
    
    return(
        <div>

            <form>
                <FormControl>
                    <InputLabel>Enter a message</InputLabel>
                    <Input value={input} onChange = {(e) => setInput(e.target.value)} />
                    <Button disabled={!input} variant = "contained" color = "primary" type = 'submit' onClick={sendMessage}>Send Message</Button>
                </FormControl>
            </form>

            {
                messages.map(message => (
                    <p>{message}</p>
                ))
            }
        </div>
    )
}

export default Chat;