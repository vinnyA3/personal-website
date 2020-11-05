import React from "react"

const CodeList = ({ children }) => {
  const intermediate = []

  // TODO: use map
  for (let i = 0; i < children.length; i++) {
    intermediate.push(
      <React.Fragment key={i}>
        {children[i]}
        {i < children.length - 1 ? (
          <span style={{ paddingRight: ".25rem" }}>,</span>
        ) : null}
      </React.Fragment>
    )
  }

  return (
    <div className="code__list-block inlined">
      <span>{"["}</span>&nbsp;
      {intermediate}
      &nbsp;<span>{"]"}</span>
    </div>
  )
}

export default CodeList
