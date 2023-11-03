import React from 'react';
import './App.css';
import { About, Blog, Contact, Header, Project, Serviece } from './Sections';

function App() {
  return (
    <div >
      <div className=' container mx-auto py-5'>
        <Header/>
        <About/>
        <Serviece/>
     
        <Project/>
        <Blog/>
        <Contact/>  
      </div>
    
    </div>
  );
}

export default App;
