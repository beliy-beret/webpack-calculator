import React, {useState, forwardRef, ComponentProps} from 'react'
import styled from 'styled-components'

const Wrapper = styled.label<{$checked: boolean}>`
  width: 50px;
  height: 25px;
  padding-inline: 3px;
  display: flex;
  align-items: center;
  justify-content: ${({ $checked }) => ($checked ? 'flex-end' : 'flex-start')};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 50px;
  transition: 0.3s;  
`
const Circle = styled.span`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.text};
  transition: 0.3s;
`


type Props = Required<Pick<ComponentProps<'input'>, 'id'>> &
  Pick<ComponentProps<'input'>, 'disabled' | 'checked' | 'onChange'>

export const Switcher = forwardRef<HTMLInputElement, Props>(
  ({ id, checked = false, disabled, onChange }, ref) => {
    
    return (
      <>
        <input
          id={id}
          type="checkbox"
          className="peer hidden"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={ref}
          style={{ display: 'none' }}
        />
        <Wrapper $checked={checked} htmlFor={id}>
          <Circle />
        </Wrapper>
      </>
    )
  },
)
