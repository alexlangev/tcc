import { InlineMath, BlockMath } from "react-katex";

# My Document

Here's an inline math expression: <InlineMath>{'\\sqrt{a^2 + b^2}'}</InlineMath>. And here's a displayed math expression:

<BlockMath>
  {"\\int_{-\\infty}^\\infty e^{-x^2/2} dx = \\sqrt{2\\pi}"}
</BlockMath>
