import React, { useState } from 'react'
import './FooterStyle/FooterStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { push, pushme } from '../action/action'
import manI from '../img/manI.jpg'
import { IamMan } from '../dataUser'

export default function Footer (  ){ 
   // console.log(IamMan.text)
   
 const [inptValue, setInptValue] = useState('')
   const currText = useSelector(state => state.giveText)
   const inpt = document.getElementById('#inpt')
   
    console.log(inptValue)
    // console.log(IamMan)
    const dispatch = useDispatch()
    return <div className='Footer'> 
    <button onClick={()=> {
        dispatch(push())
    }}>New Message from friends</button>
    <div className="Footer__input">
        <input type="text" id='inpt' onChange={e=>setInptValue(e.target.value) }/>
        <button onClick={()=>{
           
           IamMan.mytext = inptValue
            return dispatch(pushme())
        }}>send</button>
        <img src={manI} alt="i'm" />
        {currText}
    </div>
    

 </div>}