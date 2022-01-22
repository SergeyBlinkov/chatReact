import React, { useState } from 'react'
import './FooterStyle/FooterStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { push, pushme } from '../action/action'
import manI from '../img/manI.jpg'
import { IamMan } from '../dataUser'

export default function Footer (  ){ 
   // console.log(IamMan.text)
   
    const [inptValue, setInptValue] = useState('')
    
 

   
    
    // console.log(IamMan)
    const dispatch = useDispatch()
    return <div className='Footer'> 
    <button onClick={()=> {
        dispatch(push())
    }}>New Message from friends</button>
    <div className="Footer__input">
        <input type="text" id='inpt' onChange={e=>setInptValue(e.target.value)
        }/>
        <button onClick={()=>{
            
           if(inptValue.length >= 1)
           {
            document.querySelector('#errs').innerHTML = ''
               IamMan.mytext = inptValue
            return dispatch(pushme())
           }
           else {
               document.querySelector('#errs').innerHTML = 'write something to your friends'
               
           }
           
        }}>send</button>
        {inptValue.length < 1 ? <img src={manI} alt="i'm" /> : <div className='user myIcon'><img src={manI} alt="i'm" />
        <p>...</p></div> }
        <p id='errs' ></p>
    </div>
    

 </div>}