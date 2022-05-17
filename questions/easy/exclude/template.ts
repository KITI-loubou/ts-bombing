/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 17:58:34
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-17 23:21:14
 */
type MyExclude<T, U> = T extends U ? never : T

/**
 * T extents U 个人理解成T会遍历每一个元素跟U内元素进行比较，如果所有都不存在则never，
 * 如果存在某一个那么会返回never过滤掉，最后输出T剩余的部分
 */