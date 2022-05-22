/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-22 23:08:06
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-22 23:20:08
 */
import type { Equal } from '@type-challenges/utils'
export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false