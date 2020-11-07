import React from "react"
import styles from './styles.module.scss'

const SpecialMessage = () => {
  return (
    <div className={styles.container}>
      <div>
        <span>01001000</span>
        <span>01100101</span>
        <span>01101100</span>
        <span>01101100</span>
      </div>
      <div>
        <span>01101111</span>
        <span>00100000</span>
        <span>01000110</span>
        <span>01110010</span>
      </div>
      <div>
        <span>01101001</span>
        <span>01100101</span>
        <span>01101110</span>
        <span>01100100</span>
      </div>
    </div>
  )
}

export default SpecialMessage
