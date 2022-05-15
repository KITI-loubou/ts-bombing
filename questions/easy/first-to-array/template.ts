/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 17:58:34
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 16:42:38
 */

/**
 * 重温extends三种用法。1.继承。2.约束。3.分配
 * 1.第一种写法。。。。。条件分配
 * 第一个extends是约束作用，约束T是数组 并且数组值是任意的
 * 第二个extends是分配作用
 */
//  type First<T extends any[]> = T extends [] ? never : T[0]

/**
 * 第二种写法
 * 通过判断数组长度是否为零
 */
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]

/**
 * 第三种写法
 * 用number将array类型编程union类型
 */
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

/**
 * 第四种infer推断 , 相当于解构
 * 
 */
type First<T extends any[]> = T extends [infer First, ...infer _Rest] ? First : never
