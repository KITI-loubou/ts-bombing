/*
 * @Author: VLOU
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

const fun = (a: string, d: string): any => { }
const b: MyParameters<typeof fun> = ['2','2']