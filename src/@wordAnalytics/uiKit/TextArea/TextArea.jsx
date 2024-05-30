import { useState } from 'react'
import './TextArea.css'

export default function TextArea() {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText)
        // console.log('change text area value!: ', e.target.value)
    }

    return (
        <textarea className="textarea" value={text} onChange={handleChange} placeholder='Enter your text here...' spellCheck='false'>TextArea</textarea>
    )
}
