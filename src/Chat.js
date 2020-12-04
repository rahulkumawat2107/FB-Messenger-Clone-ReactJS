import React, {useState, useEffect} from 'react'
import { Button, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import Message from './Message';


function Chat() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState(
        [
            {u_name:'rahul', text:'yo beti'},
            {u_name:'beti', text:'yo'}
        ]);

    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(prompt('Enter your name:'));
    }, [])

    //console.log(input);
    
    const sendMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, {u_name: username, text: input}]);
        setInput('');
    }

    console.log(messages)
    
    return(
        <div>
            <h2>Hello {username}</h2>
            <form>
                <FormControl>
                    <InputLabel>Enter a message</InputLabel>
                    <Input value={input} onChange = {(e) => setInput(e.target.value)} />
                    <Button disabled={!input} variant = "contained" color = "primary" type = 'submit' onClick={sendMessage}>Send Message</Button>
                </FormControl>
            </form>

            {
                messages.map(message => (
                    <Message username={username} message={message} />
                ))
            }
        </div>
    )
}

export default Chat;