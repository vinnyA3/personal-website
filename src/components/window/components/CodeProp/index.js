import React from "react"

const CodeProp = ({ item, idx, indentLevel }) => {
  let itemClass = "code__item"

  if (indentLevel) {
    itemClass += ` indent-level-${indentLevel}`
  }

  return (
    <div className={itemClass}>
      <span className="code__line-number">{idx}</span>
      <span className="code__prop">{item[0]}</span>:
      <span className="code__string"> {`'${item[1]}'`}</span>,
    </div>
  )
}

export default CodeProp
