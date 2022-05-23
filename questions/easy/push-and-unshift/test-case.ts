/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-24 00:54:00
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-24 00:59:15
 */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]

type cases2 = [
  Expect<Equal<unshift<[], 1>, [1]>>,
  Expect<Equal<unshift<[1, 2], '3'>, ['3', 1, 2]>>,
  Expect<Equal<unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]