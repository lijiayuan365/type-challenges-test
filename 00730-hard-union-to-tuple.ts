// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]

type cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]


// ============= Your Code Here =============
type UnionToTuple<T, Result extends unknown[] = [], Last = GetUnionLast<T>> = [
  T,
] extends [never]
  ? // return result
  Result
  : // remove last element of T and push it into Result
  UnionToTuple<Exclude<T, Last>, Prepend<Result, Last>>

type GetUnionLast<T> = UnionToIntersectionFn<T> extends () => infer R
  ? R
  : never
type UnionToIntersectionFn<T> = (
  T extends T ? (x: () => T) => unknown : never
) extends (x: infer R) => unknown
  ? R
  : never

type Prepend<Arr extends unknown[], Item> = [Item, ...Arr]
