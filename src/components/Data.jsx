import { useState } from "react";

const Data = () => {
  const [text, setText] = useState("Random Title")
  const handleClick = () => {
        if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  }
    return(
          <>
            <h6>Ass 1</h6>
              <h1>{text}</h1>
              <button type='button' className='btn' onClick={handleClick}>change title</button>
          </>
    )
};

export default Data;


