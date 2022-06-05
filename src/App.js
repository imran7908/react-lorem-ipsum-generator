import { useState } from 'react';
import './App.css';
import Generate from './components/Generate';
import data from './data';

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let countInt = parseInt(count);
    if(count <= 0) {
      countInt = 1;
    }
    if(count >= 8) {
      countInt = 8;
    }
    setText(data.slice(0, countInt));
  }
  return (
    <section>
      <h3>Tired of Boring Lorem Ipsum</h3>
      <form onSubmit={handleSubmit}>
        <label>Paragraph:</label>
        <input type='number' value={count} onChange={(e)=>setCount(e.target.value)} />
        <button type='submit'>Generate</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
