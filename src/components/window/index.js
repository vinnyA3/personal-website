import React from "react"

import "./styles.scss"

const Window = () => {
  return (
    <div className="code">
      <div className="code__lines">
        <div className="code__line-number">
          <span>1</span>
        </div>
        <div className="code__line-number">
          <span>2</span>
        </div>
        <div className="code__line-number">
          <span>3</span>
        </div>
        <div className="code__line-number">
          <span>4</span>
        </div>
        <div className="code__line-number">
          <span>5</span>
        </div>
        <div className="code__line-number">
          <span>6</span>
        </div>
        <div className="code__line-number">
          <span>7</span>
        </div>
        <div className="code__line-number">
          <span>8</span>
        </div>
        <div className="code__line-number">
          <span>9</span>
        </div>
        <div className="code__line-number">
          <span>10</span>
        </div>
      </div>
      <code>
        <div>
          <span className="code__keyword">const</span>
          <span className="code__variable"> aboutMe</span> <span> = {"{"}</span>
        </div>
        <div>
          <span className="code__prop">name</span>:
          <span className="code__string"> 'Vincent Aceto'</span>,
        </div>
        <div>
          <span className="code__prop">occupation</span>:
          <span className="code__string"> 'Software Engineer'</span>,
        </div>
        <div>
          <span className="code__prop">employer</span>:
          <span className="code__string"> 'Major League Soccer'</span>,
        </div>
        <div>
          <span className="code__prop">location</span>:
          <span className="code__string"> 'New York, NY'</span>,
        </div>
        <div>
          <span className="code__prop">contact</span>
          <span>: {"{"}</span>
        </div>
        <div>
          <span className="code__prop code__prop--indent2">email</span>:&nbsp;
          <span className="code__string">
            <a className="code__link" href="mailto:vincent.aceto@gmail.com">
              'vincent.aceto@gmail.com'
            </a>
          </span>
          ,
        </div>
        <div>
          <span className="code__prop code__prop--indent2">socials</span>: [&nbsp;
          <span className="code__string">
            <a
              className="code__link"
              href="https://github.com/vinnyA3"
              target="_blank"
            >
              'github'
            </a>
          </span>
          ,
          <span className="code__string">
            <a
              className="code__link"
              href="https://codepen.io/vinnyA3"
              target="_blank"
            >
              'codepen'
            </a>
          </span>
          ,
          <span className="code__string">
            <a
              className="code__link"
              href="https://linkedin.com/in/vinaceto"
              target="_blank"
            >
              'linkedin'
            </a>
          </span>
          &nbsp;]
        </div>
        <div>
          <span className="code__indent">{"}"}</span>
        </div>
        <span>{"}"}</span>
      </code>
    </div>
  )
}

export default Window
