import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  //initializes an array with zeros (will store the votes for each anecdote):
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const generateRandomIndex = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    //console.log(randomIndex)
    setSelected(randomIndex)
}
//Function to save votes:
  const voteAnecdote = () => {
    //creates a copy of the "votes" array
    const newVotes = [...votes]
    //increments the value at the selected index position
    newVotes[selected] += 1
    //update the state with the new array
    setVotes(newVotes)
  }  
  //console.log(Math.max(...votes))

  //Function to calculate the anecdote with the highest number of votes
  const mostVotedAnecdote = () => {
    //Find the maximum number of votes in the array
    const maxVotes = Math.max(...votes)
    //Find the index that contains those votes
    const mostVotedIndex = votes.indexOf(maxVotes)
    //Returns an object with the anecdote that contains that index and the number of votes found
    return {
        anecdote: anecdotes[mostVotedIndex],
        votes: maxVotes
    }
  }

  const mostVoted = mostVotedAnecdote()

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={generateRandomIndex}>Next Anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{mostVoted.anecdote}</p>
      <p>has {mostVoted.votes} votes</p>
    </div>
  )
}

export default App