import { useState } from "react"


export const Arrow = ({index, updateBoard}) => {

    const newIndex = index + 42 -7
    const [counter, setCounter] = useState(newIndex)

    const handleClick = () => {
        
        setCounter(counter - 7)
        updateBoard(counter)
    }

    return (
        <button onClick={handleClick} className='arrow'>↓</button>
    )
}
