import React from "react"
import { useTheme } from '@contexts/themeContext' 
import './styles.scss';

const DarkModeSwitch = (props) => {
  const { isDark, toggle } = useTheme()
  return (
    <div style={props.style || {}}>
      <input type="checkbox"
        className="toggle"
        checked={isDark}
        onChange={toggle}
      />
    </div>
  )
}

export default DarkModeSwitch;
