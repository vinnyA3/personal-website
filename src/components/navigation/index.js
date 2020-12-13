import React from "react"
import { Link } from "gatsby"
import DarkModeSwitch from "@components/darkmode-switch"
import "./styles.scss"

const Navigation = props => {
  const { title = "Vincent Aceto", styles = {} } = props
  return (
    <nav className="main-navigation" style={{ ...styles }}>
      <div className="main-navigation__sub-nav">
        <div className="main-navigation__brand">
          <Link to="/">
            <h3>{title}</h3>
          </Link>
        </div>

        <ul className="main-navigation__controls">
          <li>
            <DarkModeSwitch />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
