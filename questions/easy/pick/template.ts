/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 17:58:34
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-14 19:10:25
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
type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}

interface test {
  name: string;
  age: number;
}

interface test2{
  name: string;
  sex: string;
}

// sex不满足约束，不存在test中
// type A = MyPick<test, 'sex'>

// type A2 = MyPick<test2, 'sex'>