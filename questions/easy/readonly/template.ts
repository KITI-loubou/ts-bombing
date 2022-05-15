/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 17:58:34
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 15:56:00
 */
/**
 * in keyof 遍历interface
 */
type MyReadonly<T> = {
  readonly [P in keyof T] : T[P]
}

/**
 * 1.循环遍历传入的T，keyof表示遍历T这个类型对象的key
 * 2.设置readonly并赋值,这个值是类型
 */