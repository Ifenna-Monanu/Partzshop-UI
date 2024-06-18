import React, { ButtonHTMLAttributes, FC } from 'react'
import styled from 'styled-components'

type IVaariant = 'full' | 'small' | 'medium'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IVaariant | undefined
}


const Button: FC<ButtonProps> = ({children, variant}) => {
  return (
    <ButtonUI varaint={variant}>
        {children}
    </ButtonUI>
  )
}

export default Button



const ButtonUI = styled.button<{varaint: IVaariant | undefined}>`
    place-self: start;
    display: inline-block;
    color: #ffffff;
    font-weight: 500;
    width: ${({varaint}) => varaint === 'full' ? '100%' : 'auto' };
    font-size: 14px;
    cursor: pointer;
    background-color: #0043E6;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 20rem;
`