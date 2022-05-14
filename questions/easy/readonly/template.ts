/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 17:58:34
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-14 23:43:42
 */

/**
 * extends // 有三种含义。1.继承/拓展。2.约束。3.分配。https://jishuin.proginn.com/p/763bfbd663cf
 */

/**
 * K 要在T中存在, K 可能是union联合行'title' | 'completed'
 * keyof T ： 表示将T对象拆分成数组keys
 * 
 * T[P] 相当于https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
 * type Person = { age: number; name: string; alive: boolean };
 * type Age = Person["age"];
 */
type MyReadonly<T> = {
  readonly [P in keyof T] : T[P]
}

/**
 * 1.循环遍历传入的T，keyof表示遍历T这个类型对象的key
 * 2.设置readonly并赋值,这个值是类型
 */