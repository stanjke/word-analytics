import { useState } from 'react';
import Stats from '../Stats/Stats';
import TextArea from '../TextArea/TextArea';
import './TextAnalyzerPanel.css';
import useDebounce from '../../services/hooks/useDebounce';

function TextAnalyzerPanel() {
  const [text, setText] = useState('');
  const debounced = useDebounce(text);

  return (
    <main className="analizer-panel">
      <TextArea
        text={text}
        setText={setText}
      />
      <Stats text={debounced} />
    </main>
  );
}

export default TextAnalyzerPanel;
