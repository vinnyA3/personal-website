import React from "react"
import { Link } from "gatsby"
import SEO from "@components/seo"

import "@sass/main.scss"
import "./styles.scss"

const IndexPage = () => {
  return (
    <div
      className="home-wrapper"
      style={{
        height: "99vh",
        width: "99vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <SEO title="Home" />
      <section style={{ textAlign: "center" }}>
        <span>Vincent Aceto</span>
        <h1 className="intro__profession">Software Engineer</h1>
        <p>
          Currently writing code at Major League Soccer, occasionally
          contributing to open-source and writing when I can.
        </p>
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
