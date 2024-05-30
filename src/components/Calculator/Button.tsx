import React from 'react'
import styled from 'styled-components'

export type ButtonVariant =  'primary' | 'secondary'

const Wrapper = styled.button<{$variant?: ButtonVariant}>`
   background-color: ${({ $variant, theme }) => $variant === 'primary' ? theme.primaryColor : $variant === 'secondary' ? theme.secondaryColor : 'inherit'};
   display: grid;
   place-items: center;
   width: 50px;
   aspect-ratio: 1;
   border-radius: 8px;
   border: 1px solid ${({ theme }) => theme.toggleBorder};
   color: ${({ theme }) => theme.text};
   font-size: 20px;
   cursor: pointer;
   
   &:hover {
       box-shadow: 0 0 10px 0 ${({ theme }) => theme.toggleBorder};
   }
   &:active {
    scale: 0.9; 
   }   
`

type Props = {
    value: string   
    variant?: ButtonVariant
    onClick: (value: string) => void 
} 

export const Button = ({value, variant, onClick}: Props) => {
  const onClickHandler = () => onClick(value) 
  
  return (
    <Wrapper $variant={variant} onClick={onClickHandler}>{value}</Wrapper>
  )
}
