// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Triangular<0>, 0>>,
  Expect<Equal<Triangular<1>, 1>>,
  Expect<Equal<Triangular<3>, 6>>,
  Expect<Equal<Triangular<10>, 55>>,
  Expect<Equal<Triangular<20>, 210>>,
  Expect<Equal<Triangular<55>, 1540>>,
  Expect<Equal<Triangular<100>, 5050>>
];

// ============= Your Code Here =============
type Triangular<
  N extends number,
  P extends number[] = [],
  A extends number[] = []
> = P['length'] extends N
  ? A['length']
  : Triangular<N, [0, ...P], [...A, ...P, 0]>;
