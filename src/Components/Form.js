import React, { useState } from 'react';
import './Form.css'
function Form() {
  const [smallLetter, setSmallLetter] = useState(false);
  const [capitalLetter, setCapitalLetter] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [passLength, setPassLength] = useState(9);
  const [final, setFinal] = useState('');

  const toggleState = (setter) => () => {
    setter((prevValue) => !prevValue);
  };

  const generateBasic = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbolChars = '!@#$%^&*-+_/=?';
    const numberChars = '0123456789';

    const getRandomChar = (chars) => chars.charAt(Math.floor(Math.random() * chars.length));

    let basicPassword = '';
    if (smallLetter) basicPassword += getRandomChar(lowercaseChars);
    if (capitalLetter) basicPassword += getRandomChar(uppercaseChars);
    if (symbols) basicPassword += getRandomChar(symbolChars);
    if (numbers) basicPassword += getRandomChar(numberChars);

    return basicPassword;
  };

  const generatePassword = () => {
    const megaString = [
      { enabled: smallLetter, chars: 'abcdefghijklmnopqrstuvwxyz' },
      { enabled: capitalLetter, chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' },
      { enabled: symbols, chars: '!@#$%^&*-+_/=?' },
      { enabled: numbers, chars: '0123456789' },
    ]
      .filter((item) => item.enabled)
      .map((item) => item.chars)
      .join('');

    let password = generateBasic();

    for (let i = 0; i < passLength - password.length; i++) {
      password += megaString.charAt(Math.floor(Math.random() * megaString.length));
    }

    setFinal(password);
  };

  return (
    <div className="req-form">
      <div className="card border-primary mb-3 my-4 mx-5 text-start">
        <div className="card-header">Your Requirements</div>
        <div className="card-body text-primary">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="smallLetter"
              checked={smallLetter}
              onChange={toggleState(setSmallLetter)}
            />
            <label className="form-check-label" htmlFor="smallLetter">
              Small Letters
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="numbers"
              checked={numbers}
              onChange={toggleState(setNumbers)}
            />
            <label className="form-check-label" htmlFor="numbers">
              Numbers
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="symbols"
              checked={symbols}
              onChange={toggleState(setSymbols)}
            />
            <label className="form-check-label" htmlFor="symbols">
              Symbols
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="capitalLetter"
              checked={capitalLetter}
              onChange={toggleState(setCapitalLetter)}
            />
            <label className="form-check-label" htmlFor="capitalLetter">
              Capital Letters
            </label>
          </div>
          <hr />
          <label htmlFor="passwordLength" className="form-label fs-4">
            Length : &nbsp;
            <span className="badge rounded-pill text-bg-primary">{passLength}</span>
          </label>
          <input
            type="range"
            className="form-range fs-4"
            min="6"
            max="12"
            step="1"
            id="passwordLength"
            value={passLength}
            onChange={(e) => setPassLength(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={generatePassword} className="btn btn-warning">
          Generate
        </button>
        <div className="input-group">
          <span id="textToBeCopied" className="form-control my-4 mx-2">
            {final}
          </span>
          {/* Feature to be added later */}
          <button
            type="button"
            className="btn btn-success my-4 mx-1"
            onClick={() => {
              alert('Sorry! This Feature is not Available Yet');
            }}
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Form;


export default Form;
