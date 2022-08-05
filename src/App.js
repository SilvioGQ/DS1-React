import React, { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App () {
  const [lista,setLista]=useState([])
    return (
      <div style={{margin:0,padding:0}}>
        <Header />
        {lista.map((i, key)=> {
          return(
            <List key={key} text={i}/>
          )
        })}
        <Input setLista={setLista}/>
      </div> 
    );
}

export default App;
