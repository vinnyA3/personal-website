import React from "react"
import { Link } from "gatsby"
import DarkModeSwitch from "@components/darkmode-switch"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import "./styles.scss"

deckDeckGoHighlightElement()

const ContentWrapper = props => {
  const { postData } = props
  return (
    <div className="blog-layout">
      <nav className="blog-navigation">
        <div className="content-wrapper">
          <div className="sub-navigation">
            <div className="sub-navgation__brand">
              <span>Vincent Aceto</span>
            </div>

            <ul className="sub-navigation__controls">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <DarkModeSwitch />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`blog-content`}>
        <section className="blog-content__hero">
          <h1>{postData.frontmatter.title}</h1>
        </section>

        <main
          className="blog-content__main"
          dangerouslySetInnerHTML={{ __html: postData.html }}
        />
      </div>

      <footer className="blog-footer">
        <div className="content-wrapper u-flex-center">
          <div>
            <h2>Vincent Aceto</h2>
            <ul className="blog-footer__nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContentWrapper
