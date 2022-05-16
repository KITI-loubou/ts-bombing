<!--
 * @Descripttion: free
 * @version: 1.1
 * @Author: VLOU
 * @Date: 2022-05-16 23:02:28
 * @LastEditors: VLOU
 * @LastEditTime: 2022-05-16 23:02:29
-->

For given a tuple, you need create a generic Length, pick the length of the tuple

For example

```ts
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```