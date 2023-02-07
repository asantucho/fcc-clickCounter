import React from "react"

const Counter = ({clickAmount}) => {
    return (
        <div className="counter">
            {clickAmount}
        </div>
    )
}

export default Counter