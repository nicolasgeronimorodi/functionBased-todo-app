import { prependOnceListener } from 'process'
import React, { useState } from 'react'
import {Redirect, useLocation, Link} from 'react-router-dom'





const GenerateProfile=props=>{
    
    const [isLoggedIn, setIsLoggedIn]=useState(false)
      
      const [username, setUsername]=useState()
  
    
    

    const HandleSubmit = e => {
        e.preventDefault()
        localStorage.setItem('usuario', username)    
        const path=`/user/${username}/`
        console.log(path)
        setIsLoggedIn(true)
        //if(isLoggedIn){return <Redirect to={path} />}
        if(isLoggedIn){props.history.push(path)}
    }
        

    return (
        <div>
            <h1>    Genera tu propio perfil </h1>
            <form onSubmit={HandleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Agrega un titulo para tu perfil"
                    onChange={e => setUsername(e.target.value)}
                    name="username"
                />
                <input type="submit" value="Enviarrr" className="input-submit"/>
                </form>
        </div>
)

}


export default GenerateProfile