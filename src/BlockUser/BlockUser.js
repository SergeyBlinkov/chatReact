import React from 'react'
import './BlockUserStyle/BlockUserStyle.css'
import { dataUser } from '../dataUser'





export default function BlockUser (){
    
    
    return <div className='BlockUser'> 
    {dataUser.map((data, index) => {
       return <div className="user" style={{margin:'4px 4px'}} key={index}>
        <img src={data.image} alt="Pic"/>
        <p className='user_name'>{data.firstName}</p>
    </div>
    })}

 </div>}