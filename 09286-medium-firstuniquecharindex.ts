// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
]


// ============= Your Code Here =============
type FirstUniqueCharIndex<
  T extends string,
  _Acc extends string[] = []
> = T extends ''
  ? -1
  : T extends `${infer Head}${infer Rest}`
  ? Head extends _Acc[number]
  ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
  : Rest extends `${string}${Head}${string}`
  ? FirstUniqueCharIndex<Rest, [..._Acc, Head]>
  : _Acc['length']
  : never
