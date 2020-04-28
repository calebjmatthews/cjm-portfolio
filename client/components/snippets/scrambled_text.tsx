import React, { useState, useEffect, SyntheticEvent } from 'react';

export default function ScrambledText() {
  const [openSection, setOpenSection] = useState('Demo');

  const [numChars, setNumChars] = useState(6);
  const [pausing, setPausing] = useState(true);
  const [characters, setCharacters] = useState('abcdef');
  const [timeouts, setTimeouts] = useState([]);

  useEffect(() => {
    let newCharacters = '';
    for (let index = 0; index < numChars; index++) {
      newCharacters += (randomUnicode());
    }
    setCharacters(newCharacters);

    timeouts.map((timeout) => {
      clearTimeout(timeout);
    })

    let newTimeouts = [];
    for (let index = 0; index < numChars; index++) {
      newTimeouts.push(setTimeout(() => {
        setScrambledValue(index);
      }, (Math.floor(randomHeavyTailed() * 1000))))
    }
    setTimeouts(newTimeouts);

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
      <div className="title">
        Scrambled Text
      </div>
      <div className="date-line">
        Tuesday April 28th, 2020
      </div>
      <div className="description">
        A simple visual effect to scramble individual letters of a certain length.
      </div>
      <div className="content-header">
        <div className="tab" onClick={() => clickTab('Demo')}>Demo</div>
        <div className="tab" onClick={() => clickTab('Javascript')}>Javascript</div>
        <div className="tab" onClick={() => clickTab('HTML')}>HTML</div>
      </div>
      <div className="content-container">
        {renderSection(openSection)}
      </div>
    </div>
  );

  function renderSection(sectionName: string) {
    switch(sectionName) {
      case 'Demo':
      return (
        <div className="section" id="demo">
          <div className="input-group">
            <input value={numChars} onChange={changeNumChars} />
          </div>
          <div className="scrambled-text">{characters}</div>
        </div>
      );

      case 'Javascript':
      return (
        <div className="section" id="javascript">
          <pre><code>{
`const [numChars, setNumChars] = useState(6);
const [pausing, setPausing] = useState(true);
const [characters, setCharacters] = useState('abcdef');
const [timeouts, setTimeouts] = useState([]);

useEffect(() => {
  let newCharacters = '';
  for (let index = 0; index < numChars; index++) {
    newCharacters += (randomUnicode());
  }
  setCharacters(newCharacters);

  timeouts.map((timeout) => {
    clearTimeout(timeout);
  })

  let newTimeouts = [];
  for (let index = 0; index < numChars; index++) {
    newTimeouts.push(setTimeout(() => {
      setScrambledValue(index);
    }, (Math.floor(randomHeavyTailed() * 1000))))
  }
  setTimeouts(newTimeouts);

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
          }</code></pre>
        </div>
      );

      case 'HTML':
      return (
        <div className="section" id="html">
          <pre><code>{
`<div className="input-group">
  <input value={numChars} onChange={changeNumChars} />
</div>
<div className="scrambled-text">{characters}</div>`
          }</code></pre>
        </div>
      );
    }
  }
}
