import React from "react"
import { useParams } from "react-router-dom"
import GenerateProfile from "../GenerateProfile"

const UserPage=()=>{
const {username}=useParams()
console.log({username})
   return (
   <div>
   <h1>
      Bienvenido usuario {username}
   </h1>
   </div>
      
   )
}

export default UserPage