import React, { useState } from 'react'

// Suggested initial states
const initialMessage = ''
const initialEmail = ''
const initialSteps = 0
const initialIndex = 4 // the index the "B" is at
const gridArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
const gridWidth = 3


export default function AppFunctional(props) {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  const [b, setB] = useState(initialIndex)

  function getXY() {
    const x = (b % gridWidth) + 1;
    const y = Math.floor(b / gridWidth) + 1;
    console.log(x,y)
    return [x, y];
  }



  function getXYMessage() {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    return `Coordinates ${getXY()}`
  }
  

  function reset() {
    setB(initialIndex)
  }

  function getNextIndex(direction) {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    const totalSquares = gridArray.length;
    let newIndex = b;
  
    if (direction === 'left' && b % gridWidth !== 0) {
      newIndex -= 1;
    } else if (direction === 'right' && b % gridWidth !== gridWidth - 1) {
      newIndex += 1;
    } else if (direction === 'up' && b >= gridWidth) {
      newIndex -= gridWidth;
    } else if (direction === 'down' && b < totalSquares - gridWidth) {
      newIndex += gridWidth;
    } else {
      newIndex = b;  // Move is out of bounds, return the current index
    }
    // console.log(b, newIndex)
    return newIndex;
  }
  


  function move(evt) {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.
    getXY()
    const direction = evt.target.id
    // console.log(direction)
    const newIndex = getNextIndex(`${direction}`)
    setB(newIndex)
  }


  
  function onChange(evt) {
    // You will need this to update the value of the input.
  }

  function onSubmit(evt) {
    // Use a POST request to send a payload to the server.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{getXYMessage()}</h3>
        <h3 id="steps">You moved 0 times</h3>
      </div>
      <div id="grid">
        {
          gridArray.map(idx => (
            <div key={idx} className={`square${idx === b ? ' active' : ''}`}>
              {idx === b ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={move}>LEFT</button>
        <button id="up" onClick={move}>UP</button>
        <button id="right" onClick={move}>RIGHT</button>
        <button id="down" onClick={move}>DOWN</button>
        <button id="reset" onClick={reset}>reset</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="type email"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
