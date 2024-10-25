// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
]


// ============= Your Code Here =============
type NormalFindAll<
  T extends string, 
  S extends string,
  P extends any[] = [],
  R extends number[] = [],
> = 
T extends `${string}${infer L}`?
  T extends `${S}${string}`?
    NormalFindAll<L,S,[...P,0],[...R,P['length']]>
    :NormalFindAll<L,S,[...P,0],R>
  :R

type FindAll<
  T extends string, 
  P extends string,
> = 
P extends ''?
  []:NormalFindAll<T,P>
