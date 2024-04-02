import { useState } from 'react';
import { sample } from "lodash";
import "./EightBall.css"

const DEFAULT_ANSWERS = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

const INITAL_ANSWER = {
  color: "black",
  msg: "Think of a Question"
}

const INITIAL_COUNTS = {
  red: 0,
  green: 0,
  goldenrod: 0
}


/** Creates a magic eight ball
 *
 * Props:
 * - answers [array of objects: {msg, color}]
 *
 * State:
 * - color
 * - text
 *
 * App -> EightBall
 */
function EightBall({ answers = DEFAULT_ANSWERS }) {
  const [answer, setAnswer] = useState(INITAL_ANSWER);
  // const [redCount, setRedCount] = useState(0);
  // const [greenCount, setGreenCount] = useState(0);
  // const [goldenRodCount, setGoldenRodCount] = useState(0);
  const [colorCounts, setColorCounts] = useState(INITIAL_COUNTS)

  const style = {
    backgroundColor: answer.color,
  };

  function handleClick() {
    const newAnswer = sample(answers);

    setAnswer({
      color: newAnswer.color,
      msg: newAnswer.msg
    });

    setColorCounts(function (colorCounts) {
      const newColorCounts = {...colorCounts};
      newColorCounts[newAnswer.color] = colorCounts[newAnswer.color] + 1
       return newColorCounts;
    });
  }

  function resetEightBall() {
    setAnswer(INITAL_ANSWER);
    setColorCounts(INITIAL_COUNTS);
  }


  return (
    <div>
      <p>Red count: {colorCounts.red}</p>
      <p>Green count: {colorCounts.green}</p>
      <p>Goldenrod count: {colorCounts.goldenrod}</p>
      <div style={style} onClick={handleClick} className='EightBall'>
        {answer.msg}
      </div>
      <button onClick={resetEightBall}>Reset</button>
    </div>
  );

}

export default EightBall;