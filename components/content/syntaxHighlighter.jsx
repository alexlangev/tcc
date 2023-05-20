import { Prism, Highlight, themes, defaultProps } from "prism-react-renderer";
import styled from "styled-components";
import myCustomTheme from "@/styles/syntaxHighlightingTheme";

(typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-solidity");
require("prismjs/components/prism-haskell");

const SyntaxHighlighter = ({ children }) => {
  const code = children.props.children;
  const language = children.props.className?.replace("language-", "").trim();

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={myCustomTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlockContainer>
          {language && (
            <LanguageHeadingContainer>
              {language.toUpperCase()}
            </LanguageHeadingContainer>
          )}
          <PreBlock className={className} style={{ ...style }}>
            {tokens.slice(0, -1).map((line, i) => (
              // eslint-disable-next-line react/jsx-key
              <div {...getLineProps({ line })}>
                {line.map((token) => (
                  // eslint-disable-next-line react/jsx-key
                  <span {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </PreBlock>
        </CodeBlockContainer>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;

const LanguageHeadingContainer = styled.div``;

const CodeBlockContainer = styled.div``;

const PreBlock = styled.pre``;
