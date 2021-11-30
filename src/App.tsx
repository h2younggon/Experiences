import React from 'react';
import { css, Global } from '@emotion/react';
import { Navigate, Route, Routes } from 'react-router';
import Login from './pages/Auth/Login';
import Experiences from './pages/Experiences/Experiences';

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* redirect */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/experiences" element={<Experiences />} />
      </Routes>
    </>
  );
}

const globalStyle = css`
  html,
  body,
  #root {
    height: 100%;
  }
  html {
    box-sizing: border-box;
    * {
      box-sizing: inherit;
    }
  }
`

export default App;
