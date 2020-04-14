/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import BgImg from "../bg.jpg";

const Output = ({ paragraphs, includeHtml }) => (
  <div css={styles} className="output">
    <p>
      {paragraphs.map((p) =>
        includeHtml === "Yes" ? "<p>" + paragraphs + "</p>" : paragraphs
      )}
    </p>
  </div>
);

const styles = css`
  width: 100%;
  padding: 40px;
  background: url('${BgImg}') no-repeat center/cover;
  border-radius: 4px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  p {
    color: #fff;
    line-height: 1.8;
  }
`;

export default Output;
