import React, {useState, useEffect} from 'react'
import { Button, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';


function Chat() {

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const [username, setUsername] = useState('');

    //fetching data from database
    useEffect(() => {
        db.collection('messages')
        .orderBy('timestamp', 'desc') //ordering the messages in descending order of timestamp
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()));
        })
    }, [])

    useEffect(() => {
        setUsername(prompt('Enter your name:'));
    }, [])

    //console.log(input);
    
    const sendMessage = (e) => {
        e.preventDefault();

        //adding messages to firebase
        db.collection('messages').add({
            message: input,
            username: username,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // setMessages([...messages, {username: username, message: input}]);
        setInput('');
    }

    console.log("label" ,messages.message)
    
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