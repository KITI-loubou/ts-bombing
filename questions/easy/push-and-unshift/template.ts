/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-24 00:53:43
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-24 01:00:26
 */
type Push<T extends unknown[], U> = [...T, U]

type unshift<T extends unknown[], U> = [U, ...T] 