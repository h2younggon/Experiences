import { css } from "@emotion/react";
import React from "react";
import Button from "../Button/Button";

function Categories() {
  return (
    <div css={block}>
      <div>
        <Button css={buttonStyle} text='언제 떠날까요?' />
      </div>
      <div>
        <Button css={buttonStyle} text='몇명이서 갈까요?' />
      </div>
    </div>
  )
}

const block = css`
  display: flex;
  gap: 8px;
`;

const buttonStyle = css`
  background-color: white;
  border: 1px solid gray;
  border-radius: 30px;
  padding: 8px 16px;
  & > span {
    font-size: 12px;
    color: #222222;
  }
`;

export default Categories;