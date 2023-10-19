import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  // the text entered by the user
  const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    // update word count
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

  }, [text]);

  return (
    <div className='container'>
      <div className='heading'>
        <h1>Responsive Paragraph Word Counter</h1>
      </div>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder='What is on your mind?'
        ></textarea>

        <div>
          <p className='word-count'>Word Count: {wordCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
