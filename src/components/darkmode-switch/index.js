import React from "react"
import { useTheme } from '@contexts/themeContext' 
import './styles.scss';

const DarkModeSwitch = (props) => {
  const {isDark, toggle} = useTheme()
  return (
    <input type="checkbox"
      className="theme-switch"
      checked={isDark}
      onClick={toggle}
    />
  )
}

export default DarkModeSwitch;
