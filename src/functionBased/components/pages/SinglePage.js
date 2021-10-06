import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
    console.log(useParams()   )
    const aboutData = [
        {
          slug: "about-app",
          title: "Sobre el servicio",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          slug: "about-author",
          title: "Sobre el creador",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ]
 const {slug}=useParams()
 const aboutContent=aboutData.find(item=>   item.slug ===slug)
 const {title, description}=aboutContent
 return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )



}
export default SinglePage