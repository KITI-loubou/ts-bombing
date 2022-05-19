/*
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-19 23:05:17
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-19 23:10:22
 */
type If<C extends boolean, T extends any, F extends any> = C extends true ? T : F