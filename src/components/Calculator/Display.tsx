import React, { ComponentProps } from 'react'
import styled from 'styled-components'

const Input = styled.input<{ $hasAccent?: boolean}>`
    padding: 8px;
    border-radius: 8px;
    font-size: 20px;
    outline: ${({ $hasAccent }) => ($hasAccent ? '2px ridge rgba(200, 50, 100, .6)' : 'auto')};
`  

type Props = ComponentProps<'input'>

export const Display = ({value, ...props}: Props) => <Input $hasAccent={!!value} value={value} {...props} readOnly /> 
  