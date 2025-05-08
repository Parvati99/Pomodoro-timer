import React, { createContext , useState} from 'react'


export const SettingContext=createContext();

function SettingsContextProvider(props){

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function setCurrentTimer (active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
        // updateExecute(updated)
    }

    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
    setStartAnimate(false)
    }

       // pass time to counter 
       const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        
        return `${minutes<10?"0" + minutes:minutes}:${seconds<10?"0" +seconds:seconds}`
        }

    function stopAnimate() {
        setStartAnimate(false)
        }

        const SettingBtn =()=>{
            setExecuting({})
            setPomodoro(0)
        }

        const updateExecute = updatedSettings => {
            setExecuting(updatedSettings)
            setTimerTime(updatedSettings)
        }

        const setTimerTime = (evaluate) => {
            switch (evaluate.active) {
                case 'work':
                    setPomodoro(evaluate.work)
                    break;
                case 'shortbreak':
                    setPomodoro(evaluate.shortbreak)
                    break;
                case 'longbreak':
                    setPomodoro(evaluate.longbreak)
                    break;
                    default:
                        setPomodoro(0)
                    break;
            }
        }

       



  return (
    <SettingContext.Provider 
    value={{
        stopAnimate, 
        updateExecute,
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        SettingBtn,
        setCurrentTimer,
        children,
        }}>
        {props.children}
    </SettingContext.Provider>
  )
}

export default SettingsContextProvider  