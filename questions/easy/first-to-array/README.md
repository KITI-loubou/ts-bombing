<!--
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-15 16:08:26
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-15 16:08:27
-->

Implement a generic First<T> that takes an Array T and returns it's first element's type.

For example

```ts
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```