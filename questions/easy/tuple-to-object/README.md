<!--
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-14 23:51:09
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-14 23:53:08
-->

Give an array, transform into an object type and the key/value must in the given array.

For example

```ts
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```