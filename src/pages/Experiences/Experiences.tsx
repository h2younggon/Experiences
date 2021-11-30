import { css } from "@emotion/react";
import React from "react";
import Categories from "../../components/Categories/Categories";
import Header from "../../components/Header/Header";

export type ExperiencesProps = {

}

function Experiences({}: ExperiencesProps) {
  return (
    <>
      <Header />
      <main css={mainStyle}>
        <div />
        <Categories />
      </main>
    </>
  )
}

const mainStyle = css`
  padding: 0 80px;
`;

export default Experiences;