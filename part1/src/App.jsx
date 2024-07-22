import { useState } from "react"

const Statistics = ({ good, neutral, bad }) => {
  // Calcular las estadísticas adicionales
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;
  return(
    <>
      <h2>statistics</h2>

      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {average}</p>
          <p>positive {positivePercentage} %</p>
        </>
      )}
    </>
    )
}

const App = () => {
  //guardar los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
