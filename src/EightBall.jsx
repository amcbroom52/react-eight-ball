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
  const [answer, setAnswer] = useState({
    color: "black",
    msg: "Think of a Question"
  });

  const style = {
    backgroundColor: answer.color,
  };

  function handleClick() {
    const newAnswer = sample(answers);

    setAnswer({
      color: newAnswer.color,
      msg: newAnswer.msg
    });
  }


  return (
    <div style={style} onClick={handleClick} className='EightBall'>
      {answer.msg}
    </div>
  );

}

export default EightBall;