import { useState } from "react";
import Box from "./Box";
import { sample } from "lodash";
import './ColorBoxes.css'

const COLOR_CHOICES = [
    'red',
    'blue',
    'green',
    'goldenrod',
    'purple'
]

function ColorBoxes({colors = COLOR_CHOICES}) {
    const [boxes, setBoxes] = useState(generateBoxes);

    function generateBoxes() {
        const boxArr = [];
        for (let i = 0; i < 16; i++) {
            boxArr.push(<Box key={i} color={sample(colors)}/>)
        }
        return boxArr;
    }

    function handleClick() {
        const boxIdx = Math.floor(Math.random() * boxes.length);
        const boxArr = boxes.slice();
        boxArr[boxIdx] = <Box key={boxIdx} color={sample(colors)}/>
        setBoxes(boxArr);
    }

    return (
        <div>
            <div className="ColorBoxes-boxes">{ boxes }</div>

            <button onClick={handleClick}>Change</button>
        </div>
    )
}

export default ColorBoxes;