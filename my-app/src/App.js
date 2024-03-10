import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols) {
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+{}[]|:;"\'<>,.?/~';

  let allChars = '';
  let password = '';

  if (includeUpper) allChars += upperCaseChars;
  if (includeLower) allChars += lowerCaseChars;
  if (includeNumbers) allChars += numberChars;
  if (includeSymbols) allChars += symbolChars;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(length, includeUpper, includeLower, includeNumbers, includeSymbols);
    setPassword(newPassword);
  };

  return (
    <div className='body1'>
      <h1>Password Generator</h1>
      <div className='form'>
      <div className="Div1">
        <input type="text" disabled id="password-field" value={password} />
        <button onClick={() => navigator.clipboard.writeText(password)}>
          <img src="https://www.freeiconspng.com/thumbs/copy-icon/copy-icon-25.png" alt="copy_im.png" />
        </button>
      </div>
      <div className="Div2">
        <label>
          Select Password length <strong>(8-50 characters)</strong>
          <input
            type="number"
            id="input_length"
            value={length}
            onChange={(e) => setLength(Math.min(Math.max(8, parseInt(e.target.value)), 50))}
          />
        </label>
      </div>
      <div className="Div3">
        <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} />
        <label>Include upper case</label>
        <br />
        <input type="checkbox" checked={includeLower} onChange={(e) => setIncludeLower(e.target.checked)} />
        <label>Include lower case</label>
        <br />
        <input type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} />
        <label>Include numbers</label>
        <br />
        <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} />
        <label>Include symbols</label>
        <br />
        <button className='Generate' onClick={handleGeneratePassword}>Generate Password</button>
      </div>
      </div>
    </div>
  );
}

export default App;
