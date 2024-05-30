import React from 'react'
import { useUnit } from 'effector-react'
import { $calculator } from '../stores/calculator'

export const ResultsHistory = () => {
  const {resultsHistory} = useUnit($calculator)
  
  return (
    <div>
        <h2>История результатов</h2>

        <ul>
          {resultsHistory.map((result) => (
              <li key={result}>{result}</li>
          ))}
        </ul>        
    </div>
  )
}
