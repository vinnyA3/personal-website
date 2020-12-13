import React from "react"
import { Link } from "gatsby"
import MainNavigation from "@components/navigation"
import VincentProfile from "@assets/images/vincent-profile.jpeg"
import "./styles.scss"

const ContentWrapper = props => {
  return (
    <div className="blog-layout">
      <MainNavigation styles={componentStyles.positioning} />
      <div className='blog-content'>
        {props.children}
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

const componentStyles = {
  positioning: {
    gridArea: 'nav'
  } 
}
