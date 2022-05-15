/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 23:28:37
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 15:57:33
 */
import type { Equal, Expect } from '@type-challenges/utils'

// as const 定义是一个常量不能修改
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>