import React,{useContext, useEffect, useState} from 'react';
import SetPomodoro from './components/SetPomodoro.jsx';
import CountdownAnimation from './components/CountdownAnimation.jsx';
import { SettingContext } from './context/SettingsContext.jsx';
import Button from './components/Button.jsx';
import { IoIosSettings } from "react-icons/io";
import './index.css'


function App() {
  const  
  { pomodoro,
    setCurrentTimer,
    executing,
    SettingsBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingContext);

  const [showPopup, setShowPopup]= useState(false);

  useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
   
    <div className="container">     
      <h1>Pomodoro</h1>
      <small>Be productive the right way.</small>
      {pomodoro ===0 ?    
      <SetPomodoro/> :
      <>
      <ul className='labels'>
      <li>
          <Button 
              title="Work" 
              activeclass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
          />
          </li>

          <li>
          <Button 
              title="Short Break" 
              activeclass={executing.active === 'shortbreak' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('shortbreak')} 
          />
          </li>

          <li>
          <Button 
              title="Long Break" 
              activeclass={executing.active === 'longbreak' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('longbreak')} 
          />
          </li>
          <li>
          <Button title={<IoIosSettings size={18}/>} _callback={()=> setShowPopup(true)}/>
          </li>

      </ul>
      {/* <Button title="Settings" _callback={SettingsBtn} /> */}

      <div className="timer-container">
          <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro} 
                timer={pomodoro} 
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button title="Start" activeclass={!startAnimate ? 'btn-active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeclass={startAnimate ? 'btn-active' : undefined} _callback={pauseTimer} />
        </div>
      </> 
      
      }

      {/* SetPomodoro popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <SetPomodoro closePopup={() => setShowPopup(false)} />
          </div>
        </div>
      )}

      </div>

   
  );
}

export default App;