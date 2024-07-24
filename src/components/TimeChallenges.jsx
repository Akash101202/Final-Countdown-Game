import { useRef, useState } from "react"
import ResultModel from "./ResultModel"

export default function TimeChallenges({title , targetTime}){
    const timer = useRef()
    const dialog = useRef()
    
    const [timeRemaining,setTimeRemaining] = useState(targetTime * 1000)    
    
    const timeIsActive = timeRemaining >0 && timeRemaining<targetTime*1000

    
    if(timeRemaining <=0){
        clearInterval(timer.current)
        
        dialog.current.showModal()
    }

    function handleReset(){
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart(){
        timer.current = setInterval(()=>{
           setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        },10)
       
    }

    function handleStop(){
        dialog.current.showModal()
        clearInterval(timer.current)
    }
    return (
        <>
            <ResultModel 
            ref={dialog} 
            targetTime={targetTime} 
            onReset={handleReset}
            remainingTime ={timeRemaining}
            />
            <section className="challenge">
       
            <h1>{title}</h1>
            
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timeIsActive ? handleStop : handleStart}>
                    {timeIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timeIsActive ? 'active' : ''}>
                {timeIsActive ? 'Time is running' : 'Timer is inactive'}
            </p>
        </section>
           
        </>
        
    )
}