import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png';

function Header() {
  return (
    <header css={headerStyle}>
      <div css={block}>
        <Link to="/experiences">
          <img css={imageStyle} src={logo} alt="logo" /> 
        </Link>
        <nav>
          test
        </nav>
      </div>
    </header>
  )
}

const headerStyle = css`
  height: 80px;
  width: 100%;
  /* color: #ffffff; */
`;

const block = css`
  padding-left: 80px;
  padding-right: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const imageStyle = css`
  width: 118px;
  height: 64px;
`;

export default Header;