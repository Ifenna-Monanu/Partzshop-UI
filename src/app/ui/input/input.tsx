import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    type: string,
    err?: string;
}

const Input:FC<InputProps> = ({label, err, type, ...props}) => {
  return (
    <InputUI>
        <label htmlFor={label}>{label}</label>
        <input id={label} 
            autoComplete="off"
          type={type} 
          {...props}
          
          />
          <span>{err}</span>
    </InputUI>
  )
}

export default Input


const InputUI = styled.div`
  display: flex;
  margin-bottom: 5px;
  flex-direction: column;
  width: 100%;

  label {
    margin-top: 3px;
    font-size: 14px;
    line-height: 27px;
  }

  span {
    color: #f76f6f;
    font-size: 14px;
    margin-top: 3px;
  }

  input {
    width: 100%;
    margin-top: 3px;
    border: 1px solid #D0D5DD;
    padding: 12px 16px;
    border-radius: 8px;

    &:focus {
      outline: none;
    }
  }
`