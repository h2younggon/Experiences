import React from "react";
import { css } from "@emotion/react";
import LoginForm from "../../components/LoginForm/LoginForm";

function Login() {
  return (
    <>
      <header css={headerStyle}> 
        <div>
          <a href="/">
            <h1>공공플랫폼</h1>
          </a>
        </div>
      </header>
      <div css={block}>
        <LoginForm />
      </div>
    </>
  )
}

const headerStyle = css`
  text-align: center;
  padding-top: 111px;
  padding-bottom: 69px;
  a {
    text-decoration: none;
    h1 {
      color: green;
    }
  }
`;

const block = css`
  width: 553px;
  margin: 0 auto;
  border: 1px solid #c6c6c6;
  padding: 24px;
`;

export default Login;