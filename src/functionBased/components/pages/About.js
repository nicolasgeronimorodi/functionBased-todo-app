import userEvent from "@testing-library/user-event"
import React from "react"
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = () => {
  console.log(useRouteMatch() )  

  const {url, path}=useRouteMatch()
  return (
  <div> 
    <ul>
      <li>
        <Link to={`${url}/about-app`}>Sobre el servicio</Link>
      </li>
      <li>
        <Link to={`${url}/about-author`}>Sobre el creador</Link>
      </li>
    </ul>
    <Route path={`${path}/:slug`}>
      <SinglePage />
    </Route>
  </div>
  

)
}
  export default About