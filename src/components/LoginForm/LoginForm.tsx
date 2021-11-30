import { css } from "@emotion/react";
import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

function LoginForm() {
  const [user, setUser] = useState({email: '', password: ''})
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('submit ');
  };

  return (
    <form onSubmit={onSubmit}>
      <div css={style}>
        <Input name="email" placeholder="아이디" onChange={onChange} />
        <Input type="password" name="password" placeholder="비밀번호" onChange={onChange} />
      </div>
      <div>
        <Button css={buttonStyle} color="white" text="로그인" type="submit" />
      </div>
    </form>
  )
}

const style = css`
  display: flex;
  flex-direction: column;
  & > input {
    flex: 1;
    &:first-of-type {
      border-radius: 6px 6px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 6px 6px;
    }
  }
`;

const buttonStyle = css`
  margin-top: 24px;
  background-color: #03c75a;
  padding: 17px 0 15px;
  border-radius: 6px;
  border: solid 1px rgba(0,0,0,.15);
`;

export default LoginForm;