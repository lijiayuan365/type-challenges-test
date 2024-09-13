// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


// ============= Your Code Here =============
type StrToArray<S> = S extends `${infer x}${infer xs}` ? [1, ...StrToArray<xs>] : [];
type LengthOfString<S extends string> = StrToArray<S>['length'];
// type LengthOfString<S extends string> = S extends `${infer F}${infer R}`? [F,...LengthOfString<R>] : []
