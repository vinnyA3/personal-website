import React from "react"
import styles from "./styles.scss"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"

deckDeckGoHighlightElement()

const ContentWrapper = props => {
  const { children, heroTitle = "Hello World!!" } = props

  return (
    <div className="content-wrapper">
      <section className="content-hero">
        <h1>{heroTitle}</h1>
      </section>

      <main className="content-main">{props.children}</main>

      <footer className="content-footer">
        <div className="content-footer__brand">
          <h6>Vincent Aceto</h6>
        </div>
      </footer>
    </div>
  )
}

export default ContentWrapper
