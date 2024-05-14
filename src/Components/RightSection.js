import React, { useState } from 'react';
import send from '../media/send.svg'
import toggle from '../media/toggle.svg'
const OPENROUTER_API_KEY = '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';
const YOUR_SITE_URL = 'your_site_url';
const YOUR_SITE_NAME = 'your_site_name';

const RightSection = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const fetchOpenRouterResponse = async (userMessage) => {
    setIsTyping(true);
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': `${YOUR_SITE_URL}`,
        'X-Title': `${YOUR_SITE_NAME}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gryphe/mythomist-7b:free',
        messages: [
          ...messages,
          { role: 'user', content: userMessage },
        ],
      }),
    });

    const data = await response.json();
    setIsTyping(false);
    return data.choices[0].message.content;
  };

  const handleUserInput = async (event) => {
    if (event.key === 'Enter') {
      const userMessage = event.target.value.trim();
      if (userMessage) {
        setMessages([...messages, { role: 'user', content: userMessage }]);
        setUserInput('');

        const response = await fetchOpenRouterResponse(userMessage);
        setMessages([...messages, { role: 'user', content: userMessage }, { role: 'assistant', content: response }]);
      }
    }
  };
  const sendMessage = async () => {
    const userMessage = userInput.trim();
    if (userMessage) {
      setMessages([...messages, { role: 'user', content: userMessage }]);
      setUserInput('');
      const response = await fetchOpenRouterResponse(userMessage);
      setMessages([...messages, { role: 'user', content: userMessage }, { role: 'assistant', content: response }]);
    }
  };
  
  return (
   <>
    <div className=" justify-center items-center w-4/6 bg-black">

      
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex mb-2 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
           
                 <img
        src={message.role === 'user' ? 'https://cdn.pixabay.com/photo/2020/12/08/12/23/kakashi-hatake-5814250_640.png' : 'https://cdn.pixabay.com/photo/2024/02/02/04/20/ai-generated-8547244_640.png'}
        alt="Avatar"
        className="rounded-full w-8 h-8"
      />
            <div
              className={`ml-2 p-2 rounded-lg ${
                message.role === 'user'
                  ? 'bg-gray-600 text-white'
                  : 'bg-pink-600 text-white'
              }`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start mb-2">
            <img
              src="https://cdn.pixabay.com/photo/2024/02/02/04/20/ai-generated-8547244_640.png"
              alt="Avatar"
              className="rounded-full w-8 h-8"
            />
            <div className="ml-2 p-2 rounded-lg bg-gray-600 text-white">
              <p>Message typing...</p>
            </div>
          </div>
        )}
      <img 
      src={toggle} 
      alt='toggle'
      className='absolute bottom-0 right-40 text-pink-600 '
      />
      <p className='text-xs bottom-0 text-pink-500 absolute right-48'>text</p>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        onKeyDown={handleUserInput}
        placeholder="Type a message here..."
        className="absolute bottom-0 w-1/2 bg-black border-2 border-solid border-red-700 ml-24 -mb-8 text-white" 
      />
           <button
            onClick={sendMessage}
            className="absolute bottom-0 right-0 mr-16 -mb-8 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <img src={send} alt='send'/>
          </button>
    </div>
   </>
  )
}

export default RightSection