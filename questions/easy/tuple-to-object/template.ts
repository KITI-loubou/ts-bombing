/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 17:58:34
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 16:00:33
 */

/**
 * in T[number] 遍历数组
 */
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]] : P
}