import React from 'react'
import styled from 'styled-components'
import { Display } from './Display'
import { Button, ButtonVariant } from './Button'
import { $calculator, calculatorApi } from '../../stores/calculator'
import { useUnit } from 'effector-react'

const Wrapper = styled.div`
    padding: 8px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.body};
    border: 1px solid ${({ theme }) => theme.toggleBorder};
    display: flex;
    flex-direction: column;
    width: 250px;    
`

const NumbersWrapper = styled.div`
    flex: 1;
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(3, 1fr);            
`
const OperationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
`

const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', 'C']
const operationButtons = ['+', '*', '-', '/', '=']

const getButtonVariant = (value: string): ButtonVariant | null => {
  if(value === '*' || value === '+') return 'primary'
  if(value === '-' || value === '/') return 'secondary'
  return null
}

export const Calculator = () => {
  const {number, result} = useUnit($calculator)
  const {commaClick, resetClick, signClick, handleClickButton, equalsClick} = calculatorApi
  
  const onBtnClick = (value: string) => {
    if(value === '.') return commaClick(value)
    if(value === 'C') return resetClick()
    if(value === '=') return equalsClick()
    if(value === '+' || value === '-' || value === '/' || value === '*') return signClick(value) 
    return handleClickButton(value)    
  }

  return (
    <Wrapper>
      <Display value={ number ? number : result } />
        <ButtonsWrapper>
          <NumbersWrapper>
            {numberButtons.map((number) => (
              <Button onClick={onBtnClick} key={number} value={number.toString()} />
            ))}
          </NumbersWrapper>
          <OperationsWrapper>
          {operationButtons.map((operation) => <Button onClick={onBtnClick} key={operation} value={operation} variant={getButtonVariant(operation)} />)} 
          </OperationsWrapper>  
        </ButtonsWrapper>        
    </Wrapper>
  )
}
