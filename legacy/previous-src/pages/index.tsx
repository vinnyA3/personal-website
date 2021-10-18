import React, { useEffect } from "react"
import { Link } from "gatsby"

import SEO from "@components/seo"
import DarkModeSwitch from "@components/darkmode-switch"

import VincentProfile from "@assets/images/vincent-profile.jpeg"

import "@sass/main.scss"
import "./styles.scss"

const IndexPage = () => {
  useEffect(() => {
    if (process.env.IS_DEV) {
      console.log('RUNNING IN DEV')
      // const gatsbyWrapper = document.getElementById("gatsby-focus-wrapper")
      // gatsbyWrapper.style.height = "100%"
      // gatsbyWrapper.style.width = "100%"
    }
  }, [])

  return (
    <div className="home-wrapper">
      <SEO title="Home" />
      <DarkModeSwitch
        style={{ position: "absolute", top: "5em", right: "5em" }}
      />
      <section style={{ textAlign: "center" }}>
        <div className="intro__brand">
          <img
            className="intro__avatar"
            src={VincentProfile}
            alt="Vincent Aceto. That's me!!"
          />
          <h4 className="intro__name">Vincent Aceto</h4>
        </div>
        <h1 className="intro__profession">Software Engineer</h1>
        <h4 className="intro__blurb">
          Currently writing code at Equinox Media, and occasionally
          contributing to open-source projects!
        </h4>
        <div className="u-flex-center">
          <Link to="/blog">
            <button className="intro__btn">Visit blog</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
