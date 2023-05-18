import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#62080a" : "white"
    }
    return (
        <div 
            className="die-container" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="die-num">{props.value}</h2>
        </div>
    )
}