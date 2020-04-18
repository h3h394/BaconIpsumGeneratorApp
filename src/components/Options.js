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
  tag,
  setTag,
}) => {
  setTimeout(() => {
    setCopiedCode(false);
  }, 3000);

  return (
    <div css={styles} className="options">
      <div className="wrapper">
        <div className="optionsContainer">
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
          <div className="tags">
            <p>Tag:</p>
            <select defaultValue={tag} onChange={(e) => setTag(e.target.value)}>
              <option value="p">&lt;p&gt;</option>
              <option value="h1">&lt;h1&gt;</option>
              <option value="h2">&lt;h2&gt;</option>
              <option value="h3">&lt;h3&gt;</option>
              <option value="h4">&lt;h4&gt;</option>
              <option value="h5">&lt;h5&gt;</option>
              <option value="h6">&lt;h6&gt;</option>
              <option value="span">&lt;span&gt;</option>
            </select>
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
              includeHtml === "Yes"
                ? `<${tag}>` + paragraphs + `</${tag}>`
                : paragraphs
            )}
            onCopy={() => setCopiedCode(true)}
          >
            <button>{copiedCode ? "Copied" : "Copy to clipboard"}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 20px 0;
  margin: 20px 0;
  .wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .optionsContainer {
      width: 100%;
      max-width: 640px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
        width: 180px;
      }
      select {
        appearance: none;
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
    .wrapper {
      width: 100%;
      flex-direction: column;
      align-items: center;
      .optionsContainer {
        flex-direction: column;
        align-items: center;
        .paragraphs,
        .include,
        .tags {
          width: 100%;
          margin: 10px 0;
          p {
            font-size: 10px;
          }
        }
        input,
        select {
          width: 100%;
        }
      }
      .copy {
        width: 100%;
        button {
          margin: 10px 0;
          width: 100%;
          padding: 24px 0;
        }
      }
    }
  }
  @media (min-width: 641px) and (max-width: 940px) {
    .wrapper {
      flex-direction: column;
      .optionsContainer {
        max-width: 100%;
        justify-content: space-between;
        .paragraphs,
        .include,
        .tags {
          width: 100%;
          max-width: 30%;
        }
      }
      .copy {
        width: 100%;
        button {
          margin: 10px 0;
        }
      }
    }
  }
`;

export default Options;
