import React, { useState, useEffect, SyntheticEvent } from 'react';

export default function ScrambledText() {
  const [expanded, setExpanded] = useState(false);
  const [openSection, setOpenSection] = useState('Demo');

  const [numChars, setNumChars] = useState(6);
  const [characters, setCharacters] = useState('abcdef');
  const [timeouts, setTimeouts] = useState([]);

  useEffect(() => {
    setCharacters((characters) => {
      let newCharacters = '';
      for (let index = 0; index < numChars; index++) {
        newCharacters += (randomUnicode());
      }
      return newCharacters;
    });

    setTimeouts((timeouts) => {
      timeouts.map((timeout) => {
        clearTimeout(timeout);
      })
      let newTimeouts = [];
      for (let index = 0; index < numChars; index++) {
        newTimeouts.push(setTimeout(() => {
          setScrambledValue(index);
        }, (Math.floor(randomHeavyTailed() * 1000))))
      }
      return newTimeouts
    });

    function setScrambledValue(index: number): void {
      setCharacters((characters) => {
        return characters.slice(0, index) + randomUnicode()
          + characters.slice(index+1, numChars);
      });
      setTimeouts((timeouts) => {
        let newTimeouts = timeouts.slice();
        newTimeouts[index] = setTimeout(() => {
          setScrambledValue(index);
        }, (Math.floor(randomHeavyTailed() * 1000)));
        return newTimeouts;
      });
    }
  }, [numChars]);

  function randomHeavyTailed(): number {
    let rdm = Math.random();
    if (rdm < 0.5) {
      return rdm * rdm;
    }
    else {
      return 1 - ((1 - rdm) * (1 - rdm));
    }
  }

  function randomUnicode() {
    let char = String.fromCharCode(0x0021 + Math.random() * (0x007F-0x0021+1))
    if (char.length > 0 && char != " ") {
      return char;
    }
    return randomUnicode();
  }

  function changeNumChars(ev: any) {
    setNumChars(ev.target.value);
  }

  function clickTab(newSectionName: string) {
    if (newSectionName != openSection) {
      setOpenSection(newSectionName);
    }
  }

  return (
    <div className="snippet">
      <div className="row">
        <div className="top-container">
          <div className="title">
            Scrambled Text
          </div>
          <div className="date-line">
            Tuesday April 28th, 2020
          </div>
          <div className="description">
            A simple visual effect to scramble individual letters of a certain length.
          </div>
        </div>
        {renderButton()}
      </div>

      {renderContent()}
    </div>
  );

  function renderButton() {
    let icon = '+';
    if (expanded) {
      icon = '-';
    }
    return (
      <div className="icon-button" onClick={() => setExpanded(!expanded)}>
        {icon}
      </div>
    );
  }

  function renderContent() {
    if (expanded) {
      return (
        <div>
          <div className="content-header">
            <div className={(openSection == 'Demo') ? 'tab selected' : 'tab'}
              onClick={() => clickTab('Demo')}>Demo</div>
            <div className={(openSection == 'Javascript') ? 'tab selected' : 'tab'}
              onClick={() => clickTab('Javascript')}>Javascript</div>
            <div className={(openSection == 'HTML') ? 'tab selected' : 'tab'}
              onClick={() => clickTab('HTML')}>HTML</div>
            <div className={(openSection == 'Write up') ? 'tab selected' : 'tab'}
              onClick={() => clickTab('Write up')}>Write up</div>
          </div>
          <div className="content-container">
            {renderSection(openSection)}
          </div>
        </div>
      );
    }
  }

  function renderSection(sectionName: string) {
    switch(sectionName) {
      case 'Demo':
      return (
        <div className="section" id="demo">
          <label>String length:</label>
          <div className="input-group">
            <input value={numChars} onChange={changeNumChars} />
          </div>
          <br />
          <label>Scrambled string:</label>
          <div className="scrambled-text">{characters}</div>
        </div>
      );

      case 'Javascript':
      return (
        <div className="section" id="javascript">
          <pre>{
`const [numChars, setNumChars] = useState(6);
const [pausing, setPausing] = useState(true);
const [characters, setCharacters] = useState('abcdef');
const [timeouts, setTimeouts] = useState([]);

useEffect(() => {
  setCharacters((characters) => {
    let newCharacters = '';
    for (let index = 0; index < numChars; index++) {
      newCharacters += (randomUnicode());
    }
    return newCharacters;
  });

  setTimeouts((timeouts) => {
    timeouts.map((timeout) => {
      clearTimeout(timeout);
    })
    let newTimeouts = [];
    for (let index = 0; index < numChars; index++) {
      newTimeouts.push(setTimeout(() => {
        setScrambledValue(index);
      }, (Math.floor(randomHeavyTailed() * 1000))))
    }
    return newTimeouts
  });

  function setScrambledValue(index: number): void {
    setCharacters((characters) => {
      return characters.slice(0, index) + randomUnicode()
        + characters.slice(index+1, numChars);
    });
    setTimeouts((timeouts) => {
      let newTimeouts = timeouts.slice();
      newTimeouts[index] = setTimeout(() => {
        setScrambledValue(index);
      }, (Math.floor(randomHeavyTailed() * 1000)));
      return newTimeouts;
    });
  }
}, [numChars]);

function randomHeavyTailed(): number {
  let rdm = Math.random();
  if (rdm < 0.5) {
    return rdm * rdm;
  }
  else {
    return 1 - ((1 - rdm) * (1 - rdm));
  }
}

function randomUnicode() {
  let char = String.fromCharCode(0x0021 + Math.random() * (0x007F-0x0021+1))
  if (char.length > 0 && char != " ") {
    return char;
  }
  return randomUnicode();
}

function changeNumChars(ev: any) {
  setNumChars(ev.target.value);
}`
          }</pre>
        </div>
      );

      case 'HTML':
      return (
        <div className="section" id="html">
          <pre>{
`<label>String length:</label>
<div className="input-group">
  <input value={numChars} onChange={changeNumChars} />
</div>
<br />
<label>Scrambled string:</label>
<div className="scrambled-text">{characters}</div>`
          }</pre>
        </div>
      );

      case 'Write up':
      return (
        <div className="section" id="write-up">
          <p>
            I wrote this snippet primarily as an exercise in React hooks. It's not complicated, really just a combination of <code>randomUnicode()</code> to generate a character, <code>randomHeavyTailed()</code> to set the delay, and a combination of <code>setTimeout()</code> and React's <code>useEffect()</code> to handle state.
          </p>
          <p>
            I did run into a few issues while putting it together; please feel free to learn from my mistakes.
          </p>
          <p>
            <code>randomUnicode()</code> originally used <code>String.fromCharCode()</code> to pull a random character from the Basic Latin unicode block 0x0000 - 0x007F (<a href="https://en.wikipedia.org/wiki/Plane_(Unicode)">unicode's pretty interesting in its own right</a>). Running the code like this resulted in a bunch of blank characters being scrambled into the string. Eventually I realized that the first 31 characters are various control codes, null characters, etc. that are displayed as blank characters.
          </p>
          <p>
            I also originally used the garden-variety <code>Math.random()</code> to determine the individual character scramble delay, but using a heavy-talied random number makes the scramble effect feel more satisfyingly random.
          </p>
          <p>
            This was my first real experience with React hooks, and I've been pleasantly surprised. All in all, I'd say they're worth learning. I did run into one main issue, with the <code>useEffect()</code> function used to intentionally perform side effects when one or more state values change.
          </p>
          <p>
            In this case, I wanted to set up the array of timeouts and create the inital scrambled string both on component load and whenever the string length (<code>numChars</code>) was changed. By design, <code>useEffect()</code> allows an array of variables, and after it detects a change in any of them the <code>useEffect()</code> function will be performed. However, useEffect will only have the current state of stateful variables that are included in this array.
          </p>
          <p>
            This creates an awkward situation. I only want this update function to run when <code>numChars</code> changes, but I also need the current values of the scrambled string and the array of timeouts. The workaround occurs in the state setter functions; rather than passing a set value, you can pass a function that performs some mutation on the current state. For example, suppose we need a simple counter state variable, but one that could be updated asynchronously and should not increment higher than 10:
          </p>
          <pre>
              {
`const [count, setCount] = useState(0);
setCount((count) => {
  if (count < 10) {
    return count + 1;
  }
  else {
    return count;
  }
})`
            }
          </pre>
        </div>
      );
    }
  }
}
