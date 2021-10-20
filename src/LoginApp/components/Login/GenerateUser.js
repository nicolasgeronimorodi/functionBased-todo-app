import { useState } from "react"
import PropTypes from 'prop-types'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)

    })
        .then(data => data.json())
}



export default function GenerateUser({ setToken }) {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        setToken(token)
    }

    return (
        <div>
            <h1>    Genera tu propio usuario </h1>

            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Agregar nombre de usuario"
                    onChange={e => setUserName(e.target.value)}
                    name="username"
                />
                <input
                    type="text"
                    className="input-text"
                    placeholder="Agregar contraseña"
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                />


                <button className="input-submit">Enviar</button>



            </form>
        </div>
    )
}


GenerateUser.propTypes = {
    setToken: PropTypes.func.isRequired
}