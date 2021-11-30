import { css } from "@emotion/react";
import React from "react";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";
import main from '../../assets/images/main.jpg'

export type ExperiencesProps = {

}

function Experiences({}: ExperiencesProps) {
  return (
    <>
      <Header />
      <main css={mainStyle}>
        <div css={mainImgStyle} />
        <Categories />
      </main>
    </>
  )
}

const mainStyle = css`
  padding: 0 80px;
`;

const mainImgStyle = css`
  background-image: ${main};
  background-repeat: no-repeat;
`;

export default Experiences;