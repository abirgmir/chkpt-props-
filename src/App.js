import React from 'react';
import './App.css';
import  Profile  from './Profile/Profile';

function App() {
  return (
    <div className="App">
    <Profile  bio="student" profession="web developper" > 
    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="pic"/>
    </Profile>
    </div>
  );
}

export default App;
