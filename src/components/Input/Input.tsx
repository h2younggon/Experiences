import { css } from '@emotion/react';

export type InputProps = {
  style?: React.CSSProperties;
  disabled?: boolean;
  placeholder: string;
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({style, disabled, placeholder, ...rest}: InputProps) {
  return (
    <input style={style} css={inputStyle} placeholder={placeholder} {...rest} />
  )
}

const inputStyle = css`
  flex: 1;
  height: 100%;
  outline: none;
  border: 1px solid #dadada;
  padding: 17px 18px 17px 19px;
`

export default Input;