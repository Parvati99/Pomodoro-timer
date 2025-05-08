import React, { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingContext } from '../context/SettingsContext'

const CountdownAnimation = ({key, timer, animate, children}) => {
    const {stopAnimate} = useContext(SettingContext)

  return (
    <CountdownCircleTimer
    key={key}
    isPlaying={animate}
    duration={timer*60}
    colorsTime={[7, 5, 2, 0]}
    // colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    // colors={['#fe6f6b', 0.33]}
    colors={[
      ['#FE6F6B', 0.33],
      ['#FE6F6B', 0.33],
      ['#FE6F6B', 0.33],
    ]}
    strokeWidth={6}
    trailColor='#151932'
    size={220}
    onComplete={ () => {
          stopAnimate();
        // stopTimer();
        }}>
        {children}
    </CountdownCircleTimer>
  )
}

export default CountdownAnimation