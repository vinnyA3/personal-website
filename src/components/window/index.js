import React from "react"
import CodeProp from './components/CodeProp'
import CodeList from './components/CodeList'
import "./styles.scss"

const generateCodePropList = (
  items,
  indentLevel = null,
  startingIndex = null
) => {
  return items.map((item, idx) => (
    <CodeProp
      key={idx}
      item={item}
      idx={startingIndex ? startingIndex + 1 : idx + 2}
      indentLevel={indentLevel}
    />
  ))
}

const CodeLink = ({ text, url }) => (
  <div className="code__link">
    <a href={url ? url : "#"} target="__blank">
      {text}
    </a>
  </div>
)

const contactData = [["email", "vincent.aceto@gmail.com"]]

const Window = ({ data }) => {
  return (
    <div className="code">
      <code>
        <div className="code__opening">
          <span className="code__line-number">1</span>
          <span className="code__keyword">const</span>
          <span className="code__variable"> aboutMe</span> <span> = {"{"}</span>
        </div>
        <React.Fragment>{generateCodePropList(data)}</React.Fragment>

        <div className="code__item">
          <span className="code__line-number">{6}</span>
          <span className="code__prop">contact</span>:&nbsp;
          <span>{"{"}</span>
          <React.Fragment>
            {generateCodePropList(contactData, 2, 6)}
          </React.Fragment>
        </div>

        <div className="code__item indent-level-2">
          <span className="code__line-number">{8}</span>
          <span className="code__prop">socials</span>:&nbsp;
          <CodeList inline>
            <CodeLink text="'github'" url="https://github.com/vinnyA3" />
            <CodeLink text="'codepen'" url="https://codepen.io/vinnyA3" />
            <CodeLink text="'linkedin'" url="https://linkedin.com/in/vinaceto" />
          </CodeList>
        </div>

        <div className="code__opening">
          <span className="code__line-number">9</span>
          <span className="indent-level-2">{"}"}</span>
        </div>

        <div className="code__opening">
          <span className="code__line-number">10</span>
          <span>{"}"}</span>
        </div>
      </code>
    </div>
  )
}

export default Window
