import { forwardRef } from "react"

const ResultModel = forwardRef(
function ResultModel({targetTime, remainingTime , onReset},ref){
    const userLost = remainingTime<=0
    const formattedTime = (remainingTime/1000).toFixed(2)
    const score = Math.round((1 - remainingTime/(targetTime * 1000))*100);
    return(
        <dialog ref={ref} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score is :{score}</h2>}
            <p>The target time was <strong>{targetTime}</strong>seconds.</p>
            <p>You stopped in <strong>{formattedTime} seconds left.</strong></p>
            <form action="" method="dialog" onSubmit={onReset}>
                <button>Cancel</button>
            </form>
        </dialog>
    )
})

export default ResultModel;