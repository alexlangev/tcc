import { InlineMath, BlockMath } from "react-katex";

# My Document

Here's an inline math expression: <InlineMath>{'\\sqrt{a^2 + b^2}'}</InlineMath>. And here's a displayed math expression:

<BlockMath>
  {"\\int_{-\\infty}^\\infty e^{-x^2/2} dx = \\sqrt{2\\pi}"}
</BlockMath>

---

Cusotm import kinda work but they need relative paths for the import and also for each of the subcomponents.

```javascript
// This is Javacript
let myVar = "hello World";
console.log(myVar);
```
