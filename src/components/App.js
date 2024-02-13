import React from "react";
import {ChatEngine} from "react-chat-engine";
import "./App.css"
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';

const projectID = 'ec1c77cc-f814-41bb-acbc-434f884ca495';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;