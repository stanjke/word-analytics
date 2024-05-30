import { useState } from 'react';
import './TextArea.css';
import Warning from '../Warning/Warning';

export default function TextArea({ text, setText, setLastEditedDate }) {
  const [warningMessage, setWarningMessage] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>')) {
      setWarningMessage('<script> is not allowed');
      newText = newText.replace('<script>', '');
    } else {
      setWarningMessage('');
    }
    setText(newText);
    setLastEditedDate(Date.now());
    localStorage.setItem('lastEditDate', Date.now());
  };

  return (
    <div className="textarea">
      <textarea
        wrap="soft"
        className=""
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        spellCheck="false"
      />
      {warningMessage ? <Warning warningMessage={warningMessage} /> : null}
    </div>
  );
}
