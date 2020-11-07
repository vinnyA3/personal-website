import React, { useEffect } from "react"
import Home from "../screens/home"
import '../styles/main.scss'

const IndexPage = () => {
  useEffect(() => {
    if (process.env.IS_DEV === 'true') {
      const gatsbyContainer = document.getElementById("gatsby-focus-wrapper")
      gatsbyContainer.style.height = "100%"
      gatsbyContainer.style.width = "100%"
    }
  }, [])

  return (
    <Home />
  )
}

export default IndexPage
