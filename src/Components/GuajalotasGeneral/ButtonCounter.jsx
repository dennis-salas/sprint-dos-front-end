import React, { useState } from 'react'

export const ButtonCounter = () => {

    const [counter, setCounter] = useState(1)

    const handleIncrease = () => {
        setCounter(counter - 1)

    }

    const handleDecrease = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="container-fluid m-2">
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col">
                    <button type="button" className="rounded-circle" onClick={handleIncrease}>-</button>
                </div>
                <div className="col">
                    <h4>{counter}</h4>
                </div>
                <div className="col">
                    <button type="button" className="rounded-circle" onClick={handleDecrease}>+</button>
                </div>
                <div className="col-4">
                </div>
            </div>
        </div>
    )
}
