import React, { useContext,useState } from 'react'
import Button from './Button'
import { SettingContext } from '../context/SettingsContext.jsx'

const SetPomodoro = ({closePopup=()=>{}}) => {
    const {updateExecute} = useContext(SettingContext)
    const [newTimer, setnewTimer] =useState({
        work:25,
        shortbreak: 5,
        longbreak:15,
        active:'work'
    })

    const handleChange= input=>{
        
        const {name, value}= input.target
        switch (name){
            case 'work':
                setnewTimer({
                    ...newTimer,
                    work:parseInt(value)
                })
                break;
                case 'shortbreak':
                    setnewTimer({
                        ...newTimer,
                     shortbreak:parseInt(value)
                    })
                    break;

                    case 'longbreak':
                        setnewTimer({
                            ...newTimer,
                           longbreak:parseInt(value)
                        })
                        break;

                     default:
                        break;


        }
        console.log(newTimer);
    }

    const handleSubmit=e=>{
        e.preventDefault();  
        updateExecute(newTimer);
        // setPomodoro(newTimer[newTimer.active]);
        closePopup();
        }


  return (
    <div className='form-container'>
        <form action="" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input type="text"
                className='input'
                name='work'
                onChange={handleChange}
                value={newTimer.work}/>

                <input type="text"
                className='input'
                name='shortbreak'
                onChange={handleChange}
                value={newTimer.shortbreak}/>

                <input type="text"
                className='input'
                name='longbreak'
                onChange={handleChange}
                value={newTimer.longbreak}/>
            </div>
            <Button title="Set Timer" _callback={handleSubmit} activeclass={'active'}/>
            {/* <button type='submit'>Set Timer</button> */}
        </form>
    </div>
  )
}

export default SetPomodoro   