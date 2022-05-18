/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-18 22:50:00
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-18 23:16:17
 */
type MyAwaited<T extends Promise<any>> = T extends Promise<infer X> ? X extends Promise<any> ? MyAwaited<X> : X : never

type a = MyAwaited<Promise<Promise<string | number>>>

/**
 * 这里的infer是设未知数的意思，也就是对应T过滤出来的类型是未知的用X表示
 * 解题思路：
 * 1.先约束T是一个Promise,  T extends Promise<any> 先不管promise内的参数类型，设置any，unknown都行
 * 2.返回一个值，那么这个promise的值怎么返回呢？用infer推断，设返回类型为X,直接返回，如果没有类型直接返回never
 * 3.若promise在嵌套Promise怎么办？那我们在做一层promise判断，用递归重新进行值的返回、
 */