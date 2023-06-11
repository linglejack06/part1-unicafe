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
function Statistics ({good, neutral, bad, hasFeedback}) {
  const all = good + neutral + bad;
  const avg = (good + neutral + bad) / 3
  const positive = good / all;
  if (hasFeedback) {
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {avg}</p>
        <p>positive {positive}</p>
      </div>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);
  console.log(good, neutral, bad);
  const handleClick = (e) => {
    if(!hasFeedback) {
      setHasFeedback(true)
    };
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
      <Statistics good={good} neutral={neutral} bad={bad} hasFeedback={hasFeedback}/>
    </div>
  );
}

export default App;
