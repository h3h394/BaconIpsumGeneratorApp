/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import BgImg from "../bg.jpg";

const Title = () => (
  <div css={styles} className="title">
    <h1>React Text Generator</h1>
  </div>
);

const styles = css`
  width: 100%;
  padding: 26px 0;
  color: #fff;
  text-align: center;
  background: url('${BgImg}') no-repeat;
  background-size: cover;
  background-position: fixed;
  @media (max-width: 640px) {
    padding: 26px;
  }
`;

export default Title;
