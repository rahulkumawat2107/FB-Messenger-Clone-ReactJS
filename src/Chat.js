import React, {useState, useEffect} from 'react'

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
                <input value={input} onChange = {(e) => setInput(e.target.value)}></input>
                <button type = 'submit' onClick={sendMessage}>Send Message</button>
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