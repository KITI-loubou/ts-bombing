/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 17:58:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-26 22:28:39
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
  [P in K]: T[P]
}

interface test {
  name: string;
  age: number;
}

interface test2 {
  name: string;
  sex: string;
}

interface returnType{
  code: number;
  data: object;
  msg: string;
}

interface successType {
  code: number;
  data: object;
}

interface falseType {
  code: string;
  msg: string;
}

function test(r: returnType): any {
  if (r.code === 0) {
    let res: MyPick<returnType, keyof successType> = r
    return res.data
  }
  let errorData: MyPick<returnType, keyof falseType> = r
  if(errorData.code === 1){
    return errorData.code
  }
}

test({ code: 0, msg: '1', data: {} })

// type Concrete<Type> = {
//   [Property in keyof Type]-?: Type[Property];
// };
 
// type MaybeUser = {
//   id: string;
//   name?: string;
//   age?: number;
// };
 
// type User = Concrete<MaybeUser>;

// function test2(r: User): any {
// }
// sex不满足约束，不存在test中
// type A = MyPick<test, 'sex'>

// type A2 = MyPick<test2, 'sex'>