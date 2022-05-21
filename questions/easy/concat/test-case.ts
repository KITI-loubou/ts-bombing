/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-21 17:24:41
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-21 17:28:42
 */
   
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]