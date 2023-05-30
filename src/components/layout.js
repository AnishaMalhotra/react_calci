import React, {useState} from 'react';
import './layout.css'
import logo from '../assets/img/cal.jpg'
import Output from '../components/output'

const Layout = (props) => {
    let[input, setInput] = useState("")
    let[result, setResult] = useState("")
    const handleClick =(event)=>{
    const value = event.target.value;
    if(value === '='){
        if(input !== ''){
            let res = ''
            try{
                res = eval(input).toString();
            } catch(err){
                setResult('Math Error')
            }
            if(res === undefined){
                setResult('Math Error')
            }
            else {
                setResult(input + '=')
                setInput(res)
            }
        }
    }
    else if(value === 'C'){
        setInput('')
        setResult('')
    }
    else if(value === 'DEL'){
        setInput(input.slice(0,-1));
    }
    else {
        setInput((input += value))
    }
}

    return (
        
            <div className='frame'>
            <div className='calculator'>

                <br/>
                <Output user={input} answer={result}/><br/>
                <img src= {logo}/>
                <div className='keys flex'>
                    
                    <input type='button' value={'C'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'DEL'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'%'} className='button operator' onClick={handleClick}></input>
                    <input type='button' value={'/'} className='button operator' onClick={handleClick}></input>
                    
                    <input type='button' value={'7'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'8'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'9'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'*'} className='button operator' onClick={handleClick}></input>
                   
                    <input type='button' value={'4'} className='button number' onClick={handleClick}></input>                
                    <input type='button' value={'5'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'6'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'-'} className='button operator' onClick={handleClick}></input>
                  
                    <input type='button' value={'1'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'2'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'3'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'+'} className='button operator' onClick={handleClick}></input>
                    
                    <input type='button' value={'0'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'.'} className='button number' onClick={handleClick}></input>
                    <input type='button' value={'='} className='button ans' onClick={handleClick}></input>
                    
                </div>
            </div>

        </div>
       
    );
}

export default Layout;
