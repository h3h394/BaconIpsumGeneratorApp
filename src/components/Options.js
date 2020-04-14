/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Options = ({
  includeHtml,
  setIncludeHtml,
  setInputValue,
  copiedCode,
  setCopiedCode,
  paragraphs,
}) => {
  setTimeout(() => {
    setCopiedCode(false);
  }, 3000);

  return (
    <div css={styles} className="options">
      <div className="wrapper">
        <div className="paragraphs">
          <p>Paragraphs:</p>
          <input
            type="number"
            min="1"
            max="10"
            defaultValue="1"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="include">
          <p>Include HTML:</p>
          <select
            defaultValue={includeHtml}
            onChange={(e) => setIncludeHtml(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="copy">
        <CopyToClipboard
          text={paragraphs.map((p) =>
            includeHtml === "Yes" ? "<p>" + paragraphs + "</p>" : paragraphs
          )}
          onCopy={() => setCopiedCode(true)}
        >
          <button>{copiedCode ? "Copied" : "Copy to clipboard"}</button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 20px 0;
  .wrapper {
    display: flex;
    p {
      margin-bottom: 10px;
      color: #fff;
      font-weight: 400;
      font-size: 17px;
      letter-spacing: 1.2px;
    }
    input,
    select {
      background: #04091d;
      font-size: 15px;
      font-weight: 700;
      color: #fff;
      border: none;
      outline: none;
      padding: 10px 20px;
      width: 160px;
    }
    select {
      appearance: none;
    }
    .paragraphs {
      input {
        margin-right: 30px;
      }
    }
  }
  .copy {
    button {
      border: none;
      outline: none;
      width: 164px;
      background: #04091d;
      color: #fff;
      padding: 13px 0;
      cursor: pointer;
      font-size: 15px;
      font-weight: 700;
      border-radius: 4px;
      transition: background 800ms ease-in-out;
      &:hover {
        background: #060c23;
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    .wrapper {
      width: 100%;
      justify-content: space-between;
      .paragraphs,
      .include {
        width: 100%;
        max-width: 47%;
      }
      input,
      select {
        width: 100%;
      }
    }
    .copy {
      width: 100%;
      button {
        margin: 20px 0 0 0;
        width: 100%;
        padding: 24px 0;
      }
    }
  }
`;

export default Options;
