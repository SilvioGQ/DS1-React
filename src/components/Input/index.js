import React, { useState } from 'react';
import Button from '../Button';

function Input({setLista}) {
    const [inputValue,setInputValue] = useState('');
    const AproveNumber = () =>{
        if(inputValue != '' && inputValue%2 == 0){
            alert('top parceiro')
        }
    }
    return (
        <form onSubmit={AproveNumber}>
            <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
            <Button text={'botão'} inputValue={inputValue} setLista={setLista} />
        </form>
    );
}

export default Input;