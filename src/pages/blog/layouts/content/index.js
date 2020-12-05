import React, { useEffect } from "react"
import { Link } from "gatsby"
import DarkModeSwitch from "@components/darkmode-switch"
import VincentProfile from "@assets/images/vincent-profile.jpeg"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

import "./styles.scss"

deckDeckGoHighlightElement()

const ContentWrapper = props => {
  const { postData } = props

  useEffect(() => {
    const mediaString = "(max-width: 1290px)"
    const mql = window.matchMedia(mediaString)
    const tocEl = document.getElementById("toc")

    const handleChange = e => {
      if (e.matches) {
        tocEl.style.display = "none"
      } else {
        tocEl.style.display = "block"
      }
    }

    mql.addListener(handleChange)

    return () => mql.removeListener(handleChange)
  }, [])

  return (
    <div className="blog-layout">
      <nav className="blog-navigation">
        <div className="content-wrapper">
          <div className="sub-navigation">
            <div className="sub-navigation__brand">
              <Link to="/">
                <h3>Vincent Aceto</h3>
              </Link>
            </div>

            <ul className="sub-navigation__controls">
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

        <div
          id="toc"
          className="blog-content_toc"
          style={{ position: "fixed", left: "3em", top: "50%" }}
          dangerouslySetInnerHTML={{ __html: postData.tableOfContents }}
        />
        <main
          className="blog-content__main"
          dangerouslySetInnerHTML={{ __html: postData.html }}
        />
      </div>

      <footer className="blog-footer">
        <div className="blog-footer__top-bar" />
        <div className="content-wrapper u-flex-center">
          <div className="blog-footer__media">
            <div>
              <img
                className="blog-footer__avatar"
                src={VincentProfile}
                alt="Vincent Aceto. That's me!!"
              />
            </div>
            <h3 className="blog-footer__title">Vincent Aceto</h3>
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
