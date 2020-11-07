import React, { useEffect } from "react"
import { fromEvent, animationFrameScheduler } from "rxjs"
import { map, filter, switchMap, takeUntil, subscribeOn } from "rxjs/operators"
import Window from "@components/window"
import SpecialMessage from "@components/binary"
// TODO: resolve @ the src root OR .. npm package?
import bgColorGenerator from "../../../../background-color-generator"
import styles from './styles.module.scss'

const DATA = [
  ["name", "Vincent Aceto"],
  ["occupation", "Software Engineer"],
  ["employer", "Major League Soccer"],
  ["location", "New York, NY"],
]

const About = () => {
  useEffect(() => {
    const aboutMe = document.getElementById("about-me")
    const win = document.getElementById("code-window")

    const generator = bgColorGenerator(aboutMe)([193, 88, 88])
    const mousedown$ = fromEvent(win, "mousedown")
    const mousemove$ = fromEvent(document, "mousemove")
    const mouseup$ = fromEvent(win, "mouseup")

    // TODO: confine window movement to about-me section

    // TODO: generalize click offset relative to the target element
    // (not someting so specific as a classname)
    const drag$ = mousedown$.pipe(
      filter(ev => ev.target.className === "top-bar"),
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
      if (generator) generator.stop()
      if (position$) position$.unsubscribe()
    }
  }, [])

  return (
    <div
      id="about-me"
      className={styles.container}
    >
      <SpecialMessage />
      <div id="code-window">
        <Window data={DATA} />
      </div>
    </div>
  )
}

export default About
