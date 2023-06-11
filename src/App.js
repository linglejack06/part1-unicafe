import { useState } from 'react';

function Header({ title }) {
  return (
    <h2>{title}</h2>
  )
}
function Button ({handleClick, text, name}) {
  return (
    <button onClick={handleClick} name={name}>{text}</button>
  )
}
function Options ({ handleClick }) {
  return (
    <div>
      <Button handleClick={handleClick} text='good' name='good'/>
      <Button handleClick={handleClick} text='neutral' name='neutral'/>
      <Button handleClick={handleClick} text='bad' name='bad'/>
    </div>
  )
}
function Statistics ({good, neutral, bad}) {
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(good, neutral, bad);
  const handleClick = (e) => {
    switch(e.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return
    }
  }
  return (
    <div>
      <Header title='give feedback' />
      <Options handleClick={handleClick} />
      <Header title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
