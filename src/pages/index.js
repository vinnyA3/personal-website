import React, { useEffect } from "react"
import { of, fromEvent, animationFrameScheduler } from "rxjs"
import {
  map,
  switchMap,
  takeUntil,
  subscribeOn,
} from "rxjs/operators"
import SEO from "../components/seo"
import Window from "../components/window"
import SpecialMessage from '../components/binary'
import bgColorGenerator from "../background-color-generator"

const DATA = [
  ["name", "Vincent Aceto"],
  ["occupation", "Software Engineer"],
  ["employer", "Major League Soccer"],
  ["location", "New York, NY"],
]

const IndexPage = () => {
  useEffect(() => {
    // const generator = bgColorGenerator(document.body)([193, 88, 88])
    const win = document.getElementById("code-window")
    const mousedown$ = fromEvent(win, "mousedown")
    const mousemove$ = fromEvent(document, "mousemove")
    const mouseup$ = fromEvent(win, "mouseup")

    const drag$ = mousedown$.pipe(
      switchMap(start => {
        return mousemove$.pipe(
          map(move => {
            move.preventDefault()
            return {
              left: move.clientX - start.offsetX,
              top: move.clientY - start.offsetY,
            }
          }),
          takeUntil(mouseup$)
        )
      })
    )

    const position$ = drag$.pipe(subscribeOn(animationFrameScheduler))

    position$.subscribe(pos => {
      win.style.top = `${pos.top}px`
      win.style.left = `${pos.left}px`
    })

    return () => {
      // generator.stop()
      position$.unsubscribe()
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
      <SpecialMessage />
      <div id="code-window">
        <Window data={DATA} />
      </div>
    </div>
  )
}

export default IndexPage
