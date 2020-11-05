import React, { useEffect } from "react"
import SEO from "../components/seo"
import Window from "../components/window"
import bgColorGenerator from "../background-color-generator"

const DATA = [
  ["name", "Vincent Aceto"],
  ["occupation", "Software Engineer"],
  ["employer", "Major League Soccer"],
  ["location", "New York, NY"],
]

const IndexPage = () => {
  useEffect(() => {
    const generator = bgColorGenerator(document.body)([193, 88, 88])

    return () => {
      generator.stop()
    }
  }, [])

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SEO title="Home" />
      <Window data={DATA} />
    </div>
  )
}

export default IndexPage
