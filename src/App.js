import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import Title from "./components/Title";
import Options from "./components/Options";
import Output from "./components/Output";

function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [inputValue, setInputValue] = useState(1);
  const [includeHtml, setIncludeHtml] = useState("Yes");
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setParagraphs(data);
      })
      .catch((err) => console.log(err));
  }, [inputValue]);

  return (
    <div className="App">
      <Container>
        <Title />
        <Options
          paragraphs={paragraphs}
          copiedCode={copiedCode}
          setCopiedCode={setCopiedCode}
          setIncludeHtml={setIncludeHtml}
          includeHtml={includeHtml}
          setInputValue={setInputValue}
        />
        <Output paragraphs={paragraphs} includeHtml={includeHtml} />
      </Container>
    </div>
  );
}

export default App;