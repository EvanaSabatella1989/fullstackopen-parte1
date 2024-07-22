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
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={total}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positivePercentage}/>
        </>
      )}
    </>
    )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
      {props.text}
    </button>
)

// Componente StatisticLine para mostrar una única estadística
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const App = () => {
  //guardar los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good + 1)} text="good"/>
      <Button handleClick={()=>setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={()=>setBad(bad + 1)} text="bad"/>
      
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
