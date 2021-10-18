import React from 'react';
import { Properties as CSSProps } from 'csstyle';

import { useTheme } from '@contexts/themeContext';

import './styles.scss';

const DarkModeSwitch = (props: { style: CSSProps }): JSX.Element => {
  const { isDark, toggle } = useTheme();

  return (
    <div className="toggle-container" style={props.style || {}}>
      <input
        type="checkbox"
        className="toggle"
        checked={isDark}
        onChange={toggle}
      />
    </div>
  );
};

export default DarkModeSwitch;
