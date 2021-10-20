
import GenerateUser from "D:/Familia/Desktop/Cursos_Programacion/Proyecto_ListaTareas/ibaslogic-react-todo-app/functionBased-todo-app/src/LoginApp/components/Login/GenerateUser.js"

import useToken from "D:/Familia/Desktop/Cursos_Programacion/Proyecto_ListaTareas/ibaslogic-react-todo-app/functionBased-todo-app/src/LoginApp/components/CustomHooks/useToken.js"



const LoginContainer=()=>{
    const {token, setToken}=useToken()
    if(!token){
      return<GenerateUser setToken={setToken} />}
else{return<GenerateUser setToken={setToken} /> }
    }

export default LoginContainer