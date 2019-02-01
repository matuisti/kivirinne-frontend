import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CircularProgressBar.css'

const CircularProgressBar = ({percentage, unit, clockwise, type, name}) => {
  var styles = null;

  switch (type) {
    case 'temp':
      styles = barStyles('#3e98c7', '#fff');
      break;
    case 'hum':
      styles = barStyles('orange', 'white');
      break;
    default:
      styles = barStyles('red', '#fff');
  }

  return (
    <div className="circular-progressbar-body">
      <CircularProgressbar
        percentage={ percentage }
        text={percentage + unit}
        counterClockwise={clockwise}
        background
        backgroundPadding={6}
        styles={styles}
      />
    </div>
  );
};

function barStyles(background, text) {
  const style = {
    background: {
      fill: background,
    },
    text: {
      fill: text,
    },
    path: {
      stroke: '#fff',
    },
    trail: {
      stroke: 'transparent'
    }
  }
  return style;
};


export default CircularProgressBar;
