import React from 'react';

const Timer = (props) => {
  const [time, setTime] = React.useState(props.initial);
  const [stopped, setStopped] = React.useState(false);

  const getTime = () => {
    return time >= 1 ? time - 1 : 0;
  }

  const stopTimer = (stoppedTime) => {
    setStopped(true);
    setTime(stoppedTime);
  }

  React.useEffect(() => {
    if (time !== 0 && !stopped) {
      setTimeout(() => {
        setTime(getTime());
      }, 1000);
    }
  }, [time, stopped]);

  return (
    <div className="mt-100 layout-column align-items-center justify-content-center">
      <div className="timer-value" data-testid="timer-value">{time}</div>
      <button className="large" data-testid="stop-button" onClick={stopTimer(time)}>Stop Timer</button>
    </div>
  );
};

export default Timer;
