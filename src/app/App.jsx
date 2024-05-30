import { useState } from 'react';
import Footer from '../@wordAnalytics/uiKit/Footer/Footer';
import Header from '../@wordAnalytics/uiKit/Header/Header';
import TextAnalyzerPanel from '../@wordAnalytics/uiKit/TextAnalyzerPanel/TextAnalyzerPanel';

function App() {
  const [lastEditedDate, setLastEditedDate] = useState(
    localStorage.getItem('lastEditDate'),
  );

  return (
    <>
      <Header />
      <TextAnalyzerPanel setLastEditedDate={setLastEditedDate} />
      <Footer lastEditedDate={lastEditedDate} />
    </>
  );
}

export default App;
