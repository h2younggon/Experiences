import { css } from "@emotion/react";
import React from "react";

export type ButtonProps = {
  text: string;
  disabled?: boolean;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({text, disabled, color, ...rest}: ButtonProps) {
  return (
    <div css={block}>
      <button css={style(color)} {...rest}><span>{text}</span></button>
    </div>
  )
}

const block = css`
  display: flex;
`;

const style = (color?: string) => css`
  flex: 1;
  background: none;
  outline: none;
  border: none;
  & > span {
    font-size: 22px;
  }
  ${color && 
  css`
    span {
      color: white;
    }
  `
  }
`;

export default Button;