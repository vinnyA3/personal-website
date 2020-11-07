import React from "react"
import SEO from "@components/seo"
import About from './components/about'
import Intro from './components/introduction'

const Home = () => {

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <SEO title="Home" />
      <Intro />
      <About />
    </div>
  )
}

export default Home
