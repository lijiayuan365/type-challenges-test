// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']
type CaseTypeOne = 'cmd ctrl' | 'cmd opt' | 'cmd fn' | 'ctrl opt' | 'ctrl fn' | 'opt fn'

type cases = [
  Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>,
]


// ============= Your Code Here =============
// 实现 Combs
type Combs<T extends string[] = []> = T extends [infer Left extends string, ...infer Rest extends string[]] ? `${Left} ${Rest[number]}` | Combs<Rest> : never
