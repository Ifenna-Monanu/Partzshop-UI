import React, { FC, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  err?: string;
}

const TextArea: FC<TextAreaProps> = ({ label, err, ...props }) => {
  return (
    <TextAreaUI>
      <label htmlFor={label}>{label}</label>
      <textarea id={label} {...props}></textarea>
      <span>{err}</span>
    </TextAreaUI>
  );
};

export default TextArea;

const TextAreaUI = styled.div`
  display: flex;
  margin-bottom: 5px;
  flex-direction: column;

  label {
    margin-top: 4px;
    font-size: 14px;
    line-height: 27px;
  }

  span {
    color: #f76f6f;
    font-size: 14px;
    margin-top: 3px;
  }

  textarea {
    height: 121px;
    width: 100%;
    margin-top: 3px;
    border: 1px solid #d0d5dd;
    padding: 12px 16px;
    border-radius: 8px;

    &:focus {
      outline: none;
    }
  }
`;
